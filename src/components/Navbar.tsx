import { Badge, Search } from "lucide-react";
import { RiShoppingBag4Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ];
  return (
    <div className="container mx-auto px-3 lg:px-5 py-5">
      <nav className="w-full py-3 bg-white">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <MobileMenu />
            <div className="font-normal text-2xl font-display">3legant</div>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-gray-700  space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="text-[#6C7275]">
                <a href={item.href} className="hover:text-black cursor-pointer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Avatar + Chế độ tối */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Search />
              <RxAvatar size={24} />
            </div>

            <div className="flex items-center gap-2">
              <RiShoppingBag4Line size={24} />
              <Badge />
            </div>
          </div>

          {/* Mobile Menu Button */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
