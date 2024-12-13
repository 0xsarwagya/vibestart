import { Icons } from "@/components/icons"; // Assume you have a central icons file
import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
	return (
		<header className="bg-gray-900 text-white py-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center px-6">
				{/* Left side: Icon and Vibestart Name */}
				<div className="flex items-center space-x-2">
					<Icons.logo className="w-8 h-8" />{" "}
					{/* Adjust according to logo size */}
					<span className="text-lg font-semibold">Vibestart</span>
				</div>

				{/* Right side: Search, Profile, Notifications */}
				<div className="flex items-center space-x-6">
					{/* We can add a search button here */}
					{/* Profile Icon */}
					<Button variant="usedInHeader">
						<Icons.profile className="w-5 h-5" />
					</Button>

					{/* Notifications Icon */}
					<Button variant="usedInHeader">
						<Icons.notifications className="w-5 h-5" />
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
