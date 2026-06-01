export default function Gallery() {
  const photos = [
    {
      src: "https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/7f7ebfa5-0664-4bba-8211-d6641887fa81.jpg",
      label: "Вилла у моря · Сочи",
      size: "lg",
    },
    {
      src: "https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/9a386d73-273a-4327-961b-daefdc3f115c.jpg",
      label: "Пентхаус · Крым",
      size: "sm",
    },
    {
      src: "https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/04eee4a6-6050-4cbc-bbb0-100eadf2eb44.jpg",
      label: "Курортный посёлок · Крым",
      size: "sm",
    },
    {
      src: "https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/files/f8a5eaff-7ee4-4ed9-b028-834554ff3afd.jpg",
      label: "Апарт-комплекс · Анапа",
      size: "lg",
    },
  ];

  return (
    <section className="bg-[#f4f0e6] px-6 py-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#2d6a4f] mb-4">Наши объекты</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b3a2f] leading-tight">
            Премиальная недвижимость<br />Юга России
          </h2>
          <a href="#contact" className="text-[#2d6a4f] text-sm uppercase tracking-widest border-b border-[#2d6a4f]/40 pb-1 hover:border-[#2d6a4f] transition-colors w-fit shrink-0">
            Смотреть все объекты →
          </a>
        </div>

        {/* Мозаика */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Левый столбец — большое фото */}
          <div className="relative group overflow-hidden h-[400px] md:h-[600px]">
            <img
              src={photos[0].src}
              alt={photos[0].label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <span className="absolute bottom-5 left-5 text-white text-xs uppercase tracking-widest bg-[#2d6a4f]/80 px-3 py-1">
              {photos[0].label}
            </span>
          </div>

          {/* Правый столбец — два фото */}
          <div className="grid grid-rows-2 gap-4 h-[400px] md:h-[600px]">
            {photos.slice(1, 3).map((p, i) => (
              <div key={i} className="relative group overflow-hidden">
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <span className="absolute bottom-4 left-4 text-white text-xs uppercase tracking-widest bg-[#2d6a4f]/80 px-3 py-1">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Широкое фото внизу */}
        <div className="relative group overflow-hidden h-[300px] mt-4">
          <img
            src={photos[3].src}
            alt={photos[3].label}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          <span className="absolute bottom-5 left-5 text-white text-xs uppercase tracking-widest bg-[#2d6a4f]/80 px-3 py-1">
            {photos[3].label}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="#contact"
              className="bg-white/90 text-[#1b4332] px-8 py-4 uppercase text-sm tracking-widest font-bold hover:bg-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
            >
              Хочу такой объект →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
