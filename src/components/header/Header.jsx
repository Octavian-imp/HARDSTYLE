import Logo from "../../assets/Component 11";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className={`container-fluid`}>
      <div className="container flex flex-col mx-auto py-6">
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center lg:hidden">
            <Logo height="80" className="mr-4" />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
