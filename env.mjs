import { z } from "zod";

const server = z.object({
	NODE_ENV: z
		.enum([
			"development", // default
			"production",
		])
		.default("development"),
	NEXTAUTH_URL: z.string().url(),
	NEXTAUTH_SECRET: z.string(),
	GOOGLE_CLIENT_ID: z.string(),
	GOOGLE_CLIENT_SECRET: z.string(),
	AUTH_FIREBASE_PROJECT_ID: z.string(),
	AUTH_FIREBASE_CLIENT_EMAIL: z.string().email(),
	AUTH_FIREBASE_PRIVATE_KEY: z
		.string()
		.startsWith("-----BEGIN PRIVATE KEY-----\n")
		.endsWith("\n-----END PRIVATE KEY-----\n"),
});

const client = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]),
});

const processEnv = {
	NODE_ENV: process.env.NODE_ENV,
	NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	AUTH_FIREBASE_PROJECT_ID: process.env.AUTH_FIREBASE_PROJECT_ID,
	AUTH_FIREBASE_CLIENT_EMAIL: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
	AUTH_FIREBASE_PRIVATE_KEY: process.env.AUTH_FIREBASE_PRIVATE_KEY,
};

// Don't touch the part below
// --------------------------

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env);
if (!!process.env.SKIP_ENV_VALIDATION === false) {
	const isServer = typeof window === "undefined";

	const parsed = /** @type {MergedSafeParseReturn} */ (
		isServer
			? merged.safeParse(processEnv) // on server we can validate all env vars
			: client.safeParse(processEnv) // on client we can only validate the ones that are exposed
	);

	if (parsed.success === false) {
		console.error(
			"❌ Invalid environment variables:",
			parsed.error.flatten().fieldErrors,
		);
		throw new Error("Invalid environment variables");
	}

	env = new Proxy(parsed.data, {
		get(target, prop) {
			if (typeof prop !== "string") return undefined;
			return target[/** @type {keyof typeof target} */ (prop)];
		},
	});
}

export { env };
