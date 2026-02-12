import {
  Instagram,
  Music2,
  Linkedin,
  Facebook,
  Youtube,
  Twitch,
  Twitter
} from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig, type SocialPlatform } from "@/content/site.config";

const iconMap: Record<SocialPlatform, ComponentType<{ className?: string }>> = {
  Instagram,
  TikTok: Music2,
  LinkedIn: Linkedin,
  Facebook,
  YouTube: Youtube,
  Twitch,
  X: Twitter
};

type SocialIconsProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialIcons({ className, iconClassName }: SocialIconsProps) {
  return (
    <div className={className}>
      {siteConfig.socialLinks.map((social) => {
        const Icon = iconMap[social.platform];

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${social.platform} ${social.handle}`}
            className="rounded-full border border-white/15 bg-white/5 p-2 text-stone transition hover:border-rose/70 hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          >
            <Icon className={iconClassName ?? "h-4 w-4"} />
          </a>
        );
      })}
    </div>
  );
}
