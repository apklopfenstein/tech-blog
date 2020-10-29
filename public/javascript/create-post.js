function createPost() {
    
    if (response.ok) {
      document.location.replace('/create-post');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('#create-btn').addEventListener('submit', createPost);