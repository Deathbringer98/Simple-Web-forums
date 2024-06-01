document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const postContent = document.getElementById('postContent').value;
    console.log("Post content:", postContent); // Log the post content to the console
    if (postContent.trim() !== "") {
        addPost(postContent);
        document.getElementById('postContent').value = '';
    } else {
        console.log("Post content is empty or whitespace only.");
    }
});

function addPost(content) {
    const postsContainer = document.getElementById('posts');
    console.log("Adding post:", content); // Log the content being added
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `<p>${content}</p>`;
    postsContainer.appendChild(postElement);
}
