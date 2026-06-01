import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div ref={container} className="relative flex items-center justify-center h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/93b049de-c009-48dd-9118-12daf4b49e00.jpg"
          alt="Курортная недвижимость на юге"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="inline-block border border-[#a8d5b5]/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#a8d5b5] mb-8">
          Курортная недвижимость Юга России
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Купите квартиру у моря<br />
          <span className="text-[#a8d5b5]">и зарабатывайте на ней</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-85 mb-3 font-light leading-relaxed">
          Подбираем апартаменты в Сочи, Анапе и Геленджике с доходностью от 12% годовых. Инвестируйте в курортную недвижимость — пока цены ещё не выросли.
        </p>
        <p className="text-sm text-[#a8d5b5]/80 mb-10">Бесплатный расчёт окупаемости за 24 часа</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-[#2d6a4f] text-white px-10 py-4 uppercase text-sm tracking-widest hover:bg-[#40916c] transition-colors duration-300 font-semibold"
          >
            Получить расчёт бесплатно
          </a>
          <a
            href="#how"
            className="inline-block border border-white/50 text-white px-10 py-4 uppercase text-sm tracking-widest hover:border-white transition-colors duration-300"
          >
            Как мы работаем
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-3 divide-x divide-white/20">
          {[
            { num: "10+", label: "лет на рынке юга" },
            { num: "850+", label: "сделок закрыто" },
            { num: "12–25%", label: "доходность объектов" },
          ].map((s, i) => (
            <div key={i} className="text-center px-4">
              <p className="text-2xl md:text-3xl font-bold text-[#a8d5b5]">{s.num}</p>
              <p className="text-xs text-white/70 uppercase tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
