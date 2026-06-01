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
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/4924e07a-a6f1-44dd-9c5b-8453c7fbd0ca.jpg"
          alt="Недвижимость на юге"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Агентство недвижимости</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ВАШ ДОМ<br/>НА ЮГЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Квартиры, дома и коммерческая недвижимость на черноморском побережье. Найдём идеальный вариант для жизни или инвестиций.
        </p>
        <button className="border border-white text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Смотреть объекты
        </button>
      </div>
    </div>
  );
}