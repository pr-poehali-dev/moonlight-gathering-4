export default function Featured() {
  const advantages = [
    {
      icon: "📊",
      title: "Расчёт окупаемости",
      desc: "Бесплатно считаем доходность каждого объекта: арендный поток, рост стоимости, налоги и чистую прибыль.",
    },
    {
      icon: "🔍",
      title: "Индивидуальный подбор",
      desc: "Не показываем всё подряд. Слушаем вашу задачу и предлагаем только подходящие варианты.",
    },
    {
      icon: "⚖️",
      title: "Безопасность сделки",
      desc: "Юридическая проверка объекта, сопровождение сделки и защита ваших интересов на каждом этапе.",
    },
    {
      icon: "🌴",
      title: "Сервис после покупки",
      desc: "Помогаем с управлением объектом, сдачей в аренду и получением первого дохода уже в первый сезон.",
    },
  ];

  return (
    <section id="advantages" className="bg-[#f4f0e6] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#2d6a4f] mb-4">Наши преимущества</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b3a2f] leading-tight max-w-lg">
            Почему инвесторы выбирают нас
          </h2>
          <p className="text-[#5a6e65] max-w-xs text-sm leading-relaxed">
            Мы не просто продаём недвижимость — мы помогаем заработать на ней
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, i) => (
            <div key={i} className="border-t-2 border-[#2d6a4f] pt-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#1b3a2f] mb-2">{item.title}</h3>
              <p className="text-[#5a6e65] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#2d6a4f] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#a8d5b5] text-xs uppercase tracking-widest mb-3">Специальное предложение</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Получите бесплатный разбор<br />3 инвестиционных объектов
            </h3>
            <p className="text-[#a8d5b5]/80 mt-3 text-sm">С расчётом доходности и сравнением — без обязательств</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#f4f0e6] text-[#1b4332] px-8 py-4 uppercase text-sm tracking-widest font-bold hover:bg-white transition-colors duration-300 whitespace-nowrap"
          >
            Хочу разбор →
          </a>
        </div>
      </div>
    </section>
  );
}
