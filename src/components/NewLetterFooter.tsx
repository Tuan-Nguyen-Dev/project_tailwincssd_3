import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Footer from "./Footer";

const NewLetterFooter = () => {
  return (
    <div className="bg-gray-100 container mx-auto">
      <div className="flex flex-col items-center justify-center py-10 md:py-20">
        <h3 className="text-[#141718] font-display font-medium p-3 text-3xl md:text-5xl">
          Join Our Newsletter
        </h3>
        <p className="text-[#141718] font-display">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2 py-5">
          <Mail className="hidden md:block" />
          <Input
            type="email"
            placeholder="Email"
            className="border-none px-5"
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewLetterFooter;
