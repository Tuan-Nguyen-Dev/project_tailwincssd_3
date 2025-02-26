import { Button } from "./ui/button";

const MenuDeskTop = () => {
  return (
    <div>
      <ul className="hidden md:flex items-center gap-6 text-gray-700 py-3">
        <li className="cursor-pointer font-bold hover:text-black">
          <Button
            variant={"link"}
            className="hover:no-underline cursor-pointer"
          >
            Trang chủ
          </Button>
        </li>
        <li className="cursor-pointer font-bold hover:text-black">
          <Button
            variant={"link"}
            className="hover:no-underline cursor-pointer"
          >
            Khóa học
          </Button>
        </li>
        <li className="cursor-pointer font-bold hover:text-black">
          <Button
            variant={"link"}
            className="hover:no-underline cursor-pointer"
          >
            Giới thiệu
          </Button>
        </li>
        <li className="cursor-pointer font-bold hover:text-black">
          <Button
            variant={"link"}
            className="hover:no-underline cursor-pointer"
          >
            Điều khoản
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MenuDeskTop;
