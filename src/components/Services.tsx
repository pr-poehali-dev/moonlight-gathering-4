export default function Services() {
  const services = [
    {
      number: "01",
      title: "Покупка недвижимости",
      desc: "Подберём квартиру, дом или участок под ваш бюджет и пожелания. Полное сопровождение от подбора до ключей.",
    },
    {
      number: "02",
      title: "Продажа объектов",
      desc: "Оценим вашу недвижимость по рыночной стоимости, найдём покупателя и проведём сделку безопасно.",
    },
    {
      number: "03",
      title: "Инвестиции в недвижимость",
      desc: "Поможем выбрать объект с высокой доходностью. Анализ рынка, расчёт окупаемости, сопровождение.",
    },
  ];

  return (
    <section id="services" className="bg-[#1b4332] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#a8d5b5] mb-4">Что мы делаем</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2d6a4f]">
          {services.map((s) => (
            <div key={s.number} className="bg-[#1b4332] p-10 hover:bg-[#2d6a4f] transition-colors duration-300 group">
              <span className="text-[#a8d5b5] text-sm font-mono mb-4 block">{s.number}</span>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-[#a8d5b5] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}