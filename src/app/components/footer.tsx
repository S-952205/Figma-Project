import React from "react";
import { Heebo } from "next/font/google";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="h-[243px] space-y-6 bg-footerBackground flex flex-col items-center justify-center">
      {/*Links*/}
      <div className="flex space-x-5">
        <Link href={""}>
          <FaFacebookSquare className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaInstagram className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaTwitter className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaLinkedin className="w-[30px] h-[30px]" />
        </Link>
      </div>

      {/**copyright text*/}
      <p className={`${heebo.className}font-[500] text-[22px]`}>
        Copyright ©2020 All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
