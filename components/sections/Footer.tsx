import { Icons } from "@/components/icons"; // Assume you have a central icons file
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				<div className="flex flex-col md:flex-row justify-between items-center">
					{/* Brand & Description */}
					<div className="mb-6 md:mb-0">
						<h3 className="text-lg font-semibold">Vibestart</h3>
						<p className="text-sm text-gray-400">
							Join the rhythm. Connect, share, and grow in the Indian hip-hop
							community.
						</p>
					</div>

					{/* Quick Links */}
					<div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
						<a
							href="https://google.com"
							className="text-sm text-gray-400 hover:text-white transition"
						>
							Terms of Service
						</a>
						<a
							href="https://google.com"
							className="text-sm text-gray-400 hover:text-white transition"
						>
							Privacy Policy
						</a>
						<a
							href="https://google.com"
							className="text-sm text-gray-400 hover:text-white transition"
						>
							Contact Us
						</a>
					</div>

					{/* Social Media Links */}
					<div className="flex items-center space-x-4 mt-6 md:mt-0">
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition"
						>
							<Icons.twitter className="w-5 h-5" />
						</a>
						{/* <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Icons.instagram className="w-5 h-5" />
            </a> */}
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
					© 2024 Vibestart. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
