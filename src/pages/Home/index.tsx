import { setTitle } from "../../utils/setTitle";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { Examples } from "../../components/Examples";
import { Contact } from "../../components/Contact";

export default function Home() {
  setTitle("Главная | АТОМХИМПЛАСТ");
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <main className="flex-grow w-full">
        <section
          id="hero"
          aria-label="Hero"
          className="flex justify-center items-center w-full bg-white"
        >
          <div className="w-full px-0">
            <div
              className="relative overflow-hidden rounded-none sm:rounded-2xl lg:rounded-3xl shadow-xl mx-auto max-w-[1160px]"
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
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: "url('/main-header-background-1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div className="relative z-10 w-full text-white py-10 sm:py-14 lg:py-20 px-5 sm:px-10 lg:px-20">
                <div className="mb-3">
                  <span className="inline-block bg-white/10 px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold tracking-wide">
                    Гальваническая обработка
                  </span>
                </div>
                <h1
                  className="font-medium leading-tight max-w-[1000px]"
                  style={{
                    fontSize: "clamp(1.6rem, 4.5vw, 3.5rem)",
                    lineHeight: 1.02,
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  Прочность и долговечность ваших изделий — профессиональная
                  гальваника от{" "}
                  <span className="font-black uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#0087bd] to-[#009bd9]">
                    АТОМХИМПЛАСТ
                  </span>
                </h1>
                <p className="mt-4 max-w-3xl text-[15.5px] sm:text-[17px] leading-relaxed text-white/90">
                  Мы выполняем полный цикл гальванотехнической обработки:
                  подготовка поверхности, нанесение покрытий (хром, цинк,
                  никель, медь, серебрение), контроль качества и упаковка.
                  Работаем с партиями любой сложности — доставка по всей России.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-3 sm:gap-4">
                  <a
                    href="#contacts"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-gradient-to-r from-[#0087bd] to-[#009bd9] text-white shadow-lg hover:brightness-105 transition w-full sm:w-auto text-center"
                  >
                    Узнать стоимость
                  </a>
                  <div className="flex gap-3 flex-wrap items-center text-sm text-white/90 justify-start sm:justify-center w-full sm:w-auto">
                    <span className="px-3 py-1 bg-white/8 rounded-lg text-xs sm:text-sm">
                      Сроки от 3 дней
                    </span>
                    <span className="px-3 py-1 bg-white/8 rounded-lg text-xs sm:text-sm">
                      Гарантия качества
                    </span>
                    <span className="px-3 py-1 bg-white/8 rounded-lg text-xs sm:text-sm">
                      Доставка по России
                    </span>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent sm:h-20" />
            </div>
          </div>
        </section>
        <section
          id="solutions"
          aria-label="Комплексное решение"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            <div className="sm:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Комплексное решение
              </h2>
              <p className="text-gray-700">
                От инженерной подготовки и подготовки поверхности до нанесения
                покрытий и пост-обработки — мы берем на себя весь цикл.
                Оптимизируем логистику, контролируем качество и соблюдаем сроки.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mt-4">
                <li>Технологическая подготовка и проектирование</li>
                <li>Сертифицированные материалы и контроль</li>
                <li>Масштабируемость от единиц до серий</li>
                <li>Упаковка и логистика под клиента</li>
              </ul>
            </div>
            <div className="sm:col-span-5">
              <div className="rounded-xl overflow-hidden bg-gray-50 p-4 border border-gray-100">
                <img
                  src="/tach.png"
                  alt="Решения и процессы"
                  className="w-full h-44 object-cover rounded-md"
                />
                <p className="mt-4 text-sm text-gray-600">
                  Индивидуальный подход и оптимизация технологического процесса
                  для экономии времени и материалов.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contacts" className="mt-5 md:mt-10">
          <Contact />
        </section>
        <Slider />
        <Examples />
        <section
          id="partners"
          aria-label="Наши партнёры"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-8">
              Наши партнёры
            </h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-center justify-items-center">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/Atomspec.png"
                  alt="Атомспецсервис"
                  className="h-20 sm:h-24 object-contain mb-3"
                  loading="lazy"
                />
                <p className="text-sm sm:text-base font-medium text-gray-700">
                  Атомспецсервис
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="/Atommash.png"
                  alt="Атоммашэкспорт"
                  className="h-20 sm:h-24 object-contain mb-3"
                  loading="lazy"
                />
                <p className="text-sm sm:text-base font-medium text-gray-700">
                  Атоммашэкспорт
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
