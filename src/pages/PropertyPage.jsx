import { useLoaderData } from 'react-router-dom';
import './PropertyPage.css';
import Carousel from '../components/Carousel/Carousel';
import PropertyName from '../components/PropertyName/PropertyName';
import Tag from '../components/PropertyTag/PropertyTag';
import Avatar from '../components/Avatar/Avatar';
import Rates from '../components/Rates/Rates';
import Collapse from '../components/Collapse/Collapse';
import fetchData from '../datas/api';

async function getProperty(propertyId) {
  const datas = await fetchData();
  const property = datas.find((data) => data.id === propertyId);
  if (!property) {
    throw new Response("Not found", {status: 404});
  }
  return property;
}

export function loader({ params }) {
  const property = getProperty(params.logementId);
  return property;
}

function Property() {
  const property = useLoaderData();
  return (
    <>
      <Carousel pictures={property.pictures} title={property.title} />
      <div className="title-tag-avatar-container">
        <div>
          <PropertyName title={property.title} location={property.location} />
          <ul className="tag-container">
            {property.tags.map((tag, index) => (
              <Tag key={`tag-${index}`} tag={tag} />
            ))}
          </ul>
        </div>
        <div className="property-avatar-rates-container">
          <Avatar name={property.host.name} picture={property.host.picture} />
          <Rates rate={property.rating} />
        </div>
      </div>
      <div className="property-collapse-container">
        <Collapse
          addClass="property-collapse"
          title="Description"
          content={property.description}
        />
        <Collapse
          addClass="property-collapse"
          title="Équipements"
          content={property.equipments}
          isList={true}
        />
      </div>
    </>
  );
}

export default Property;
