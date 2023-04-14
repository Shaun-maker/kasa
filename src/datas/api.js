async function fetchData() {
  const response = await fetch('http://localhost:3000/logements.json');
  const datas = await response.json();
  return datas;
}

export default fetchData;
