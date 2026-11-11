'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

export default function ZoomParallaxDemo() {
	React.useEffect(() => {
		const lenis = new Lenis();

		let rafId: number;
		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}

		rafId = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);

	const images = [
		{
			src: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=1200&q=80',
			alt: 'Gunung Rinjani dan Danau Segara Anak',
		},
		{
			src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
			alt: 'Matahari terbenam di Kepulauan Gili Lombok',
		},
		{
			src: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
			alt: 'Tebing dan Bukit Merese di Mandalika',
		},
		{
			src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
			alt: 'Pasir putih dan laut biru Pantai Tanjung Aan',
		},
		{
			src: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
			alt: 'Air Terjun Tiu Kelep di kaki Rinjani',
		},
		{
			src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
			alt: 'Savana Pulau Kenawa di Sumbawa Barat',
		},
		{
			src: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1200&q=80',
			alt: 'Senja kemilau di pesisir Nusa Tenggara Barat',
		},
	];

	return (
		<div className="min-h-screen w-full bg-[#f8faf9] text-[#18251e] border-t border-[#e3e8e5]">
			<div className="relative flex h-[35vh] items-center justify-center">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(20,43,34,0.06),transparent_60%)]',
						'blur-[40px]',
					)}
				/>
				<div className="text-center px-4">
					<span className="text-xs uppercase tracking-[0.25em] text-[#204434] font-semibold mb-2 block">
						Galeri Panorama Dua Pulau
					</span>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#18251e]">
						Lanskap Alam Lombok &amp; Sumbawa
					</h2>
					<p className="text-sm md:text-base text-[#5a625d] mt-2 max-w-md mx-auto">
						Gulir perlahan untuk melihat lebih dekat kemegahan alam Nusa Tenggara Barat
					</p>
				</div>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[15vh]" />
		</div>
	);
}
