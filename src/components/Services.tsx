export default function Services() {
  const services = [
    {
      number: "01",
      title: "Инвестиционный подбор",
      desc: "Найдём объект с максимальной доходностью под ваш бюджет. Рассчитаем окупаемость, арендный поток и перспективы роста цены.",
      tag: "Доходность от 12% годовых",
    },
    {
      number: "02",
      title: "Покупка для жизни",
      desc: "Квартира или дом у моря — для отдыха, постоянного проживания или переезда всей семьёй. Подберём лучшие локации на побережье.",
      tag: "Анапа · Геленджик · Сочи · Крым",
    },
    {
      number: "03",
      title: "Продажа объектов",
      desc: "Оценим вашу недвижимость по рыночной стоимости и найдём покупателя быстро. Безопасное оформление и юридическое сопровождение.",
      tag: "Сделка под ключ",
    },
  ];

  return (
    <section id="services" className="bg-[#1b4332] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#a8d5b5] mb-4">Что мы делаем</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Наши услуги
          </h2>
          <a href="#contact" className="text-[#a8d5b5] text-sm uppercase tracking-widest border-b border-[#a8d5b5]/40 pb-1 hover:border-[#a8d5b5] transition-colors w-fit">
            Получить консультацию →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2d6a4f]">
          {services.map((s) => (
            <div key={s.number} className="bg-[#1b4332] p-10 hover:bg-[#2d6a4f] transition-colors duration-300 flex flex-col">
              <span className="text-[#a8d5b5]/50 text-sm font-mono mb-6 block">{s.number}</span>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-[#a8d5b5]/80 text-sm leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-6 pt-6 border-t border-[#2d6a4f]">
                <span className="text-xs text-[#a8d5b5] uppercase tracking-widest">{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}