import React, { Component } from "react";
import Twitter from "twitter-core";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.user = this.hardcodeUser();
    }

    hardcodeUser() {
        let user = new Twitter.User();

        user.backgroundPhoto = "http://url.com/background-photo.jpg";
        user.userPhoto = "http://bettyboop.com/wp-content/themes/bb/img/betty_new.png";
        user.twitterHandle = "@bettyboop";
        user.name = "Betty Boop";
        user.description = "Boop Oop a Doop";
        user.location = "Fleischman Cartoons";
        user.url = "www.bettyboop.com";
        user.myfollowers = ["@Qing-ling", "@Mei-ling", "@Ai-ling"];
        user.ifollow = ["@Buddha", "@TheAjan", "@Maxene", "@LaVerne", "@Patty"];

        return user;
    }

    render() {
        return (
            <div className="profile-page">
                <img src={this.user.userPhoto} />
                <h1>{this.user.name}</h1>
                <h2>{this.user.twitterHandle}</h2>
                <p>{this.user.description}</p>
                <p>{this.user.location}</p>
                <p><a href={this.user.url}>{this.user.url}</a></p>
                <div>
                    <span className="following">{this.user.ifollow.length} following</span>
                    <span className="followers">{this.user.myfollowers.length} followers</span>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
