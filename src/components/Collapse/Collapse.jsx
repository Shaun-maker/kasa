import { useState } from 'react';
import chevronDown from '../../assets/icons/chevron-down-white.svg';
import chevronUp from '../../assets/icons/chevron-up-white.svg';
import './Collapse.css';

function Collapse({ collapseMargin, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`collapse-container ${collapseMargin}`}>
      <div
        className="collapse-banner"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <p className="collapse-title">{title}</p>
        <figure className="collapse-container-img">
          <img
            className="collapse-img"
            src={isOpen ? chevronUp : chevronDown}
            alt=""
          />
        </figure>
      </div>
      <p className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        {content}
      </p>
    </div>
  );
}

export default Collapse;
