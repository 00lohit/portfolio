import Image from "next/image";
import add from "@/public/content/add.gif";
import bal from "@/public/content/balance.gif";
import gen from "@/public/content/gen.gif";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Eye, Heart } from "lucide-react";
import { useAlert } from "@/components/custom/show-alert";

export default function Content() {
  const [addOver, setaddOver] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-2/3">
        <div className="relative">
          {addOver ? (
            <MonkeyGif />
          ) : (
            <>
              <Button
                disabled={!(timer == 0)}
                onClick={() => setaddOver((e) => !e)}
                className={"absolute z-50 right-5 bottom-5"}
                variant={"outline"}
              >
                {timer == 0 ? "Skip Ad" : "Skip Ad in " + timer + " seconds"}
              </Button>
              <MonkeyVideo />
            </>
          )}
        </div>
        <h3 className="mt-4 md:text-xl font-semibold">
          My Day in the Code Mines: A Personal Glimpse into My Normal
          Programming Routine
        </h3>
        <Separator className="my-2 md:my-4" />
        <Reactions />
      </div>
      <ExtraContent />
    </div>
  );
}

const Reactions = () => {
  const [views, setviews] = useState(1);
  const [likes, setlikes] = useState(0);
  const { showAlert } = useAlert();

  const Show = (title: string) =>
    showAlert({
      title: title,
      //  description,
      // icon: Copy
    });

  const onClick = () => {
    if (likes > 0) {
      Show(`🥹  Thank You for Liking`);
    }

    setlikes((e) => e + 1);
  };

  return (
    <div className="flex items-center space-x-2 h-8 opacity-75 font-medium text-sm cursor-default">
      <Eye className="w-4 h-4 md:w-5 md:h-5" />
      <p>
        {views} {views == 1 ? "View" : "Views"}
      </p>
      <Separator orientation="vertical" />
      <Heart
        fill={likes > 0 ? "red" : "transparent"}
        color={likes > 0 ? "red" : "white"}
        onClick={onClick}
        className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
      />
      <p onClick={onClick} className="cursor-pointer">
        {likes} {likes == 1 ? "Like" : "Likes"}
      </p>
      <Separator orientation="vertical" />
      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
      <p>69 weeks ago</p>
    </div>
  );
};

const MonkeyVideo = () => (
  <video className="w-full h-auto" loop muted autoPlay={true}>
    <source src="content/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

const MonkeyGif = () => (
  <Image
    src={add}
    layout={"responsive"}
    alt={`A cute animal!`}
    unoptimized={true}
    className="w-full h-auto"
  />
);

const ExtraContent = () => (
  <div className="flex flex-row md:flex-col max-w-full md:w-1/3 my-8 md:my-0">
    {[bal, gen].map((e) => (
      <Image
        src={e}
        layout={"responsive"}
        alt={`A cute animal!`}
        // unoptimized={true}
        className="w-1/2 md:w-full h-auto scale-95 md:hover:scale-100 transition-transform duration-300 ease-in-out"
      />
    ))}
  </div>
);
