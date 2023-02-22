import reactIcon from "../../assets/icons/react-colored.svg";
import javascriptIcon from "../../assets/icons/javascript-colored.svg";
import htmlIcon from "../../assets/icons/html5-colored.svg";
import cssIcon from "../../assets/icons/css3-colored.svg";
import mongoDbIcon from "../../assets/icons/mongodb.svg";
import sassIcon from "../../assets/icons/sass-colored.svg";
import nodeIcon from "../../assets/icons/nodejs-colored.svg";
import expressIcon from "../../assets/icons/express-colored-dark.svg";

const icons = [
  {
    src: reactIcon,
  },
  {
    src: javascriptIcon,
  },
  {
    src: htmlIcon,
  },
  {
    src: cssIcon,
  },
  {
    src: mongoDbIcon,
  },
  {
    src: sassIcon,
  },
  {
    src: nodeIcon,
  },
  {
    src: expressIcon,
  },
];

export function SkillIcon() {
  return (
    <>
      {icons &&
        icons.map((icon) => (
          <div key={icon.src}className="rounded-full shadow-md p-2 sm:p-3 bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-500">
            <img src={icon.src} alt="react icon" width={48} height={48} />
          </div>
        ))}
    </>
  );
}
