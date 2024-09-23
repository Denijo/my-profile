"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={`${
              item.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize  font-medium hover:text-accent transition-all`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
