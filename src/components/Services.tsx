import { LiaShippingFastSolid } from "react-icons/lia";
import { BiMoney } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <LiaShippingFastSolid size={30} />,
      title: "Free Shipping",
      description: "Order above $200",
    },
    {
      id: 2,
      icon: <BiMoney size={30} />,
      title: "Money-back",
      description: "30 days guarantee",
    },
    {
      id: 3,
      icon: <AiOutlineLock size={30} />,
      title: "Secure Payments",
      description: "Secured by Stripe",
    },
    {
      id: 4,
      icon: <FiPhoneCall size={30} />,
      title: "24/7 Support",
      description: "Phone and Email support",
    },
  ];
  return (
    <div className="container mx-auto px-3 lg:px-5 py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {services &&
          services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 px-8 py-8 md:py-12 rounded-md transition-all duration-300 hover:bg-gray-300 hover:scale-105"
            >
              <div className="flex mb-3">{service.icon}</div>
              <h3 className="font-semibold">{service.title}</h3>
              <span className="text-[#6C7275]">{service.description}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
