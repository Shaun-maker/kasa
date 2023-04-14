async function fetchData() {
  const response = await fetch('./logements.json');
  const datas = await response.json();
  return datas;
}

export default fetchData;
