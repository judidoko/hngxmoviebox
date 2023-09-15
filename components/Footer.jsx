import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="h-[20%] p-10">
        <div className="flex items-center justify-center space-x-4">
          <FaFacebookSquare className="SocialMediumIcon" />
          <FaInstagram className="SocialMediumIcon" />
          <FaTwitter className="SocialMediumIcon" />
          <FaYoutube className="SocialMediumIcon" />
        </div>
        <div className="flex flex-wrap items-center justify-center my-4 text-lg space-x-4 text-gray-900">
          <Link href="#">Conditions of Use</Link>
          <Link href="#">Privacy & Policy</Link>
          <Link href="#">Press Room</Link>
        </div>
        <p className="flex items-center justify-center text-gray-500 text-lg">
          © 2021 MovieBox by Idoko Jude Agbo
        </p>
      </footer>
    </>
  );
};

export default Footer;
