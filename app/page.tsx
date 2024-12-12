import Feature from "@/components/sections/Feature";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Testimonial from "@/components/sections/Testimonial";
export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Feature />
			<Testimonial />
			<Footer />
		</div>
	);
}
