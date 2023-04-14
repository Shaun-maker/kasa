import './Avatar.css';

function getFirstName(name) {
  return name.split(' ')[0];
}

function getLastName(name) {
  return name.split(' ')[1];
}

function Avatar({ name, picture }) {
  let firstName = getFirstName(name);
  let lastName = getLastName(name);
  return (
    <div className="avatar-container">
      <p className="name">
        {firstName}
        <br />
        {lastName}
      </p>
      <figure className="picture-container">
        <img className="picture" src={picture} alt={name} />
      </figure>
    </div>
  );
}

export default Avatar;
