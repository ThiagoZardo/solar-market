export const getProductsFromCategory = async (category) => {
  let link;
  if (category) {
    link = `http://localhost:8000/?search=${category}`
  } else {
    link = 'http://localhost:8000/'
  }

  const response = await fetch(link);
  const data = await response.json();
  console.log(data);

  return data;
}

export const getCategories = async () => {
  const link = 'http://localhost:8000/categories'

  const response = await fetch(link);
  const data = await response.json();
  console.log(data);

  return data;
}
