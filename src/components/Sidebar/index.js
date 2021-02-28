import React, { useState } from "react";
import "./style.css";

import Logo from "./assets/logo.svg";

import HashtagIcon from "./components/HasgtagIcon";
import NotificationsIcon from "./components/NotificationIcon";
import MessagesIcon from "./components/MessagesIcon";
import SavedIcon from "./components/SavedIcon";
import ListsIcon from "./components/ListsIcon";
import ProfileIcon from "./components/ProfileIcon";
import MoreIcon from "./components/MoreIcon";
import HomeIcon from "./components/HomeIcon";

import DotsImg from "./assets/3dot.svg";

const activeItem = {
  color: "rgb(44, 197, 113)",
};

export default function Index() {
  const [selected, setSelected] = useState("home");
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-item">
          {" "}
          <img className="logo" alt="" src={Logo} />
        </div>
        <div
          onClick={() => {
            setSelected("home");
          }}
          className="sidebar-item"
        >
          {" "}
          <HomeIcon
            color={selected == "home" ? "rgb(44, 197, 113)" : "black"}
          />
          <span style={selected == "home" ? activeItem : {}}> Anasayfa </span>
        </div>
        <div
          onClick={() => {
            setSelected("hashtag");
          }}
          className="sidebar-item"
        >
          <HashtagIcon
            color={selected == "hashtag" ? "rgb(44, 197, 113)" : "black"}
          />
          <span style={selected == "hashtag" ? activeItem : {}}> Keşfet </span>
        </div>
        <div
          onClick={() => {
            setSelected("notification");
          }}
          className="sidebar-item"
        >
          <NotificationsIcon
            color={selected == "notification" ? "rgb(44, 197, 113)" : "black"}
          />
          <span style={selected == "notification" ? activeItem : {}}>
            {" "}
            Bildirimler{" "}
          </span>
        </div>
        <div
          onClick={() => {
            setSelected("messages");
          }}
          className="sidebar-item"
        >
          <MessagesIcon
            color={selected == "messages" ? "rgb(44, 197, 113)" : "black"}
          />
          <span style={selected == "messages" ? activeItem : {}}>
            {" "}
            Mesajlar{" "}
          </span>
        </div>
        <div
          onClick={() => {
            setSelected("saved");
          }}
          className="sidebar-item"
        >
          <SavedIcon
            color={selected == "saved" ? "rgb(44, 197, 113)" : "black"}
          />
          <span style={selected == "saved" ? activeItem : {}}>
            {" "}
            Yer İşaretleri{" "}
          </span>
        </div>
        <div
          onClick={() => {
            setSelected("lists");
          }}
          className="sidebar-item"
        >
          <ListsIcon
            color={selected == "lists" ? "rgb(44, 197, 113)" : "black"}
          />
          <span style={selected == "lists" ? activeItem : {}}> Listeler </span>
        </div>
        <div
          onClick={() => {
            setSelected("profile");
          }}
          className="sidebar-item"
        >
          {" "}
          <ProfileIcon
            color={selected == "profile" ? "rgb(44, 197, 113)" : "black"}
          />{" "}
          <span style={selected == "profile" ? activeItem : {}}>Profil </span>
        </div>
        <div
          onClick={() => {
            setSelected("more");
          }}
          className="sidebar-item"
        >
          <MoreIcon
            color={selected == "more" ? "rgb(44, 197, 113)" : "black"}
          />
          <span style={selected == "more" ? activeItem : {}}> Daha Fazla </span>
        </div>

        <div id="sidebar-tweet-button"> Tweetle </div>

        <div className="sidebar-footer-box">
          <div>
            <img
              className="profile-photo-thumb"
              alt=""
              src="https://pbs.twimg.com/profile_images/1359487114837192704/60M-aLXX_normal.jpg"
            />
            <div className="sidebar-footer-text">
              <span>Mustafa Çor Yılbaşı özel</span>
              <span> @corxjs </span>
            </div>
            <img alt="" className="sidebar-footer-icon" src={DotsImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
