import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get soes ready at your nearest Nike store. Find Your perfect size In
            Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 text-base font-montserrat hover:text-slate-gray cursor-pointer"
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:items-center mt-24 text-white-400 max-sm:flex-col">
        <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copywrite"
            width={20}
            height={20}
            className="rounded-ful m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer ">Terms and Condition</p>
      </div>
    </footer>
  );
}

export default Footer;
