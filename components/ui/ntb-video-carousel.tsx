'use client';

import { useEffect, useRef, useState } from 'react';

const videos = [
	{
		id: 'kU0UolVoJNA',
		location: 'Kota Mataram',
		caption: 'Kota Mataram dari Udara',
		title: 'KOTA MATARAM 2022 - by drone [4K] Update Terbaru Kota Mataram Lombok NTB',
	},
	{
		id: '4k7GNPmEtso',
		location: 'Lombok Tengah',
		caption: 'Selancar dan Senja di Lombok Tengah',
		title: 'Lombok Tengah, Spot Berselancar dan Sunset yang Indah',
	},
	{
		id: 'NK8yf4XeLa8',
		location: 'Sumbawa',
		caption: 'Sumbawa dalam Sinema',
		title: 'Sumbawa 2025. The Hidden Paradise of Indonesia. Cinematic 4k video',
	},
	{
		id: 'U6JF4WXCpQI',
		location: 'Sumbawa',
		caption: 'Alam dan Tradisi Sumbawa',
		title: 'Sumbawa, Alam dan Tradisinya yang Memikat Dunia.',
	},
	{
		id: 'pjhpLCOV_TU',
		location: 'Kota Bima',
		caption: 'Alam dan Budaya Kota Bima',
		title: 'Pesona Kota Bima NTB Surga Tersembunyi di Timur Indonesia | Alam, Budaya & Tradisi yang Memukau!',
	},
];

