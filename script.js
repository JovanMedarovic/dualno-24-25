// GET METHOD
const postsDiv = document.getElementById('posts');
const loadPosts = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/prosts/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    postsDiv.innerHTML=``;
    data.forEach(post => {
      const El = document.createElement('div');
      El.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p></br>`;
      postsDiv.appendChild(El);
    })
  } catch (err) {
    postsDiv.innerHTML = `<p style="color: red;">${err}</p>`
  }
}