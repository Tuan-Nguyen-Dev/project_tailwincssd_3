import { ArrowRight } from "lucide-react";
interface BlogCardProps {
  image: string;
  title: string;
  link: string;
}
const BlogCard = (props: BlogCardProps) => {
  const { title, link, image } = props;
  return (
    <div>
      <div className="max-w-sm">
        <img src={image} alt={title} className="w-full h-auto rounded-md" />
        <h3 className="mt-4 text-lg font-semibold text-[#141718]">{title}</h3>
        <a
          href={link}
          className="inline-flex items-center border-b border-black pb-1 mt-2 text-black"
        >
          Read More <ArrowRight size={18} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
