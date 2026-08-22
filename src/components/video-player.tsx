import { useState } from 'react';
import { cn } from '../lib/utils';

interface VideoItem {
  id: string;
  title: string;
  views: string;
  releaseYear: number;
}

interface Props {
  videos: VideoItem[];
}

function thumbnailUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function yearsAgoLabel(releaseYear: number) {
  const years = new Date().getFullYear() - releaseYear;
  if (years <= 0) return 'this year';
  return years === 1 ? '1 year ago' : `${years} years ago`;
}

export function VideoPlayer({ videos }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const active = videos[activeIndex];

  function selectVideo(index: number) {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setPlaying(false);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
          {playing ? (
            <iframe
              key={active.id}
              className="absolute inset-0 h-full w-full border-0"
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              aria-label={`Play video: ${active.title}`}
              className="absolute inset-0 h-full w-full cursor-pointer border-0 bg-transparent p-0"
              onClick={() => setPlaying(true)}
            >
              <img
                src={thumbnailUrl(active.id)}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute top-1/2 left-1/2 h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out hover:scale-110">
                <svg
                  className="h-full w-full drop-shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                  viewBox="0 0 68 48"
                  aria-hidden="true"
                >
                  <path
                    d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                    fill="red"
                  />
                  <path d="M45 24 27 14v20" fill="#fff" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="m-0 text-base font-semibold text-foreground">
          Video Tutorials
        </h3>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {videos.map((video, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={video.id}>
                <button
                  type="button"
                  aria-current={isActive}
                  onClick={() => selectVideo(index)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg border-l-4 border-transparent p-2 text-left transition-colors hover:bg-muted',
                    isActive && 'border-primary bg-muted'
                  )}
                >
                  <img
                    src={thumbnailUrl(video.id)}
                    alt=""
                    loading="lazy"
                    className="h-16 w-28 shrink-0 rounded-md object-cover"
                  />
                  <span className="flex flex-col gap-0.5">
                    <span
                      className={cn(
                        'text-sm font-medium text-foreground',
                        isActive && 'font-semibold'
                      )}
                    >
                      {video.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {video.views} views · {yearsAgoLabel(video.releaseYear)}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
