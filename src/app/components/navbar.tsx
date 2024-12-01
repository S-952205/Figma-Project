import { Inter } from "next/font/google";
import Link from "next/link";

//Inter font impot kiya google font say
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
   // Define dynamic navigation items
    let navItems = [
        {
            name: "Works",
            link: "#",
        },
        {
            name: "Blog",
            link: "#",
        },
        {
            name: "Contact",
            link: "#",
        }

    ];

  return (
    <div>
      <ul
        className={`${inter.className} m-[66px] flex items-center justify-end font-[500]
        text-[20px] space-x-5`}
      >
              {navItems.map((item, i) => (
                  <li key={i}>
                      <Link href={item.link}>{item.name}</Link>
                  </li>
              ))}

        {/* <li>Works</li>
        <li>Blog</li>
        <li>Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
