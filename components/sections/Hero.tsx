import { Button } from "@/components/ui/button";
import "../../global.css";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="relative w-full h-screen bg-gray-900">
			{/* Background Image */}
			<Image
				src="/Designer.jpg" // Replace with your image path
				alt="Graffiti Background"
				layout="fill"
				objectFit="cover"
				className="opacity-75"
			/>

			{/* Overlay Content */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-6 px-6">
				{/* Jingle */}
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
					Join the rhythm of Indian hip-hop.
				</h1>

				{/* Call-to-Action Buttons */}
				<div className="absolute bottom-8 left-8 flex space-x-4">
					<Button variant="used">Join an E-Cypher</Button>
					<Button variant="used">Explore Community</Button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
