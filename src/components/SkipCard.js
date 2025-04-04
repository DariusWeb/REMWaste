import React from 'react';
import { useSkipContext } from '../context/SkipContext';

function SkipCard({ skip }) {
  const { selectSkip, selectedSkip } = useSkipContext();
  
  // Calculate total price with VAT
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

  // Check if this skip is currently selected
  const isSelected = selectedSkip && (selectedSkip.id === skip.id);
  
  const handleSelectSkip = () => {
    selectSkip({
      id: skip.id,
      size: skip.size,
      price: totalPrice,
      hire_period_days: skip.hire_period_days
    });
  };
  
  return (
    <div className={`skip-card ${isSelected ? 'selected' : ''}`} onClick={handleSelectSkip}>
      <div className="size">{skip.size} Yards</div>

      {skip.allowed_on_road && (<div className="private">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
        <span>Private Property Only</span>
      </div>)}

      <div className="image-container">
          <img src="/images/skip.jpg" alt="Containers"/>
      </div>

      <div className="info">
        <div className="title">{skip.size} Yard Skip</div>
        <div className="description">{`${skip.hire_period_days} day hire period`}</div>
        
        <div>
          <span className="price">£ {(skip.transport_cost ? skip.transport_cost : totalPrice).toFixed(2)}</span>
          <span className="week">per week</span>
        </div>
      </div>

      <button className="select-skip-btn">
        {isSelected ? 'Selected' : 'Select This Skip'}
        {!isSelected && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default SkipCard;
