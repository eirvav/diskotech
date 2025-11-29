import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navItems = ["EVENTS", "ABOUT", "CONTACT"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center px-6 py-6 bg-transparent">
      {/* Centered Navigation Links */}
      <div className="absolute left-0 right-0 flex justify-center items-center">
        <div className="flex items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white text-xl tracking-[0.2em] hover:text-gray-300 transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

