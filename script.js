document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');
    const postForm = document.getElementById('postForm');
    const postInput = document.getElementById('postInput');
    const submitPostButton = document.getElementById('submitPost');
    const postsDiv = document.getElementById('posts');
    const password = "OldSunDie"; // Replace with your password

    let loggedIn = false;

    loginButton.addEventListener('click', () => {
        if (passwordInput.value === password) {
            loggedIn = true;
            document.getElementById('loginForm').style.display = 'none';
            postForm.style.display = 'block';
        } else {
            alert('Do not try agin mf.');
        }
    });

    submitPostButton.addEventListener('click', () => {
        if (loggedIn) {
            const post = postInput.value;
            if (post) {
                let existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
                existingPosts.push(post);
                localStorage.setItem('posts', JSON.stringify(existingPosts));
                postInput.value = '';
                loadPosts();
                postForm.style.display = 'none';
            }
        }
    });

    function loadPosts() {
        postsDiv.innerHTML = '';
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        storedPosts.forEach(post => {
            const postElement = document.createElement('p');
            postElement.textContent = post;
            postsDiv.appendChild(postElement);
        });
    }

    loadPosts(); // Load posts on page load
});
