import Header from "./components/Header";
import { routers } from "./config/routers";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col content-center items-center bg-[#f4f6f8] min-h-screen">
      <div className="w-full max-w-[1160px] flex justify-center content-center items-center">
        <Header />
      </div>
      <div className="w-full max-w-[1160px] flex justify-center content-center items-center md:mt-[100px] mt-[80px]">
        <Routes>
          {routers.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
