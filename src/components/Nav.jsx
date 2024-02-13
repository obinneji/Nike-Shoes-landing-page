import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="padding-x py-8   z-10 w-full absolute">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-grey"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {open === false ?  <div className="hidden max-lg:block cursor-pointer">
            <img
              src={hamburger}
              width={25}
              height={25}
              alt="hamburger "
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>: <div  className="hidden max-lg:block cursor-pointer font-semibold text-3xl text-black " onClick={() => {
                setOpen(false);
              }}>X</div> }
         
        </nav>
      </header>
      {open && (
        <div className="hidden max-lg:block w-screen text-white   ">
          <ul className=" flex flex-col relative top-20 left-8 gap-3 bg-gray-500 w-full ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-grey cursor-pointer hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
