import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";

const MenuMobile = () => {
  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Khóa học", href: "/khoa-hoc" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Điều khoản", href: "/dieu-khoan" },
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

          <div className="mt-6 mx-5">
            <Button className="w-full flex justify-center items-center gap-2 border border-gray-300">
              Connect <MoveUpRight className="w-5 h-5" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
