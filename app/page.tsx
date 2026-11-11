'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CardNav, { CardNavItem } from './components/CardNav';
import Demo from '@/components/ui/demo';
import ZoomParallaxDemo from '@/components/ui/zoom-parallax-demo';
import NtbMap from '@/components/ui/ntb-map';
import RidgelineDitherFooter from '@/components/ui/ridgeline-dither-footer';
import { DestinationCard } from '@/components/ui/card-21';
import {
  Mountain,
  Waves,
  Compass,
  Sun,
  MapPin,
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
      { label: 'Peta NTB', href: '#peta' },
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
      { label: 'Kuis NTB', href: '#kuis' },
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
      'Gunung Rinjani dan kawasan sekitarnya termasuk dalam Rinjani-Lombok UNESCO Global Geopark.',
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
    elevation: '2.850 mdpl (Sumbawa)',
    location: 'Kabupaten Dompu & Kabupaten Bima, Pulau Sumbawa',
    description:
      'Gunung Tambora berada dalam bentang kawasan Saleh-Moyo-Tambora (SAMOTA), yang ditetapkan UNESCO sebagai cagar biosfer. Letusan besarnya terjadi pada 1815.',
    icon: Mountain,
    badge: 'Cagar Biosfer SAMOTA',
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
    stats: 'Kawasan SAMOTA • Letusan 1815',
  },
  {
    id: 'teluk-saleh',
    title: 'Teluk Saleh & Hiu Paus',
    category: 'Habitat hiu paus & konservasi bahari',
    elevation: 'Perairan Teluk Saleh',
    location: 'Kabupaten Sumbawa, Pulau Sumbawa',
    description:
      'Teluk Saleh merupakan salah satu lokasi agregasi hiu paus yang menjadi fokus upaya konservasi dan pengelolaan habitat.',
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
    stats: 'Habitat hiu paus • Teluk Saleh',
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
              <span>Profil Geografis &amp; Kebudayaan Bumi Sasambo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#18251e]">
              1 BUMI GORA
            </h2>
            <p className="max-w-3xl mx-auto text-[#5a625d] text-base md:text-lg leading-relaxed">
              Kenali NTB seutuhnya, dari Lombok sampai Sumbawa. Menurut Kanwil BPN NTB (2017), luas wilayahnya sekitar <strong className="font-semibold text-[#142b22]">20.165 km²</strong>, terdiri dari Lombok 4.739 km² dan Sumbawa 15.426 km². NTB mencakup sepuluh kabupaten/kota dengan keragaman budaya dan potensi yang luas. Karya inovasi Pemilihan Putra Putri Daerah Politeknik Statistika STIS untuk Dies Natalis ke-68 ini mengangkat tema “Karsa Daerah, Cipta Perubahan”.
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
                Luas total NTB: Lombok 4.739 km² dan Sumbawa 15.426 km². Sumber: Kanwil BPN NTB, 2017.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fafbf9] border border-[#e3e8e5] hover:border-[#142b22]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#142b22] shrink-0" />
                <span className="text-xs font-semibold text-[#204434] uppercase tracking-wide">Penduduk 2025</span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#18251e]">5.731.107 jiwa</div>
              <p className="text-xs text-[#626964] mt-2 leading-relaxed">
                Proyeksi penduduk hasil SP2020. Sumber: BPS Provinsi NTB.
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
                Tiga kelompok budaya besar sebagaimana dirangkum dalam bahan.
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
                Lima kabupaten/kota di Pulau Lombok dan lima di Pulau Sumbawa.
              </p>
            </div>
          </div>
          <p className="mt-5 text-center text-xs leading-relaxed text-[#626964]">Angka luas mengikuti bahan presentasi yang merujuk Kanwil BPN NTB (2017). Angka penduduk adalah proyeksi 2025 hasil SP2020 dari BPS.</p>
        </section>

        <NtbMap />

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
              Bagian pelengkap yang merangkum beberapa tempat di Lombok dan Sumbawa. Rincian destinasi dan budaya lokal masih perlu dicocokkan dengan sumber daerah.
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
            <p className="mt-6 border-t border-[#e3e8e5] pt-5 text-xs leading-relaxed text-[#626964]">Nama motto dicocokkan dengan sumber pemerintah daerah di atas, termasuk “Patut Patuh Patju” untuk Lombok Barat. Arti atau terjemahannya tidak ditampilkan. Rincian lokal pada kartu daerah serta konten budaya/wisata merupakan ringkasan bahan awal dan masih perlu dicocokkan satu per satu dengan sumber resmi atau narasumber setempat, jadi belum disajikan sebagai keterangan resmi final.</p>
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
              { label: "Hiu Paus Teluk Saleh", href: "#destinasi" },
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
        copyright="© 2026 1 BUMI GORA. Karya inovasi PAPISTIS, Dies Natalis ke-68 Politeknik Statistika STIS."
        credit={{ label: "Pesona NTB", href: "#portal" }}
      />
    </div>
  );
}
