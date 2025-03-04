export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      >
        <source src="/videos/green-energy-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center py-16 space-y-8 px-4 max-w-4xl mx-auto">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            YeşilKariyer
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Yeşil Enerji Kariyeriniz Burada Başlıyor
          </h2>
          <p className="text-xl md:text-2xl text-white drop-shadow-md">
            Sürdürülebilir bir gelecek için temiz enerji sektöründe kariyer fırsatlarını keşfedin
          </p>
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md p-8 rounded-3xl max-w-2xl mx-auto border border-white/10">
            <p className="text-white text-lg">
              Türkiye&apos;nin yeşil enerji dönüşümünde aktif rol alın. Rüzgardan güneşe, hidroelektrikten biyoenerjiye, 
              geleceğin enerji sektöründe yerinizi alın.
            </p>
          </div>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
            Kariyer Yolculuğuna Başla
          </button>
        </div>
      </div>
    </div>
  );
} 