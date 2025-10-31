import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    id: "catalog-intro",
    title: "Каталог покрытий и обработок",
    content: (
      <>
        <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
          Ознакомьтесь с широким ассортиментом наших технологических покрытий и
          обработок, обеспечивающих надежную защиту, улучшенные механические
          свойства и долговечность изделий. Мы предлагаем решения как для
          стандартных, так и для индивидуальных задач.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              💡 Индивидуальный подбор
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Подберем оптимальное покрытие под ваши технические требования и
              особенности изделия.
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
      </>
    ),
  },
  {
    id: "protective-coatings",
    title: "Защитные покрытия",
    content: (
      <>
        <p className="mt-3 text-gray-700 max-w-prose">
          Эти покрытия предназначены для защиты металлических деталей от
          воздействия агрессивных сред и механических повреждений.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg sm:text-xl">Хромирование</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Защита от износа и улучшение внешнего вида, применяется для
              инструментов и автомобильных деталей.
            </p>
            <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
              <li>Размеры: до 3000 мм</li>
              <li>Толщина покрытия: до 10 мкм</li>
            </ul>
          </article>
          <article className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg sm:text-xl">Никелирование</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Устойчивость к коррозии, декоративный и защитный эффект для
              металлических изделий.
            </p>
            <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
              <li>Размеры: до 3000 мм</li>
              <li>Толщина покрытия: до 50 мкм</li>
            </ul>
          </article>
          <article className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg sm:text-xl">Цинкование</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Защита от коррозии, увеличение срока службы металлоконструкций.
            </p>
            <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
              <li>Размеры: до 5000 мм</li>
              <li>Толщина покрытия: 5–15 мкм</li>
            </ul>
          </article>
        </div>
      </>
    ),
  },
  {
    id: "special-coatings",
    title: "Специальные покрытия",
    content: (
      <>
        <p className="mt-3 text-gray-700 max-w-prose">
          Эти покрытия используются для обеспечения специфических технических
          характеристик: электропроводность, устойчивость к износу и улучшенная
          защита в агрессивных условиях.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg sm:text-xl">Травление</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Процесс химического травления для подготовки поверхности изделий
              перед нанесением покрытия.
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
              Полировка металлических поверхностей с целью улучшения внешнего
              вида и защиты от коррозии.
            </p>
            <ul className="mt-3 text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
              <li>Размеры: до 10000 мм</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "dielectric-coatings",
    title: "Покрытия для диэлектриков",
    content: (
      <>
        <p className="mt-3 text-gray-700 max-w-prose">
          Для покрытия диэлектрических материалов, таких как полимеры, стекло,
          гранит и мрамор, используем специальные покрытия для защиты и
          улучшения функциональных характеристик.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg sm:text-xl">Хромирование</h3>
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
      </>
    ),
  },
];

export function Slider() {
  const [index, setIndex] = useState(0);
  const directionRef = useRef(0);
  const count = slidesData.length;

  const paginate = (newIndex: number, dir: number) => {
    directionRef.current = dir;
    setIndex(newIndex);
  };
  const next = () => paginate((index + 1) % count, 1);
  const prev = () => paginate((index - 1 + count) % count, -1);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.995,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.995,
    }),
  };

  const swipeConfidenceThreshold = 1000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const h = el.offsetHeight || el.getBoundingClientRect().height;
    setContainerHeight(h);
  }, [index]);

  return (
    <section
      id="catalog-promo-slider"
      aria-label="Промо слайдер каталога"
      className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10 mb-5 md:mb-10"
    >
      <div className="max-w-[1160px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          Каталог — обзор
        </h2>
        <p className="mt-3 text-gray-700 max-w-prose mb-6">
          Краткий обзор разделов каталога. Листайте слайды или переходите в
          полный каталог.
        </p>

        <div className="relative">
          <div className="relative overflow-hidden">
            <div
              className="w-full transition-[height] duration-300 ease-in-out"
              style={{
                height: containerHeight ? `${containerHeight}px` : undefined,
                minHeight: 220,
              }}
            >
              <AnimatePresence initial={false} custom={directionRef.current}>
                <motion.div
                  key={slidesData[index].id}
                  custom={directionRef.current}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.18 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.16}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) next();
                    else if (swipe > swipeConfidenceThreshold) prev();
                  }}
                  className="absolute inset-0 flex items-start"
                >
                  <div
                    ref={contentRef}
                    className="p-6 border border-gray-100 rounded-lg bg-gray-50 w-full"
                  >
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      {slidesData[index].title}
                    </h3>
                    <div className="mt-2 text-gray-700">
                      {slidesData[index].content}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex gap-3 items-center">
                        <button
                          onClick={prev}
                          aria-label="Предыдущий слайд"
                          className="cursor-pointer px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition text-sm"
                        >
                          ← Назад
                        </button>

                        <button
                          onClick={next}
                          aria-label="Следующий слайд"
                          className="cursor-pointer px-4 py-2 rounded-lg bg-[#009bd9] hover:bg-[#0087bd] transition text-white text-sm"
                        >
                          Далее →
                        </button>
                      </div>

                      <a
                        href="/catalog"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium shadow-sm"
                        aria-label="Перейти в каталог"
                      >
                        В каталог
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slidesData.map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i, i > index ? 1 : -1)}
                aria-label={`Перейти к слайду ${i + 1}`}
                className={`cursor-pointer w-3 h-3 rounded-full transition-transform ${
                  i === index ? "scale-125 bg-[#009bd9]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
