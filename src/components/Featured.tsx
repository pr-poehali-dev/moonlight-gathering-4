export default function Featured() {
  const advantages = [
    { icon: "🏆", title: "10+ лет опыта", desc: "Работаем на рынке недвижимости юга с 2013 года" },
    { icon: "🤝", title: "Честные сделки", desc: "Полное юридическое сопровождение и прозрачные условия" },
    { icon: "🌊", title: "Знаем регион", desc: "Все лучшие локации от Анапы до Сочи" },
    { icon: "💎", title: "Только проверенные объекты", desc: "Каждый объект проходит тщательную проверку перед выставлением" },
  ];

  return (
    <section id="advantages" className="bg-[#f4f0e6] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#2d6a4f] mb-4">Почему выбирают нас</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1b3a2f] mb-16 leading-tight max-w-xl">
          Надёжный партнёр в мире недвижимости
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, i) => (
            <div key={i} className="border-t-2 border-[#2d6a4f] pt-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#1b3a2f] mb-2">{item.title}</h3>
              <p className="text-[#5a6e65] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
