import Button from "../Button";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap gap-4`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => window.open(social.link)}
          className="flex items-center gap-3 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-500 transition duration-200 cursor-pointer"
        >
          {social.headerImage && (
            <img
              src={social.headerImage}
              alt={social.title}
              className="w-6 h-6 object-cover rounded-full"
            />
          )}
          <span className="text-sm font-medium px-2">{social.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
