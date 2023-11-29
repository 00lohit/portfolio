import Image from "next/image";
import frame from "@/public/showcase/frame.png";
import { Skeleton } from "@/components/ui/skeleton";
import playStore from "@/public/showcase/googleplay.svg";
import appStore from "@/public/showcase/appstore.svg";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import certiwiz from "@/public/showcase/certiwiz.png";

export default function Showcase() {
  let data = [
    {
      videoId: "1mHvxxgOKKRyENgq4mdZY_62X4VbR-uqX",
      title: " FarmOR Partner App",
      desc: `FarmOR Partner App, helps Input retailers & FPOs source quality inputs for their shop from hundreds of manufacturers. Helps them manage their farmers and E-commerce information. Currently we are serving for retailers & FPOs in Telangana & Andhra Pradesh.`,
      titleStyle:
        "text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7e28c7] to-[#f51687]",
      appStore: "https://apps.apple.com/in/app/farmor-partner/id1663477135",
      playStore: "https://play.google.com/store/apps/details?id=com.app.farmor",
    },
    // {
    //   videoId: "1mHvxxgOKKRyENgq4mdZY_62X4VbR-uqX",
    //   title: " FarmOR Partner App",
    //   desc: `FarmOR Partner App, helps Input retailers & FPOs source quality inputs for their shop from hundreds of manufacturers. Helps them manage their farmers and E-commerce information. Currently we are serving for retailers & FPOs in Telangana & Andhra Pradesh.`,
    //   titleStyle:
    //     "text-5xl md:text-6xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fe6a47] to-[#fab62d]",
    // },
    {
      videoId: "1GAvmYjiCsO7pwmSz7WQGa-pt7siGgsyD",
      title: "Cold Konnect",
      desc: `Cold Konnect simplifies the cold storage industry. Find or list cold storage space with our user-friendly platform. We streamline the booking process, providing efficient solutions for businesses and individuals in the supply chain and logistics industry.`,
      titleStyle:
        "text-5xl md:text-6xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3d8fea] to-[#46d2db]",
      appStore: "",
      playStore:
        "https://play.google.com/store/apps/details?id=com.coldkonnect.customer",
    },
    {
      videoId: certiwiz,
      title: "CertiWiz",
      desc: `CertiWiz is a web application built with Next.js and PostgreSQL that allows users to access their certificates with a unique key, share them on social media, and generate certificates with ease`,
      titleStyle:
        "text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#08d108] to-[#017880]",
      hideStore: true,
      link: "https://certiwiz.00lohit.com/",
    },
  ];

  return (
    <>
      <div className="w-full flex items-center justify-center my-20">
        <p className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#fe6a47] to-[#fab62d]">
          {`Showcase`}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {data.map((item, index) => (
          <ShowcaseItem {...{ ...item }} key={index.toString()} />
        ))}
      </div>
    </>
  );
}

const ShowcaseItem = ({
  videoId,
  title,
  titleStyle,
  appStore,
  playStore,
  desc,
  hideStore,
  link,
}: any) => {
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
    <motion.div
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      ref={ref}
      className="min-h-screen w-screen p-4 flex items-center justify-center flex-col-reverse md:flex-row"
    >
      {hideStore ? (
        <a
          target="_blank"
          href={link}
          className="w-[calc(100vw)]  md:w-[100vw] overflow-hidden flex justify-center items-center relative z-0 mr-32"
        >
          <Image
            src={videoId}
            layout={"responsive"}
            alt={`A cute animal!`}
            unoptimized={true}
            className="w-auto h-auto"
          />
        </a>
      ) : (
        <div>
          <MobileSlides videoId={videoId} />
        </div>
      )}

      <div className="my-8 md:mr-20">
        <h4 className={titleStyle}>{title}</h4>
        <p className="mt-4 text-lg">{desc}</p>

        {!hideStore && (
          <div className="flex flex-col md:flex-row mt-8 md:space-y-0  space-x-0 space-y-2  md:space-x-2">
            {playStore ? (
              <a
                target="_blank"
                href={playStore}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <PlayStore />
              </a>
            ) : (
              <a className="grayscale opacity-75">
                <PlayStore />
              </a>
            )}
            {appStore ? (
              <a
                target="_blank"
                href={appStore}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <AppStore />
              </a>
            ) : (
              <a className="grayscale opacity-75">
                <AppStore />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const MobileSlides = ({ videoId }: { videoId: string }) => {
  let url = "https://drive.google.com/uc?export=download&id=" + videoId;
  return (
    <div className="w-[calc(100vw)]  md:w-[50vw] overflow-hidden flex justify-center items-center relative z-0">
      <Image alt="frame" className="absolute h-full w-auto z-30" src={frame} />
      <div
        className="w-[calc(100vw-3.6rem)] h-[174vw] md:w-[43.5vh]  md:h-[calc(90vh)] z-10 
        rounded-[3rem] md:rounded-[4rem]"
      />

      <div
        className="absolute w-[calc(100vw-3.6rem)]  md:w-[43.5vh]  md:h-[calc(90vh)] z-10 
        rounded-[3rem] md:rounded-[4rem] p-8"
      >
        <div className="mt-16 md:mt-12 flex items-center justify-between">
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="w-44 md:w-52 h-10" />
        </div>

        <Skeleton className="h-52 w-full my-10" />

        <Skeleton className="h-52 w-full my-10" />

        <Skeleton className="h-20 w-full my-10 hidden md:block" />
      </div>

      <video
        className="absolute w-[calc(100vw-3.6rem)]  md:w-[43.5vh]  md:h-[calc(90vh)] z-20 
        rounded-[3rem] md:rounded-[4rem] p-4"
        autoPlay={true}
        loop={true}
        muted={true}
        src={url}
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

const PlayStore = () => (
  <Image priority src={playStore} alt="Google Play Store" />
);

const AppStore = () => <Image priority src={appStore} alt="Apple App Store" />;
