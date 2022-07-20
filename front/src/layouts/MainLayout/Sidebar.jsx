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
      href: "/evening",
      text: "أذكار المساء",
      icon: ImBook,
    },
    {
      href: "/evening",
      text: "أذكار المساء",
      icon: ImBook,
    },
    {
      href: "/evening",
      text: "أذكار المساء",
      icon: ImBook,
    },
    {
      href: "/evening",
      text: "أذكار المساء",
      icon: ImBook,
    },
    {
      href: "/evening",
      text: "أذكار المساء",
      icon: ImBook,
    },
    {
      href: "/evening",
      text: "أذكار المساء",
      icon: ImBook,
    },
  ];
  return (
    <nav className="sidebar">
      <SideNav routes={routes} />
      <div className="legal">&copy; 2022 by Adem Bc. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
