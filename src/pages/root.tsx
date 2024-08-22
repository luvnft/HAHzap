import { useStreamsFeed } from "@/hooks/live-streams";
import CategoryLink from "@/element/category/category-link";
import VideoGridSorted from "@/element/video-grid-sorted";
import { AllCategories } from "./category";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export function RootPage() {
  const streams = useStreamsFeed();
  const shirtSize = 120;

  return (
    <div className="flex flex-col min-w-0 gap-6 p-4">
      <div className="flex items-center gap-2 p-4 text-lg font-medium max-md:flex-col bg-layer-2 text-pretty">
        <img
          width={shirtSize}
          className="rounded-xl"
          src="https://i.imgur.com/exy8v3c.jpeg" // Direct Imgur link
          alt="Z Stream"
        />
        <FormattedMessage
          defaultMessage="Visit {link} to get a Z stream boost paid in Bitcoin!"
          values={{
            link: (
              <Link to="https://market.arvrtise.com/listing/f075f269da8b090605e227504777ed3a30ca392eee3f72a9af42cfeaf3ac8035" className="underline" target="_blank">
                market.arvrtise.com
              </Link>
            ),
          }}
        />
      </div>
      <div className="min-w-0 overflow-x-scroll scrollbar-hidden">
        <div className="flex gap-4 ">
          {AllCategories.filter((a) => a.priority === 0).map((a) => (
            <CategoryLink key={a.id} name={a.name} id={a.id} icon={a.icon} />
          ))}
        </div>
      </div>
      <VideoGridSorted evs={streams} showEnded={false} showPopular={true} showRecentClips={false} />
    </div>
  );
}
