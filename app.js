// Init UI
const postsUI = new UI;

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', postsUI.getPosts());

// Event listener
const btnAdd = document.getElementById('add-post-btn').addEventListener('click', e => {
  if (body.value === '' || title.value === '') {
    if (body.value === '') {
      postsUI.alert('Body');
    } if (title.value === '') {
      postsUI.alert('Title');
    }
  } else {
    posts.addPost({ title: title.value, subtitle: subtitle.value, body: body.value, date: moment().format("DD [de] MMMM [de] YYYY") });
    postsUI.getPosts();
    postsUI.clearFields();
  }
  e.preventDefault();
});

const btnDel = document.querySelector('.post-feed').addEventListener('click', (e) => {
  postsUI.deletePost(e);
  postsUI.getPosts();
});