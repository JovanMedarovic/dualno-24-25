async function updatePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        title: 'Izmenjen naslov',
        body: 'Ovo je novi sadržaj posta.',
        userId: 1
      })
    });

    const data = await response.json();
    console.log('PUT response:', data);
  } catch (err) {
    console.error('Greška pri PUT zahtevu:', err);
  }
}

updatePost();