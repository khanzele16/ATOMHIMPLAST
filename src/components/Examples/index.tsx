export function Examples() {
  return (
    <section
      id="projects"
      aria-label="Примеры наших работ"
      className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-8 lg:px-16 py-10 mt-5 md:mt-10"
    >
      <div className="max-w-[1160px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-6">
          Примеры наших работ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
            <img
              src="/one_card.png"
              alt="Элементы крепежа"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Элементы крепежа</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">
                Цинкование
              </p>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Изделия были предварительно зачищены и обезжирены, гальванически
                нанесено цинковое покрытие 20 мкм. Обеспечена защита от влаги и
                окисления на воздухе.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
            <img
              src="/two_card.png"
              alt="Промышленные фланцы"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Промышленные фланцы</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">
                Никелирование
              </p>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Никелирование изделий сложной формы для защиты от коррозии.
                После подготовки поверхности нанесено покрытие толщиной 15 мкм.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
            <img
              src="/three_card.png"
              alt="Задвижки"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Задвижки</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">
                Хромирование
              </p>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Гальваническое хромирование задвижек газового трубопровода для
                защиты от коррозии и повышения твердости поверхности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}