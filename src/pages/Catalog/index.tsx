import { Contact } from "../../components/Contact";
import { Examples } from "../../components/Examples";
import { Footer } from "../../components/Footer";
import { setTitle } from "../../utils/setTitle";

function Catalog() {
  setTitle("Каталог | АТОМХИМПЛАСТ");
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <main className="flex-grow w-full">
        <section
          id="catalog-intro"
          aria-label="Catalog Introduction"
          className="relative w-full bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-14 overflow-hidden"
        >
          <div className="max-w-[1160px] mx-auto relative z-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 text-center sm:text-left">
              Каталог покрытий и обработок
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
              Ознакомьтесь с широким ассортиментом наших технологических
              покрытий и обработок, обеспечивающих надежную защиту, улучшенные
              механические свойства и долговечность изделий. Мы предлагаем
              решения как для стандартных, так и для индивидуальных задач.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  💡 Индивидуальный подбор
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Подберем оптимальное покрытие под ваши технические требования
                  и особенности изделия.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  ⚙️ Высокие стандарты качества
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Используем сертифицированные технологии и строго соблюдаем
                  протоколы нанесения покрытий.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  ♻️ Современные технологии
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Применяем инновационные методы обработки для достижения
                  долговечной и стабильной защиты.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 via-white to-gray-100/10 pointer-events-none rounded-2xl"></div>
        </section>

        <section
          id="extra-services"
          aria-label="Дополнительные виды покрытий"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Функциональные покрытия
            </h2>
            <p className="mt-3 text-gray-700 max-w-prose">
              Для изделий, требующих уникальных характеристик — износостойкости,
              электропроводности или защиты в агрессивных средах.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">Кадмирование</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Обеспечивает высокую стойкость к морской коррозии и химическим
                  воздействиям. Часто применяется в авиационной промышленности.
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">Серебрение</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Используется для улучшения электропроводности, защиты
                  контактов и повышения износостойкости изделий.
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">Медь и сплавы</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Декоративное и техническое покрытие для деталей, где важно
                  сочетание проводимости и антикоррозийных свойств.
                </p>
              </div>
            </div>

            <p className="text-center mt-10 text-gray-700 font-medium">Минимальная сумма заказа — 500 000 руб.</p>
          </div>
        </section>
        <section
          id="protective-coatings"
          aria-label="Защитные покрытия"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Защитные покрытия
            </h2>
            <p className="mt-3 text-gray-700 max-w-prose">
              Эти покрытия предназначены для защиты металлических деталей от
              воздействия агрессивных сред и механических повреждений.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Хромирование
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Защита от износа и улучшение внешнего вида, применяется для
                  инструментов и автомобильных деталей.
                </p>
                <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
                  <li>Размеры: до 3000 мм</li>
                  <li>Толщина покрытия: до 10 мкм</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Никелирование
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Устойчивость к коррозии, декоративный и защитный эффект для
                  металлических изделий.
                </p>
                <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
                  <li>Размеры: до 3000 мм</li>
                  <li>Толщина покрытия: до 50 мкм</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">Цинкование</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Защита от коррозии, увеличение срока службы
                  металлоконструкций.
                </p>
                <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
                  <li>Размеры: до 5000 мм</li>
                  <li>Толщина покрытия: 5–15 мкм</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="special-coatings"
          aria-label="Специальные покрытия"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Специальные покрытия
            </h2>
            <p className="mt-3 text-gray-700 max-w-prose">
              Эти покрытия используются для обеспечения специфических
              технических характеристик: электропроводность, устойчивость к
              износу и улучшенная защита в агрессивных условиях.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">Травление</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Процесс химического травления для подготовки поверхности
                  изделий перед нанесением покрытия.
                </p>
                <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
                  <li>Размеры: до 10000 мм</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Электрохим. полировка
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Полировка металлических поверхностей с целью улучшения
                  внешнего вида и защиты от коррозии.
                </p>
                <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
                  <li>Размеры: до 10000 мм</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="dielectric-coatings"
          aria-label="Покрытия для диэлектриков"
          className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
        >
          <div className="max-w-[1160px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Покрытия для диэлектриков
            </h2>
            <p className="mt-3 text-gray-700 max-w-prose">
              Для покрытия диэлектрических материалов, таких как полимеры,
              стекло, гранит и мрамор, используем специальные покрытия для
              защиты и улучшения функциональных характеристик.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Хромирование
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Применяется для улучшения износостойкости и внешнего вида.
                </p>
                <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
                  <li>Размеры: до 3000 мм</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg sm:text-xl">Цинкование</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Для защиты диэлектрических материалов от воздействия внешней
                  среды.
                </p>
                <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
                  <li>Размеры: до 5000 мм</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-10">
          <Examples />
        </div>

        <section
          id="custom-coating-request"
          aria-label="Индивидуальный запрос покрытия"
          className="w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-inner px-4 sm:px-8 lg:px-16 py-12 mt-10 mb-10"
        >
          <div className="max-w-[1160px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Не нашли интересующее покрытие?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Мы подберем покрытие и разработаем технический протокол под ваши
              задачи. Обеспечим индивидуальный подход по потребностям вашего
              бизнеса.
            </p>
            <p className="mt-4 text-gray-800 font-medium text-lg">
              Заполните форму чуть ниже — и мы свяжемся с вами!
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Catalog;
