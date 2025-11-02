import emailjs from "@emailjs/browser";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    fileName: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked, files } = target;

    if (type === "checkbox") {
      setFormState((s) => ({ ...s, [name]: checked }));
    } else if (type === "file") {
      setFormState((s) => ({
        ...s,
        fileName: files && files[0] ? files[0].name : "",
      }));
    } else {
      setFormState((s) => ({ ...s, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    e.preventDefault();
    setSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_zcmjgrz",
        "template_pyp5nxo",
        formRef.current,
        "5uPMlCm18tLKS_mZj"
      );

      setSent(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        message: "",
        fileName: "",
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Ошибка при отправке. Попробуйте снова.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <section
      id="contacts"
      aria-label="Контакты"
      className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10"
    >
      <div className="max-w-[1160px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          Контакты
        </h2>
        <p className="mt-3 text-gray-700 max-w-prose">
          Оставьте заявку или свяжитесь с менеджером для расчёта стоимости и
          сроков.
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form - occupies two columns on large screens */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-2 p-6 rounded-lg border border-gray-100 bg-white"
            aria-label="Форма оформления заказа"
            encType="multipart/form-data"
          >
            <h3 className="font-medium sm:text-[25px] text-[20px]">Оформить заказ и уточнить детали</h3>

            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Имя</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-[#0087bd] focus:border-transparent px-3 py-2"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Телефон</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="(\+7|8)?\d{10}"
                  title="Введите номер в формате +7 (XXX) XXX-XX-XX"
                  value={formState.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-[#0087bd] focus:border-transparent px-3 py-2"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-[#0087bd] focus:border-transparent px-3 py-2"
                  placeholder="example@domain.ru"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Ваш вопрос</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={15}
                  value={formState.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-[#0087bd] focus:border-transparent px-3 py-2 resize-none"
                  placeholder="Кратко опишите задачу, материал и желаемые сроки"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0087bd] to-[#009bd9] text-white font-semibold px-4 py-3 shadow hover:brightness-105 transition disabled:opacity-60"
                >
                  {submitting ? "Отправка..." : "Отправить"}
                </button>

                {sent && (
                  <div role="status" className="mt-3 text-sm text-green-600">Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</div>
                )}
              </div>
            </div>
          </form>

          {/* Contact info - right column on large screens */}
          <div className="lg:col-span-1 space-y-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
            <div>
              <h3 className="font-semibold">Телефон</h3>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="tel:+79285555323"
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-[#0087bd] focus:text-[#0087bd] transition rounded-md focus:outline-none focus:ring-2 focus:ring-[#0087bd] px-2 py-1"
                  aria-label="Позвонить +7 (928) 555-53-23"
                >
                  <span className="relative flex-shrink-0">
                    <span className="absolute -inset-1 rounded-full animate-ping bg-[#009bd9] opacity-20" aria-hidden="true" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#009bd9]" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5l3.86.97a2.25 2.25 0 011.66 1.66l.97 3.86a2.25 2.25 0 01-.6 2.02L6.7 15.3a11.042 11.042 0 005.01 5.01l1.63-2.43a2.25 2.25 0 012.02-.6l3.86.97a2.25 2.25 0 011.66 1.66l.56 2.25" />
                    </svg>
                  </span>
                  <span className="text-sm">+7 (928) 555-53-23</span>
                </a>

                <a
                  href="tel:+79282434347"
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-[#0087bd] focus:text-[#0087bd] transition rounded-md focus:outline-none focus:ring-2 focus:ring-[#0087bd] px-2 py-1"
                  aria-label="Позвонить +7 (928) 243-43-47"
                >
                  <span className="relative flex-shrink-0">
                    <span className="absolute -inset-1 rounded-full animate-ping bg-[#009bd9] opacity-20" aria-hidden="true" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#009bd9]" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5l3.86.97a2.25 2.25 0 011.66 1.66l.97 3.86a2.25 2.25 0 01-.6 2.02L6.7 15.3a11.042 11.042 0 005.01 5.01l1.63-2.43a2.25 2.25 0 012.02-.6l3.86.97a2.25 2.25 0 011.66 1.66l.56 2.25" />
                    </svg>
                  </span>
                  <span className="text-sm">+7 (928) 243-43-47</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Почта</h3>
              <a href="mailto:atom_himplast@mail.ru" className="block mt-2 text-gray-700">atom_himplast@mail.ru</a>
            </div>

            <div>
              <h3 className="font-semibold">Адрес</h3>
              <p className="mt-2 text-gray-700">Город Волгодонск, ул. Химикова 54Б</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
