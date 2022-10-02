import Logo from "../../assets/Component 11"
import Navbar from "../navbar/Navbar"

function Header() {
  return (
    <header className="container-fluid">
      <div className="container flex flex-col mx-auto py-6">
        <div className="flex justify-between flex-wrap mx-2 sm:mx-0">
          <div className="flex items-center lg:hidden">
            <Logo className="mr-4 sm:h-[80px] h-[60px]" />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
