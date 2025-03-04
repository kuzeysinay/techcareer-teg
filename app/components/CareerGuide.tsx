'use client';

import { motion } from 'framer-motion';

const guideSteps = [
  {
    title: "Eğitim ve Sertifikalar",
    description: "Yeşil enerji alanında kariyer için gerekli eğitim ve sertifikalar hakkında bilgi edinin.",
    icon: "🎓",
    items: [
      "Mühendislik veya teknik eğitim",
      "Yenilenebilir enerji sertifikaları",
      "Proje yönetimi sertifikaları",
      "Teknik uzmanlık eğitimleri"
    ]
  },
  {
    title: "Deneyim Kazanın",
    description: "Sektörde deneyim kazanmanın yollarını keşfedin.",
    icon: "💼",
    items: [
      "Staj programları",
      "Proje bazlı çalışmalar",
      "Mentorluk programları",
      "Saha deneyimi"
    ]
  },
  {
    title: "Ağ Oluşturun",
    description: "Sektördeki profesyonellerle bağlantı kurun.",
    icon: "🤝",
    items: [
      "Sektör konferansları",
      "LinkedIn ağı",
      "Profesyonel organizasyonlar",
      "Yeşil enerji etkinlikleri"
    ]
  }
];

export function CareerGuide() {
  return (
    <div className="py-16 bg-gradient-to-br from-green-900/10 to-emerald-900/10 backdrop-blur-sm rounded-3xl my-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800 dark:text-green-100">
          Yeşil Enerji Kariyeri Rehberi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guideSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 dark:bg-green-800/30 p-6 rounded-2xl shadow-lg backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.open('https://www.techcareer.net', '_blank')}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-green-800 dark:text-green-100">
                {step.title}
              </h3>
              <p className="text-green-700 dark:text-green-200 mb-4">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li 
                    key={item}
                    className="flex items-center text-green-600 dark:text-green-300"
                  >
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 