export async function getArticle(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${id}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.error('Request failed with status:', response.status);
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

async function Board({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log('id', id);
  const article = await getArticle(id);

  return (
    <div>
      <div>{article.title}</div>
    </div>
  );
}

export default Board;
