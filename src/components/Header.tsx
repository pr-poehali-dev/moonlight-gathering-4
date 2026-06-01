interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-6 py-4 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <img
          src="https://cdn.poehali.dev/projects/671d5413-b4e7-425a-81a7-d7e4b2126c4e/bucket/c5811164-68ec-44bc-bba4-48b97c16af4e.jpg"
          alt="Ваш Дом"
          className="h-12 w-12 object-contain rounded"
        />
        <nav className="flex gap-8">
          <a href="#services" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 uppercase text-xs tracking-widest">
            Услуги
          </a>
          <a href="#advantages" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 uppercase text-xs tracking-widest">
            О нас
          </a>
          <a href="#contact" className="text-white hover:text-[#a8d5b5] transition-colors duration-300 uppercase text-xs tracking-widest">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
