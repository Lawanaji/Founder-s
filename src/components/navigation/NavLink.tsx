import { ArrowRight } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
interface Props{
    isMenuOpen: boolean
}

const NavLinkComponent = ({ isMenuOpen}: Props) => {
    const { pathname } = useLocation(); 
    
  
    const navlink = [
      {
        name: "Home",
        label: "Home",
        path: "/"
      },
      {
        name: "About Us",
        label: "About Us",
        path: "/aboutUs"
      },
      {
        name: "Gallary",
        label: "Gallary",
        path: "/gallary"
      },
      {
        name: "Contact Us",
        label: "Constact Us",
        path: "/contactus"
      }
    ]
    const NavLink = ({ nav }: { nav: { name: string; label: string; path: string } }) => {
      const isActive = pathname === nav.path;
  
      return (
        <a
          href={nav.path}
          className={`text-sm px-5 py-2 flex rounded-lg ${
            isActive ? ' text-primaryColor text-xl font-bold' : 'text-gray-800  text-center py-2 md:py-0 text-xl font-bold'
          }`}
        >
          {nav.label}
        </a>
      );
    };
  return (
    <ul   className={`absolute md:static left-0 w-full md:w-auto bg-white md:flex md:items-center md:justify-between md:gap-5 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'block' : 'hidden'
      }`}>
      
      {navlink.map((item) => (
          <li key={item.name}>
            <NavLink nav={item} />
          </li>
        ))}
         
    </ul>
  )
}

export default NavLinkComponent
