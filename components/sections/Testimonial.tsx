import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type React from "react";

const testimonials = [
	{
		quote:
			"Vibestart helped me find a community where I could truly express my style. Joining E-Cyphers has been amazing!",
		author: "MC Rhymes",
	},
	{
		quote:
			"Sharing my work on Vibestart has opened so many opportunities to collaborate with talented artists.",
		author: "DJ Spin",
	},
	{
		quote:
			"This platform is a game changer for Indian hip-hop. Connecting with like-minded artists has never been easier.",
		author: "Beat Guru",
	},
	{
		quote:
			"Love how intuitive and creative Vibestart is! It's the perfect space for upcoming artists.",
		author: "Rap Queen",
	},
];

const Testimonial = () => {
	const items: React.ReactNode[] = []; // To hold carousel items

	for (const testimonial of testimonials) {
		items.push(
			<CarouselItem
				key={testimonial.author}
				className="md:basis-1/2 lg:basis-1/3 px-4"
			>
				<div className="p-1">
					<Card className="bg-gray-800 text-white">
						<CardContent className="p-6">
							<p className="italic mb-4">"{testimonial.quote}"</p>
							<p className="text-right font-bold">- {testimonial.author}</p>
						</CardContent>
					</Card>
				</div>
			</CarouselItem>,
		);
	}

	return (
		<div className="py-16 px-8">
			<h2 className="text-3xl font-bold text-center mb-8">What Artists Say</h2>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full max-w-4xl mx-auto"
			>
				<CarouselContent>{items}</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default Testimonial;
