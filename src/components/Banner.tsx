import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="container mx-auto px-3 lg:px-5 py-5">
      <div className="flex flex-col md:flex-row items-center gap-10 ">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo banner"
            className="object-cover"
          />
        </div>
        <div className="space-y-2 mt-5">
          {/* title */}
          <p className="text-[#377DFF] font-semibold font-display">
            SALE UP TO 35% OFF
          </p>
          {/* heading */}
          <h2 className="font-medium  md:text-4xl font-display text-[#141718]">
            HUNDREDS of <br className="hidden md:block" /> New lower prices!
          </h2>
          {/* description */}
          <p className="text-[#141718] md:text-2xl font-display">
            It is more affordable than ever to give every
            <br className="hidden md:block" /> room in your home a stylish
            makeover
          </p>
          {/* button */}
          <div className="flex items-center border-b w-fit">
            <button className="cursor-pointer">Shop now</button>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
