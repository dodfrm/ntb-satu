export interface HalMenarik {
  judul: string;
  kategori: 'Wisata Alam' | 'Warisan Budaya' | 'Kuliner Legendaris' | 'Ikon Geografis';
  deskripsi: string;
  gambar?: string;
  lokasi?: string;
}

export interface KabupatenNTB {
  id: string;
  slug: string;
  nama: string;
  namaResmi: string;
  jenis: 'Kabupaten' | 'Kota';
  pulau: 'Lombok' | 'Sumbawa';
  ibuKota: string;
  luasWilayah: string;
  koordinat: string;
  julukan: string;
  ringkasan: string;
  deskripsiGeografis: string;
  karakterLanskap: string;
  titikTertinggiTerendah: string;
  batasWilayah: {
    utara: string;
    selatan: string;
    barat: string;
    timur: string;
  };
  ikonDaerah: string[];
  halMenarik: HalMenarik[];
  kulinerKhas: {
    nama: string;
    deskripsi: string;
  }[];
  faktaUnik: string[];
  aksesTransportasi: string;
  warnaTema: string;
  svgColor: string;
}

export const KABUPATEN_NTB: KabupatenNTB[] = [
  // ==================== PULAU LOMBOK ====================
  {
    id: 'mataram',
    slug: 'kota-mataram',
    nama: 'Kota Mataram',
    namaResmi: 'Pemerintah Kota Mataram',
    jenis: 'Kota',
    pulau: 'Lombok',
    ibuKota: 'Mataram',
    luasWilayah: '61,30 km²',
    koordinat: '8°35′S 116°07′E',
    julukan: 'Kota Maju, Religius, & Berbudaya',
    ringkasan: 'Ibu kota Provinsi NTB sekaligus pusat peradaban modern, kerajinan mutiara air laut lombok kelas dunia, dan sentra kuliner legendaris Ayam Taliwang.',
    deskripsiGeografis: 'Terletak di pesisir barat Pulau Lombok yang menghadap langsung ke Selat Lombok. Wilayahnya berupa dataran aluvial subur dengan kemiringan landai, dibelah oleh beberapa sungai utama seperti Sungai Jangkok dan Sungai Ancar yang mengalir dari lereng Rinjani menuju Selat Lombok.',
    karakterLanskap: 'Dataran pesisir perkotaan, muara sungai asri, dan pantai berpasir dengan panorama matahari terbenam berlatar Gunung Agung Bali di seberang selat.',
    titikTertinggiTerendah: '0 – 50 mdpl',
    batasWilayah: {
      utara: 'Kabupaten Lombok Barat (Kecamatan Gunungsari & Batu Layar)',
      selatan: 'Kabupaten Lombok Barat (Kecamatan Labuapi)',
      barat: 'Selat Lombok',
      timur: 'Kabupaten Lombok Barat (Kecamatan Narmada)',
    },
    ikonDaerah: ['Islamic Center NTB Hubbul Wathan', 'Pusat Mutiara Sekarbela', 'Taman Mayura & Pura Meru', 'Pantai Ampenan'],
    halMenarik: [
      {
        judul: 'Masjid Raya Hubbul Wathan (Islamic Center NTB)',
        kategori: 'Warisan Budaya',
        deskripsi: 'Landmark arsitektur religi megah di jantung kota dengan menara setinggi 99 meter yang melambangkan Asmaul Husna. Pengunjung dapat naik ke puncak menara untuk menikmati panorama 360 derajat Kota Mataram, perbukitan Lombok, hingga Selat Lombok.',
        lokasi: 'Gomong, Selaparang, Kota Mataram'
      },
      {
        judul: 'Pusat Kriya Mutiara Laut Sekarbela',
        kategori: 'Ikon Geografis',
        deskripsi: 'Sentra kerajinan perhiasan mutiara air laut (South Sea Pearls) dan perak tertua di Lombok. Mutiara budidaya khas NTB terkenal dengan kilau alami berkilap emas, perak, dan perunggu yang diakui kolektor permata internasional.',
        lokasi: 'Sekarbela, Kota Mataram'
      },
      {
        judul: 'Kota Tua Ampenan & Pelabuhan Bersejarah',
        kategori: 'Warisan Budaya',
        deskripsi: 'Kawasan pelabuhan kuno peninggalan era kolonial dan perdagangan rempah Nusantara. Menampilkan deretan bangunan berarsitektur art-deco, kawasan pecinan, kampung arab, dan kampung melayu yang hidup rukun berabad-abad.',
        lokasi: 'Ampenan, Kota Mataram'
      },
      {
        judul: 'Taman Air Mayura & Cagar Pura Meru',
        kategori: 'Warisan Budaya',
        deskripsi: 'Situs cagar budaya peninggalan abad ke-18 dengan balai kambang terapung di tengah kolam teratai serta Pura Meru yang memiliki tiga menara tumpang bertingkat penghormatan Dewa Siwa, Brahma, dan Wisnu.',
        lokasi: 'Cakranegara, Kota Mataram'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Ayam Taliwang Asli Karang Taliwang',
        deskripsi: 'Ayam kampung muda bakar atau goreng dengan siraman bumbu cabai rawit pedas menyengat, terasi Lombok (lengare), kencur, dan tomat ranti segar.'
      },
      {
        nama: 'Plecing Kangkung Lombok',
        deskripsi: 'Kangkung air khas Lombok berbatang besar dan renyah, disajikan dingin dengan sambal terasi segar, taburan kacang tanah goreng, dan tauge.'
      },
      {
        nama: 'Sate Rembiga',
        deskripsi: 'Sate daging sapi empuk khas Kelurahan Rembiga dengan perpaduan rasa pedas, manis, dan aroma bawang putih serta ketumbar bakar yang kuat.'
      }
    ],
    faktaUnik: [
      'Menjadi pusat pemerintahan dan denyut perekonomian utama seluruh Provinsi Nusa Tenggara Barat.',
      'Memiliki kawasan Kampung Mutiara Sekarbela yang keterampilan menata emas dan mutiaranya diwariskan turun-temurun sejak ratusan tahun silam.',
      'Pantai Ampenan menjadi lokasi bersejarah pendaratan kapal-kapal dagang rempah masa lampau dari berbagai belahan dunia.'
    ],
    aksesTransportasi: 'Dapat ditempuh sekitar 40 menit perjalanan darat (33 km) dari Bandara Internasional Lombok (BIL) di Praya melalui jalan bypass beraspal mulus.',
    warnaTema: '#1b4d3e',
    svgColor: '#2d6a4f'
  },
  {
    id: 'lombok-barat',
    slug: 'kabupaten-lombok-barat',
    nama: 'Lombok Barat',
    namaResmi: 'Pemerintah Kabupaten Lombok Barat',
    jenis: 'Kabupaten',
    pulau: 'Lombok',
    ibuKota: 'Gerung',
    luasWilayah: '1.053,92 km²',
    koordinat: '8°41′S 116°08′E',
    julukan: 'Bumi Patut Patuh Patju',
    ringkasan: 'Gerbang wisata tertua di Lombok yang terkenal dengan pesisir pantai Senggigi, pelabuhan laut Lembar, keasrian mata air Narmada, serta gugusan pulau perawan Sekotong.',
    deskripsiGeografis: 'Membentang dari jajaran perbukitan hijau di utara hingga semenanjung berbatu dan teluk-teluk tenang di barat daya (Sekotong). Wilayah pesisirnya menjadi gerbang laut utama penyeberangan feri antarpulau dari Bali melalui Pelabuhan Lembar.',
    karakterLanskap: 'Garis pantai panjang berombak tenang, perbukitan hijau tropis, deretan teluk eksotis, dan gugusan kepulauan gili kecil di bagian selatan.',
    titikTertinggiTerendah: '0 – 1.020 mdpl',
    batasWilayah: {
      utara: 'Kabupaten Lombok Utara',
      selatan: 'Samudra Hindia',
      barat: 'Selat Lombok & Kota Mataram',
      timur: 'Kabupaten Lombok Tengah',
    },
    ikonDaerah: ['Pesisir Pantai Senggigi', 'Taman Narmada Air Awet Muda', 'Gugusan Gili Sekotong (Nanggu, Sudak, Kedis)', 'Pelabuhan Lembar'],
    halMenarik: [
      {
        judul: 'Kawasan Pesisir Pantai Senggigi',
        kategori: 'Wisata Alam',
        deskripsi: 'Kawasan pesisir pantai legendaris dengan deretan pohon kelapa, pasir keemasan, dan garis lengkung pantai berlatar Gunung Agung Bali yang mempesona saat senja tiba.',
        lokasi: 'Kecamatan Batu Layar'
      },
      {
        judul: 'Gugusan Gili Perawan Sekotong (Nanggu, Kedis, Sudak)',
        kategori: 'Wisata Alam',
        deskripsi: 'Gugusan pulau kecil berpasir putih bersih dengan terumbu karang dangkal yang sangat terlindungi dari ombak besar. Tempat ideal untuk snorkeling dan kano santai tanpa keramaian motor.',
        lokasi: 'Kecamatan Sekotong'
      },
      {
        judul: 'Taman Narmada (Replika Segara Anak & Air Awet Muda)',
        kategori: 'Warisan Budaya',
        deskripsi: 'Dibangun pada tahun 1727 oleh Raja Mataram Lombok, Anak Agung Ngurah Karang Asem, sebagai miniatur Gunung Rinjani dan Danau Segara Anak. Terkenal dengan mata air suci yang dipercaya memberi kesegaran dan umur panjang.',
        lokasi: 'Kecamatan Narmada'
      },
      {
        judul: 'Pura Lingsar (Simbol Kerukunan Umat)',
        kategori: 'Warisan Budaya',
        deskripsi: 'Tempat ibadah unik yang digunakan bersama oleh umat Hindu dan penganut tradisi Islam Sasak Wetu Telu. Simbol otentik keharmonisan dan toleransi antarumat beragama di Lombok.',
        lokasi: 'Kecamatan Lingsar'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Bulayak (Sate Bulayak Suranadi)',
        deskripsi: 'Sate daging sapi atau jeroan dengan bumbu kari santan kental berbumbu rempah, disajikan bersama bulayak (lontong ketan yang dililit spiral daun enau).'
      },
      {
        nama: 'Ikan Bakar Segar Sekotong',
        deskripsi: 'Ikan laut segar tangkapan nelayan pesisir Sekotong dibakar arang kelapa dengan olesan bumbu asam manis khas Sasak pesisir.'
      }
    ],
    faktaUnik: [
      'Memiliki pulau kecil bernama Gili Kedis yang bentuknya menyerupai hati sempurna jika dilihat dari udara.',
      'Taman Narmada dirancang khusus oleh sang Raja ketika ia sudah berusia lanjut dan tidak mampu lagi mendaki puncak Rinjani untuk bersembahyang.'
    ],
    aksesTransportasi: 'Terhubung langsung dengan Kota Mataram dan dapat diakses dari Pelabuhan Penyeberangan Lembar serta jalan raya lintas barat Lombok.',
    warnaTema: '#1f5f47',
    svgColor: '#40916c'
  },
  {
    id: 'lombok-tengah',
    slug: 'kabupaten-lombok-tengah',
    nama: 'Lombok Tengah',
    namaResmi: 'Pemerintah Kabupaten Lombok Tengah',
    jenis: 'Kabupaten',
    pulau: 'Lombok',
    ibuKota: 'Praya',
    luasWilayah: '1.208,39 km²',
    koordinat: '8°42′S 116°16′E',
    julukan: 'Bumi Tatas Tuhu Trasna',
    ringkasan: 'Episentrum Destinasi Super Prioritas Mandalika dengan Sirkuit Internasional MotoGP, keunikan desa adat Sasak Sade & Ende, serta bentang pantai pasir butir merica.',
    deskripsiGeografis: 'Terbentang dari kaki selatan Gunung Rinjani di utara hingga bibir Samudra Hindia di selatan. Bagian selatannya didominasi oleh perbukitan karst purba, teluk berbentuk tapal kuda berair toska, dan bukit savana tepi laut.',
    karakterLanskap: 'Perbukitan savana menghadap deburan ombak samudra lepas, pantai berpasir bulat tekstur merica, serta dataran sentra pertanian padi di bagian tengah.',
    titikTertinggiTerendah: '0 – 2.000 mdpl',
    batasWilayah: {
      utara: 'Kabupaten Lombok Barat & Lombok Timur (Lereng Rinjani)',
      selatan: 'Samudra Hindia',
      barat: 'Kabupaten Lombok Barat',
      timur: 'Kabupaten Lombok Timur',
    },
    ikonDaerah: ['Kawasan Sirkuit Pertamina Mandalika', 'Bukit Merese & Pantai Tanjung Aan', 'Desa Adat Sasak Sade & Ende', 'Pantai Selong Belanak'],
    halMenarik: [
      {
        judul: 'Pertamina Mandalika International Circuit',
        kategori: 'Ikon Geografis',
        deskripsi: 'Sirkuit balap grand prix berstandar internasional FIM Grade A tempat diselenggarakannya ajang bergengsi dunia MotoGP dan WorldSBK, berlatar langsung perbukitan tropis dan laut biru toska Mandalika.',
        lokasi: 'Kuta, Pujut'
      },
      {
        judul: 'Bukit Merese & Pantai Tanjung Aan',
        kategori: 'Wisata Alam',
        deskripsi: 'Puncak bukit padang rumput hijau yang menjorok ke samudra dengan pemandangan 360 derajat. Tepat di sampingnya terdapat Pantai Tanjung Aan dengan butiran pasir putih bundar sebesar biji merica yang unik.',
        lokasi: 'Desa Sengkol, Pujut'
      },
      {
        judul: 'Desa Budaya Adat Sasak Sade & Ende',
        kategori: 'Warisan Budaya',
        deskripsi: 'Pemukiman suku Sasak tulen yang masih menjaga arsitektur rumah tradisional Bale Tani berdinding anyaman bambu, atap alang-alang, serta tradisi tenun ikat songket yang dikerjakan oleh kaum hawa secara manual.',
        lokasi: 'Kecamatan Pujut'
      },
      {
        judul: 'Pantai Selong Belanak (Surga Peselancar Pemula)',
        kategori: 'Wisata Alam',
        deskripsi: 'Pantai berpasir putih halus dengan garis lengkung bulan sabit yang landai dan ombak gulung tanpa karang, menjadikannya tempat terbaik di Indonesia untuk belajar olahraga selancar ombak.',
        lokasi: 'Kecamatan Praya Barat'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Nasi Balap Puyung',
        deskripsi: 'Kuliner legendaris khas Desa Puyung berisi nasi putih hangat dengan suwiran ayam pedas rempah krispi, kacang kedelai goreng renyah, dan sambal cabai kering pedas nagih.'
      },
      {
        nama: 'Sayur Ares Batang Pisang',
        deskripsi: 'Masakan sayur tradisional berbahan pelepah pisang muda yang dimasak kuah santan bumbu kuning kaya rempah, sering dihidangkan dalam upacara begawe Sasak.'
      }
    ],
    faktaUnik: [
      'Menjadi rumah bagi Bandara Internasional Lombok (ZAM), pintu gerbang udara utama kedatangan wisatawan dari seluruh penjuru nusantara dan dunia.',
      'Tradisi Bau Nyale (menangkap cacing laut jelmaan Putri Mandalika) diselenggarakan setiap tahun di Pantai Seger Mandalika.',
      'Desa Sukarara di Lombok Tengah adalah pusat sentra tenun songket motif Subahnale yang telah mendunia.'
    ],
    aksesTransportasi: 'Lokasi Bandara Internasional Lombok berada langsung di wilayah kabupaten ini (Kecamatan Praya Barat), hanya 20 menit menuju kawasan Mandalika.',
    warnaTema: '#144534',
    svgColor: '#2d6a4f'
  },
  {
    id: 'lombok-timur',
    slug: 'kabupaten-lombok-timur',
    nama: 'Lombok Timur',
    namaResmi: 'Pemerintah Kabupaten Lombok Timur',
    jenis: 'Kabupaten',
    pulau: 'Lombok',
    ibuKota: 'Selong',
    luasWilayah: '1.605,55 km²',
    koordinat: '8°39′S 116°32′E',
    julukan: 'Bumi Patuh Karya',
    ringkasan: 'Kawasan kaldera savana Sembalun di kaki Rinjani, desa wisata dunia Tetebatu, pesisir eksotis Pantai Pink Tangsi, dan pelabuhan penyeberangan Kayangan menuju Sumbawa.',
    deskripsiGeografis: 'Meliputi sebagian besar lereng timur dan puncak Gunung Rinjani (3.726 mdpl) hingga pesisir Selat Alas di timur dan tebing karst Samudra Hindia di selatan. Memiliki ketinggian tanah paling bervariasi di Pulau Lombok.',
    karakterLanskap: 'Lembah savana subur beriklim sejuk, perkebunan holtikultura stroberi dan bawang, tebing laut merah muda, serta hutan lindung perbukitan.',
    titikTertinggiTerendah: '0 – 3.726 mdpl',
    batasWilayah: {
      utara: 'Laut Jawa / Laut Flores',
      selatan: 'Samudra Hindia',
      barat: 'Kabupaten Lombok Tengah & Lombok Utara',
      timur: 'Selat Alas (Pemisah Lombok & Sumbawa)',
    },
    ikonDaerah: ['Lembah Savana Sembalun', 'Puncak Rinjani & Danau Segara Anak', 'Pantai Pink (Tangsi)', 'Desa Wisata Tetebatu', 'Pelabuhan Kayangan'],
    halMenarik: [
      {
        judul: 'Lembah Sembalun & Bukit Pergasingan',
        kategori: 'Wisata Alam',
        deskripsi: 'Dataran tinggi vulkanik purba berhawa sejuk di kaki Gunung Rinjani dengan pemandangan petak-petak sawah warna-warni yang spektakuler saat dipandang dari puncak bukit Pergasingan dan Mangku Sakti.',
        lokasi: 'Kecamatan Sembalun'
      },
      {
        judul: 'Pantai Tangsi (Pantai Pink)',
        kategori: 'Wisata Alam',
        deskripsi: 'Salah satu dari sedikit pantai berpasir merah muda di dunia. Warna pink tercipta alami dari serpihan terumbu karang merah (Foraminifera) mikroskopis yang menyatu dengan pasir putih bersih.',
        lokasi: 'Jerowaru, Lombok Timur'
      },
      {
        judul: 'Desa Wisata Tetebatu (Best Tourism Villages UNWTO)',
        kategori: 'Warisan Budaya',
        deskripsi: 'Desa agrowisata damai dengan undakan terasering sawah hijau bertingkat, air terjun Sarang Walet, dan jalur lintas hutan tropis yang dihuni kawanan monyet hitam endemik.',
        lokasi: 'Kecamatan Sikur'
      },
      {
        judul: 'Gili Kondo & Gili Bidara',
        kategori: 'Wisata Alam',
        deskripsi: 'Pulau karang kecil tanpa penduduk di perairan Selat Alas dengan air laut sejernih kristal kaca dan taman karang dangkal penuh terumbu karang warna-warni.',
        lokasi: 'Kecamatan Sambelia'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Kelaq Sebie (Sayur Cabai Rawit)',
        deskripsi: 'Masakan tradisional Sasak berupa kuah santan pedas dengan bahan utama cabai rawit utuh, kacang panjang, dan terong bulat yang membakar selera.'
      },
      {
        nama: 'Kopi Arabika Sembalun',
        deskripsi: 'Kopi dataran tinggi yang ditanam di tanah vulkanik kaki Rinjani pada ketinggian 1.200 mdpl, memiliki notes rasa buah-buahan segar dan aroma karamel khas.'
      }
    ],
    faktaUnik: [
      'Puncak tertinggi Gunung Rinjani (3.726 mdpl) secara geografis dan administratif sebagian besar berada di wilayah Lombok Timur.',
      'Pelabuhan Kayangan di Lombok Timur menjadi simpul utama kapal feri yang menghubungkan Pulau Lombok dan Pulau Sumbawa selama 24 jam non-stop.'
    ],
    aksesTransportasi: 'Dapat ditempuh dalam 1,5 jam perjalanan darat dari Bandara Internasional Lombok menuju Selong, atau 2,5 jam menuju Sembalun.',
    warnaTema: '#1b4332',
    svgColor: '#2d6a4f'
  },
  {
    id: 'lombok-utara',
    slug: 'kabupaten-lombok-utara',
    nama: 'Lombok Utara',
    namaResmi: 'Pemerintah Kabupaten Lombok Utara',
    jenis: 'Kabupaten',
    pulau: 'Lombok',
    ibuKota: 'Tanjung',
    luasWilayah: '776,25 km²',
    koordinat: '8°20′S 116°10′E',
    julukan: 'Bumi Tioq Tata Tunaq',
    ringkasan: 'Rumah bagi destinasi bahari dunia Gili Trawangan, Meno, & Air, jalur pendakian rimba Rinjani via Senaru, serta air terjun Sendang Gile dan Tiu Kelep.',
    deskripsiGeografis: 'Membentang di pesisir utara Pulau Lombok, langsung berbatasan dengan Laut Flores di utara dan puncak Gunung Rinjani di selatan. Wilayahnya memiliki kontur perbukitan curam yang berpadu dengan teluk dan pulau-pulau karang bebas kendaraan bermotor.',
    karakterLanskap: 'Tebing pegunungan curam berhutan hujan lebat, aliran sungai berbatu vulkanik, air terjun bertingkat, dan tiga pulau karang tropis di lepas pantai.',
    titikTertinggiTerendah: '0 – 3.726 mdpl',
    batasWilayah: {
      utara: 'Laut Flores',
      selatan: 'Kabupaten Lombok Barat & Lombok Tengah',
      barat: 'Selat Lombok',
      timur: 'Kabupaten Lombok Timur',
    },
    ikonDaerah: ['Tiga Gili (Gili Trawangan, Meno, Air)', 'Air Terjun Tiu Kelep & Sendang Gile', 'Desa Tradisional Senaru', 'Masjid Kuno Bayan Beleq'],
    halMenarik: [
      {
        judul: 'Kepulauan Gili Tramena (Trawangan, Meno, Air)',
        kategori: 'Wisata Alam',
        deskripsi: 'Tiga pulau tropis bebas polusi kendaraan bermotor, hanya diakses dengan sepeda kayuh atau cidomo (kereta kuda). Terkenal dengan suaka penyu laut alami, patung bawah laut karya Jason deCaires Taylor, dan sunset magis.',
        lokasi: 'Kecamatan Pemenang'
      },
      {
        judul: 'Air Terjun Tiu Kelep & Sendang Gile',
        kategori: 'Wisata Alam',
        deskripsi: 'Aliran mata air dingin alami yang keluar langsung dari dinding tebing batu berlumut hijau di dalam kawasan Taman Nasional Gunung Rinjani. Percikan airnya menghasilkan tirai kabut sejuk yang menawan.',
        lokasi: 'Desa Senaru, Kecamatan Bayan'
      },
      {
        judul: 'Masjid Kuno Bayan Beleq (Abad ke-16)',
        kategori: 'Warisan Budaya',
        deskripsi: 'Situs sejarah penyebaran agama Islam tertua di Pulau Lombok. Masjid panggung beratap rumbia dan berlantai tanah liat ini menjadi pusat perayaan Maulid Adat masyarakat adat Sasak Bayan.',
        lokasi: 'Kecamatan Bayan'
      },
      {
        judul: 'Desa Tradisional Senaru',
        kategori: 'Warisan Budaya',
        deskripsi: 'Pintu gerbang pendakian resmi Rinjani yang melestarikan arsitektur permukiman kuno Sasak serta pusat edukasi panduan porter dan pemandu wisata gunung profesional berstandar internasional.',
        lokasi: 'Kecamatan Bayan'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Sate Ikan Tanjung',
        deskripsi: 'Sate daging ikan laut cincang berbumbu santan kelapa, terasi, dan cabai merah yang dililitkan pada batang bambu lalu dibakar harum di atas bara arang kelapa.'
      },
      {
        nama: 'Kelaq Kelor Khas Bayan',
        deskripsi: 'Sayur bening daun kelor segar dengan bumbu kunci, bawang merah, dan jagung manis yang menjadi santapan wajib masyarakat adat Bayan untuk menjaga stamina.'
      }
    ],
    faktaUnik: [
      'Gili Trawangan, Meno, dan Air melarang total kendaraan bermotor roda dua maupun roda empat demi menjaga kualitas udara dan kelestarian pulau karang.',
      'Masyarakat adat Bayan di Lombok Utara memelihara kalender adat tersendiri dan hutan larangan yang tidak boleh ditebang demi menjaga mata air Rinjani.'
    ],
    aksesTransportasi: 'Dapat diakses melalui jalur pesisir pantai Senggigi atau rute perbukitan Hutan Pusuk yang dihuni kawanan kera abu-abu ramah.',
    warnaTema: '#133926',
    svgColor: '#2d6a4f'
  },

  // ==================== PULAU SUMBAWA ====================
  {
    id: 'sumbawa-barat',
    slug: 'kabupaten-sumbawa-barat',
    nama: 'Sumbawa Barat',
    namaResmi: 'Pemerintah Kabupaten Sumbawa Barat',
    jenis: 'Kabupaten',
    pulau: 'Sumbawa',
    ibuKota: 'Taliwang',
    luasWilayah: '1.849,02 km²',
    koordinat: '8°47′S 116°55′E',
    julukan: 'Bumi Pariri Lema Bariri',
    ringkasan: 'Gerbang utama Pulau Sumbawa di Selat Alas, savana Pulau Kenawa, pusat asal-usul resep kuliner Ayam Taliwang, dan pantai ombak kelas dunia di Maluk.',
    deskripsiGeografis: 'Terletak di ujung paling barat Pulau Sumbawa yang dipisahkan dari Pulau Lombok oleh Selat Alas. Memiliki garis pesisir bertebing karang megah, teluk alami Poto Tano, serta perbukitan yang kaya akan potensi geologi mineral alam.',
    karakterLanskap: 'Gugusan pulau karang savana di Selat Alas, tebing pantai samudra bertaraf internasional untuk surfing, dan perbukitan hijau.',
    titikTertinggiTerendah: '0 – 1.730 mdpl',
    batasWilayah: {
      utara: 'Laut Flores',
      selatan: 'Samudra Hindia',
      barat: 'Selat Alas (Pemisah Sumbawa & Lombok)',
      timur: 'Kabupaten Sumbawa',
    },
    ikonDaerah: ['Pulau Kenawa Selat Alas', 'Pantai Maluk & Yoyo Surf Spot', 'Pelabuhan Poto Tano', 'Kota Kuliner Taliwang'],
    halMenarik: [
      {
        judul: 'Pulau Kenawa (Savana Tunggal Selat Alas)',
        kategori: 'Wisata Alam',
        deskripsi: 'Pulau kecil tak berpenghuni dengan hamparan savana ilalang keemasan dan sebuah bukit tunggal di tengahnya. Menawarkan pemandangan matahari terbit berlatar perairan Selat Alas dan pemandangan Gunung Rinjani di kejauhan.',
        lokasi: 'Kecamatan Poto Tano'
      },
      {
        judul: 'Pantai Maluk & Ombak Super Suck',
        kategori: 'Wisata Alam',
        deskripsi: 'Destinasi selancar legendaris dunia di pesisir selatan Sumbawa Barat dengan ombak kidal berkarakter tabung (barrel) cepat yang menjadi magnet atlet selancar internasional.',
        lokasi: 'Kecamatan Maluk'
      },
      {
        judul: 'Air Terjun Kalela (Jantup)',
        kategori: 'Wisata Alam',
        deskripsi: 'Air terjun unik yang mengalir di atas formasi tebing batu berundak mirip pahatan alami, dikelilingi rimbunnya akar pohon beringin purba dan kolam air biru toska alami.',
        lokasi: 'Kecamatan Jereweh'
      },
      {
        judul: 'Masjid Agung As-Siddiq KSB',
        kategori: 'Warisan Budaya',
        deskripsi: 'Mahakarya arsitektur modern berpadu motif tradisional Samawa di Kompleks Kemutar Telu Centre Taliwang, menjadi simbol kebanggaan dan spiritualitas masyarakat Sumbawa Barat.',
        lokasi: 'Kota Taliwang'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Ayam Taliwang Asli Sumbawa Barat',
        deskripsi: 'Daerah asal mula resep kuliner Taliwang otentik sebelum diperkenalkan ke Pulau Lombok, menggunakan ayam kampung muda dengan racikan bumbu terasi bakar Samawa yang gurih pekat.'
      },
      {
        nama: 'Singang Ikan Khas Sumbawa',
        deskripsi: 'Gulai ikan laut bumbu kuning asam pedas segar tanpa santan, dimasak dengan asam daun belimbing wuluh, daun ruku-ruku, dan kunyit segar.'
      }
    ],
    faktaUnik: [
      'Pelabuhan Poto Tano di Sumbawa Barat adalah urat nadi logistik dan transportasi utama yang menghubungkan Pulau Lombok dan Pulau Sumbawa.',
      'Ayam Taliwang yang terkenal di seluruh Nusantara secara historis lahir dari racikan masyarakat Taliwang di Kabupaten Sumbawa Barat.'
    ],
    aksesTransportasi: 'Dapat dicapai dengan menyeberang feri selama 1,5 jam dari Pelabuhan Kayangan Lombok Timur menuju Pelabuhan Poto Tano Sumbawa Barat.',
    warnaTema: '#175438',
    svgColor: '#40916c'
  },
  {
    id: 'sumbawa',
    slug: 'kabupaten-sumbawa',
    nama: 'Sumbawa',
    namaResmi: 'Pemerintah Kabupaten Sumbawa',
    jenis: 'Kabupaten',
    pulau: 'Sumbawa',
    ibuKota: 'Sumbawa Besar',
    luasWilayah: '6.643,98 km²',
    koordinat: '8°30′S 117°25′E',
    julukan: 'Bumi Sabalong Samawa Paralu',
    ringkasan: 'Kabupaten terluas di NTB dengan keagungan Istana Kayu 99 Tiang Dalam Loka, suaka eksotis Pulau Moyo, Teluk Saleh suaka hiu paus, dan tradisi pacuan joki cilik Main Jaran.',
    deskripsiGeografis: 'Wilayah daratan terluas di NTB dengan bentang savana padang rumput, gugusan teluk raksasa Teluk Saleh, serta perairan pulau-pulau eksotis seperti Pulau Moyo dan Medang di Laut Flores.',
    karakterLanskap: 'Padang savana luas tempat ternak kuda dan kerbau merumput bebas, hutan hujan tropis pulau Moyo, serta teluk perairan tenang laksana akuarium raksasa.',
    titikTertinggiTerendah: '0 – 1.730 mdpl',
    batasWilayah: {
      utara: 'Laut Flores',
      selatan: 'Samudra Hindia',
      barat: 'Kabupaten Sumbawa Barat & Selat Alas',
      timur: 'Kabupaten Dompu',
    },
    ikonDaerah: ['Istana Kayu Dalam Loka', 'Taman Buru & Cagar Laut Pulau Moyo', 'Akuarium Raksasa Teluk Saleh', 'Tradisi Pacuan Kuda Main Jaran'],
    halMenarik: [
      {
        judul: 'Istana Dalam Loka (Mahakarya Kayu 99 Tiang)',
        kategori: 'Warisan Budaya',
        deskripsi: 'Istana kayu jati kembar terbesar di Nusantara peninggalan Kesultanan Sumbawa tahun 1885. Dibangun tanpa satu pun paku besi melainkan pasak kayu, ditopang 99 tiang yang melambangkan Asmaul Husna.',
        lokasi: 'Kota Sumbawa Besar'
      },
      {
        judul: 'Pulau Moyo & Air Terjun Mata Jitu',
        kategori: 'Wisata Alam',
        deskripsi: 'Suaka alam kelas dunia yang pernah menjadi lokasi berlibur tokoh dunia seperti Putri Diana dan Mick Jagger. Memiliki Air Terjun Mata Jitu dengan formasi batuan stalaktit berundak dan kolam berair hijau zamrud.',
        lokasi: 'Kecamatan Labuhan Badas'
      },
      {
        judul: 'Konservasi Hiu Paus Teluk Saleh',
        kategori: 'Ikon Geografis',
        deskripsi: 'Pengalaman langka berenang bersama kawanan Hiu Paus (Rhincodon typus) yang hidup berdampingan secara damai dengan nelayan bagan tradisional di teluk semi-tertutup terbesar NTB.',
        lokasi: 'Teluk Saleh, Labuhan Jering'
      },
      {
        judul: 'Tradisi Pacuan Kuda Main Jaran',
        kategori: 'Warisan Budaya',
        deskripsi: 'Atraksi budaya pacuan kuda khas suku Samawa dengan penunggang joki cilik tanpa pelana yang menunjukkan kelincahan, keberanian, dan ikatan batin kuat antara joki dan kuda Sumbawa.',
        lokasi: 'Gelanggang Angin Laut, Sumbawa'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Sepat Khas Sumbawa',
        deskripsi: 'Sup ikan bakar berkuah asam segar dengan aroma terong bakar, mangga muda, daun asam, dan potongan belimbing wuluh yang disajikan dingin menyegarkan.'
      },
      {
        nama: 'Gecok Daging Sapi / Kerbau',
        deskripsi: 'Tumisan daging sapi atau kerbau cincang yang dibalut parutan kelapa sangrai berbumbu ketumbar, asam jawa, dan aroma rempah khas Samawa.'
      },
      {
        nama: 'Madu Hutan Asli Sumbawa',
        deskripsi: 'Madu murni hasil panen lebah liar Apis dorsata dari pedalaman pohon-pohon tinggi hutan Sumbawa, terkenal dengan khasiat daya tahan tubuh tinggi.'
      }
    ],
    faktaUnik: [
      'Menjadi kabupaten dengan wilayah daratan terluas di seluruh Provinsi Nusa Tenggara Barat (mencakup hampir sepertiga luas NTB).',
      'Air Terjun Mata Jitu di Pulau Moyo dijuluki Queen Waterfall setelah kunjungan mendiang Putri Diana dari Kerajaan Inggris pada tahun 1993.'
    ],
    aksesTransportasi: 'Dapat diakses melalui Bandara Sultan Muhammad Kaharuddin III di Sumbawa Besar dengan penerbangan perintis dari Lombok atau Denpasar.',
    warnaTema: '#1b4d3e',
    svgColor: '#2d6a4f'
  },
  {
    id: 'dompu',
    slug: 'kabupaten-dompu',
    nama: 'Dompu',
    namaResmi: 'Pemerintah Kabupaten Dompu',
    jenis: 'Kabupaten',
    pulau: 'Sumbawa',
    ibuKota: 'Dompu',
    luasWilayah: '2.324,55 km²',
    koordinat: '8°32′S 118°27′E',
    julukan: 'Bumi Nggahi Rawi Pahu',
    ringkasan: 'Mahakarya Kaldera Raksasa UNESCO Gunung Tambora, padang savana liar Doro Ncanga, sentra lumbung jagung nasional, dan surga peselancar dunia di Pantai Lakey.',
    deskripsiGeografis: 'Berada di bagian tengah timur Pulau Sumbawa dengan Semenanjung Sanggar yang dikuasai oleh kubah raksasa Gunung Tambora. Memiliki garis pantai menghadap Teluk Saleh di barat dan Samudra Hindia di selatan.',
    karakterLanskap: 'Kaldera vulkanik berdiameter 7 km dengan kedalaman 1.200 meter, padang savana Doro Ncanga yang luas, dan pantai karang selancar samudra.',
    titikTertinggiTerendah: '0 – 2.851 mdpl',
    batasWilayah: {
      utara: 'Laut Flores',
      selatan: 'Samudra Hindia',
      barat: 'Kabupaten Sumbawa & Teluk Saleh',
      timur: 'Kabupaten Bima',
    },
    ikonDaerah: ['Kaldera Raksasa Gunung Tambora', 'Padang Savana Doro Ncanga', 'Pantai Lakey (World Surf Spot)', 'Pulau Satonda Danau Asin'],
    halMenarik: [
      {
        judul: 'Taman Nasional Gunung Tambora (UNESCO Global Geopark)',
        kategori: 'Ikon Geografis',
        deskripsi: 'Kaldera letusan purba tahun 1815 berdiameter 7 kilometer dan kedalaman 1,2 kilometer yang letusan dahsyatnya dahulu memicu "Tahun Tanpa Musim Panas" di benua Eropa dan Amerika Utara.',
        lokasi: 'Semenanjung Sanggar'
      },
      {
        judul: 'Padang Savana Doro Ncanga',
        kategori: 'Wisata Alam',
        deskripsi: 'Hamparan padang rumput savana luas laksana pemandangan sabana Afrika di kaki Tambora, tempat kawanan kerbau, sapi, dan kuda liar Sumbawa merumput secara bebas berlatar dinding kaldera.',
        lokasi: 'Pekat, Dompu'
      },
      {
        judul: 'Pantai Lakey & Karang Huu (Ombak Kiri Kanan Dunia)',
        kategori: 'Wisata Alam',
        deskripsi: 'Surganya para peselancar profesional dunia dengan keistimewaan ombak yang menyapu ke kiri (Left-hander) dan ke kanan (Right-hander) secara simetris sempurna di atas terumbu karang dangkal.',
        lokasi: 'Kecamatan Huu'
      },
      {
        judul: 'Pulau Satonda & Danau Kawah Air Asin Purba',
        kategori: 'Wisata Alam',
        deskripsi: 'Pulau vulkanik unik di lepas pantai Tambora yang memiliki danau kawah air asin purba di tengah pulau. Air asin ini terbentuk akibat luapan gelombang tsunami letusan Tambora 1815 yang terperangkap.',
        lokasi: 'Perairan Laut Flores, Dompu'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Daging Rusa / Kuda Masak Timbu',
        deskripsi: 'Olahan daging dengan bumbu rempah kelapa muda yang dimasak lambat di dalam ruas batang bambu di atas bara api hingga empuk beraroma sedap.'
      },
      {
        nama: 'Sambal Mbee Dompu',
        deskripsi: 'Sambal ulek kasar berbahan cabai rawit pedas lokal, bawang merah goreng, dan perasan jeruk limau segar pendamping ikan bakar teluk.'
      }
    ],
    faktaUnik: [
      'Letusan Gunung Tambora pada April 1815 tercatat dalam sejarah geologi dunia sebagai letusan gunung api terbesar dalam peradaban manusia modern.',
      'Danau kawah di Pulau Satonda memiliki tingkat keasinan lebih tinggi dibanding air laut di sekitarnya dan dihuni koloni ganggang purba stromatolit.'
    ],
    aksesTransportasi: 'Dapat diakses melalui jalur darat lintas Sumbawa dari Sumbawa Besar (3 jam) atau dari Bandara Sultan Muhammad Salahuddin Bima (2 jam).',
    warnaTema: '#1b4d3e',
    svgColor: '#2d6a4f'
  },
  {
    id: 'bima',
    slug: 'kabupaten-bima',
    nama: 'Kabupaten Bima',
    namaResmi: 'Pemerintah Kabupaten Bima',
    jenis: 'Kabupaten',
    pulau: 'Sumbawa',
    ibuKota: 'Woha',
    luasWilayah: '4.389,40 km²',
    koordinat: '8°36′S 118°42′E',
    julukan: 'Bumi Maja Labo Dahu',
    ringkasan: 'Tanah kesultanan maritim tertua di timur NTB, gunung api pulau aktif Sangeang Api, keunikan pasir laut terbelah Pantai Lariti, serta kriya sarung tenun Tembe Nggoli.',
    deskripsiGeografis: 'Menempati ujung timur Pulau Sumbawa yang berbukit-bukit terjal dengan teluk Bima yang dalam. Memiliki pulau gunung api aktif yang menyembul dari laut di utara (Gunung Sangeang Api) serta berhadapan langsung dengan Selat Sape menuju Taman Nasional Komodo NTT.',
    karakterLanskap: 'Tebing teluk pesisir berbatu, gunung api kerucut aktif di tengah laut, persawahan terasering bawang merah, dan selat perairan sempit berbatu karang.',
    titikTertinggiTerendah: '0 – 1.949 mdpl',
    batasWilayah: {
      utara: 'Laut Flores',
      selatan: 'Samudra Hindia',
      barat: 'Kabupaten Dompu & Teluk Bima',
      timur: 'Selat Sape (Gerbang NTT)',
    },
    ikonDaerah: ['Pulau Gunung Api Sangeang', 'Pantai Lariti Laut Terbelah', 'Pelabuhan Sape', 'Kain Tenun Tembe Nggoli'],
    halMenarik: [
      {
        judul: 'Pulau Gunung Api Sangeang (Sangeang Api 1.949 mdpl)',
        kategori: 'Ikon Geografis',
        deskripsi: 'Gunung berapi aktif kerucut ganda yang menjulang megah langsung dari permukaan Laut Flores. Perairan di bawah kakinya memiliki spot penyelaman ajaib berupa gelembung gas vulkanik hangat bawah laut (Hot Springs Bubble).',
        lokasi: 'Kecamatan Wera'
      },
      {
        judul: 'Pantai Lariti (Fenomena Laut Terbelah)',
        kategori: 'Wisata Alam',
        deskripsi: 'Fenomena pasang surut air laut yang memunculkan daratan pasir putih sepanjang 200 meter di tengah laut pada jam tertentu, membelah lautan dan memungkinkan pengunjung berjalan kaki menuju pulau karang seberang.',
        lokasi: 'Kecamatan Lambu'
      },
      {
        judul: 'Situs Rumah Adat Uma Lengge Maria',
        kategori: 'Warisan Budaya',
        deskripsi: 'Kompleks lumbung pangan tradisional suku Mbojo dengan struktur panggung piramida kerucut bertingkat tiga yang dirancang anti-tikus dan tahan goncangan gempa bumi selama berabad-abad.',
        lokasi: 'Desa Maria, Kecamatan Wawo'
      },
      {
        judul: 'Sentra Tenun Tembe Nggoli & Budaya Rimpu',
        kategori: 'Warisan Budaya',
        deskripsi: 'Pusat kriya tenun sarung motif kotak tradisional Bima yang diolah dengan alat tenun gedogan. Sarung tenun ini digunakan dalam tradisi berbusana Rimpu Colo dan Rimpu Mpida khas kaum wanita Bima.',
        lokasi: 'Kecamatan Raba & Donggo'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Uta Maju Puru (Daging Rusa Bakar Bima)',
        deskripsi: 'Daging olahan khas masyarakat Bima dengan bumbu marinasi ketumbar, asam, dan garam yang dikeringkan lalu dipanggang gurih empuk.'
      },
      {
        nama: 'Kelu (Ikan Palumara Kuah Asam Pedas)',
        deskripsi: 'Sup kepala ikan kakap atau bandeng segar dengan kuah kunyit bening asam pedas wangi daun kemangi khas perairan Teluk Bima.'
      }
    ],
    faktaUnik: [
      'Pelabuhan Sape di Kabupaten Bima adalah pelabuhan penghubung utama bagi wisatawan yang ingin menyeberang menuju Labuan Bajo dan Taman Nasional Komodo di NTT.',
      'Seni bela diri Gantao dan tradisi silat tradisional Ntumbu Tutu (adu kepala) merupakan seni ketangkasan khas ksatria Kesultanan Bima masa lalu.'
    ],
    aksesTransportasi: 'Dapat diakses melalui Bandara Sultan Muhammad Salahuddin Bima, dilanjutkan jalur darat menuju ibu kota kabupaten di Woha (15 menit).',
    warnaTema: '#14382c',
    svgColor: '#2d6a4f'
  },
  {
    id: 'kota-bima',
    slug: 'kota-bima',
    nama: 'Kota Bima',
    namaResmi: 'Pemerintah Kota Bima',
    jenis: 'Kota',
    pulau: 'Sumbawa',
    ibuKota: 'Raba',
    luasWilayah: '222,25 km²',
    koordinat: '8°27′S 118°43′E',
    julukan: 'Kota Tepian Air Mbojo',
    ringkasan: 'Pusat peradaban Kesultanan Mbojo di pesisir Teluk Bima dengan kemegahan Museum Asi Mbojo, panorama pesisir Lawata, serta pusat kuliner dan niaga timur NTB.',
    deskripsiGeografis: 'Berada di teluk alami Teluk Bima yang tenang dan terlindung dari ombak ganas Samudra Hindia. Dikelilingi bukit-bukit kars dengan pemandangan kota pelabuhan yang hidup dari aktivitas niaga maritim.',
    karakterLanskap: 'Cekungan teluk pelabuhan alami yang terlindung, perbukitan perkotaan berpanorama teluk, dan ruang publik tepi pantai berangin sepoi.',
    titikTertinggiTerendah: '0 – 550 mdpl',
    batasWilayah: {
      utara: 'Kecamatan Ambalawi (Kabupaten Bima)',
      selatan: 'Kecamatan Palibelo (Kabupaten Bima)',
      barat: 'Teluk Bima',
      timur: 'Kecamatan Wawo (Kabupaten Bima)',
    },
    ikonDaerah: ['Museum Istana Asi Mbojo', 'Pantai Lawata & Kolo', 'Taman Ria Bima', 'Kawasan Niaga Melayu'],
    halMenarik: [
      {
        judul: 'Museum Kesultanan Asi Mbojo',
        kategori: 'Warisan Budaya',
        deskripsi: 'Bekas istana megah Kesultanan Bima yang dibangun tahun 1927 berarsitektur perpaduan gaya Eropa dan arsitektur tradisional Bima. Menyimpan pusaka mahkota bertabur intan berlian peninggalan Sultan Bima.',
        lokasi: 'Pusat Kota Bima'
      },
      {
        judul: 'Pantai Lawata & Teluk Bima',
        kategori: 'Wisata Alam',
        deskripsi: 'Taman pesisir legendaris di bibir Teluk Bima yang sudah ada sejak era kolonial Belanda. Memiliki bukit karang dengan gua alami tempat menikmati matahari terbenam di teluk perairan tenang.',
        lokasi: 'Pintu Gerbang Kota Bima'
      },
      {
        judul: 'Pantai Kolo & Pesisir Utara',
        kategori: 'Wisata Alam',
        deskripsi: 'Garis pantai berpasir hitam berkilau mineral dengan air jernih tenang, tempat favorit warga lokal dan penyelam untuk melihat gugusan karang teluk dan kapal tradisional bertambat.',
        lokasi: 'Kelurahan Kolo, Asakota'
      },
      {
        judul: 'Kawasan Budaya Tradisi Rimpu Caramincang',
        kategori: 'Warisan Budaya',
        deskripsi: 'Pusat pagelaran budaya akbar tahunan Pawai Rimpu yang diikuti puluhan ribu wanita berbusana tenun Tembe Nggoli, memecahkan rekor MURI sebagai cagar budaya adiluhung Mbojo.',
        lokasi: 'Lapangan Serasuba'
      }
    ],
    kulinerKhas: [
      {
        nama: 'Uta Mbawe (Ikan Kuah Asam Khas Mbojo)',
        deskripsi: 'Masakan ikan berkuah kuning bening segar dengan rempah asam belimbing dan kemangi yang disajikan hangat bersama nasi jagung pulen.'
      },
      {
        nama: 'Kue Pangaha Bunga & Baje Bima',
        deskripsi: 'Camilan manis tradisional khas Kesultanan Bima berbahan tepung ketan, gula aren, dan santan yang gurih legit, biasa disajikan pada upacara adat kebesaran.'
      }
    ],
    faktaUnik: [
      'Asi Mbojo memiliki koleksi naskah kuno beraksara Arab Melayu (Aksara Bima) yang mencatat hukum tata negara maritim tertua di kepulauan Nusa Tenggara.',
      'Teluk Bima merupakan salah satu teluk pelabuhan alami terdalam dan teraman di kawasan timur Indonesia karena terlindung dari gelombang samudra lepas.'
    ],
    aksesTransportasi: 'Dapat ditempuh dalam 20 menit perjalanan darat dari Bandara Sultan Muhammad Salahuddin Bima.',
    warnaTema: '#14382c',
    svgColor: '#40916c'
  }
];

export const PULAU_LIST = [
  {
    nama: 'Pulau Lombok',
    julukan: 'Bumi Sasak',
    luas: '4.725 km²',
    deskripsi: 'Pulau di bagian barat NTB yang terkenal dengan megahnya Gunung Rinjani, keindahan Trio Gili, Sirkuit Mandalika, dan kearifan suku Sasak.',
    kabupatenIds: ['mataram', 'lombok-barat', 'lombok-tengah', 'lombok-timur', 'lombok-utara'],
  },
  {
    nama: 'Pulau Sumbawa',
    julukan: 'Bumi Samawa & Mbojo',
    luas: '15.448 km²',
    deskripsi: 'Pulau terluas di NTB yang menyimpan kedahsyatan Kaldera Tambora 1815, suaka Hiu Paus Teluk Saleh, Istana Dalam Loka, serta tradisi luhur suku Samawa dan Mbojo.',
    kabupatenIds: ['sumbawa-barat', 'sumbawa', 'dompu', 'bima', 'kota-bima'],
  },
];

export function getKabupatenBySlug(slug: string): KabupatenNTB | undefined {
  return KABUPATEN_NTB.find((k) => k.slug === slug || k.id === slug);
}

