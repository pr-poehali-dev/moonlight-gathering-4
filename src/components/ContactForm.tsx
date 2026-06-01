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
    <section id="contact" className="bg-white px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Бесплатная консультация</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Оставьте заявку —<br />мы перезвоним
        </h2>
        <p className="text-neutral-500 mb-10">
          Подберём объект под ваш бюджет и задачи. Работаем по всему черноморскому побережью.
        </p>

        {status === "success" ? (
          <div className="border border-neutral-200 p-10 text-center">
            <p className="text-2xl font-bold text-neutral-900 mb-2">Заявка отправлена!</p>
            <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="border border-neutral-300 px-5 py-4 text-neutral-900 outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400 bg-transparent"
            />
            <input
              type="tel"
              placeholder="Телефон *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="border border-neutral-300 px-5 py-4 text-neutral-900 outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400 bg-transparent"
            />
            <textarea
              placeholder="Что вас интересует? (необязательно)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="border border-neutral-300 px-5 py-4 text-neutral-900 outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400 bg-transparent resize-none"
            />
            {status === "error" && (
              <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-neutral-900 text-white px-8 py-4 uppercase text-sm tracking-wide hover:bg-neutral-700 transition-colors duration-300 disabled:opacity-50 cursor-pointer w-fit"
            >
              {status === "loading" ? "Отправляем..." : "Отправить заявку"}
            </button>
            <p className="text-xs text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
