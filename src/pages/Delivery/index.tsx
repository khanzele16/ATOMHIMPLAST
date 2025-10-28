import { Footer } from "../../components/Footer";
import { Contact } from "../../components/Contact";
import { setTitle } from "../../utils/setTitle";

export default function Delivery() {
  setTitle("Доставка | АТОМХИМПЛАСТ");
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <main className="flex-grow w-full">
        <section
          id="hero-delivery"
          className="relative flex justify-center items-center w-full"
        >
          <div
            className="relative overflow-hidden shadow-xl mx-auto w-full max-w-[1160px] rounded-none sm:rounded-2xl lg:rounded-3xl"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(3,7,18,0.24), rgba(3,7,18,0.24)), url('/main-header.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60 mix-blend-overlay"
              style={{
                backgroundImage: "url('/main-header-background-2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="relative z-10 text-white py-10 sm:py-14 lg:py-20 px-6 sm:px-10 lg:px-20">
              <h1
                className="font-extrabold leading-tight max-w-[900px]"
                style={{
                  fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                Организуем доставку ваших изделий по всей России
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-white/90">
                Возьмем на себя всю логистику по транспортировке вашего заказа —
                от производства до вашего города.
              </p>
              <div className="mt-6">
                <a
                  href="#calculate"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-gradient-to-r from-[#0087bd] to-[#009bd9] text-white shadow-lg hover:brightness-105 transition"
                >
                  Рассчитать стоимость
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-black/25 to-transparent sm:h-20" />
          </div>
        </section>

        <section
          id="terms"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-6 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Условия доставки и оплаты
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Доставка грузов по всей России
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Наша компания сотрудничает со всеми основными курьерскими и
                  транспортными службами, чтобы осуществить доставку вашего
                  груза к нам на производство и обратно. Стоимость и сроки
                  зависят от типа груза, региона и выбранного тарифа.
                  <br />
                  <br />
                  По ЮФО доставка занимает от <strong>3 до 7 дней</strong>.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Оплата услуг</h3>
                <p className="text-gray-700 leading-relaxed">
                  Мы работаем с юридическими и физическими лицами. Оплата
                  производится по безналичному расчету, а также через
                  онлайн-кассу. Возможна работа по выставленному счету и
                  индивидуальные условия сотрудничества с отсрочкой платежа при
                  крупных заказах.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="options"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-6 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-8">
              Выберите удобный способ доставки
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">Самовывоз</h3>
                <p className="text-gray-700 mb-3">
                  Самостоятельно доставьте изделия к нам на производство и
                  заберите бесплатно.
                </p>
                <p className="text-gray-600 font-medium">
                  Ростовская область, г. Волгодонск
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">Деловые линии</h3>
                <p className="text-gray-700 mb-3">
                  Оформите доставку через курьера в вашем городе или доверьте
                  логистику нам.
                </p>
                <a
                  href="https://www.dellin.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009bd9] font-semibold hover:underline"
                >
                  Найти отделение в вашем городе
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">CSE</h3>
                <p className="text-gray-700 mb-3">
                  Оформите доставку самостоятельно через курьера в вашем городе
                  или доверьте логистику нам.
                </p>
                <a
                  href="https://www.cse.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009bd9] font-semibold hover:underline"
                >
                  Найти отделение в вашем городе
                </a>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">СДЕК</h3>
                <p className="text-gray-700 mb-3">
                  Оформите доставку через курьера в вашем городе или доверьте
                  логистику нам.
                </p>
                <a
                  href="https://www.cdek.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009bd9] font-semibold hover:underline"
                >
                  Найти отделение в вашем городе
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-10">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
