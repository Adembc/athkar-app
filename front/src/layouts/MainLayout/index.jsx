import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
