// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ImBook } from "react-icons/im";
import SideNav from "./SideNav/SideNav";

const Sidebar = () => {
  const routes = [
    {
      href: "/",
      text: "أذكار الصباح",
      icon: ImBook,
    },
    {
      href: "/evening",
      text: "أذكار المساء",
      icon: ImBook,
    },
    {
      href: "/sleep",
      text: "أذكار النوم",
      icon: ImBook,
    },
    {
      href: "/wake-up",
      text: "أذكار الإسيقاظ من النوم",
      icon: ImBook,
    },
    {
      href: "/prayer",
      text: "أذكار الصلاة",
      icon: ImBook,
    },
    {
      href: "/after-prayer",
      text: "أذكار بعد الصلاة",
      icon: ImBook,
    },
    {
      href: "/roukia-qu",
      text: "الرقية الشرعية من القرآن",
      icon: ImBook,
    },
    {
      href: "/roukia-sn",
      text: "الرقية الشرعية من السنة",
      icon: ImBook,
    },
    {
      href: "/other",
      text: "أذكار متنوعة",
      icon: ImBook,
    },
  ];
  return (
    <nav className="sidebar">
      <SideNav routes={routes} />
      <div className="legal">&copy; آدم بكّارة 2022</div>
    </nav>
  );
};

export default Sidebar;
