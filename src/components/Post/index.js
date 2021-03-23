import React from 'react'
import './style.css'
export default function index() {
    return (
        <div className="post">
            <div className="profile-image">
                <img src="https://pbs.twimg.com/profile_images/1359487114837192704/60M-aLXX_normal.jpg" alt="profile" />
            </div>
            <div className="content">
                <span>Mustafa Çor </span> <span>@corxjs</span> · <span>1dk önce</span>
            </div>
        </div>
    )
}
