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
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/4924e07a-a6f1-44dd-9c5b-8453c7fbd0ca.jpg"
          alt="Недвижимость на юге"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <img
          src="https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/bucket/c5811164-68ec-44bc-bba4-48b97c16af4e.jpg"
          alt="Ваш Дом"
          className="h-20 w-20 object-contain rounded mx-auto mb-6"
        />
        <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-80 font-light">Агентство недвижимости</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ВАШ ДОМ<br/>
          <span className="text-[#a8d5b5]">НА ЮГЕ</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 font-light leading-relaxed">
          Квартиры, дома и коммерческая недвижимость на черноморском побережье. Подберём идеальный вариант для жизни или инвестиций.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#2d6a4f] text-white px-10 py-4 uppercase text-sm tracking-widest hover:bg-[#40916c] transition-colors duration-300"
        >
          Получить консультацию
        </a>
      </div>
    </div>
  );
}
