'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CardNav, { CardNavItem } from './components/CardNav';
import Demo from '@/components/ui/demo';
import ZoomParallaxDemo from '@/components/ui/zoom-parallax-demo';
import NtbVideoCarousel from '@/components/ui/ntb-video-carousel';
import NtbMap from '@/components/ui/ntb-map';
import RidgelineDitherFooter from '@/components/ui/ridgeline-dither-footer';
import { DestinationCard } from '@/components/ui/card-21';
import {
  Mountain,
  Compass,
  MapPin,
  Landmark,
  Scroll,
  Flame,
  Users,
  X,
  Sparkles,
} from 'lucide-react';

interface Destination {
  id: string;
  title: string;
  island: string;
  area: string;
  population: string;
  motto: string;
  mottoMeaning: string;
  overview: string;
  nature: string[];
  culture: string;
  localSpecialty: string[];
  image: string;
}

const navItems: CardNavItem[] = [
  {
    label: 'Portal Sasambo',
    description: 'Gerbang eksplorasi visual dua pulau besar: Pulau Lombok dan Pulau Sumbawa.',
    links: [
      { label: 'Portal Nusa Tenggara Barat', href: '#portal' },
      { label: 'Profil Geografis NTB', href: '#tentang' },
      { label: 'Peta NTB', href: '#peta' },
    ],
  },
  {
    label: '10 Daerah NTB',
    description: 'Kenali kabupaten dan kota di Pulau Lombok dan Sumbawa melalui ringkasan wilayahnya.',
    links: [
      { label: 'Profil 10 Daerah', href: '#destinasi' },
      { label: 'Galeri Panorama Alam', href: '#galeri' },
    ],
  },
  {
    label: 'Kearifan Budaya',
    description: 'Warisan tradisi luhur masyarakat Sasak, Samawa, dan Mbojo (Sasambo).',
    links: [
      { label: 'Tradisi & Upacara Adat', href: '#budaya' },
      { label: 'Arsitektur & Kriya Tenun', href: '#budaya' },
      { label: 'Kuis NTB', href: '#kuis' },
    ],
  },
];

