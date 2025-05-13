import Linkedin from "../assets/Linkedin";
import Github from "../assets/Github";
import ThemeButton from "./ThemeButton";
import Cv from "../assets/Cv";
import React from "react";
import { motion } from "motion/react";
import { AnimatedFooterItem } from "./AnimatedFooterItem";

const DesktopFooter = () => {
  const classes =
    "flex h-fit cursor-pointer items-center justify-center border-0 bg-transparent bg-none p-[2vh] y-[2vh] mx-[6vw] landscape:m-0 landscape:hover:bg-general-primary rounded-full";

  const links = [
    {
      icon: <ThemeButton className={classes} />,
    },
    {
      href: "https://www.linkedin.com/in/mati-fernandez/",
      icon: <Linkedin />,
    },
    {
      href: "https://github.com/mati-fernandez",
      icon: <Github />,
    },
    {
      href: "https://drive.google.com/drive/folders/17_6t9pEX7BIkTsfLXCYRqWZuI0Ygty0P?usp=sharing",
      icon: <Cv />,
    },
  ];

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.1, delay: 0.25 },
          y: 0,
          opacity: 1,
        },
      }}
      className="bg-secondary mx-[25vw] mb-5 box-border hidden items-center justify-between rounded-[50px] px-[5vw] shadow-none landscape:flex"
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
    </motion.footer>
  );
};

export default DesktopFooter;
