import { useLoaderData } from 'react-router-dom';
import './PropertyPage.css';
import Carousel from '../components/Carousel/Carousel';
import PropertyName from '../components/PropertyName/PropertyName';
import Tag from '../components/PropertyTag/PropertyTag';
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
  console.log(property);
  return (
    <>
      <Carousel pictures={property.pictures} title={property.title} />
      <PropertyName title={property.title} location={property.location} />
      <div className="tag-container">
        {property.tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
    </>
  );
}

export default Property;
