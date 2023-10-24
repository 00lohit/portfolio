import Image from "next/image";
import frame from "@/public/showcase/frame.png";
import { Skeleton } from "@/components/ui/skeleton";

export default function Showcase() {
  let data = [
    { videoId: "1mHvxxgOKKRyENgq4mdZY_62X4VbR-uqX" },
    { videoId: "1GAvmYjiCsO7pwmSz7WQGa-pt7siGgsyD" },
  ];
  return (
    <>
      {data.map(({ videoId }) => (
        <div className="h-screen flex">
          <MobileSlides videoId={videoId} />
        </div>
      ))}
    </>
  );
}

import { useEffect, useState } from "react";

const MobileSlides = ({ videoId }: { videoId: string }) => {
  let url = "https://drive.google.com/uc?export=download&id=" + videoId;
  return (
    <div className="h-auto w-auto overflow-hidden flex justify-center items-center">
      <Image alt="frame" className="absolute h-full w-auto z-20" src={frame} />

      <div className="absolute h-full w-[50vh]  z-0 p-10 ">
        <div className="mt-12 flex items-center justify-between">
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="w-60 h-10" />
        </div>

        <Skeleton className="h-52 w-full my-10" />

        <Skeleton className="h-52 w-full my-10" />

        <Skeleton className="h-20 w-full my-10" />
      </div>

      <video
        className="relative w-[50vh]  h-[calc(96vh)] z-10 
        rounded-[4rem]"
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
