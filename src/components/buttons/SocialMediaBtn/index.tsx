import React from "react";
import * as constants from "components/contants";

import classes from "./index.module.css";

export interface SocialMediaBtnProps {
  name: string;
}

const SocialMediaBtn = ({ name }: SocialMediaBtnProps) => {
  const medias = constants.SOCIAL_MEDIA;
  const socialMedia = medias.find((social) => social.name === name);
  let Logo;
  let link: string = "";

  if (socialMedia && socialMedia.logo) {
    Logo = socialMedia.logo;
  }

  if (socialMedia && socialMedia.link) {
    link = socialMedia.link;
  }

  return (
    <div className={classes.Container}>
      <a className={classes.Link} href={link}>
        {Logo ? Logo : null}
      </a>
    </div>
  );
};

export default SocialMediaBtn;
