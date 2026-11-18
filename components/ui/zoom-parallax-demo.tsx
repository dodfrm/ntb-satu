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
			src: '/Lmbok%20barat%20w.jpeg',
			alt: 'Foto Kabupaten Lombok Barat',
		},
		{
			src: '/LOmbok%20utara.jpeg',
			alt: 'Foto Kabupaten Lombok Utara',
		},
		{
			src: '/lombok%20tengah.jpeg',
			alt: 'Foto Kabupaten Lombok Tengah',
		},
		{
			src: '/Lombok%20timur.jpeg',
			alt: 'Foto Kabupaten Lombok Timur',
		},
		{
			src: '/kab%20sumbawa%20barat.jpeg',
			alt: 'Foto Kabupaten Sumbawa Barat',
		},
		{
			src: '/dompu%20satonda.jpeg',
			alt: 'Foto Dompu dan Satonda',
		},
		{
			src: '/Kab%20Bima%20w.jpeg',
			alt: 'Foto Kabupaten Bima',
		},
	];

	return (
		<div className="min-h-screen w-full bg-[#f8faf9] text-[#18251e] border-t border-[#e3e8e5]">
			<div className="relative flex h-[35vh] items-center justify-center overflow-x-clip">
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
						Lihat lebih dekat kemegahan alam Nusa Tenggara Barat
					</p>
				</div>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[15vh]" />
		</div>
	);
}
