export default function Reviews() {
  const reviews = [
    {
      name: "Анна Светлова",
      city: "Краснодар",
      text: "Искали квартиру у моря больше года сами — безрезультатно. Обратились в «Ваш дом» и уже через 3 недели подписали договор. Ребята знают рынок изнутри!",
      rating: 5,
    },
    {
      name: "Дмитрий Кравченко",
      city: "Москва",
      text: "Купили апартаменты в Сочи для сдачи в аренду. Агентство помогло не только с покупкой, но и посчитало реальную доходность. Всё прозрачно и честно.",
      rating: 5,
    },
    {
      name: "Марина Власова",
      city: "Ростов-на-Дону",
      text: "Продали дом в Анапе быстро и по хорошей цене. Менеджер был на связи 24/7, все документы оформили без нашего участия. Очень довольны!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#f4f0e6] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#2d6a4f] mb-4">Отзывы</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1b3a2f] mb-16 leading-tight">
          Клиенты о нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 border border-[#e8dfc8]">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#2d6a4f] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#3a4a42] text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="border-t border-[#e8dfc8] pt-4">
                <p className="font-bold text-[#1b3a2f] text-sm">{r.name}</p>
                <p className="text-[#5a6e65] text-xs">{r.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
