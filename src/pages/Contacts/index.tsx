import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { setTitle } from "../../utils/setTitle";

function Contacts() {
  setTitle("Контакты | АТОМХИМПЛАСТ");
  return (
    <div className="flex flex-col">
      <Contact />
      <Footer />
    </div>
  );
}

export default Contacts;
