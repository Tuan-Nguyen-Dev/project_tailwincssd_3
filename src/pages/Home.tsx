import Banner from "@/components/Banner";
import BlogProduct from "@/components/BlogProduct";
import Navbar from "@/components/Navbar";
import NewLetterFooter from "@/components/NewLetterFooter";
import Product from "@/components/Product";
import Services from "@/components/Services";
import Slider from "@/components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Product />
      <Services />
      <Banner />
      <BlogProduct />
      <NewLetterFooter />
    </div>
  );
};

export default Home;
