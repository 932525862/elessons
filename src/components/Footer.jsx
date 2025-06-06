import { useTranslation } from "react-i18next";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const { t } = useTranslation();
  
  return (
    <header className="bg-[#fff] py-5 relative">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
        <div className="mb-6">
            <a className="bg-[#386d63] hover:bg-[#2d5c54] text-[#fff] py-4 px-7 cursor-pointer rounded-4xl font-[600] mt-[20px]" href="tel:+998785550109">78-555-01-09</a>
          </div>
          <nav>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:flex text-[18px] flex-wrap sm:text-[22px] gap-4 font-medium text-[#000]">
            <li className="hover:text-[#386d63]">
                <a href="#home">{t("navbar.home")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#about">{t("navbar.about")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#benefits">{t("navbar.news")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#tariff">{t("navbar.reception")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#tutor">{t("navbar.tyutorlar")}</a>
              </li>
              <li className="hover:text-[#386d63]">
                <a href="#contact">{t("navbar.contact")}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4">
        <div className="container">
          <div className="py-[30px] flex justify-between flex-wrap gap-4">
            <div className="text-[20px] text-gray-500 font-[500]"></div>
            <div>
              {/* <ul className="flex gap-4 text-[25px] text-[#386d63]">
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li className="hover:text-[#2d5c54]">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
