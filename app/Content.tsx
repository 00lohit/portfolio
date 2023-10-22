import Image from "next/image";
import add from "@/public/content/add.gif";
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
    <div className="p-4">
      <div className="w-2/3">
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
        <h3 className="mt-4 text-xl font-semibold">
          My Day in the Code Mines: A Personal Glimpse into My Normal
          Programming Routine
        </h3>
        <Separator className="my-4 " />
        <Reactions />
      </div>
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
      <Eye size={20} />
      <p>
        {views} {views == 1 ? "View" : "Views"}
      </p>
      <Separator orientation="vertical" />
      <Heart
        fill={likes > 0 ? "red" : "transparent"}
        color={likes > 0 ? "red" : "white"}
        onClick={onClick}
        className="cursor-pointer"
        size={20}
      />
      <p onClick={onClick} className="cursor-pointer">
        {likes} {likes == 1 ? "Like" : "Likes"}
      </p>
      <Separator orientation="vertical" />
      <Calendar size={20} />
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
