// import { BaggageClaim } from "lucide-react";
import { Menu } from "lucide-react";
import {} from "react-icons/si";
const About = () => {
  const skills = [
    {
      icon: <Menu className="text-orange-500 text-2xl" />,
      title: "Languages",
      details: "HTML, CSS, JavaScript, React Js, Next Js",
    },
    {
      icon: <Menu className="text-blue-500 text-2xl" />,
      title: "Education",
      details: "B.Tech in Computer Science",
    },
    {
      icon: <Menu className="text-red-500 text-2xl" />,
      title: "Projects",
      details: "Built more than 5 projects",
    },
  ];

  const tools = [
    {
      icon: <Menu className="text-blue-500 text-3xl" />,
      name: "VS Code",
    },
    { icon: <Menu className="text-red-500 text-3xl" />, name: "Git" },
    { icon: <Menu className="text-purple-500 text-3xl" />, name: "Figma" },
    { icon: <Menu className="text-black text-3xl" />, name: "Next.js" },
  ];
  return (
    <div className="container mx-auto p-6">
      {/* Layout chính */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Ảnh đại diện */}
        <div className="w-80 max-w-full rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1740166260070-4d129541aa52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt="Profile"
            className="w-full object-cover  rounded-lg shadow-lg"
          />
        </div>

        {/* Nội dung giới thiệu */}
        <div className="flex-1 md:text-left">
          <p className="text-gray-700 text-lg">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth. I am passionate about
          </p>

          {/* Thẻ thông tin */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-15 max-w-2xl gap-6 ">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-gray-300 py-10 px-3 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{skill.details}</p>
              </div>
            ))}
          </div>

          {/* Công cụ sử dụng */}
          <h3 className="mt-3 text-lg font-semibold">Tools I use</h3>
          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            {tools.map((tool, index) => (
              <div key={index} className="p-3 bg-gray-100 rounded-lg shadow-md">
                {tool.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
