'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type EnergySector = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
};

type Corporate = {
  id: string;
  name: string;
  greenScore: number; // 0-100
  description: string;
  location: string;
};

type JobListing = {
  id: string;
  title: string;
  corporate: Corporate;
  location: string;
  description: string;
  salary: string;
  requirements: string[];
  benefits: string[];
};

const energySectors: EnergySector[] = [
  {
    id: 'solar',
    title: 'Güneş Enerjisi',
    description: 'Fotovoltaik sistemler, güneş santralleri ve güneş enerjisi depolama çözümleri',
    icon: '☀️',
    color: 'bg-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 'wind',
    title: 'Rüzgar Enerjisi',
    description: 'Rüzgar türbinleri, offshore ve onshore rüzgar çiftlikleri',
    icon: '🌪️',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'hydro',
    title: 'Hidroelektrik',
    description: 'Hidroelektrik santraller, barajlar ve su yönetimi sistemleri',
    icon: '💧',
    color: 'bg-blue-700',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'biomass',
    title: 'Biyoenerji',
    description: 'Biyokütle tesisleri, biyogaz ve organik atık yönetimi',
    icon: '🌱',
    color: 'bg-green-600',
    bgColor: 'bg-green-50',
  },
];

const corporates: Corporate[] = [
  {
    id: 'enerjisa',
    name: 'Enerjisa',
    greenScore: 92,
    description: 'Türkiye\'nin lider enerji şirketi',
    location: 'İstanbul'
  },
  {
    id: 'zorlu',
    name: 'Zorlu Enerji',
    greenScore: 88,
    description: 'Yenilenebilir enerji odaklı entegre hizmetler',
    location: 'İstanbul'
  },
  {
    id: 'kalyon',
    name: 'Kalyon Enerji',
    greenScore: 85,
    description: 'Sürdürülebilir enerji çözümleri',
    location: 'Ankara'
  },
  {
    id: 'borusan',
    name: 'Borusan EnBW',
    greenScore: 90,
    description: 'Rüzgar enerjisi lideri',
    location: 'İstanbul'
  },
  {
    id: 'akfen',
    name: 'Akfen Yenilenebilir Enerji',
    greenScore: 56,
    description: 'Temiz enerji yatırımları',
    location: 'Ankara'
  },
  {
    id: 'aydem',
    name: 'Aydem Yenilenebilir',
    greenScore: 37,
    description: 'Sürdürülebilir enerji üretimi',
    location: 'İzmir'
  },
  {
    id: 'guyad',
    name: 'GUYAD Enerji',
    greenScore: 32,
    description: 'Güneş enerjisi sistemleri',
    location: 'Ankara'
  },
  {
    id: 'naturel',
    name: 'Naturel Enerji',
    greenScore: 88,
    description: 'Yenilenebilir enerji yatırımları',
    location: 'İstanbul'
  }
];

