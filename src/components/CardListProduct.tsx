import { ProductTypes } from "@/types/ProductCard";
import { Heart } from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { Button } from "./ui/button";

interface CardProduct {
  listProduct: ProductTypes[];
}

const CardListProduct = (props: CardProduct) => {
  const { listProduct } = props;

  return (
    <div>
      <div className="my-10 overflow-x-auto px-5 custom-scrollbar">
        <div className="flex md:flex-row flex-nowrap whitespace-nowrap gap-5 ">
          {listProduct &&
            listProduct.map((item) => (
              <div
                className="min-w-sm bg-gray-100 rounded-xl cursor-pointer mb-5"
                key={item.id}
              >
                <div className="relative">
                  {/* img */}
                  <img
                    src={item.image}
                    alt="image"
                    className="object-cover rounded-2xl relative"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex absolute top-5 flex-col gap-2 ml-3 font-display ">
                      <Button
                        className="bg-white font-semibold cursor-pointer hover:bg-gray-300"
                        variant={"secondary"}
                      >
                        New
                      </Button>
                      <Button className="bg-[#38CB89] font-semibold text-white cursor-pointer">
                        -50%
                      </Button>
                    </div>
                    <div className="flex absolute top-5 right-5 items-center bg-white rounded-full p-2 gap-2">
                      <Heart />
                    </div>
                  </div>
                </div>

                <div className="px-8 py-3">
                  <Button
                    className="w-full bg-black text-white"
                    variant={"secondary"}
                  >
                    Add To Card
                  </Button>
                </div>

                <div className="p-2">
                  <div className="flex text-sm my-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <AiFillStar
                        key={i}
                        className={
                          i < item.rating ? "text-[##343839]" : "text-gray-400"
                        }
                      />
                    ))}
                  </div>

                  {/* title */}
                  <p className="text-[#141718] font-semibold">{item.title}</p>
                  {/* price */}
                  <div className="flex items-center my-2">
                    <span className="text-[#141718] font-semibold mr-2 font-display">
                      {item.price}
                    </span>
                    <span className="text-sm text-[#6C7275] font-display line-through">
                      {item.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardListProduct;
