import { features } from "node:process";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Feature = () => {
	return (
		<div className="py-16 px-8">
			<h2 className="text-3xl font-bold text-center mb-8">
				Explore What We Offer
			</h2>

			<div className="grid grid-cols-1 gap-8">
				{/* Feature 1 */}
				<div className="relative rounded-lg overflow-hidden">
					<Image
						src="/e-cypher.jpg" // Replace with your image path
						alt="Join Online E-Cyphers"
						width={1200}
						height={800}
						className="object-cover w-full h-64 md:h-80 lg:h-96"
					/>
					<div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center p-6">
						<h3 className="text-xl font-semibold text-white mb-2">
							Join Online E-Cyphers
						</h3>
						<p className="text-gray-300 mb-4">
							Engage with real-time group freestyles and show off your skills.
						</p>
						<Button variant="used">Join Now</Button>
					</div>
				</div>

				{/* Feature 2 */}
				<div className="relative rounded-lg overflow-hidden">
					<Image
						src="/singer.jpg" // Replace with your image path
						alt="Share Your Work"
						width={1200}
						height={800}
						className="object-cover w-full h-64 md:h-80 lg:h-96"
					/>
					<div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center p-6">
						<h3 className="text-xl font-semibold text-white mb-2">
							Share Your Work
						</h3>
						<p className="text-gray-300 mb-4">
							Upload and showcase your tracks or videos to the community.
						</p>
						<Button variant="used">Share Now</Button>
					</div>
				</div>

				{/* Feature 3 */}
				<div className="relative rounded-lg overflow-hidden">
					<Image
						src="/artists.jpg" // Replace with your image path
						alt="Connect with Artists"
						width={1200}
						height={800}
						className="object-cover w-full h-64 md:h-80 lg:h-96"
					/>
					<div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center p-6">
						<h3 className="text-xl font-semibold text-white mb-2">
							Connect with Artists
						</h3>
						<p className="text-gray-300 mb-4">
							Build your network and collaborate with hip-hop artists.
						</p>
						<Button variant="used">Connect Now</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
