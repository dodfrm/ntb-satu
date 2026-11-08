'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CardNav, { CardNavItem } from './components/CardNav';
import Demo from '@/components/ui/demo';
import ZoomParallaxDemo from '@/components/ui/zoom-parallax-demo';
import RidgelineDitherFooter from '@/components/ui/ridgeline-dither-footer';
import { DestinationCard } from '@/components/ui/card-21';
import {
  Mountain,
  Waves,
  Compass,
  Sun,
  MapPin,
  ShieldCheck,
  Landmark,
  Scroll,
  Flame,
  Users,
  CheckCircle2,
  X,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';

interface Destination {
  id: string;
  title: string;
  category: string;
  elevation: string;
  location: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  image: string;
  featured?: boolean;
  highlights: string[];
  bestTime: string;
  accessInfo: string;
  themeColor: string;
  flag?: string;
  stats?: string;
}

const navItems: CardNavItem[] = [
  {
    label: 'Portal Sasambo',
    description: 'Gerbang eksplorasi visual dua pulau besar: Pulau Lombok dan Pulau Sumbawa.',
    links: [
      { label: 'Portal Nusa Tenggara Barat', href: '#portal' },
      { label: 'Profil Geografis NTB', href: '#tentang' },
    ],
  },
  {
    label: 'Destinasi Wisata',
    description: 'Kawasan konservasi alam dan pesisir unggulan di Lombok dan Sumbawa.',
    links: [
      { label: 'Destinasi Unggulan', href: '#destinasi' },
      { label: 'Galeri Panorama Alam', href: '#galeri' },
    ],
  },
  {
    label: 'Kearifan Budaya',
    description: 'Warisan tradisi luhur masyarakat Sasak, Samawa, dan Mbojo (Sasambo).',
    links: [
      { label: 'Tradisi & Upacara Adat', href: '#budaya' },
      { label: 'Arsitektur & Kriya Tenun', href: '#budaya' },
    ],
  },
];

const DESTINATIONS: Destination[] = [
  {
    id: 'rinjani',
    title: 'Taman Nasional Gunung Rinjani',
    category: 'Kaldera Vulkanik & Konservasi Alam',
    elevation: '3.726 mdpl (Lombok)',
    location: 'Lombok Utara, Lombok Timur, & Lombok Tengah',
    description:
      'Gunung berapi megah dengan kaldera raksasa Danau Segara Anak di Pulau Lombok. Rumah bagi keragaman hayati peralihan Wallacea serta jalur pendakian legendaris Sembalun, Senaru, dan Torean.',
    icon: Mountain,
    badge: 'UNESCO Global Geopark',
    image:
      'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    highlights: [
      'Danau Kawah Segara Anak & Gunung Baru Jari',
      'Jalur Savana Sembalun & Rimba Senaru',
      'Mata Air Panas Alami Aik Kalak',
      'Kawasan Konservasi Flora & Fauna Khas Wallacea',
    ],
    bestTime: 'April hingga November (Musim Kemarau)',
    accessInfo: 'Melalui Pintu Registrasi Resmi e-Rinjani (Sembalun, Senaru, Torean, Aik Berik).',
    themeColor: '154 50% 25%',
    flag: '🌋',
    stats: '3.726 mdpl • Geopark Lombok',
  },
  {
    id: 'tambora',
    title: 'Taman Nasional Gunung Tambora',
    category: 'Kaldera Raksasa & Jejak Sejarah Dunia',
    elevation: '2.851 mdpl (Sumbawa)',
    location: 'Kabupaten Dompu & Kabupaten Bima, Pulau Sumbawa',
    description:
      'Situs geologi bersejarah dunia dengan kaldera berdiameter 7 kilometer dan kedalaman 1.200 meter akibat letusan dahsyat tahun 1815. Dikelilingi padang savana Doro Ncanga tempat kawanan kerbau dan kuda Sumbawa hidup bebas.',
    icon: Mountain,
    badge: 'UNESCO Global Geopark',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    highlights: [
      'Kaldera Raksasa 7 Km Bekas Letusan Tahun 1815',
      'Padang Savana Luas Doro Ncanga di Kaki Gunung',
      'Habitat Satwa Kuda Liar & Rusa Timor',
      'Jalur Pendakian Savana Pancasila & Doro Ncanga',
    ],
    bestTime: 'Mei hingga Oktober',
    accessInfo: 'Melalui Pos Registrasi Pancasila atau Doro Ncanga, Dompu, Sumbawa.',
    themeColor: '160 55% 20%',
    flag: '🐎',
    stats: '2.851 mdpl • Geopark Sumbawa',
  },
  {
    id: 'teluk-saleh',
    title: 'Teluk Saleh & Suaka Hiu Paus',
    category: 'Akuarium Raksasa & Konservasi Bahari',
    elevation: 'Perairan Pedalaman Sumbawa',
    location: 'Kabupaten Sumbawa & Kabupaten Dompu',
    description:
      'Teluk semi tertutup terbesar di NTB yang dijuluki Akuarium Raksasa Sumbawa. Menjadi rumah bagi populasi Hiu Paus (Rhincodon typus) yang hidup berdampingan secara harmonis dengan nelayan bagan tradisional.',
    icon: Waves,
    badge: 'Konservasi Bahari Sumbawa',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Interaksi Konservasi Hiu Paus di Bagan Tradisional',
      'Gugusan Terumbu Karang Sehat Teluk Saleh',
      'Pemberdayaan Nelayan Lokal Berbasis Ekowisata',
    ],
    bestTime: 'Sepanjang tahun, terbaik saat fajar (05.30 - 08.00 WITA)',
    accessInfo: 'Akses perahu nelayan dari Labuhan Jering atau Desa Tarano, Sumbawa.',
    themeColor: '175 60% 22%',
    flag: '🦈',
    stats: 'Suaka Hiu Paus • Teluk Terbesar NTB',
  },
  {
    id: 'mandalika',
    title: 'Kawasan Wisata Mandalika & Bukit Merese',
    category: 'Pesisir Samudra & Olahraga Dunia',
    elevation: 'Pesisir Selatan Lombok',
    location: 'Lombok Tengah',
    description:
      'Bentang perbukitan hijau Bukit Merese yang memeluk teluk biru toska, Pantai Tanjung Aan berpasir butiran merica unik, serta sirkuit balap internasional Pertamina Mandalika.',
    icon: Compass,
    badge: 'Destinasi Super Prioritas',
    image:
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Panorama Sunset dari Puncak Bukit Merese',
      'Keunikan Tekstur Pasir Putih Bulat Tanjung Aan',
      'Sirkuit Internasional Pertamina Mandalika',
    ],
    bestTime: 'Sepanjang tahun, ideal saat sore hari menjelang senja',
    accessInfo: '25 menit perjalanan darat dari Bandara Internasional Lombok (BIL).',
    themeColor: '165 50% 24%',
    flag: '🏎️',
    stats: 'Pesisir Samudra • Sirkuit Mandalika',
  },
  {
    id: 'dalam-loka',
    title: 'Istana Dalam Loka & Budaya Samawa',
    category: 'Warisan Arsitektur Kayu Nusantara',
    elevation: 'Pusat Sejarah Kesultanan Sumbawa',
    location: 'Kota Sumbawa Besar, Pulau Sumbawa',
    description:
      'Istana kayu kembar terbesar di Nusantara yang dibangun pada tahun 1885 tanpa paku besi, bertumpu pada 99 tiang kokoh yang melambangkan Asmaul Husna. Simbol kegemilangan Kesultanan Sumbawa.',
    icon: Landmark,
    badge: 'Cagar Budaya Nasional',
    image:
      'https://images.unsplash.com/photo-1590059390046-67a731bfa8a9?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Konstruksi Pasak Kayu Tradisional Tanpa Paku Besi',
      'Filosofi 99 Tiang Penyangga Asmaul Husna',
      'Museum Sejarah & Benda Pusaka Kesultanan Samawa',
    ],
    bestTime: 'Buka setiap hari kerja dan akhir pekan, pagi hingga sore',
    accessInfo: '10 menit dari Bandara Sultan Muhammad Kaharuddin III, Sumbawa Besar.',
    themeColor: '150 45% 20%',
    flag: '👑',
    stats: 'Arsitektur Kayu 99 Tiang • Sejarah Samawa',
  },
  {
    id: 'kenawa',
    title: 'Pulau Kenawa & Selat Alas',
    category: 'Savana Pulau Karang & Wisata Berkelanjutan',
    elevation: 'Perairan Selat Alas (Sumbawa Barat)',
    location: 'Poto Tano, Kabupaten Sumbawa Barat',
    description:
      'Pulau tak berpenghuni di Selat Alas yang memisahkan Pulau Lombok dan Sumbawa. Memiliki bukit tunggal dengan hamparan savana alami berlatar panorama Gunung Rinjani dari kejauhan.',
    icon: Sun,
    badge: 'Pesona Pesisir Sumbawa Barat',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Padang Savana Alami Berlatar Selat Alas & Rinjani',
      'Spot Kemah Mandiri di Bawah Gugusan Galaksi Bima Sakti',
      'Terumbu Karang Dangkal untuk Snorkeling Ramah Pemula',
    ],
    bestTime: 'Mei hingga Oktober',
    accessInfo: 'Penyeberangan 20 menit perahu nelayan dari Pelabuhan Poto Tano, Sumbawa Barat.',
    themeColor: '155 40% 22%',
    flag: '🏝️',
    stats: 'Savana Selat Alas • Berkemah Bintang',
  },
];

