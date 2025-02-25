// Password configuration - CHANGE THIS TO YOUR OWN PASSWORD
const ACCESS_CODE = "刃折り";

function unlockComments() {
    const input = document.getElementById('passcode');
    if(input.value === ACCESS_CODE) {
        document.getElementById('commentSection').classList.remove('hidden');
        loadComments();
    } else {
        alert("暗号エラー: 血が足りない...");
    }
    input.value = '';
}

function postComment() {
    const commentText = document.getElementById('newComment').value;
    if(commentText.trim()) {
        const comment = {
            text: commentText,
            date: new Date().toLocaleString(),
            author: "血刃"
        };
        
        let comments = JSON.parse(localStorage.getItem('harakiri-comments') || []);
        comments.push(comment);
        localStorage.setItem('harakiri-comments', JSON.stringify(comments));
        
        loadComments();
        document.getElementById('newComment').value = '';
    }
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('harakiri-comments') || [];
    const container = document.getElementById('comments');
    container.innerHTML = '';
    
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `
            <span class="comment-author">${comment.author}</span>
            <span class="comment-date">${comment.date}</span>
            <div class="comment-text">${comment.text}</div>
        `;
        container.appendChild(div);
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('harakiri-comments')) {
        loadComments();
    }
});
