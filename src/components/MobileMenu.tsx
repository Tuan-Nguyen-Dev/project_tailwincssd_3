import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileMenu = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ];
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-white">
          <ul className="items-center gap-6 text-gray-700 py-3 mt-5">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-lg font-semibold text-gray-700 border border-[#A7A7A7] rounded-md mt-8 mx-5"
              >
                <a href={item.href}>
                  <Button variant={"link"} className="px-3 py-2 rounded-lg">
                    {item.label}
                  </Button>
                </a>
              </li>
            ))}
          </ul>

          {/* <div className="mt-6 mx-5">
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
          </div> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
