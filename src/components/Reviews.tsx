export default function Reviews() {
  const reviews = [
    {
      name: "Дмитрий Кравченко",
      city: "Москва",
      result: "Доходность 17% годовых",
      text: "Купили апартаменты в Сочи для сдачи в аренду. Агентство посчитало реальную доходность ещё до покупки — всё сошлось точь-в-точь. Уже второй сезон зарабатываем.",
      rating: 5,
    },
    {
      name: "Анна Светлова",
      city: "Краснодар",
      result: "Нашли за 3 недели",
      text: "Искали квартиру у моря больше года сами — безрезультатно. Обратились в «Ваш дом» и уже через 3 недели подписали договор. Ребята знают рынок изнутри!",
      rating: 5,
    },
    {
      name: "Игорь и Светлана Петровы",
      city: "Санкт-Петербург",
      result: "Переехали и не пожалели",
      text: "Переезжали из Питера в Геленджик — страшно было. «Ваш дом» подобрали нам дом, помогли с оформлением и даже после переезда были на связи. Профессионалы!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#1b4332] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#a8d5b5] mb-4">Отзывы клиентов</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Реальные результаты<br />наших клиентов
          </h2>
          <p className="text-[#a8d5b5]/70 text-sm max-w-xs">850+ успешных сделок за 10 лет работы</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#2d6a4f]/40 border border-[#2d6a4f] p-8 flex flex-col">
              <div className="inline-block bg-[#2d6a4f] px-3 py-1 text-xs text-[#a8d5b5] uppercase tracking-widest mb-5 w-fit">
                {r.result}
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#a8d5b5] text-base">★</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1 italic">"{r.text}"</p>
              <div className="border-t border-[#2d6a4f] pt-4">
                <p className="font-bold text-white text-sm">{r.name}</p>
                <p className="text-[#a8d5b5]/60 text-xs">{r.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
