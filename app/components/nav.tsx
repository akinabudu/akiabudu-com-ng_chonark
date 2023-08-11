"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PersonalImage from "./image";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [loading,setLoading] = useState<boolean>(false)

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	
	function clickNavButton(){
		setLoading(true)
	}

	if(loading){
		return <div className="animate-ping">Loading ...</div>
	}

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
						onClick={()=>clickNavButton()}
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Portfolio
						</Link>
						<Link
							href="/pitch"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Pitch
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<PersonalImage/>
					</Link>
				</div>
			</div>
		</header>
	);
};
