import { ProductTypes } from "@/types/ProductCard";
import { ArrowRight } from "lucide-react";
import CardListProduct from "./CardListProduct";
import { Button } from "./ui/button";
interface Category {
  id: number | string;
  title: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Living Room",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "Shop Now",
  },
  {
    id: 2,
    title: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "Shop Now",
  },
  {
    id: 3,
    title: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "Shop Now",
  },
];

const listProducts: ProductTypes[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    title: "Loveseat Sofa",
    price: 199.0,
    oldPrice: 400.0,
    rating: 4,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Chair",
    price: 149.99,
    oldPrice: 300.0,
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    title: "Office Desk",
    price: 249.0,
    oldPrice: 500.0,
    rating: 3,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    title: "Office Desk",
    price: 500.0,
    oldPrice: 1000.0,
    rating: 4,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    title: "Office Desk",
    price: 500.0,
    oldPrice: 1000.0,
    rating: 4,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    title: "Office Desk",
    price: 500.0,
    oldPrice: 1000.0,
    rating: 4,
  },
];

const Product = () => {
  const bodyStyle =
    "bg-gray-100 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer";
  return (
    <div className="container mx-auto px-3 lg:px-5 py-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Heading */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-4xl md:text-7xl font-display">
            Simply Unique <span className="text-[#6C7275]"> /</span>{" "}
            <br className="hidden md:block" /> Simply Better.
          </h1>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-500 text-xl">
            <strong className="text-black font-bold">3legant</strong> is a gift
            & decorations store based in HCMC, Vietnam. Est since{" "}
            {` ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>

      {/* Category Gird */}

      <div className="py-5 grid grid-cols-1 md:grid-cols-2 auto-rows-[300px] gap-4 my-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${bodyStyle} ${
              category.id === 1 ? "md:row-span-2" : ""
            }`}
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 flex flex-col p-6 items-start ${
                category.id === 1 ? "justify-start" : "justify-end bottom-0"
              }`}
            >
              <h2 className="text-[#F3F5F7] text-2xl font-bold">
                {category.title}
              </h2>
              <a
                href="#"
                className="text-gray-600 hover:text-black mt-2 flex items-center gap-1"
              >
                Shop Now
                <Button variant={"ghost"} className="text-2xl">
                  <ArrowRight />
                </Button>
              </a>
              <div className="border-t h-3 w-10"></div>
            </div>
          </div>
        ))}
      </div>

      {/* New Arrivals */}
      <div>
        <div className="flex items-center justify-between gap-5">
          <h3 className="text-2xl md:text-4xl font-display font-medium">
            New <br className="hidden md:block" /> Arrivals
          </h3>
          <div className="flex items-center border-b">
            <button className="cursor-pointer">More Product</button>
            <ArrowRight size={20} />
          </div>
        </div>

        {/* Card */}
        <CardListProduct listProduct={listProducts} />
      </div>
    </div>
  );
};

export default Product;
