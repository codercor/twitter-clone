import React from "react";
import "./style.css";

import Logo from "./assets/logo.svg";
import Hashtag from "./assets/hashtag.svg";
import Notifications from "./assets/notifications.svg";
import Messages from "./assets/messages.svg";
import Saved from "./assets/saved.svg";
import Lists from "./assets/lists.svg";
import Home from "./assets/home.svg";
import Profile from "./assets/profile.svg";
import More from "./assets/3dot.svg";
export default function index() {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-item">
          {" "}
          <img className="logo" alt="" src={Logo} />
        </div>
        <div className="sidebar-item">
          {" "}
          <img className="sidebar-icon" alt="" src={Home} />
          <span> Anasayfa </span>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" alt="" src={Hashtag} />
          <span> Keşfet </span>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" alt="" src={Notifications} />
          <span> Bildirimler </span>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" alt="" src={Messages} />
          <span> Mesajlar </span>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" alt="" src={Saved} />
          <span> Yer İşaretleri </span>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" alt="" src={Lists} />
          <span> Listeler </span>
        </div>
        <div className="sidebar-item">
          {" "}
          <img className="sidebar-icon" alt="" src={Profile} />{" "}
          <span>Profil </span>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" alt="" src={More} />
          <span> Daha Fazla </span>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-tweet-button"> Tweetle </div>
        </div>
        <div className="sidebar-footer-box">
          <div>
            <img
              className="profile-photo-thumb"
              src="https://pbs.twimg.com/profile_images/1359487114837192704/60M-aLXX_normal.jpg"
            />
            <div className="sidebar-footer-text">
              <span>Mustafa Çor Yılbaşı özel</span>
              <span> @corxjs </span>
            </div>
            <img className="sidebar-footer-icon" alt="" src={More} />
          </div>
        </div>
      </div>
    </div>
  );
}
