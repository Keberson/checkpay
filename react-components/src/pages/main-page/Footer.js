import React from "react";
import Text from "../../components/Text";
import Link from "../../components/Link";

function Footer() {
    return (
        <div className="main-footer">
            <div className="main-container_flex">
                <Text classes="main-footer__copyright" value="© Check Pay 2022" />
                <div className="main-footer__right-side">
                    <Link classes="main-footer__github" link="https://github.com/keberson" >
                        <svg viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_216_3249)">
                                <path
                                    d="M15.6947 47.46C15.4907 47.688 15.2327 47.652 14.9267 47.346C14.5967 47.064 14.5427 46.824 14.7707 46.62C14.9747 46.392 15.2327 46.428 15.5387 46.734C15.8447 47.016 15.8987 47.256 15.6947 47.46ZM14.0867 45.126C14.3147 45.432 14.3147 45.672 14.0867 45.852C13.8827 46.008 13.6667 45.918 13.4327 45.582C13.1987 45.246 13.2047 45.018 13.4327 44.892C13.6667 44.724 13.8827 44.796 14.0867 45.126ZM11.7527 42.828C11.6267 43.008 11.4587 43.032 11.2547 42.906C11.0027 42.78 10.9127 42.624 10.9847 42.45C11.0627 42.324 11.2247 42.3 11.4827 42.372C11.7407 42.498 11.8307 42.654 11.7527 42.828ZM12.9407 44.136C12.7847 44.316 12.5807 44.274 12.3287 44.022C12.1007 43.74 12.0707 43.536 12.2507 43.41C12.4067 43.254 12.6107 43.296 12.8627 43.524C13.0967 43.8 13.1207 44.004 12.9407 44.136ZM17.8787 48.42C17.7767 48.726 17.5307 48.804 17.1527 48.648C16.7207 48.546 16.5527 48.354 16.6547 48.072C16.7567 47.79 17.0027 47.706 17.3807 47.802C17.7887 47.94 17.9567 48.144 17.8787 48.42ZM20.2907 48.612C20.2907 48.894 20.0867 49.032 19.6787 49.032C19.2467 49.08 19.0247 48.942 19.0247 48.612C19.0247 48.33 19.2287 48.192 19.6367 48.192C20.0747 48.138 20.2907 48.282 20.2907 48.612ZM22.5107 48.228C22.5587 48.48 22.3847 48.66 21.9767 48.762C21.5687 48.864 21.3407 48.762 21.2867 48.456C21.2387 48.15 21.4127 47.958 21.8207 47.88C22.2287 47.838 22.4567 47.952 22.5107 48.228ZM59.4167 11.634V48.384C59.4167 51.42 58.3367 54.018 56.1827 56.172C54.0287 58.332 51.4307 59.406 48.3947 59.406H39.8147C39.4067 59.406 39.0947 59.394 38.8787 59.364C38.6627 59.34 38.4107 59.274 38.1287 59.172C37.8467 59.07 37.6427 58.884 37.5167 58.614C37.3907 58.344 37.3247 57.996 37.3247 57.558V48.42C37.3247 45.942 36.6587 44.13 35.3327 42.984C36.7907 42.828 38.0987 42.6 39.2567 42.294C40.4207 41.988 41.6147 41.49 42.8567 40.8C44.0927 40.11 45.1307 39.264 45.9587 38.256C46.7867 37.248 47.4647 35.91 47.9867 34.236C48.5087 32.562 48.7727 30.642 48.7727 28.476C48.7727 25.386 47.7647 22.758 45.7487 20.592C46.6907 18.27 46.5887 15.666 45.4427 12.786C44.7287 12.558 43.6907 12.696 42.3407 13.206C40.9907 13.716 39.8147 14.28 38.8187 14.892L37.3607 15.81C34.9847 15.144 32.5367 14.814 30.0107 14.814C27.4847 14.814 25.0367 15.144 22.6607 15.81C22.2527 15.528 21.7127 15.186 21.0347 14.778C20.3567 14.37 19.2947 13.878 17.8367 13.302C16.3787 12.726 15.2867 12.552 14.5427 12.786C13.4207 15.672 13.3307 18.276 14.2727 20.592C12.2567 22.764 11.2487 25.392 11.2487 28.476C11.2487 30.648 11.5127 32.562 12.0347 34.218C12.5567 35.88 13.2287 37.218 14.0447 38.238C14.8607 39.258 15.8867 40.116 17.1287 40.806C18.3647 41.496 19.5647 41.994 20.7287 42.3C21.8927 42.606 23.2007 42.834 24.6527 42.99C23.6327 43.908 23.0087 45.222 22.7747 46.932C22.2407 47.184 21.6647 47.376 21.0527 47.508C20.4407 47.634 19.7147 47.7 18.8687 47.7C18.0287 47.7 17.1887 47.424 16.3607 46.878C15.5327 46.332 14.8247 45.534 14.2367 44.484C13.7507 43.668 13.1327 43.002 12.3767 42.492C11.6267 41.982 10.9907 41.676 10.4807 41.574L9.7127 41.46C9.1787 41.46 8.8067 41.52 8.6027 41.634C8.3987 41.748 8.3327 41.898 8.4107 42.078C8.4887 42.258 8.6027 42.438 8.7587 42.612C8.9147 42.786 9.0767 42.942 9.2567 43.068L9.5267 43.26C10.0907 43.512 10.6427 43.998 11.1947 44.718C11.7467 45.438 12.1427 46.086 12.4007 46.668L12.7847 47.55C13.1147 48.522 13.6787 49.308 14.4707 49.902C15.2627 50.502 16.1207 50.886 17.0387 51.048C17.9567 51.216 18.8447 51.306 19.6967 51.318C20.5547 51.33 21.2627 51.282 21.8207 51.186L22.7027 51.03C22.7027 52.002 22.7087 53.316 22.7207 54.972C22.7327 56.628 22.7387 57.498 22.7387 57.576C22.7387 58.14 22.6007 58.566 22.3187 58.86C22.0367 59.154 21.7547 59.316 21.4787 59.358C21.1967 59.4 20.7767 59.418 20.2127 59.412H11.6387C8.6027 59.412 6.0047 58.332 3.8447 56.178C1.6907 54.006 0.616699 51.408 0.616699 48.366V11.616C0.616699 8.57999 1.6967 5.98799 3.8507 3.82799C6.0047 1.66799 8.6027 0.593994 11.6447 0.593994H48.3947C51.4307 0.593994 54.0287 1.67399 56.1827 3.82799C58.3427 5.98199 59.4167 8.57999 59.4167 11.622V11.634Z"
                                    fill="#C9DAFB"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_216_3249">
                                    <rect width="60" height="60" fill="white" transform="translate(0.0166016)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
