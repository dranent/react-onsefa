import React from 'react';
import '../components/ReservationTransferButton.css';

export function ReservationButton(props) {

  // const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // setIsLoading(true);
    props.onConfirm();
  };
  
  return (
    <button 
      className={`reservation ${props.isConfirm ? 'confirmed' : ''}`} 
      onClick={handleClick}
      // disabled={isLoading}
    >
      {props.isConfirm ? 'ご予約をお受け付け完了致しました。' : 'ご予約'}
    </button>
  );
}

export function ReservationButtonAcademy(props) {

  // const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // setIsLoading(true);
    props.onConfirm();
  };
  
  return (
    <button 
      className={`reservation ${props.isConfirm ? 'confirmed' : ''}`} 
      onClick={handleClick}
      // disabled={isLoading}
    >
      {props.isConfirm ? 'お問い合わせをいただき、誠にありがとうございます。' : 'お問い合わせ'}
    </button>
  );
}
