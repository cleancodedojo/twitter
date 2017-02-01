

class User {

    constructor() {
    	this.name = "";
        this.backgroundPhoto = "";
        this.userPhoto = "";
        this.twitterHandle = "";
        this.description = "";
        this.location = "";
        this.url = "";
        this.myfollowers = [];
        this.ifollow = [];

    }

    addFollowers(handle) {
    	this.myfollowers.push(handle);
    }

    getFollowers() {
    	return this.myfollowers;
    }

    addIFollow(handle){
    	this.ifollow.push(handle);
    }

    getIFollow(){
    	return this.ifollow;
    }



    getProfile() {      
        return {
    		backgroundPhoto: this.backgroundPhoto,
    		userPhoto: this.userPhoto,
    		name: this.name,
    		twitterHandle: this.twitterHandle,
    		description: this.description,
    		location: this.location,
    		url: this.url,
    		myfollowers: this.myfollowers,
    		ifollow: this.ifollow
        }
    }

}

export default User;