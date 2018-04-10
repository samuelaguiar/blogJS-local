class Storage {
  constructor() {
    this.post;
  }

  getPosts() {
    let posts;

    localStorage.getItem('posts') === null
      ? posts = []
      : posts = JSON.parse(localStorage.getItem('posts'));

    return posts;
  }

  addPost(post) {
    const posts = this.getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  removePost(title, subtitle) {
    const posts = this.getPosts();

    posts.forEach((post, index) => {
      if(post.title === title && post.subtitle === subtitle){
        posts.splice(index, 1);
      }

      localStorage.setItem('posts', JSON.stringify(posts));
    });
  }
}