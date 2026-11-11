'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3]);
	const scale34 = useTransform(scrollYProgress, [0, 1], [1, 3.4]);
	const scale35 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

	const scales = [scale3, scale34, scale35, scale34, scale35, scale4, scale4];

	return (
		<div ref={container} className="zoom-parallax-root relative h-[300vh]">
			<div className="zoom-parallax-stage sticky top-0 h-[100svh] overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="zoom-parallax-item absolute top-0 flex h-full w-full items-center justify-center"
						>
							<div className="zoom-parallax-frame relative h-[25vh] w-[25vw]">
								<Image
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									fill
									sizes="(max-width: 767px) 50vw, 35vw"
									className="object-cover"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
