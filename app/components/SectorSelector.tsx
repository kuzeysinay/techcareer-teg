'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type CareerSector = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const careerSectors: CareerSector[] = [
  {
    id: 'engineering',
    title: 'Elektrik Mühendisliği',
    description: 'Elektrik sistemleri tasarımı, şebeke yönetimi ve enerji dağıtımı',
    icon: '⚡',
  },
  {
    id: 'it',
    title: 'Bilgi Teknolojileri',
    description: 'Yazılım geliştirme, veri analizi ve enerji yönetim sistemleri',
    icon: '💻',
  },
  {
    id: 'law',
    title: 'Hukuk',
    description: 'Enerji hukuku, regülasyonlar ve yasal danışmanlık',
    icon: '⚖️',
  },
  {
    id: 'business',
    title: 'İşletme ve Yönetim',
    description: 'Proje yönetimi, finansal analiz ve stratejik planlama',
    icon: '📊',
  },
  {
    id: 'environmental',
    title: 'Çevre Bilimleri',
    description: 'Çevresel etki değerlendirmesi ve sürdürülebilirlik danışmanlığı',
    icon: '🌍',
  },
];

export function SectorSelector() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">
        Uzmanlık Alanınızı Seçin
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {careerSectors.map((sector) => (
          <motion.div
            key={sector.id}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`
              ${selectedSector === sector.id 
                ? 'bg-gradient-to-br from-emerald-500/90 to-green-700/90 text-white' 
                : 'bg-gradient-to-br from-white/90 to-white/70'}
              p-8 rounded-2xl backdrop-blur-sm cursor-pointer transition-all
              shadow-lg hover:shadow-xl
            `}
            onClick={() => setSelectedSector(sector.id)}
          >
            <div className="text-5xl mb-4 bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              {sector.icon}
            </div>
            <h3 className={`text-xl font-bold mb-3 ${
              selectedSector === sector.id ? 'text-white' : 'text-green-800'
            }`}>
              {sector.title}
            </h3>
            <p className={
              selectedSector === sector.id ? 'text-white/90' : 'text-green-700'
            }>
              {sector.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 