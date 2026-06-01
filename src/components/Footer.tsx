export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+500px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[500px] lg:h-[600px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-500px)] lg:top-[calc(100vh-600px)]">
          <div className="bg-[#1b3a2f] py-8 px-6 h-full w-full flex flex-col justify-between">
            <div className="flex gap-12 sm:gap-20 lg:gap-32">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-[#a8d5b5] text-xs tracking-widest">Агентство</h3>
                <a href="#advantages" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 text-sm">О нас</a>
                <a href="#services" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 text-sm">Услуги</a>
                <a href="#contact" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 text-sm">Связаться</a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-[#a8d5b5] text-xs tracking-widest">Направления</h3>
                <a href="#services" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 text-sm">Купить</a>
                <a href="#services" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 text-sm">Арендовать</a>
                <a href="#services" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 text-sm">Инвестиции</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-[0.85] text-[#2d6a4f] font-bold tracking-tight">
                ВАШ ДОМ
              </h1>
              <p className="text-[#a8d5b5]/60 text-xs">{new Date().getFullYear()} Агентство недвижимости «Ваш дом»</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
