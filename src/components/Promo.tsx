import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/7f7ebfa5-0664-4bba-8211-d6641887fa81.jpg"
            alt="Премиальная недвижимость"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1b4332]/70" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-[#a8d5b5] uppercase z-10 text-xs tracking-[0.3em]">
        Премиальная и элитная недвижимость
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10 max-w-3xl">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-light mb-8">
          Виллы, пентхаусы и закрытые резиденции — объекты, которых нет в открытом доступе.
        </p>
        <div className="flex flex-wrap gap-6">
          {["Полная конфиденциальность", "Закрытая база объектов", "Сделка без огласки"].map((t) => (
            <span key={t} className="text-[#a8d5b5] text-xs uppercase tracking-widest border-l-2 border-[#a8d5b5] pl-3">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}