const CULTURAL_PILLARS = [
  {
    index: '01',
    title: 'Tradisi Balap Kuda Main Jaran Sumbawa',
    category: 'Olahraga & Ketangkasan Samawa',
    description:
      'Tradisi pacuan kuda khas Pulau Sumbawa yang dipacu oleh joki cilik berbakat tanpa pelana. Melambangkan keberanian, ketangguhan mental, dan kebanggaan keluarga masyarakat Samawa turun-temurun.',
    icon: Flame,
  },
  {
    index: '02',
    title: 'Seni Tenun Songket Sasak & Rimpu Mbojo',
    category: 'Kerajinan Kriya Tradisional',
    description:
      'Dua tradisi tenun termahsyur di NTB: tenun songket motif Subahnale dari kaum wanita Sasak di Lombok, serta kain sarung tenun Tembe Nggoli khas Bima yang dikenakan dengan tradisi santun berbusana Rimpu.',
    icon: Scroll,
  },
  {
    index: '03',
    title: 'Arsitektur Tahan Gempa: Dalam Loka & Bale Tani',
    category: 'Kearifan Rancang Bangun Nusantara',
    description:
      'Bukti kecerdasan konstruksi leluhur: Istana kayu 99 tiang Dalam Loka di Sumbawa dan rumah panggung berdinding bambu lentur Bale Tani di Lombok, dirancang tanggap terhadap dinamika tektonik kepulauan.',
    icon: Landmark,
  },
  {
    index: '04',
    title: 'Kesenian Bela Diri: Peresean & Silat Gantao',
    category: 'Seni Ksatria & Persaudaraan',
    description:
      'Pertarungan adu ketangkasan tongkat rotan dan perisai kulit Peresean di Lombok, berpadu dengan seni bela diri tradisional Gantao di pesisir Bima yang diiringi tabuhan musik gendang penyemangat ksatria.',
    icon: Users,
  },
];

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [showNav, setShowNav] = useState(false);

  // Show navbar starting from Section 2 (#tentang) onwards
  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById('tentang');
      if (!section2) return;
      const rect = section2.getBoundingClientRect();
      setShowNav(rect.top <= 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Close modal on Escape key (R-32 accessibility)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedDestination(null);
    }
  }, []);

  useEffect(() => {
    if (selectedDestination) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDestination, handleKeyDown]);

  return (
    <div className="min-h-screen bg-white text-[#18251e] flex flex-col selection:bg-[#142b22] selection:text-white font-sans">
      {/* 1. Header Landmark with Navigation */}
      <header
        role="banner"
        className={cn(
          'fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500 ease-out',
          showNav
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-6 pointer-events-none'
        )}
        aria-hidden={!showNav}
        inert={!showNav ? true : undefined}
      >
        <CardNav
          logo={
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#142b22]/10 border border-[#142b22]/20 text-[#142b22]">
                <Mountain className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-wider text-[#18251e]">NTB SATU</span>
                <span className="text-[10px] text-[#204434] font-medium">Lombok &amp; Sumbawa</span>
              </div>
            </div>
          }
          logoAlt="NTB SATU - Gerbang Informasi Wisata Nusa Tenggara Barat"
          logoHref="#portal"
          items={navItems}
          // cta={{ label: 'Eksplorasi Destinasi', href: '#destinasi' }}
          cardEffect="rise"
          openOn="click"
          theme="light"
          ariaLabel="Navigasi Utama Portal NTB"
        />
      </header>

      {/* 2. Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Halaman Pertama dengan Komponen GlyphPortal (Tulisan: Nusa Tenggara Barat) */}
        <section id="portal" aria-label="Portal Live-Type Nusa Tenggara Barat" className="relative">
          <Demo />
        </section>

        {/* Section 2: Profil Faktual & Geografis NTB (Dua Pulau: Lombok & Sumbawa) */}
        <section id="tentang" className="relative pt-24 pb-20 px-6 max-w-6xl mx-auto border-t border-[#e3e8e5] bg-white">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142b22]/5 border border-[#142b22]/15 text-[#142b22] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Profil Geografis &amp; Kebudayaan Bumi Sasambo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#18251e]">
              Dua Pulau Megah, Harmoni Sasambo di Nusa Tenggara Barat
            </h2>
            <p className="max-w-3xl mx-auto text-[#5a625d] text-base md:text-lg leading-relaxed">
              Nusa Tenggara Barat bukan hanya tentang keelokan Pulau Lombok. Terbentang seluas <strong className="text-[#142b22] font-semibold">20.153 kilometer persegi</strong>, provinsi ini memadukan kemegahan Pulau Lombok di barat dan keagungan Pulau Sumbawa di timur. Wilayah ini menjadi rumah bagi dua UNESCO Global Geoparks dunia (Rinjani &amp; Tambora), suaka bahari terumbu karang dan hiu paus, serta kehangatan persaudaraan tiga suku serumpun: Sasak, Samawa, dan Mbojo.
            </p>
          </div>

          {/* Factual Information Grid: 4 Real Geographic & Institutional Data Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Compass className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                  Bentang Kepulauan
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#18251e]">2 Pulau Utama</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Pulau Lombok (4.725 km²) dan Pulau Sumbawa (15.448 km²), terhubung oleh perairan Selat Alas.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Mountain className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                  Warisan Geologi Dunia
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#18251e]">2 UNESCO Geopark</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Taman Nasional Rinjani 3.726 mdpl di Lombok dan Kaldera Raksasa Tambora 1815 di Sumbawa.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                  Entitas Budaya Sasambo
                </span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-[#18251e]">Tiga Suku Serumpun</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Persaudaraan sejati antara suku Sasak di Lombok, suku Samawa, dan suku Mbojo di Sumbawa.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                  Konservasi Bahari
                </span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-[#18251e]">Suaka Terkaya</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Suaka Hiu Paus Teluk Saleh, Cagar Alam Laut Pulau Moyo, dan suaka terumbu karang Gili Tramena.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Galeri Parallax Interaktif (Lombok & Sumbawa) */}
        <section id="galeri" aria-label="Galeri Lanskap Alam Lombok dan Sumbawa" className="relative">
          <ZoomParallaxDemo />
        </section>

        {/* Section 4: Destinasi Wisata Pilihan (Representasi Seimbang Lombok & Sumbawa) */}
        <section id="destinasi" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#e3e8e5] bg-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                Eksplorasi Alam &amp; Sejarah
              </p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#18251e] mt-1">
                Destinasi Pilihan: Lombok &amp; Sumbawa
              </h2>
            </div>
            <p className="text-[#5a625d] text-sm max-w-md">
              Koleksi destinasi kaldera legendaris dunia, suaka bahari hiu paus, perbukitan samudra, dan istana kayu bersejarah di dua pulau besar NTB.
            </p>
          </div>

          {/* Destinasi Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <div key={dest.id} className="w-full h-[480px]">
                <DestinationCard
                  imageUrl={dest.image}
                  location={dest.title}
                  flag={dest.flag}
                  stats={dest.stats || `${dest.elevation} • ${dest.badge}`}
                  href="#destinasi"
                  themeColor={dest.themeColor}
                  ctaText="Informasi Rute & Akses"
                  onCardClick={(e) => {
                    e.preventDefault();
                    setSelectedDestination(dest);
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Tradisi & Kearifan Budaya Sasambo */}
        <section id="budaya" className="py-20 px-6 border-t border-[#e3e8e5] bg-[#fafbf9]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                Identitas Tiga Suku Bersaudara
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#18251e]">
                Kearifan Adat Sasak, Samawa, dan Mbojo
              </h2>
              <p className="max-w-3xl mx-auto text-[#5a625d] text-sm md:text-base leading-relaxed">
                Masyarakat di seluruh penjuru Nusa Tenggara Barat memelihara nilai luhur dalam menjaga kelestarian alam, hutan sakral, mata air pegunungan, serta keharmonisan sosial. Tiga pilar budaya Sasambo adalah cermin ketangguhan jiwa Bumi Gora.
              </p>
            </div>

            {/* Cultural Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CULTURAL_PILLARS.map((pillar) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pillar.index}
                    className="p-6 rounded-xl bg-white border border-[#e3e8e5] hover:border-[#142b22]/30 shadow-sm hover:shadow transition-all flex gap-4 items-start"
                  >
                    <div className="p-3 rounded-lg bg-[#142b22]/10 border border-[#142b22]/15 text-[#142b22] shrink-0">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#204434] tracking-wider">{pillar.index}</span>
                        <span className="text-[11px] font-semibold text-[#5a625d] uppercase tracking-wide">
                          {pillar.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#18251e]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#5a625d] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 3. Modal Dialog: Detail Destinasi Interaktif (Functional & Accessible) */}
      {selectedDestination && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-dest-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-2xl bg-white border border-[#e3e8e5] rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header Media */}
            <div className="relative h-48 w-full shrink-0">
              <Image
                src={selectedDestination.image}
                alt={selectedDestination.title}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
              <button
                type="button"
                onClick={() => setSelectedDestination(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:outline-none"
                aria-label="Tutup rincian destinasi"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-4 px-3 py-1 rounded-md bg-white/95 text-xs font-semibold text-[#142b22] border border-black/10">
                {selectedDestination.badge}
              </span>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <p className="text-xs text-[#204434] font-semibold">
                  {selectedDestination.category} • {selectedDestination.elevation}
                </p>
                <h3 id="modal-dest-title" className="text-xl md:text-2xl font-bold text-[#18251e] mt-1">
                  {selectedDestination.title}
                </h3>
                <p className="text-xs text-[#5a625d] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#142b22] shrink-0" />
                  {selectedDestination.location}
                </p>
              </div>

              <p className="text-sm text-[#333d36] leading-relaxed">
                {selectedDestination.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-[#e3e8e5]">
                <h4 className="text-xs font-semibold text-[#142b22] uppercase tracking-wide">
                  Daya Tarik &amp; Fitur Utama:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#333d36]">
                  {selectedDestination.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#142b22] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#e3e8e5] text-xs">
                <div className="p-3 rounded-lg bg-[#fafbf9] border border-[#e3e8e5]">
                  <div className="flex items-center gap-1.5 text-[#142b22] font-semibold mb-1">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>Waktu Terbaik Kunjungan</span>
                  </div>
                  <p className="text-[#5a625d]">{selectedDestination.bestTime}</p>
                </div>

                <div className="p-3 rounded-lg bg-[#fafbf9] border border-[#e3e8e5]">
                  <div className="flex items-center gap-1.5 text-[#142b22] font-semibold mb-1">
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span>Akses &amp; Lokasi</span>
                  </div>
                  <p className="text-[#5a625d]">{selectedDestination.accessInfo}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#e3e8e5] bg-[#fafbf9] flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedDestination(null)}
                className="px-4 py-2 rounded-md bg-[#142b22] hover:bg-[#204434] text-white font-semibold text-xs transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:outline-none"
              >
                Tutup Rincian
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Ridgeline Dither Mountain Footer Landmark */}
      <RidgelineDitherFooter
        name="NTB SATU"
        brandHref="#portal"
        tagline="Portal rujukan informasi pariwisata berkelanjutan, konservasi alam, dan warisan budaya Nusa Tenggara Barat: Pulau Lombok & Pulau Sumbawa."
        seed={3726}
        ridges={6}
        altimeter={true}
        interactive={true}
        maxWidth="100%"
        className="w-full border-t border-[#e3e8e5]"
        preset="evergreen"
        palette={{
          paper: "#ffffff",
          ink: "#18251e",
          muted: "#71766f",
          line: "rgba(24, 37, 30, 0.12)",
          heart: "#142b22",
          tones: ["#ffffff", "#f4f7f5", "#e2ebe5", "#b4cbbe", "#7b9f8a", "#3b6b52", "#142b22"],
        }}
        columns={[
          {
            title: "Pulau Lombok",
            links: [
              { label: "Gunung Rinjani 3.726 mdpl", href: "#destinasi" },
              { label: "Kawasan Mandalika", href: "#destinasi" },
              { label: "Kepulauan Gili", href: "#destinasi" },
              { label: "Desa Adat Sade", href: "#destinasi" },
            ],
          },
          {
            title: "Pulau Sumbawa",
            links: [
              { label: "Kaldera Tambora 1815", href: "#destinasi" },
              { label: "Suaka Hiu Paus Teluk Saleh", href: "#destinasi" },
              { label: "Savana Pulau Kenawa", href: "#destinasi" },
              { label: "Istana Kayu Dalam Loka", href: "#destinasi" },
            ],
          },
          {
            title: "Kearifan Sasambo",
            links: [
              { label: "Tradisi Balap Main Jaran", href: "#budaya" },
              { label: "Tenun Songket & Rimpu", href: "#budaya" },
              { label: "Arsitektur Nusantara", href: "#budaya" },
              { label: "Seni Bela Diri Ksatria", href: "#budaya" },
            ],
          },
        ]}
        socials={[
          { icon: "instagram", href: "https://instagram.com" },
          { icon: "youtube", href: "https://youtube.com" },
          { icon: "x", href: "https://x.com" },
        ]}
        copyright="© 2026 NTB SATU. Harmoni Pulau Lombok & Pulau Sumbawa, Bumi Sasambo."
        credit={{ label: "Pesona NTB", href: "#portal" }}
      />
    </div>
  );
}
