import { env } from "@/env.mjs";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { type ClassValue, clsx } from "clsx";
import { cert } from "firebase-admin/app";
import type { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { twMerge } from "tailwind-merge";

/**
 * Combines Classnames For tailwindcss based on their variance authority.
 *
 * @param inputs Classnames which you want to combine
 * @returns combined classes
 *
 * @example
 * ```jsx
 * <div className={cn("mt-8" , "py-4")}>
 * 	Hello World
 * </div>
 * ```
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const authOptions: AuthOptions = {
	providers: [
		Google({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
	],
	adapter: FirestoreAdapter({
		credential: cert({
			projectId: env.AUTH_FIREBASE_PROJECT_ID,
			clientEmail: env.AUTH_FIREBASE_CLIENT_EMAIL,
			privateKey: env.AUTH_FIREBASE_PRIVATE_KEY,
		}),
	}),
};