export default function NtbVideoCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean | null>(null);
	const [playingVideo, setPlayingVideo] = useState<(typeof videos)[number] | null>(null);
	const dialogRef = useRef<HTMLDialogElement>(null);
	const move = (direction: -1 | 1) => setActiveIndex((index) => (index + direction + videos.length) % videos.length);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
		updatePreference();
		mediaQuery.addEventListener('change', updatePreference);
		return () => mediaQuery.removeEventListener('change', updatePreference);
	}, []);

	useEffect(() => {
		if (isPaused || prefersReducedMotion !== false || playingVideo) return;
		const timer = window.setInterval(() => {
			setActiveIndex((index) => (index + 1) % videos.length);
		}, 5000);
		return () => window.clearInterval(timer);
	}, [isPaused, prefersReducedMotion, playingVideo]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		if (playingVideo && !dialog.open) dialog.showModal();
		if (!playingVideo && dialog.open) dialog.close();
	}, [playingVideo]);

	return (
		<section
			id="video-ntb"
			aria-labelledby="video-ntb-title"
			className="border-t border-[#e3e8e5] bg-[#fafbf9] px-6 py-20"
		>
			<div className="mx-auto max-w-6xl">
				<div className="mb-6 text-center">
					<div>
						<p className="text-xs font-semibold uppercase tracking-wide text-[#204434]">Galeri Video</p>
						<h2 id="video-ntb-title" className="mt-2 text-3xl font-bold tracking-tight text-[#18251e] md:text-4xl">
							NTB dari Lombok hingga Bima
						</h2>
						<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5a625d]">
							Jelajahi kota, pesisir, alam, dan tradisi melalui pilihan video dari Lombok dan Sumbawa.
						</p>
					</div>
				</div>

				<div
					role="region"
					aria-label="Video tentang Nusa Tenggara Barat"
					aria-roledescription="carousel"
					className="relative mx-auto flex h-[340px] w-full items-center justify-center [perspective:1000px] sm:h-[400px]"
				>
					{videos.map((video, index) => {
						let offset = index - activeIndex;
						const half = Math.floor(videos.length / 2);
						if (offset > half) offset -= videos.length;
						if (offset < -half) offset += videos.length;
						const distance = Math.abs(offset);
						const isCenter = distance === 0;
						const isAdjacent = distance === 1;
						const visual = (
							<div className="h-full overflow-hidden rounded-2xl border border-[#dce4de] bg-white shadow-[0_18px_45px_rgba(24,37,30,0.16)]">
								<div className="relative aspect-video overflow-hidden bg-[#e3e8e5]">
									<img
										src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
										alt={`Thumbnail video tentang ${video.location}`}
										width="480"
										height="360"
										loading="lazy"
										decoding="async"
										className="h-full w-full object-cover"
									/>
									{isCenter && (
										<span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-black/10">
											<span className="grid size-14 place-items-center rounded-full bg-white/95 text-[#142b22] shadow-sm">
												<span className="ml-1 text-lg">▶</span>
											</span>
										</span>
									)}
								</div>
								<div className="p-4 sm:p-5">
									<p className="text-xs font-semibold uppercase tracking-wide text-[#52705b]">{video.location}</p>
									<h3 className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm font-bold leading-snug text-[#18251e] sm:text-base">
										{video.caption}
									</h3>
									{isCenter && <span className="mt-3 inline-block text-sm font-semibold text-[#204434]">Tonton di YouTube ↗</span>}
								</div>
							</div>
						);

						return (
							<article
								key={video.id}
								aria-label={`${index + 1} dari ${videos.length}: ${video.title}`}
								aria-hidden={!isCenter && !isAdjacent}
								className="absolute left-1/2 top-1/2 h-[300px] w-[min(82vw,640px)] transition-all duration-500 ease-in-out motion-reduce:transition-none sm:h-[340px]"
								style={{
									transform: `translate(-50%, -50%) translateX(${offset * 48}%) scale(${isCenter ? 1 : isAdjacent ? 0.84 : 0.68}) rotateY(${offset * -11}deg)`,
									zIndex: isCenter ? 10 : isAdjacent ? 5 : 0,
									opacity: isCenter ? 1 : isAdjacent ? 0.42 : 0,
									filter: isCenter ? 'blur(0px)' : 'blur(3px)',
									visibility: isCenter || isAdjacent ? 'visible' : 'hidden',
									pointerEvents: isCenter || isAdjacent ? 'auto' : 'none',
								}}
							>
								{isCenter ? (
									<button
										type="button"
										onClick={() => setPlayingVideo(video)}
										aria-label={`Putar video: ${video.title}`}
										aria-haspopup="dialog"
										className="group block h-full w-full cursor-pointer rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:ring-offset-2"
									>
										{visual}
									</button>
								) : (
									<button
										type="button"
										onClick={() => setActiveIndex(index)}
										aria-label={`Pilih video ${index + 1}: ${video.location}`}
										className="block h-full w-full cursor-pointer rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:ring-offset-2"
									>
										{visual}
									</button>
								)}
							</article>
						);
					})}

					<button
						type="button"
						onClick={() => move(-1)}
						aria-label="Video sebelumnya"
						className="absolute left-0 top-1/2 z-20 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#cbd5ce] bg-white/90 text-[#18251e] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] sm:left-8"
					>
						<span aria-hidden="true" className="text-2xl leading-none">‹</span>
					</button>
					<button
						type="button"
						onClick={() => move(1)}
						aria-label="Video berikutnya"
						className="absolute right-0 top-1/2 z-20 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#cbd5ce] bg-white/90 text-[#18251e] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] sm:right-8"
					>
						<span aria-hidden="true" className="text-2xl leading-none">›</span>
					</button>
				</div>

				<div className="mt-3 flex items-center justify-center gap-4 text-xs text-[#626964]">
					<span aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}</span>
					<div className="flex gap-1.5" aria-label="Pilih video">
						{videos.map((video, index) => (
							<button
								key={video.id}
								type="button"
								onClick={() => setActiveIndex(index)}
								aria-label={`Tampilkan video ${index + 1}: ${video.location}`}
								aria-current={index === activeIndex ? 'true' : undefined}
								className={`size-2.5 cursor-pointer rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:ring-offset-2 ${index === activeIndex ? 'bg-[#204434]' : 'bg-[#cbd5ce] hover:bg-[#829783]'}`}
							/>
						))}
					</div>
				</div>
				<button
					type="button"
					onClick={() => setIsPaused((paused) => !paused)}
					aria-label={isPaused ? 'Lanjutkan carousel otomatis' : 'Jeda carousel otomatis'}
					aria-pressed={isPaused}
					className="mx-auto mt-4 block cursor-pointer rounded-md px-3 py-2 text-xs font-semibold text-[#204434] underline decoration-[#829783] underline-offset-4 hover:text-[#142b22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22]"
				>
					{isPaused ? 'Lanjutkan putar otomatis' : 'Jeda putar otomatis'}
				</button>

				<dialog
					ref={dialogRef}
					aria-label={playingVideo ? `Pemutar video: ${playingVideo.title}` : 'Pemutar video'}
					onClose={() => setPlayingVideo(null)}
					className="fixed m-auto w-[calc(100%-2rem)] max-w-5xl overflow-visible border-0 bg-transparent p-0 text-white backdrop:bg-black/80"
				>
					{playingVideo && (
						<div className="relative">
							<button
								type="button"
								autoFocus
								onClick={() => dialogRef.current?.close()}
								aria-label="Tutup pemutar video"
								className="absolute -top-12 right-0 grid size-10 cursor-pointer place-items-center rounded-full border border-white/30 bg-black/70 text-2xl text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
							>
								×
							</button>
							<div className="aspect-video overflow-hidden rounded-xl bg-black shadow-2xl">
								<iframe
									src={`https://www.youtube.com/embed/${playingVideo.id}?autoplay=1&rel=0`}
									title={playingVideo.title}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="h-full w-full"
								/>
							</div>
						</div>
					)}
				</dialog>
			</div>
		</section>
	);
}
