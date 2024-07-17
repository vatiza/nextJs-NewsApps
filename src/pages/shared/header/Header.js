import Image from "next/image";
import logo from "@/assets/img/The Dragon News.png";
import getDate from "@/utils/getDate";
import Marque from "./Marque";
const Header = () => {
  const date = getDate();
  console.log(date);
  return (
    <div>
      <div className="w-full  ">
        <Image className="mx-auto" src={logo} alt="the dragon news"></Image>
        <p className="text-center">Journalism Without Fear or Favour</p>
        <p className="text-center mb-2">{`${date?.day}, ${date?.month} ${date?.date}, ${date?.year}`}</p>
      </div>
      <Marque></Marque>
    </div>
  );
};

export default Header;
