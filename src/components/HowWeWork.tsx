export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Консультация",
      desc: "Рассказываете о своей задаче: бюджет, цель (жизнь или инвестиции), желаемый регион. Мы задаём уточняющие вопросы.",
    },
    {
      num: "02",
      title: "Подбор объектов",
      desc: "В течение 24 часов готовим подборку из 3–5 объектов с расчётом доходности и сравнительным анализом.",
    },
    {
      num: "03",
      title: "Показ и переговоры",
      desc: "Организуем просмотры онлайн или офлайн. Ведём переговоры с продавцом и добиваемся лучшей цены для вас.",
    },
    {
      num: "04",
      title: "Сделка под ключ",
      desc: "Юридическая проверка, подготовка документов, безопасные расчёты. Вы получаете ключи — мы контролируем каждый шаг.",
    },
  ];

  return (
    <section id="how" className="bg-[#f4f0e6] px-6 py-24 border-t border-[#e8dfc8]">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#2d6a4f] mb-4">Процесс</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1b3a2f] mb-16 leading-tight">
          Как мы работаем
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={i} className="relative pr-8">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-0 w-8 h-px bg-[#2d6a4f]/30" />
              )}
              <div className="w-12 h-12 rounded-full bg-[#2d6a4f] flex items-center justify-center text-white font-bold text-sm mb-5">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-[#1b3a2f] mb-2">{step.title}</h3>
              <p className="text-[#5a6e65] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#2d6a4f] text-white px-12 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-[#40916c] transition-colors duration-300"
          >
            Начать — это бесплатно
          </a>
          <p className="text-[#5a6e65] text-xs mt-4">Консультация без давления и обязательств</p>
        </div>
      </div>
    </section>
  );
}
