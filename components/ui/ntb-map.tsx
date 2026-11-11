"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, MapPin, Search, X } from "lucide-react";
import { NTB_REGIONS } from "@/components/ui/ntb-map-data";
import { NTB_REGION_DETAILS } from "@/components/ui/ntb-map-detail-data";

const WIDTH = 920;
const HEIGHT = 500;

function fitView(bbox: [number, number, number, number]) {
  const [x1, y1, x2, y2] = bbox;
  const scale = Math.min(WIDTH / ((x2 - x1) * 1.18), HEIGHT / ((y2 - y1) * 1.18), 4.5);
  return { scale, x: WIDTH / 2 - ((x1 + x2) / 2) * scale, y: HEIGHT / 2 - ((y1 + y2) / 2) * scale };
}

export default function NtbMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const selected = NTB_REGIONS.find((region) => region.id === selectedId) ?? null;
  const selectedDetail = selectedId ? NTB_REGION_DETAILS[selectedId] : null;
  const filtered = useMemo(
    () => NTB_REGIONS.filter((region) => region.name.toLocaleLowerCase("id").includes(query.trim().toLocaleLowerCase("id"))),
    [query],
  );
  const view = selected ? fitView(selected.bbox) : { scale: 1, x: 0, y: 0 };

  const chooseRegion = (id: string) => setSelectedId(id);

  return (
    <section id="peta" aria-labelledby="ntb-map-title" className="border-y border-[#e5e8e2] bg-[#f6f7f2] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#52705b]"><MapPin className="h-4 w-4" /> Wilayah Nusa Tenggara Barat</p>
            <h2 id="ntb-map-title" className="text-3xl font-bold tracking-tight text-[#18251e] md:text-5xl">Peta kabupaten &amp; kota</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5f6961] md:text-base">Pilih wilayah pada peta atau cari namanya untuk melihat letak di Lombok dan Sumbawa.</p>
          </div>
          {selected && <button type="button" onClick={() => setSelectedId(null)} className="inline-flex w-fit items-center gap-2 rounded-full border border-[#cfd7cf] bg-white px-4 py-2 text-sm font-medium text-[#294536] transition hover:border-[#78927e]"><ArrowLeft className="h-4 w-4" /> Tampilkan seluruh NTB</button>}
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-[#dce2da] bg-white shadow-[0_14px_40px_rgba(22,42,30,0.06)] lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="relative flex h-[300px] items-center justify-center bg-[#fcfcf9] p-3 sm:h-[390px] sm:p-6 lg:h-[510px]">
            <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="group" aria-label="Peta interaktif kabupaten dan kota di Nusa Tenggara Barat" className="h-auto w-full overflow-visible">
              <g className="transition-transform duration-700 ease-[cubic-bezier(.22,.8,.24,1)]" style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`, transformOrigin: "0 0" }}>
                {NTB_REGIONS.map((region, index) => {
                  const active = selectedId === region.id;
                  const hovered = hoveredId === region.id;
                  const dimmed = Boolean((hoveredId && !hovered) || (selectedId && !hoveredId && !active));
                  const color = ["#537964", "#8c9c66", "#bd8057", "#617f8b", "#bd9b60"][index % 5];
                  return (
                    <path key={region.id} d={region.d} role="button" tabIndex={0} aria-label={`${region.name}, Pulau ${region.island}`} aria-pressed={active} onMouseEnter={() => setHoveredId(region.id)} onMouseLeave={() => setHoveredId(null)} onFocus={() => setHoveredId(region.id)} onBlur={() => setHoveredId(null)} onClick={() => chooseRegion(region.id)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); chooseRegion(region.id); } }} className="cursor-pointer outline-none transition-[fill,opacity,stroke-width] duration-200 focus-visible:stroke-[#142b22] focus-visible:stroke-[2.5]" fill={hovered || active ? "#d3784f" : color} fillOpacity={dimmed ? 0.22 : active || hovered ? 0.96 : 0.8} stroke={hovered || active ? "#8b462c" : "#fcfcf9"} strokeWidth={hovered || active ? 2 : 1.15} vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
                  );
                })}
                {NTB_REGIONS.map((region) => {
                  const hovered = hoveredId === region.id;
                  const active = selectedId === region.id;
                  const [x1, y1, x2, y2] = region.bbox;
                  const name = region.name.replace(/^Kabupaten\s+|^Kota\s+/, "");
                  const size = 11 / view.scale;
                  return <text key={`label-${region.id}`} x={(x1 + x2) / 2} y={(y1 + y2) / 2} textAnchor="middle" dominantBaseline="middle" pointerEvents="none" fontSize={size} fontWeight={hovered || active ? 700 : 600} fill={hovered || active ? "#713d27" : "#20352a"} stroke="#fff" strokeWidth={3 / view.scale} strokeLinejoin="round" paintOrder="stroke" opacity={hoveredId && !hovered ? 0.35 : 1}>{name}</text>;
                })}
              </g>
            </svg>
            <div aria-live="polite" className="pointer-events-none absolute left-5 top-5 rounded-lg border border-[#e3e7df] bg-white/90 px-3 py-2 text-xs text-[#536057] shadow-sm backdrop-blur">
              {hoveredId ? <><span className="font-semibold text-[#1d3427]">{NTB_REGIONS.find((region) => region.id === hoveredId)?.name}</span><span className="ml-2">Pulau {NTB_REGIONS.find((region) => region.id === hoveredId)?.island}</span></> : selected ? <><span className="font-semibold text-[#1d3427]">{selected.name}</span><span className="ml-2">Pulau {selected.island}</span></> : "Pilih salah satu wilayah"}
            </div>
          </div>

          <aside aria-label="Daftar kabupaten dan kota" className="flex min-h-0 flex-col border-t border-[#e6e9e4] lg:h-[510px] lg:border-l lg:border-t-0">
            <div className="shrink-0 border-b border-[#edf0eb] p-4 sm:p-5">
              <label htmlFor="ntb-region-search" className="mb-2 block text-sm font-semibold text-[#24362a]">Cari wilayah</label>
              <span className="relative block">
                <Search aria-hidden="true" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b867c]" />
                <input id="ntb-region-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Contoh: Lombok Timur" className="h-10 w-full rounded-lg border border-[#dce2da] bg-white pl-9 pr-3 text-sm text-[#18251e] outline-none placeholder:text-[#9aa39b] focus:border-[#66806d] focus:ring-2 focus:ring-[#66806d]/15" />
              </span>
            </div>
            <ul className="h-[250px] min-h-0 shrink-0 overflow-x-hidden overflow-y-scroll overscroll-y-contain touch-pan-y divide-y divide-[#eff1ed] p-2 [scrollbar-gutter:stable] sm:h-[300px] lg:h-auto lg:flex-1 lg:shrink" aria-label="Wilayah NTB">
              {filtered.map((region) => {
                const active = selectedId === region.id;
                return <li key={region.id}><button type="button" onClick={() => chooseRegion(region.id)} aria-pressed={active} className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left transition ${active ? "bg-[#edf2ec] text-[#1e3b2a]" : "text-[#29352d] hover:bg-[#f5f7f3]"}`}>
                  <span className="min-w-0"><span className="block truncate text-sm font-medium">{region.name}</span><span className="mt-1 block text-xs text-[#7b867c]">Pulau {region.island}</span></span>
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${active ? "bg-[#d3784f]" : "bg-[#bdc9bc]"}`} aria-hidden="true" />
                </button></li>;
              })}
              {!filtered.length && <li className="px-3 py-8 text-center text-sm text-[#7b867c]">Wilayah tidak ditemukan.</li>}
            </ul>
            <p className="shrink-0 border-t border-[#edf0eb] px-5 py-3 text-[11px] leading-5 text-[#858e85]">Batas wilayah: data administrasi BPS, periode 2024. Peta bersifat informatif.</p>
          </aside>
        </div>

      </div>

      {selected && selectedDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedId(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedId(null);
          }}
        >
          <article aria-labelledby="ntb-region-detail-title" aria-modal="true" role="dialog" className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#dce2da] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-[#e8ece6] bg-[#fbfcf9] px-5 py-5 sm:px-7 sm:py-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66806d]">Pulau {selected.island} · {selectedDetail.language}</p>
                <h3 id="ntb-region-detail-title" className="mt-2 text-2xl font-bold tracking-tight text-[#18251e] sm:text-3xl">{selected.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f6961]">{selectedDetail.overview}</p>
              </div>
              <button type="button" aria-label="Tutup detail wilayah" onClick={() => setSelectedId(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#dce2da] bg-white text-[#46564a] transition hover:bg-[#edf2ec]"><X className="h-4 w-4" /></button>
            </header>
            <div className="min-h-0 overflow-y-auto overscroll-contain">
              <dl className="grid gap-px bg-[#e8ece6] sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-5 sm:p-6"><dt className="text-xs font-semibold uppercase tracking-wider text-[#66806d]">Alam &amp; wisata</dt><dd className="mt-2 text-sm leading-6 text-[#29352d]">{selectedDetail.attraction}</dd></div>
                <div className="bg-white p-5 sm:p-6"><dt className="text-xs font-semibold uppercase tracking-wider text-[#66806d]">Budaya</dt><dd className="mt-2 text-sm leading-6 text-[#29352d]">{selectedDetail.culture}</dd></div>
                <div className="bg-white p-5 sm:p-6"><dt className="text-xs font-semibold uppercase tracking-wider text-[#66806d]">Kuliner &amp; khas</dt><dd className="mt-2 text-sm leading-6 text-[#29352d]">{selectedDetail.localSpecialty}</dd></div>
                <div className="bg-white p-5 sm:p-6"><dt className="text-xs font-semibold uppercase tracking-wider text-[#66806d]">Motto daerah</dt><dd className="mt-2 text-sm leading-6 text-[#29352d]">{selectedDetail.motto}</dd></div>
                <div className="bg-white p-5 sm:p-6"><dt className="text-xs font-semibold uppercase tracking-wider text-[#66806d]">Tahukah kamu?</dt><dd className="mt-2 text-sm leading-6 text-[#29352d]">{selectedDetail.trivia}</dd></div>
                <div className="bg-white p-5 sm:p-6"><dt className="text-xs font-semibold uppercase tracking-wider text-[#66806d]">Data wilayah</dt><dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm leading-6 text-[#29352d]"><span>Bahasa: {selectedDetail.language}</span><span>Luas: {selectedDetail.area}</span><span>Penduduk (2025): {selectedDetail.population}</span></dd></div>
              </dl>
            </div>
            <footer className="shrink-0 border-t border-[#e8ece6] bg-[#fbfcf9] px-5 py-3 text-right sm:px-7">
              <button type="button" onClick={() => setSelectedId(null)} className="rounded-full bg-[#294536] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1f382a]">Tutup</button>
            </footer>
          </article>
        </div>
      )}
    </section>
  );
}
