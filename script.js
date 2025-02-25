document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');
    const commentForm = document.getElementById('commentForm');
    const commentsDiv = document.getElementById('comments');
    const commentInput = document.getElementById('commentInput');
    const postCommentButton = document.getElementById('postComment');
    const showCommentsButton = document.getElementById('showComments');
    const loginForm = document.getElementById('loginForm');
    const password = "yourpassword"; // Replace with your password

    let loggedIn = false;

    loginButton.addEventListener('click', () => {
        if (passwordInput.value === password) {
            loggedIn = true;
            loginForm.style.display = 'none';
            showCommentsButton.style.display = 'block';
        } else {
            alert('Incorrect password.');
        }
    });

    showCommentsButton.addEventListener('click', () => {
        showCommentsButton.style.display = 'none';
        commentForm.style.display = 'block';
        loadComments();
    });

    postCommentButton.addEventListener('click', () => {
        const comment = commentInput.value;
        if (comment) {
            let existingComments = JSON.parse(localStorage.getItem('comments')) || [];
            existingComments.push(comment);
            localStorage.setItem('comments', JSON.stringify(existingComments));
            commentInput.value = '';
            loadComments();
        }
    });

    function loadComments() {
        commentsDiv.innerHTML = '';
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        storedComments.forEach(comment => {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentsDiv.appendChild(commentElement);
        });
    }
});
