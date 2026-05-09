
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/layout/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <Navbar/>

      <main className="flex-1 container mx-auto p-4">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
