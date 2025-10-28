export function Examples() {
  const examples = [
    {
      img: "/one_card.png",
      alt: "Элементы крепежа",
      title: "Элементы крепежа",
      subtitle: "Цинкование",
      description:
        "Изделия были предварительно зачищены и обезжирены, гальванически нанесено цинковое покрытие 20 мкм. Обеспечена защита от влаги и окисления на воздухе.",
    },
    {
      img: "/two_card.png",
      alt: "Промышленные фланцы",
      title: "Промышленные фланцы",
      subtitle: "Никелирование",
      description:
        "Никелирование изделий сложной формы для защиты от коррозии. После подготовки поверхности нанесено покрытие толщиной 15 мкм.",
    },
    {
      img: "/three_card.png",
      alt: "Задвижки",
      title: "Задвижки",
      subtitle: "Хромирование",
      description:
        "Гальваническое хромирование задвижек газового трубопровода для защиты от коррозии и повышения твердости поверхности.",
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Примеры наших работ"
      className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
    >
      <div className="max-w-[1160px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-8 text-gray-900">
          Примеры наших работ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map(({ img, alt, title, subtitle, description }) => (
            <article
              key={title}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={img}
                alt={alt}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                <p className="text-sm font-medium text-gray-600 mt-1">
                  {subtitle}
                </p>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
