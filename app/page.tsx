"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import burn from "@/public/content/burn.webp";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="h-screen w-screen">
        <Content />
        <Showcase />
        <Footer />
      </div>
    </main>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Mail, Phone, MapPin, Copy, File, Linkedin } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAlert } from "@/components/custom/show-alert";
import Link from "next/link";
import Content from "./Content";
import Showcase from "./Showcase";
import Image from "next/image";

const About = () => {
  const { showAlert } = useAlert();

  const Show = (description: string) =>
    showAlert({ title: "Copy That!", description, icon: Copy });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/88456441?s=400&u=435ff1f72af353ee24fb3145eff5d197f2b7f234&v=4"
            alt="@00lohit"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>

        
      <DropdownMenuSeparator /> */}

        <Link target="_blank" href={"./Resume.pdf"}>
          <DropdownMenuItem>
            <span className="flex flex-row">
              <File className="mr-2 h-4 w-4" />
              <span>Resume</span>
            </span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <Link target="_blank" href={"https://www.linkedin.com/in/00lohit"}>
          <DropdownMenuItem>
            <span className="flex flex-row">
              <Linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <CopyToClipboard
          text={"+918629924736"}
          onCopy={() => Show("+918629924736")}
        >
          <DropdownMenuItem>
            <span className="flex flex-row">
              <Phone className="mr-2 h-4 w-4" />
              <span>+91 86299 24736</span>
            </span>
          </DropdownMenuItem>
        </CopyToClipboard>

        <CopyToClipboard
          text={"00lohit@gmail.com"}
          onCopy={() => Show("00lohit@gmail.com")}
        >
          <DropdownMenuItem>
            <span className="flex flex-row">
              <Mail className="mr-2 h-4 w-4" />
              <span>00lohit@gmail.com</span>
            </span>
          </DropdownMenuItem>
        </CopyToClipboard>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <MapPin className="mr-2 h-4 w-4" />
          <span>Hyderabad, India</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NavBar = () => (
  <nav className="p-4 flex flex-row justify-between items-center">
    <Logo />
    <About />
  </nav>
);

const Logo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: {
      transform: "translateX(0px)",
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.69,
      },
    },
    hidden: {
      transform: "translateX(-200px)",
      opacity: 0,
    },
  };

  return (
    <div className="flex row items-center cursor-default">
      <motion.h1
        className="text-4xl z-20 font-semibold text-black bg-[#FF9100] py-1 px-3 rounded-md mr-2"
        animate={{
          position: "relative",
          top: [5, 0, -5, 0],
          left: [-5, 0, 5, 0],
        }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          times: [1, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        Lohit
      </motion.h1>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        <h1 ref={ref} className="text-4xl font-semibold z-10">
          Prakash
        </h1>
      </motion.span>
    </div>
  );
};

const Footer = () => (
  <div className="w-full h-auto flex flex-col md:flex-row p-4 items-center">
    <p className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#fe6a47] to-[#fab62d] md:my-0 mr-0 md:mr-14 my-14">
      {`Other projects/apps are currently taking a well-deserved nap or have gone
      incognito due to company policies. They're in stealth mode, playing hide
      and seek with the world. We promise they're not in trouble, just keeping
      things mysterious!`}
    </p>
    <Image
      src={burn}
      layout={"responsive"}
      alt={`A cute animal!`}
      unoptimized={true}
      className="w-full h-auto"
    />
  </div>
);
