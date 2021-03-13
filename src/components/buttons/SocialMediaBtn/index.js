import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../contants";

import classes from "./index.module.css";

const SocialMediaBtn = ({ name }) => {
    const medias = constants.SOCIAL_MEDIA;
    const socialMedia = medias.find(social => social.name === name);
    console.log(socialMedia);
    let Logo = () => <div></div>;
    let link = "";

    if (socialMedia && socialMedia.logo) {
        Logo = socialMedia.logo;
    }

    if (socialMedia && socialMedia.link) {
        link = socialMedia.link;
    }

    return (
        <div className={classes.Container}>
            <a className={classes.Link} href={link}>
                <Logo />
            </a>
        </div>
    );
};

SocialMediaBtn.propTypes = {
    name: PropTypes.string
};

export default SocialMediaBtn;