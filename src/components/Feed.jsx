import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "./contextApi";
import LeftNavigation from "./LeftNavigation";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { load, search } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100% - 56px)]">
      <LeftNavigation />
      <div className="grow w-[calc(100% - 240px)] h-full overflow-y-auto bg-black w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 overflow-hidden">
          {!load &&
            search &&
            search?.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
