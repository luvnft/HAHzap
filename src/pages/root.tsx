import { useStreamsFeed } from "@/hooks/live-streams";
import CategoryLink from "@/element/category/category-link";
import VideoGridSorted from "@/element/video-grid-sorted";
import { AllCategories } from "./category";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import useImgProxy from "@/hooks/img-proxy";

export function RootPage() {
  const streams = useStreamsFeed();
  const { proxy } = useImgProxy();
  const shirtSize = 120;
  return (
    <div className="flex flex-col min-w-0 gap-6 p-4">
      <div className="flex items-center gap-2 p-4 text-lg font-medium max-md:flex-col bg-layer-2 text-pretty">
        <img
          width={shirtSize}
          className="rounded-xl"
          src={proxy(
            "https://i.imgur.com/exy8v3c.jpeg",
            shirtSize,
            "f98bc742ba24b2c729420148d736c3c0f58e6551d7dc0e4bd263d78bf2ab58b8",
          )}
        />
        <FormattedMessage
          defaultMessage="Visit {link} to get a Z stream boost paid in Bitcoin!"
          values={{
            link: (
              <Link to="https://market.arvrtise.com" className="underline" target="_blank">
                market.arvrtise.com
              </Link>
            ),
          }}
        />
      </div>
      <div className="min-w-0 overflow-x-scroll scrollbar-hidden">
        <div className="flex gap-4 ">
          {AllCategories.filter(a => a.priority === 0).map(a => (
            <CategoryLink key={a.id} name={a.name} id={a.id} icon={a.icon} />
          ))}
        </div>
      </div>
      <VideoGridSorted evs={streams} showEnded={false} showPopular={true} showRecentClips={false} />
    </div>
  );
}
