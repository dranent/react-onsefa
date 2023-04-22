import React, { useState, useEffect } from "react";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const scrollTop = (targetId) => {
    const reserveElement = document.getElementById(targetId);
    if (reserveElement) {
      reserveElement.scrollIntoView({ behavior: "smooth" });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


  };

  return (
    <div className="footer">
      <button className="BackToTopButton" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'} }>
      <svg className="BackToTopIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#ffffff" d="M12 2L1 12h6v10h10V12h6L12 2z"/>
  </svg>
      </button>
      <div className="ButtonContainer">
        <button className="WebBookingButton" onClick={() => scrollTop("reserve")} >
          <img className="WebBookingIcon" src="/img/icon-calendar.png" alt="Web Booking Icon" />
          <span className="WebBookingText">WEB 予約</span>
        </button>
        <button className="LineConsultationButton" onClick={() => {
              window.location.href = 'https://lin.ee/87QWTkV';
            }}>
          <img className="LineConsultationIcon" src="/img/LINE_Brand_icon.png" alt="Line Consultation Icon" />
          <span className="LineConsultationText">LINE 予約</span>
        </button>
      </div>
      <div className="TextContainer">
        <span className="LeftText">ご相談はLINEで気楽にお問合せくださいませ。</span>
        {/* <span className="RightText"></span> */}
      </div>
    </div>
  );
}

export default Footer;