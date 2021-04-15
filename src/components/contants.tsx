import React from "react";
// SOCIAL MEDIA LOGO IMPORT
import { ReactComponent as TwitterLogo } from "../assets/icons/social/twitter-brands.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/social/github-brands.svg";

// ICON IMPORT
import { ReactComponent as HomeIcon } from "../assets/icons/home-solid.svg";
import { ReactComponent as ProjectIcon } from "../assets/icons/folder-solid.svg";
import { ReactComponent as HabitIcon } from "../assets/icons/chart-bar-solid.svg";
import { ReactComponent as GoalsIcon } from "../assets/icons/bullseye-solid.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/user-solid.svg";
import { ReactComponent as ElipsisIcon } from "../assets/icons/ellipsis-h-solid.svg";
import { ReactComponent as CheckIcon } from "assets/icons/check-solid.svg";

export interface SocialMediaType {
  name: string;
  url: string;
  link: string;
  logo: React.SVGProps<SVGSVGElement>;
}

export type SocialMediaList = SocialMediaType[];

export const SOCIAL_MEDIA: SocialMediaList = [
  {
    name: "twitter",
    url: "icons/social/twitter-brands.svg",
    link: "https://twitter.com/Crys_Dev",
    logo: <TwitterLogo />,
  },
  {
    name: "github",
    url: "icons/social/github-brands.svg",
    link: "https://github.com/Vincent-Projects",
    logo: <GithubLogo />,
  },
];

export const TWITTER = "twitter";
export const GITHUB = "github";

export interface Icon {
  name: string;
  url: string;
  img: React.SVGProps<SVGSVGElement>;
}

export type IconList = Icon[];

export const ICONS: IconList = [
  {
    name: "HOME",
    url: "icons/home-solid.svg",
    img: <HomeIcon />,
  },
  {
    name: "PROJECTS",
    url: "icons/folder-solid.svg",
    img: <ProjectIcon />,
  },
  {
    name: "HABIT",
    url: "icons/chart-bar-solid.svg",
    img: <HabitIcon />,
  },
  {
    name: "GOALS",
    url: "icons/bullseye-solid.svg",
    img: <GoalsIcon />,
  },
  {
    name: "PROFILE",
    url: "icons/user-solid.svg",
    img: <ProfileIcon />,
  },
  {
    name: "CHECK",
    url: "icons/check-solid.svg",
    img: <CheckIcon />,
  },
  {
    name: "ELLIPSIS",
    url: "icons/ellipsis-h-solid.svg",
    img: <ElipsisIcon />
  }
];

export const HOME = "HOME";
export const PROJECTS = "PROJECTS";
export const HABIT = "HABIT";
export const GOALS = "GOALS";
export const PROFILE = "PROFILE";
export const CHECK = "CHECK";
export const ELLIPSIS = "ELLIPSIS"

export const ICONS_ROUTES = {
  HOME,
  PROJECTS,
  HABIT,
  GOALS,
  PROFILE,
  ELLIPSIS
};
