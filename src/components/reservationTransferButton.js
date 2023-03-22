import React, { useState } from 'react';
import './ReservationTransferButton.css';

function ReservationTransferButton() {
  const [submitting, setSubmitting] = useState(false);

  const handleClick = () => {
    setSubmitting(true);

    // Simulate reservation transfer logic
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <button className={`reservation-button${submitting ? ' submitting' : ''}`} onClick={handleClick} disabled={submitting}>
      {submitting ? (
        <>
          Submitting...
          <div className="reservation-spinner"></div>
        </>
      ) : (
        <>
          Transfer Reservation
        </>
      )}
    </button>
  );
}

export default ReservationTransferButton;
