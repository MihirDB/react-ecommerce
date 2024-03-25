import React from "react";
import css from "./Footer.module.css";

import Logo from "../../assets/logo.png";
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";

export default function Footer() {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 North Avenue Orlando, FL 32801</span>
                        </span>

                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href="tel:352-306-4415">352-306-4415</a>
                        </span>

                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href="">support@amazon.com</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            Sign In
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            About Us
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            Safety Privacy & Terms
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.copyRight}>
                <span>CopyRight ©2024 Amazon .Inc</span>
                <span>All Rights Reserved.</span>
            </div>
        </div>
    );
}
