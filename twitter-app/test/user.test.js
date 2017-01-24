"use strict";

import {expect} from "chai";
import User from "../src/user";

describe("User", () => {
    it("shall exist", () => {
        let user = new User();

        expect(user).to.be.defined;
    });

    it("shall have the ability to get the profile properties", () => {
    	let user = new User();
    	user.backgroundPhoto = "http://url.com/background-photo.jpg";
    	user.userPhoto = "http://url.com/user-photo.jpg";
    	user.twitterHandle = "@happy";
    	user.name = "Betty Boop";
    	user.description = "Boop Oop a Doop";
    	user.location = "Fleischman Cartoons";
    	user.url = "www.bettyboop.com";
    	user.myfollowers = ["Qing-ling", "Mei-ling", "Ai-ling"];
    	user.ifollow = ["Maxene", "LaVerne", "Patty"];

    	let expectedProfileJSON = {
    		backgroundPhoto: "http://url.com/background-photo.jpg",
    		userPhoto: "http://url.com/user-photo.jpg",
    		twitterHandle: "@happy",
    		name : "Betty Boop",
    		description : "Boop Oop a Doop",
    		location : "Fleischman Cartoons",
    		url : "www.bettyboop.com",
    		myfollowers : ["Qing-ling", "Mei-ling", "Ai-ling"],
    		ifollow : ["Maxene", "LaVerne", "Patty"]

    	};

    	expect(user.getProfile()).to.deep.equal(expectedProfileJSON);
    });

   it("shall have the ability to add and get followers", () => {
    	let user = new User();
        let follower1 = new User();
        let follower2 = new User();
        let follower3 = new User();
        follower1.twitterHandle = "Aramis";
        follower2.twitterHandle = "Athos";
        follower3.twitterHandle = "Porthos";

        user.addFollowers(follower1.twitterHandle);
        user.addFollowers(follower2.twitterHandle);
        user.addFollowers(follower3.twitterHandle);

        let expectedFollowers = [
    		"Aramis",
    		"Athos",
    		"Porthos"
    	];

    	expect(user.getFollowers()).to.deep.equal(expectedFollowers);
    });

   it("shall have the ability to follow others and get list the user follows", () => {
    	let user = new User();
        let follow1 = new User();
        let follow2 = new User();
        let follow3 = new User();
        follow1.twitterHandle = "Yippee";
        follow2.twitterHandle = "Yappee";
        follow3.twitterHandle = "Yahooie";

        user.addIFollow(follow1.twitterHandle);
        user.addIFollow(follow2.twitterHandle);
        user.addIFollow(follow3.twitterHandle);

        let expectedFollows = [
    		"Yippee",
    		"Yappee",
    		"Yahooie"
    	];

    	expect(user.getIFollow()).to.deep.equal(expectedFollows);
    });   




});