const DESTINATIONS: Destination[] = [
  {
    id: 'kota-mataram',
    title: 'Kota Mataram',
    island: 'Pulau Lombok',
    area: '61',
    population: '448.775',
    motto: 'Maju, Religius, dan Berbudaya',
    mottoMeaning: 'Bergerak maju dengan kehidupan yang religius dan berbudaya.',
    overview: 'Ibu kota Provinsi NTB dan pusat pemerintahan di Pulau Lombok. Berbagai tradisi bertemu di kota yang ramai dan majemuk ini.',
    nature: ['Pantai Ampenan', 'Kota Tua Ampenan'],
    culture: 'Warisan budaya Sasak dan Bali, antara lain di Pura Meru dan Taman Mayura.',
    localSpecialty: ['Sate Rembiga', 'Ayam Taliwang'],
    image: '/Kota%20mataram%20w.jpeg',
  },
  {
    id: 'lombok-barat',
    title: 'Lombok Barat',
    island: 'Pulau Lombok',
    area: '1.054',
    population: '776.300',
    motto: 'Patut, Patuh, Patju',
    mottoMeaning: 'Patut berarti baik dan terpuji; patuh berarti rukun dan toleran; patju berarti rajin serta giat.',
    overview: 'Wilayah di sisi barat Lombok yang berbatasan dengan Kota Mataram, dengan pesisir Senggigi dan tradisi yang mempertemukan umat berbeda agama.',
    nature: ['Pantai Senggigi'],
    culture: 'Perang Topat di Pura Lingsar melibatkan masyarakat Sasak dan Bali.',
    localSpecialty: ['Gerabah Banyumulek', 'Sate Bulayak'],
    image: '/Lmbok%20barat%20w.jpeg',
  },
  {
    id: 'lombok-tengah',
    title: 'Lombok Tengah',
    island: 'Pulau Lombok',
    area: '1.208',
    population: '1.129.778',
    motto: 'Tatas, Tuhu, Trasna',
    mottoMeaning: 'Cakap, tekun, dan penuh kasih.',
    overview: 'Wilayah selatan Lombok tempat desa adat dan kawasan pesisir berpadu.',
    nature: ['Pantai Kuta', 'Tanjung Aan (Mandalika)'],
    culture: 'Bau Nyale dan Desa Sade.',
    localSpecialty: ['Tenun songket Sukarara', 'Nasi Balap Puyung'],
    image: '/lombok%20tengah.jpeg',
  },
  {
    id: 'lombok-timur',
    title: 'Lombok Timur',
    island: 'Pulau Lombok',
    area: '1.606',
    population: '1.437.357',
    motto: 'Patuh Karya',
    mottoMeaning: 'Patuh pada nilai yang diyakini dan produktif dalam berkarya.',
    overview: 'Kabupaten di timur Lombok dengan dataran tinggi Sembalun dan kampung-kampung perajin tenun.',
    nature: ['Sembalun', 'Kaki Gunung Rinjani'],
    culture: 'Tradisi Sasak seperti Peresean.',
    localSpecialty: ['Tenun Pringgasela', 'Ayam rarang'],
    image: '/Lombok%20timur.jpeg',
  },
  {
    id: 'lombok-utara',
    title: 'Lombok Utara',
    island: 'Pulau Lombok',
    area: '810',
    population: '265.176',
    motto: 'Tioq, Tata, Tunaq',
    mottoMeaning: 'Tumbuh, mengelola, serta menyayangi dan memelihara.',
    overview: 'Wilayah utara Lombok dengan gugusan pulau kecil di lepas pantai dan kampung adat di kaki Rinjani.',
    nature: ['Gili Trawangan', 'Gili Meno', 'Gili Air'],
    culture: 'Masjid Kuno Bayan dan tradisi Watu Telu.',
    localSpecialty: ['Sate Tanjung'],
    image: '/LOmbok%20utara.jpeg',
  },
  {
    id: 'sumbawa-barat',
    title: 'Sumbawa Barat',
    island: 'Pulau Sumbawa',
    area: '1.849',
    population: '158.130',
    motto: 'Pariri Lema Bariri',
    mottoMeaning: 'Menghimpun dan memperbaiki, menata agar menjadi baik dan bermanfaat.',
    overview: 'Pintu masuk Pulau Sumbawa dari arah Lombok melalui pelabuhan Poto Tano, sekaligus wilayah pesisir penghubung kedua pulau.',
    nature: ['Poto Tano', 'Pulau Kenawa'],
    culture: 'Tradisi Sakejo dan Melala.',
    localSpecialty: ['Singang', 'Gecok'],
    image: '/kab%20sumbawa%20barat.jpeg',
  },
  {
    id: 'sumbawa',
    title: 'Sumbawa',
    island: 'Pulau Sumbawa',
    area: '6.644',
    population: '543.676',
    motto: 'Sabalong Samalewa',
    mottoMeaning: 'Membangun secara seimbang dan serasi antara fisik-material dan mental-spiritual.',
    overview: 'Kabupaten dengan pusat di Sumbawa Besar dan rumah bagi budaya Samawa. Pulau Moyo berada di wilayah ini.',
    nature: ['Pulau Moyo'],
    culture: 'Barapan Kebo, Karaci, dan Istana Dalam Loka.',
    localSpecialty: ['Madu Sumbawa', 'Susu kuda liar'],
    image: '/Sumbawa.jpeg',
  },
  {
    id: 'dompu',
    title: 'Dompu',
    island: 'Pulau Sumbawa',
    area: '2.322',
    population: '254.667',
    motto: 'Nggahi Rawi Pahu',
    mottoMeaning: 'Menjaga kesesuaian antara ucapan dan perbuatan.',
    overview: 'Kabupaten di kaki Gunung Tambora dengan pantai selancar di bagian selatannya.',
    nature: ['Pantai Lakey', 'Danau Satonda'],
    culture: 'Falsafah Nggahi Rawi Pahu.',
    localSpecialty: ['Oi mangge'],
    image: '/dompu%20satonda.jpeg',
  },
  {
    id: 'bima',
    title: 'Bima',
    island: 'Pulau Sumbawa',
    area: '4.389',
    population: '551.404',
    motto: 'Maja Labo Dahu',
    mottoMeaning: 'Malu berbuat tercela dan takut melanggar ajaran agama.',
    overview: 'Kabupaten luas di timur Pulau Sumbawa, tanah Dou Mbojo dengan kampung adat Wawo.',
    nature: ['Gunung Tambora (sisi Bima)'],
    culture: 'Uma Lengge, lumbung tradisional Mbojo.',
    localSpecialty: ['Mangge mada', 'Soronco peke'],
    image: '/Kab%20Bima%20w.jpeg',
  },
  {
    id: 'kota-bima',
    title: 'Kota Bima',
    island: 'Pulau Sumbawa',
    area: '222',
    population: '165.844',
    motto: 'Maja Labo Dahu',
    mottoMeaning: 'Malu berbuat tercela dan takut melanggar ajaran agama.',
    overview: 'Kota di ujung timur Pulau Sumbawa dan pusat bekas Kesultanan Bima.',
    nature: ['Pantai Lawata'],
    culture: 'Asi Mbojo dan busana Rimpu.',
    localSpecialty: ['Tenun Mbojo (Tembe Nggoli)', 'Kegape', 'Karawiti'],
    image: '/Kota%20Bima%20w.jpeg',
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

const QUIZ_QUESTIONS = [
  { question: 'Pulau mana yang lebih luas menurut angka BPN NTB 2017 dalam bahan?', choices: ['Lombok', 'Sumbawa', 'Sama luas'], answer: 1, explanation: 'Bahan mencatat luas Lombok sekitar 4.739 km² dan Sumbawa sekitar 15.426 km².' },
  { question: 'Kelompok budaya besar di Pulau Sumbawa menurut bahan?', choices: ['Sasak dan Bali', 'Samawa dan Mbojo', 'Bugis dan Makassar'], answer: 1, explanation: 'Bahan merangkum kelompok budaya di Sumbawa sebagai Samawa dan Mbojo.' },
  { question: 'Bau Nyale dikaitkan dengan legenda siapa?', choices: ['Putri Mandalika', 'Dewi Anjani', 'Roro Jonggrang'], answer: 0, explanation: 'Dalam bahan, Bau Nyale dikaitkan dengan legenda Putri Mandalika di Lombok Tengah.' },
  { question: 'Perang Topat di Lingsar melibatkan masyarakat mana?', choices: ['Sasak dan Bali', 'Samawa dan Mbojo', 'Sasak dan Samawa'], answer: 0, explanation: 'Bahan menyebut keterlibatan masyarakat Sasak dan Bali di Lingsar, Lombok Barat.' },
  { question: 'Ada berapa kabupaten/kota di NTB?', choices: ['Delapan', 'Sepuluh', 'Dua belas'], answer: 1, explanation: 'Ada lima kabupaten/kota di Lombok dan lima di Sumbawa.' },
  { question: 'Apa ibu kota Provinsi Nusa Tenggara Barat?', choices: ['Kota Bima', 'Kota Mataram', 'Sumbawa Besar'], answer: 1, explanation: 'Kota Mataram adalah ibu kota Provinsi NTB.' },
  { question: 'Pada tahun berapa letusan besar Gunung Tambora terjadi?', choices: ['1815', '1915', '2015'], answer: 0, explanation: 'Letusan besar Tambora terjadi pada 1815.' },
  { question: 'Berapa proyeksi jumlah penduduk NTB pada 2025 menurut BPS NTB?', choices: ['5.731.107 jiwa', '4.057.386 jiwa', '1.673.721 jiwa'], answer: 0, explanation: 'BPS Provinsi NTB mencantumkan proyeksi penduduk 2025 sebanyak 5.731.107 jiwa.' },
];

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

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

  const advanceQuiz = () => {
    if (quizAnswer === null) return;
    const isCorrect = quizAnswer === QUIZ_QUESTIONS[quizIndex].answer;
    if (isCorrect) setQuizScore((score) => score + 1);
    if (quizIndex === QUIZ_QUESTIONS.length - 1) {
      setQuizComplete(true);
      return;
    }
    setQuizIndex((index) => index + 1);
    setQuizAnswer(null);
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setQuizAnswer(null);
    setQuizScore(0);
    setQuizComplete(false);
  };

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
                <span className="text-sm font-bold tracking-wider text-[#18251e]">1 BUMI GORA</span>
                <span className="text-[10px] text-[#204434] font-medium">Lombok &amp; Sumbawa</span>
              </div>
            </div>
          }
          logoAlt="1 BUMI GORA - Kenali NTB seutuhnya, dari Lombok sampai Sumbawa"
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
              <span>Karya Inovasi PAPISTIS · Dies Natalis ke-68</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#18251e]">
              1 BUMI GORA
            </h2>
            <p className="max-w-3xl mx-auto text-[#5a625d] text-base md:text-lg leading-relaxed">
              <strong className="font-semibold text-[#142b22]">Kenali NTB seutuhnya, dari Lombok sampai Sumbawa.</strong> Berangkat dari tema “Karsa Daerah, Cipta Perubahan”, karya Pemilihan Putra Putri Daerah Politeknik Statistika STIS ini mengajak kita melihat NTB sebagai satu kesatuan yang tumbuh dari dua pulau, sepuluh kabupaten/kota, dan keragaman budaya. Empat ringkasan berikut memperkenalkan bentang wilayah, penduduk, kelompok budaya, dan pembagian daerah sebagai pijakan untuk mengenal NTB lebih utuh.
            </p>
          </div>

          {/* Ringkasan angka sesuai bahan PAPISTIS dan atribusi yang dicantumkan. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Compass className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                  Bentang Kepulauan
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#18251e]">20.165 km²</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Lombok seluas 4.739 km² dan Sumbawa 15.426 km². Sumber: Kanwil BPN NTB, 2017.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">Penduduk 2025</span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#18251e]">5.731.107 jiwa</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Proyeksi jumlah penduduk NTB pada 2025. Sumber: BPS Provinsi NTB.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                  Kelompok Budaya
                </span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-[#18251e]">Sasak, Samawa, Mbojo</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Sasak, Samawa, dan Mbojo menjadi bagian dari keragaman NTB.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                  Administrasi
                </span>
              </div>
              <div className="text-xl md:text-2xl font-bold text-[#18251e]">10 daerah</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Lima daerah di Lombok dan lima di Sumbawa, dalam satu provinsi NTB.
              </p>
            </div>
          </div>
          <p className="mt-5 text-center text-xs leading-relaxed text-[#626964]">Angka penduduk adalah proyeksi 2025 hasil SP2020 dari BPS.</p>
        </section>

        <NtbMap />

        {/* Section 3: Galeri Parallax Interaktif (Lombok & Sumbawa) */}
        <section id="galeri" aria-label="Galeri Lanskap Alam Lombok dan Sumbawa" className="relative">
          <ZoomParallaxDemo />
        </section>

        {/* Profil sepuluh kabupaten/kota berdasarkan ringkasan bahan PAPISTIS */}
        <section id="destinasi" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#e3e8e5] bg-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-semibold text-[#204434] uppercase tracking-wide">
                Sepuluh Kabupaten/Kota
              </p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#18251e] mt-1">
                Profil Daerah di Lombok &amp; Sumbawa
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5a625d]">
                Kenali setiap daerah di Nusa Tenggara Barat
              </p>
            </div>
          </div>

          {/* Profil card untuk sepuluh daerah NTB */}
          <div className="flex flex-wrap justify-center gap-8">
            {DESTINATIONS.map((dest) => (
              <div key={dest.id} className="h-[480px] w-full md:w-[calc((100%_-_2rem)/2)] lg:w-[calc((100%_-_4rem)/3)]">
                <DestinationCard
                  imageUrl={dest.image}
                  location={dest.title}
                  stats={`${dest.island} · ${dest.area} km² · ${dest.population} jiwa (2025)`}
                  motto={dest.motto}
                  mottoMeaning={dest.mottoMeaning}
                  href="#destinasi"
                  themeColor="150 50% 25%"
                  ctaText="Lihat ringkasan"
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
                Konten pelengkap dari bahan awal
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#18251e]">
                Kearifan Adat Sasak, Samawa, dan Mbojo
              </h2>
              <p className="max-w-3xl mx-auto text-[#5a625d] text-sm md:text-base leading-relaxed">
                Uraian budaya ini melengkapi profil utama. Rincian tradisi dan arti motto daerah masih perlu dicocokkan dengan sumber resmi pemerintah daerah atau narasumber setempat.
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

        <NtbVideoCarousel />

        <section id="kuis" className="border-t border-[#e3e8e5] bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#204434]">Kenali NTB</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#18251e] md:text-4xl">Kuis 1 BUMI GORA</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5a625d]">Delapan pertanyaan dari bahan PAPISTIS dan data BPS. Pilih satu jawaban untuk melihat penjelasannya.</p>

            {quizComplete ? (
              <div className="mt-8 rounded-xl border border-[#e3e8e5] bg-[#fafbf9] p-6" aria-live="polite">
                <h3 className="text-xl font-bold text-[#18251e]">Skor kamu: {quizScore} dari {QUIZ_QUESTIONS.length}</h3>
                <p className="mt-2 text-sm text-[#5a625d]">Terima kasih sudah mengenal Lombok dan Sumbawa lebih dekat.</p>
                <button type="button" onClick={restartQuiz} className="mt-5 cursor-pointer rounded-md bg-[#142b22] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#204434] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:ring-offset-2">Ulangi kuis</button>
              </div>
            ) : (
              <div className="mt-8 rounded-xl border border-[#e3e8e5] bg-[#fafbf9] p-5 sm:p-7">
                <p className="text-xs font-semibold text-[#52705b]" aria-live="polite">Pertanyaan {quizIndex + 1} dari {QUIZ_QUESTIONS.length}</p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-[#18251e]">{QUIZ_QUESTIONS[quizIndex].question}</h3>
                <div className="mt-5 grid gap-2" role="group" aria-label="Pilihan jawaban">
                  {QUIZ_QUESTIONS[quizIndex].choices.map((choice, index) => {
                    const correct = index === QUIZ_QUESTIONS[quizIndex].answer;
                    const selected = quizAnswer === index;
                    const resultStyle = quizAnswer === null ? '' : correct ? 'border-[#527b5e] bg-[#edf4ee] text-[#203b28]' : selected ? 'border-[#a45d46] bg-[#fbefeb] text-[#633b30]' : 'border-[#e3e8e5] bg-white text-[#777f78]';
                    return <button key={choice} type="button" aria-pressed={selected} disabled={quizAnswer !== null} onClick={() => setQuizAnswer(index)} className={`w-full cursor-pointer rounded-lg border px-4 py-3 text-left text-sm transition-colors hover:border-[#829783] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] disabled:cursor-default ${resultStyle || 'border-[#e3e8e5] bg-white text-[#26362b]'}`}>{choice}</button>;
                  })}
                </div>
                {quizAnswer !== null && <p className="mt-4 text-sm leading-relaxed text-[#46564a]" aria-live="polite">{quizAnswer === QUIZ_QUESTIONS[quizIndex].answer ? 'Benar. ' : 'Belum tepat. '}{QUIZ_QUESTIONS[quizIndex].explanation}</p>}
                <button type="button" onClick={advanceQuiz} disabled={quizAnswer === null} className="mt-5 cursor-pointer rounded-md bg-[#142b22] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#204434] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45">{quizIndex === QUIZ_QUESTIONS.length - 1 ? 'Lihat skor' : 'Pertanyaan berikutnya'}</button>
              </div>
            )}
          </div>
        </section>

        <section id="sumber" className="border-t border-[#e3e8e5] bg-[#fafbf9] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#204434]">Transparansi data</p>
            <h2 className="mt-2 text-2xl font-bold text-[#18251e]">Sumber dan catatan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#46564a]">
              <li>Luas wilayah pulau: Kanwil Badan Pertanahan Nasional Provinsi NTB (2017), sebagaimana dirujuk dalam bahan PAPISTIS. Angka pada halaman ini mengikuti rujukan tersebut.</li>
              <li>Penduduk 2025: <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://ntb.bps.go.id/id/publication/2023/07/14/f5deb488833b01bd89ba7e27/proyeksi-penduduk-kabupaten-kota-provinsi-nusa-tenggara-barat-2020-2035-hasil-sensus-penduduk-2020.html" target="_blank" rel="noreferrer">Proyeksi Penduduk Kabupaten/Kota NTB 2020–2035 hasil SP2020, BPS Provinsi NTB</a>.</li>
              <li>Rinjani-Lombok UNESCO Global Geopark: <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://www.unesco.org/en/iggp/rinjani-lombok-unesco-global-geopark" target="_blank" rel="noreferrer">UNESCO</a>. Tambora termasuk bentang cagar biosfer Saleh-Moyo-Tambora (SAMOTA): <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://www.unesco.org/en/mab/samota" target="_blank" rel="noreferrer">UNESCO Man and the Biosphere Programme</a>. Catatan letusan 1815 merujuk <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://volcano.si.edu/volcano.cfm?vn=264040" target="_blank" rel="noreferrer">Smithsonian Global Volcanism Program</a>.</li>
              <li>Hiu paus Teluk Saleh: <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://kkp.go.id/djpk/kedutaan-besar-prancis-kucurkan-500ribu-euro-dukung-kawasan-konservasi-berbasis-hiu-paus-sumbawa/detail.html" target="_blank" rel="noreferrer">Kementerian Kelautan dan Perikanan</a>.</li>
              <li>Motto daerah (nama asli): <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://satu-data.mataramkota.go.id/dataset/7138ba1c-5408-433d-bffb-f85b72b582ba/resource/1a98d079-4ccf-4539-ae51-110f4df28594/download/profile-kelurahan-kebun-sari-2021.pdf" target="_blank" rel="noreferrer">Mataram</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://lombokbaratkab.go.id/dharma-shanti-saka-1937-di-lobar/" target="_blank" rel="noreferrer">Lombok Barat</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://www.lomboktengahkab.go.id/halaman/lambang-daerah" target="_blank" rel="noreferrer">Lombok Tengah</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://portal.lomboktimurkab.go.id/statis-86-makna-lambang-lombok-timur.html" target="_blank" rel="noreferrer">Lombok Timur</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://satudata.lombokutarakab.go.id/storage/publikasi/PROFIL%20PEMBANGUNAN%202023.pdf" target="_blank" rel="noreferrer">Lombok Utara</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://prokopim.sumbawabaratkab.go.id/lambang-daerah/" target="_blank" rel="noreferrer">Sumbawa Barat</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://dikes.sumbawakab.go.id/assets/konten/images/BAB1%20VISI%20MISI%20DAN%20SEJARAHfix.pdf" target="_blank" rel="noreferrer">Sumbawa</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://setda.dompukab.go.id/berita/detail/upacara-hari-jadi-ke210-sekda-bacakan-sejarah-singkat-kabupaten-dompu" target="_blank" rel="noreferrer">Dompu</a>, <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://bimakab.go.id/home3/download/laporan_kinerja_instansi_permerintah_kabupaten_bima_Lakip_tahun_2024.pdf" target="_blank" rel="noreferrer">Kabupaten Bima</a>, dan <a className="underline decoration-[#829783] underline-offset-2 hover:text-[#142b22]" href="https://portal.bimakota.go.id/web/detail-11-lambang_kota" target="_blank" rel="noreferrer">Kota Bima</a>.</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Dialog detail profil daerah */}
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
                aria-label="Tutup profil daerah"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-4 px-3 py-1 rounded-md bg-white/95 text-xs font-semibold text-[#142b22] border border-black/10">
                {selectedDestination.island}
              </span>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <p className="text-xs text-[#204434] font-semibold">Ringkasan daerah</p>
                <h3 id="modal-dest-title" className="text-xl md:text-2xl font-bold text-[#18251e] mt-1">
                  {selectedDestination.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[#46564a]">{selectedDestination.overview}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-[#e3e8e5] bg-[#fafbf9] p-4">
                  <p className="text-xs font-semibold text-[#52705b]">Luas wilayah</p>
                  <p className="mt-1 font-bold text-[#18251e]">{selectedDestination.area} km²</p>
                </div>
                <div className="rounded-lg border border-[#e3e8e5] bg-[#fafbf9] p-4">
                  <p className="text-xs font-semibold text-[#52705b]">Proyeksi penduduk 2025</p>
                  <p className="mt-1 font-bold text-[#18251e]">{selectedDestination.population} jiwa</p>
                </div>
              </div>

              <div className="grid gap-3 border-t border-[#e3e8e5] pt-4 sm:grid-cols-2">
                <section className="rounded-lg bg-[#fafbf9] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#204434]">Alam &amp; wisata</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-[#46564a]">
                    {selectedDestination.nature.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
                <section className="rounded-lg bg-[#fafbf9] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#204434]">Budaya</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#46564a]">{selectedDestination.culture}</p>
                </section>
                <section className="rounded-lg bg-[#fafbf9] p-4 sm:col-span-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#204434]">Kuliner &amp; produk khas</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#46564a]">{selectedDestination.localSpecialty.join(' · ')}</p>
                </section>
              </div>

              <div className="border-t border-[#e3e8e5] pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#52705b]">Motto daerah</p>
                <p className="mt-1 text-sm font-semibold text-[#18251e]">{selectedDestination.motto}</p>
                <p className="mt-3 text-xs font-semibold text-[#52705b]">Makna ringkas</p>
                <p className="mt-1 text-sm leading-relaxed text-[#46564a]">{selectedDestination.mottoMeaning}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#e3e8e5] bg-[#fafbf9] flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedDestination(null)}
                className="px-4 py-2 rounded-md bg-[#142b22] hover:bg-[#204434] text-white font-semibold text-xs transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#142b22] focus-visible:outline-none"
              >
                Tutup Profil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Ridgeline Dither Mountain Footer Landmark */}
      <RidgelineDitherFooter
        name="1 BUMI GORA"
        brandHref="#portal"
        tagline="Kenali NTB seutuhnya, dari Lombok sampai Sumbawa."
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
        columns={[]}
        socials={[
          { icon: "instagram", href: "https://instagram.com" },
          { icon: "youtube", href: "https://youtube.com" },
          { icon: "x", href: "https://x.com" },
        ]}
        copyright="© 2026 1 BUMI GORA. Karya inovasi PAPISTIS, Dies Natalis ke-68 Politeknik Statistika STIS."
      />
    </div>
  );
}
