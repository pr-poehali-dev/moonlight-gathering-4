import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/c548f908-9d50-4122-9b83-ee3c3463ee10", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#2d6a4f] px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-[#a8d5b5] mb-4">Бесплатно</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Оставьте заявку —<br />мы перезвоним
        </h2>
        <p className="text-[#a8d5b5] mb-10 leading-relaxed">
          Подберём объект под ваш бюджет и задачи. Работаем по всему черноморскому побережью.
        </p>

        {status === "success" ? (
          <div className="border border-[#40916c] bg-[#1b4332] p-12 text-center">
            <p className="text-2xl font-bold text-white mb-2">Заявка отправлена!</p>
            <p className="text-[#a8d5b5]">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-transparent border border-[#40916c] px-5 py-4 text-white outline-none focus:border-[#a8d5b5] transition-colors placeholder:text-[#a8d5b5]/60"
            />
            <input
              type="tel"
              placeholder="Телефон *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-transparent border border-[#40916c] px-5 py-4 text-white outline-none focus:border-[#a8d5b5] transition-colors placeholder:text-[#a8d5b5]/60"
            />
            <textarea
              placeholder="Что вас интересует? *"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="bg-transparent border border-[#40916c] px-5 py-4 text-white outline-none focus:border-[#a8d5b5] transition-colors placeholder:text-[#a8d5b5]/60 resize-none"
            />
            {status === "error" && (
              <p className="text-red-300 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#f4f0e6] text-[#1b4332] px-8 py-4 uppercase text-sm tracking-widest font-bold hover:bg-white transition-colors duration-300 disabled:opacity-50 cursor-pointer w-fit"
            >
              {status === "loading" ? "Отправляем..." : "Отправить заявку"}
            </button>
            <p className="text-[#a8d5b5]/60 text-xs">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
