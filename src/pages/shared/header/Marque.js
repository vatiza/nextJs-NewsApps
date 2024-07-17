import getHeadingNews from "@/utils/getHeadingNews";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const headingNews = getHeadingNews();
  console.log(headingNews);
  return (
    <div>
      <Marquee></Marquee>
    </div>
  );
};

export default Marque;
