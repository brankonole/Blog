class Post {
    constructor(eachPost) {
        this.userId = eachPost.userId;
        this.id = eachPost.id;
        this.title = eachPost.title;
        this.content = eachPost.body;
    }
}

export default Post;