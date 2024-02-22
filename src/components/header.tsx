import { NavTop } from "@/components/nav-top";
import { NavBottom } from "@/components/nav-bottom";

const Header = () => {
  return (
    <header className="fixed z-[1000] h-fit w-full shadow-md">
      <NavTop />
      <NavBottom />
    </header>
  );
};

export default Header;
