async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Moj novi post',
        body: 'Ovo je sadržaj posta.',
        userId: 1
      })
    });

    const data = await response.json();
    console.log('POST response:', data);
  } catch (err) {
    console.error('Greška pri POST zahtevu:', err);
  }
}

createPost();