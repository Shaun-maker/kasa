import { useState, useEffect } from 'react';
import chevronDown from '../../assets/icons/chevron-down-white.svg';
import chevronUp from '../../assets/icons/chevron-up-white.svg';
import './Collapse.css';

function Collapse({ addClass, title, content, open, isList }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open) setIsOpen(true);
  }, [open]);
  return (
    <div className={`collapse-container ${addClass}`}>
      <div
        className="collapse-banner"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <p>{title}</p>
        <figure className="collapse-container-img">
          <img
            className="collapse-img"
            src={isOpen ? chevronUp : chevronDown}
            alt=""
          />
        </figure>
      </div>
      {isList ? (
        <ul className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
          {content.map((listElt, index) => (
            <li key={`${listElt}-${index}`}>{listElt}</li>
          ))}
        </ul>
      ) : (
        <p className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
          {content}
        </p>
      )}
    </div>
  );
}

export default Collapse;
