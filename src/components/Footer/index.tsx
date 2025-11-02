export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-5 md:mt-12 w-full">
      <div className="max-w-[1160px] px-4 sm:px-8 lg:px-16 mx-auto py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-lg font-extrabold text-[#0087bd]">
            АТОМХИМПЛАСТ
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Профессиональная гальваника и покрытие деталей
          </div>
        </div>

        <nav className="flex flex-wrap gap-6">
          <a href="/#solutions" className="text-sm text-gray-600 hover:text-gray-800">Решения</a>
          <a href="/catalog#catalog-intro" className="text-sm text-gray-600 hover:text-gray-800">Каталог</a>
          <a href="/catalog#extra-services" className="text-sm text-gray-600 hover:text-gray-800">Спецпокрытия</a>
          <a href="/#projects" className="text-sm text-gray-600 hover:text-gray-800">Примеры</a>
          <a href="/#partners" className="text-sm text-gray-600 hover:text-gray-800">Партнёры</a>
          <a href="/#contacts" className="text-sm text-gray-600 hover:text-gray-800">Контакты</a>
        </nav>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} АТОМХИМПЛАСТ. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
