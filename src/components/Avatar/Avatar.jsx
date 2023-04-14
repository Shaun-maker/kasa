import './Avatar.css';

function Avatar({ name, picture }) {
  return (
    <div className="avatar-container">
      <p className="name">{name}</p>
      <figure className="picture-container">
        <img className="picture" src={picture} alt={name} />
      </figure>
    </div>
  );
}

export default Avatar;
