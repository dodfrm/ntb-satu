import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Define the props for the DestinationCard component
export interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  stats: string;
  href?: string;
  themeColor: string; // e.g., "150 50% 25%" for a deep green
  ctaText?: string;
  onCardClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag,
      stats,
      href = "#",
      themeColor,
      ctaText = "Informasi Rute",
      onCardClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={{
          "--theme-color": themeColor,
        } as React.CSSProperties}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          onClick={onCardClick}
          className="relative block w-full h-full min-h-[420px] rounded-2xl overflow-hidden shadow-lg 
                     transition-all duration-500 ease-in-out cursor-pointer
                     group-hover:scale-[1.03] group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]
                     focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
          aria-label={`Lihat rincian informasi ${location}`}
          style={{
            boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`,
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.94), hsl(var(--theme-color) / 0.7) 35%, transparent 68%)`,
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white min-h-[420px]">
            <h3 className="text-2xl font-bold tracking-tight text-white flex items-center justify-between">
              <span>{location}</span>
              {flag && <span className="text-xl ml-2 shrink-0">{flag}</span>}
            </h3>
            <p className="text-xs text-white/85 mt-2 font-medium leading-relaxed">{stats}</p>

            {/* Explore Button */}
            <div
              className="mt-6 flex items-center justify-between bg-[hsl(var(--theme-color)/0.25)] backdrop-blur-md border border-[hsl(var(--theme-color)/0.35)] 
                             rounded-lg px-4 py-2.5 
                             transition-all duration-300 
                             group-hover:bg-[hsl(var(--theme-color)/0.45)] group-hover:border-[hsl(var(--theme-color)/0.6)]"
            >
              <span className="text-xs font-semibold tracking-wide text-white">{ctaText}</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 text-white shrink-0" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
