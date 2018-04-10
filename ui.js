// Init Storage
const posts = new Storage;

// UI Elements
const title = document.getElementById('title-post');
const subtitle = document.getElementById('subtitle-post');
const body = document.getElementById('body-post');
const form = document.querySelector('.add-post');
const postFeed = document.querySelector('.post-feed');

class UI {
  // Get Post
  async getPosts() {
    const postList = posts.getPosts();
    let output = '<p class="px-3">There are no posts.</p>';

    if(postList.length > 0) {
      output = '';
      postList.forEach(post => {
        output += `
      <div class="col-md-3 mb-4" >
        <div class="card">
          <div class="card-body">
            <button type="button" class="close text-warning">
              x
            </button>
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${post.subtitle}</h6>
            <p class="card-text">${post.body.length > 120 ? post.body.substring(0, 120) + '...' : post.body}</p>
            ${post.body.length > 120 ? '<a href="#" class="card-link">Read more</a>' : ''}
          </div>
          <div class="card-footer text-muted">${post.date}</div>
        </div>
      </div >
      `;
      });
    }

    document.querySelector('.post-feed').innerHTML = output;
  }

  // Delete post
  deletePost(e) {
    e.target.parentElement.parentElement.parentElement.remove();
    posts.removePost(e.target.parentElement.childNodes[3].innerText, e.target.parentElement.childNodes[5].innerText);
    e.preventDefault();
  }

  // Alert
  alert(content) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-dissmissible alert-warning';
    alert.innerHTML = `
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    ${content} is required
    `;
    form.insertBefore(alert, form.childNodes[0])
    setTimeout(() => { form.removeChild(alert) }, 3000);
  }

  // Clear Fields
  clearFields() {
    title.value = '';
    subtitle.value = '';
    body.value = '';
  }
}