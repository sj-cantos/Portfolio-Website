import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className= {`fixed top-0 w-full z-50  ${isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 text-gray-200">
        <a className="animate-slideInRight text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text" href="">{'< SJ />'}</a>
        <ul className="flex space-x-9 animate-slideInLeft">
          <li>
            <a href="" className="duration-300 hover:scale-180 hover:text-blue-400 ">Home</a>
          </li>
          <li>
            <a href="" className="duration-300 hover:scale-180 hover:text-blue-400 ">About</a>
          </li>
          <li>
            <a href="" className="duration-300 hover:scale-180 hover:text-blue-400 ">Projects</a>
          </li>
          <li>
            <a href="" className="duration-300 hover:scale-180 hover:text-blue-400 ">Skills</a>
          </li>
          <li>
            <a href="" className="duration-300 hover:scale-180 hover:text-blue-400 ">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