const enhancedJobListings: Record<string, JobListing[]> = {
  solar: [
    {
      id: 'solar-1',
      title: 'Güneş Enerjisi Proje Müdürü',
      corporate: corporates[0], // Enerjisa
      location: 'İstanbul, Türkiye',
      description: 'Büyük ölçekli güneş enerjisi projelerinin yönetimi ve koordinasyonu',
      salary: '35.000 - 45.000 TL',
      requirements: [
        'En az 5 yıl güneş enerjisi sektörü deneyimi',
        'PMP sertifikası',
        'İngilizce (akıcı)'
      ],
      benefits: [
        'Özel sağlık sigortası',
        'Performans primi',
        'Uzaktan çalışma imkanı'
      ]
    },
    {
      id: 'solar-2',
      title: 'PV Sistem Tasarım Uzmanı',
      corporate: corporates[2], // Kalyon
      location: 'Ankara, Türkiye',
      description: 'Fotovoltaik sistem tasarımı ve optimizasyonu',
      salary: '25.000 - 35.000 TL',
      requirements: [
        'Elektrik-Elektronik Mühendisliği mezunu',
        'PVsyst deneyimi',
        'AutoCAD bilgisi'
      ],
      benefits: [
        'Yemek ve ulaşım desteği',
        'Eğitim bütçesi',
        'Esnek çalışma saatleri'
      ]
    },
    {
      id: 'solar-3',
      title: 'Solar Panel Montaj Ekip Lideri',
      corporate: corporates[4], // Akfen
      location: 'İzmir, Türkiye',
      description: 'Güneş paneli montaj ekibinin koordinasyonu ve sahada teknik denetim',
      salary: '28.000 - 35.000 TL',
      requirements: [
        'En az 3 yıl saha deneyimi',
        'Teknik liderlik tecrübesi',
        'Yüksekte çalışma sertifikası'
      ],
      benefits: [
        'Servis imkanı',
        'Öğle yemeği',
        'Performans primi'
      ]
    },
    {
      id: 'solar-4',
      title: 'Solar İş Geliştirme Uzmanı',
      corporate: corporates[5], // GUYAD
      location: 'Ankara, Türkiye',
      description: 'Güneş enerjisi projelerinin iş geliştirme ve fizibilite çalışmaları',
      salary: '30.000 - 40.000 TL',
      requirements: [
        'İşletme veya Mühendislik mezunu',
        'MS Office ileri seviye',
        'Proje yönetimi tecrübesi'
      ],
      benefits: [
        'Özel sağlık sigortası',
        'Yol yardımı',
        'Yıllık izin 14+14'
      ]
    },
    {
      id: 'solar-5',
      title: 'Güneş Enerjisi Saha Mühendisi',
      corporate: corporates[6], // Naturel
      location: 'Konya, Türkiye',
      description: 'GES projelerinin saha uygulamaları ve teknik denetimi',
      salary: '28.000 - 38.000 TL',
      requirements: [
        'Elektrik Mühendisliği mezunu',
        'Sürücü belgesi',
        'Saha deneyimi'
      ],
      benefits: [
        'Şirket aracı',
        'Konaklama desteği',
        'Vardiya primi'
      ]
    }
  ],
  wind: [
    {
      id: 'wind-1',
      title: 'Rüzgar Enerjisi Operasyon Müdürü',
      corporate: corporates[3], // Borusan EnBW
      location: 'İzmir, Türkiye',
      description: 'Rüzgar çiftliği operasyonlarının yönetimi',
      salary: '40.000 - 50.000 TL',
      requirements: [
        'En az 7 yıl rüzgar enerjisi deneyimi',
        'Teknik ekip yönetimi tecrübesi',
        'Saha deneyimi'
      ],
      benefits: [
        'Şirket aracı',
        'Aile sağlık sigortası',
        'Yıllık ikramiye'
      ]
    },
    {
      id: 'wind-2',
      title: 'Rüzgar Türbini Bakım Mühendisi',
      corporate: corporates[1], // Zorlu
      location: 'Balıkesir, Türkiye',
      description: 'Rüzgar türbinlerinin bakım ve onarım süreçlerinin yönetimi',
      salary: '30.000 - 40.000 TL',
      requirements: [
        'Makine Mühendisliği mezunu',
        'Rüzgar türbini bakım sertifikası',
        'Saha deneyimi'
      ],
      benefits: [
        'Konaklama desteği',
        'Teknik eğitimler',
        'Özel sağlık sigortası'
      ]
    },
    {
      id: 'wind-3',
      title: 'Rüzgar Santrali İSG Uzmanı',
      corporate: corporates[5], // GUYAD
      location: 'Çanakkale, Türkiye',
      description: 'RES projelerinde iş sağlığı ve güvenliği süreçlerinin yönetimi',
      salary: '32.000 - 42.000 TL',
      requirements: [
        'A Sınıfı İSG Uzmanı',
        'En az 5 yıl deneyim',
        'Yüksekte çalışma eğitmenliği'
      ],
      benefits: [
        'Lojman imkanı',
        'Özel sigorta',
        'Vardiya primi'
      ]
    }
  ],
  hydro: [
    {
      id: 'hydro-1',
      title: 'Hidroelektrik Santral Yöneticisi',
      corporate: corporates[1], // Zorlu
      location: 'Trabzon, Türkiye',
      description: 'HES operasyonları ve bakım yönetimi',
      salary: '45.000 - 55.000 TL',
      requirements: [
        'Makine veya İnşaat Mühendisliği',
        '10 yıl HES deneyimi',
        'İSG uzmanlığı'
      ],
      benefits: [
        'Lojman imkanı',
        'Özel sağlık sigortası',
        'Yönetici primi'
      ]
    },
    {
      id: 'hydro-2',
      title: 'HES Elektrik Bakım Mühendisi',
      corporate: corporates[5], // Aydem
      location: 'Artvin, Türkiye',
      description: 'Hidroelektrik santral elektrik sistemleri bakım yönetimi',
      salary: '35.000 - 45.000 TL',
      requirements: [
        'Elektrik Mühendisliği mezunu',
        'SCADA sistem deneyimi',
        'Bakım planlama tecrübesi'
      ],
      benefits: [
        'Lojman',
        'Aile sağlık sigortası',
        'Yıllık ikramiye'
      ]
    },
    {
      id: 'hydro-3',
      title: 'Hidromekanik Sistemler Uzmanı',
      corporate: corporates[2], // Kalyon
      location: 'Rize, Türkiye',
      description: 'HES mekanik ekipman bakım ve onarım süreçleri',
      salary: '33.000 - 43.000 TL',
      requirements: [
        'Makine Mühendisliği mezunu',
        'Hidromekanik sistem deneyimi',
        'Teknik çizim okuma'
      ],
      benefits: [
        'Servis',
        'Yemek',
        'Performans primi'
      ]
    }
  ],
  biomass: [
    {
      id: 'biomass-1',
      title: 'Biyokütle Tesisi Teknik Müdür',
      corporate: corporates[4], // Akfen
      location: 'Konya, Türkiye',
      description: 'Biyokütle tesisi teknik operasyonlarının yönetimi',
      salary: '35.000 - 45.000 TL',
      requirements: [
        'Kimya Mühendisliği mezunu',
        'Biyokütle/biyogaz deneyimi',
        'Proses optimizasyonu'
      ],
      benefits: [
        'Performans primi',
        'Eğitim desteği',
        'Özel sağlık sigortası'
      ]
    },
    {
      id: 'biomass-2',
      title: 'Biyogaz Tesis Operatörü',
      corporate: corporates[6], // Naturel
      location: 'Afyon, Türkiye',
      description: 'Biyogaz tesisi operasyon ve kontrol süreçleri',
      salary: '25.000 - 35.000 TL',
      requirements: [
        'Kimya Teknisyeni/Tekniker',
        'Vardiyalı çalışabilme',
        'İSG bilgisi'
      ],
      benefits: [
        'Vardiya primi',
        'Yemek',
        'Servis'
      ]
    },
    {
      id: 'biomass-3',
      title: 'Atık Yönetimi Uzmanı',
      corporate: corporates[1], // Zorlu
      location: 'Bursa, Türkiye',
      description: 'Biyokütle tesisi atık tedarik ve yönetim süreçleri',
      salary: '28.000 - 38.000 TL',
      requirements: [
        'Çevre Mühendisliği mezunu',
        'Atık yönetimi deneyimi',
        'MS Office'
      ],
      benefits: [
        'Özel sağlık sigortası',
        'Yemek kartı',
        'Bayram ikramiyesi'
      ]
    }
  ]
};

