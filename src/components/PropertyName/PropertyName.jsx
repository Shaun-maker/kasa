import './PropertyName.css';

function PropertyName({ title, location }) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="location">{location}</p>
    </div>
  );
}

export default PropertyName;
