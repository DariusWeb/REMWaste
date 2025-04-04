import React, { useState, useEffect } from 'react';
import SkipCard from './SkipCard';

function SkipSize() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch skip data from the API
    const fetchSkips = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        
        if (!response.ok) {
          throw new Error('Failed to fetch skip data');
        }
        
        const data = await response.json();
        setSkips(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  if (loading) {
    return (
      <div className="skip-page loading">
        <h2>Loading data...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="skip-page error">
        <h2>Error loading skip data</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="skip-page">
      <h2>Choose Your Skip Size</h2>
      <p className='subtitle'>Select the skip size that best suits your needs</p>
      
      <div className="skip-grid">
        {skips.map((skip) => (
          <SkipCard key={skip.id || skip._id} skip={skip} />
        ))}
      </div>
    </div>
  );
}

export default SkipSize;