export function EnergySelector() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [showJobs, setShowJobs] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-600';
    if (score >= 85) return 'bg-green-500';
    if (score >= 80) return 'bg-green-400';
    return 'bg-yellow-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Çalışmak İstediğiniz Sektörü Seçin
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {energySectors.map((sector) => (
          <motion.div
            key={sector.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative overflow-hidden
              ${selectedSector === sector.id ? `${sector.color} text-white` : 'bg-white hover:' + sector.bgColor}
              p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300
              hover:shadow-2xl border-2 ${selectedSector === sector.id ? 'border-transparent' : 'border-gray-100'}
            `}
            onClick={() => {
              setSelectedSector(sector.id);
              setShowJobs(true);
            }}
          >
            <div className="text-5xl mb-6">{sector.icon}</div>
            <h3 className={`text-2xl font-bold mb-4 ${selectedSector === sector.id ? 'text-white' : 'text-green-800'}`}>
              {sector.title}
            </h3>
            <p className={`${selectedSector === sector.id ? 'text-white/90' : 'text-green-800'} text-sm`}>
              {sector.description}
            </p>
            {selectedSector === sector.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
              >
                <span className="text-white">✓</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {showJobs && selectedSector && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-green-800">
            {energySectors.find(s => s.id === selectedSector)?.title} İş Fırsatları
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedJobListings[selectedSector as keyof typeof enhancedJobListings]
              .sort((a, b) => b.corporate.greenScore - a.corporate.greenScore)
              .map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
                  <span className={`${getScoreColor(job.corporate.greenScore)} text-white px-2 py-1 rounded-lg text-sm font-semibold`}>
                    {job.corporate.greenScore}
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-700">{job.corporate.name}</p>
                <p className="text-gray-600 mt-2">{job.location}</p>
                <p className="text-green-600 font-semibold mt-2">{job.salary}</p>
                <p className="text-gray-700 mt-4">{job.description}</p>
                <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold w-full">
                  Başvur
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 