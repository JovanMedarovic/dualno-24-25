async function deletePost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log('Successfully deleted!');
    } else {
      console.error('Error on DELETE request.');
    }
  } catch (err) {
    console.error('Error on the following DELETE request:', err);
  }
}

deletePost(1);