import { setTitle } from "../../utils/setTitle";

function NotFound() {
  setTitle('Страница не найдена');
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Страница не найдена</h2>
        <p className="text-gray-500">Проверьте URL или вернитесь на главную.</p>
      </div>
    </div>
  );
}

export default NotFound;
