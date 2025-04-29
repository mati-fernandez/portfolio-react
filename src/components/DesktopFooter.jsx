import Linkedin from "../assets/Linkedin";
import Github from "../assets/Github";
import ThemeButton from "./ThemeButton";
import Cv from "../assets/Cv";
import React from "react";
import { motion } from "motion/react";
import { AnimatedFooterItem } from "./AnimatedFooterItem";

const DesktopFooter = () => {
  const classes =
    "primary flex h-fit cursor-pointer items-center justify-center border-0 bg-transparent bg-none p-[2vh] font-[inherit] y-[2vh] mx-[6vw] landscape:m-0 landscape:text-[0.8rem] landscape:hover:bg-general-primary rounded-full";

  const links = [
    {
      icon: <ThemeButton className={classes} />,
      id: "theme-btn",
    },
    {
      href: "https://www.linkedin.com/in/mati-fernandez/",
      icon: <Linkedin />,
      className: "linkedin-a",
    },
    {
      href: "https://github.com/mati-fernandez",
      icon: <Github />,
    },
    {
      href: "https://drive.google.com/drive/folders/17_6t9pEX7BIkTsfLXCYRqWZuI0Ygty0P?usp=sharing",
      icon: <Cv />,
      id: "cv-mobile-a",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="mb-2.5 box-border hidden h-[11svh] w-full items-center justify-around px-[5vw] landscape:flex"
    >
      {links.map(({ href, icon, className = "", id, target = "_blank" }, i) => {
        const child = href ? (
          <a
            key={i}
            href={href}
            className={`${className} ${classes}`}
            id={id}
            target={target}
          >
            {icon}
          </a>
        ) : (
          <React.Fragment key={i}>{icon}</React.Fragment>
        );

        return <AnimatedFooterItem key={i}>{child}</AnimatedFooterItem>;
      })}
    </motion.div>
  );
};

export default DesktopFooter;
