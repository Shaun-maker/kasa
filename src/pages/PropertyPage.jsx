import { useLoaderData } from 'react-router-dom';
import fetchData from '../datas/api';

async function getProperty(propertyId) {
  const datas = await fetchData();
  const property = datas.find((data) => data.id === propertyId);
  return property;
}

export function loader({ params }) {
  const property = getProperty(params.logementId);
  return property;
}

function Property() {
  const property = useLoaderData();
  return <div>Hello ! This is a page for a property</div>;
}

export default Property;
