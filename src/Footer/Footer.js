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
      <button className="BackToTopButton" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
        <img src="/img/arrow-up.svg" alt="to the top Button" />
      </button>
      <div className="ButtonContainer">
        <button className="WebBookingButton" onClick={() => scrollTop("reserve")} >
          <img className="WebBookingIcon" src="/img/calendar.svg" alt="Web Booking Icon" />
          <span className="WebBookingText">WEB 予約</span>
        </button>
        <button className="LineConsultationButton" onClick={() => {
          window.location.href = 'https://lin.ee/87QWTkV';
        }}>
          <img className="LineConsultationIcon" src="/img/line.svg" alt="Line Consultation Icon" />
          <span className="LineConsultationText">LINE 相談</span>
        </button>

        <div className="insta-area">
        <a href="https://www.instagram.com/onclinic_sefa/" target="_blank" rel="noreferrer noopener">
          <img src="/img/instar-icon.svg" alt="Instagram button" id="instagram-btn" />
        </a>
        <a href="https://www.instagram.com/onclinic_mens/" target="_blank" rel="noreferrer noopener">
          <img src="/img/instar-icon-mens.svg" alt="Instagram button" id="instagram-mens-btn" />
        </a>
      </div>

      </div>

      <div className="TextContainer">
        <span className="LeftText">アートメイクに関する質問にスタッフが直接お答えします！</span>
        {/* <span className="RightText"></span> */}
      </div>
    </div>
  );
}

export default Footer;