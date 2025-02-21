import Link from "next/link";

const Logo = () => {
  return (
    <Link 
      href="/" 
      className="flex items-center justify-center gap-x-1 hover:scale-105 transition-transform duration-300"
    >
      <h1 className="h3 text-[#15A34A] dark:text-[#ffff] animate-fadeIn">
        Portfolio
      </h1>
    </Link>
  );
};

export default Logo;
