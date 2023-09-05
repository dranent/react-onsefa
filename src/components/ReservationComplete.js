// ReservationComplete.js

import React from 'react';
import './ReservationComplete.css';

function ReservationComplete() {
    const handleBackToHome = () => {
        // "처음으로 돌아가기" 버튼 클릭 시 홈 화면으로 이동
        window.location.href = '/'; // 또는 다른 경로로 리디렉션 가능
      };

  return (
    <div className="reservation-complete-container">
         <div className="reservation-complete-message">
         ありがとうございます！
         </div>
      <div className="reservation-complete-message">
      ご予約をお受け付け完了致しました。
      </div>
      <button className="return-button" onClick={handleBackToHome}>
        最初に戻る
      </button>
    </div>
  );
}

export default ReservationComplete;
