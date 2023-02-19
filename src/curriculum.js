import React, { useState } from 'react';

const TicketContainer = () => {
  const [tickets] = useState([
    { name: '眉毛 パウダー 理論 有', number: 6 },
    { name: '眉毛 パウダー 理論 無', number: 4 },
    { name: '眉毛 ナチュラル 理論 有', number: 6 },
    { name: '眉毛 ナチュラル 理論 無', number: 4 },
    { name: '眉毛 COMBO 理論 有', number: 6 },
    { name: '眉毛 COMBO 理論 無', number: 4 },
    { name: 'リップ 理論 有', number: 6 },
    { name: 'リップ 理論 無', number: 4 },
    { name: 'ヘア 理論 有', number: 6 },
    { name: 'ヘア 理論 無', number: 4 },
    { name: 'SMP 理論 有', number: 6 },
    { name: 'SMP 理論 無', number: 4 },
    { name: 'アイライン 理論 有', number: 6 },
    { name: 'アイライン 理論 無', number: 4 },
    { name: '見守りモニター人につき', number: 2 },
  ]);
  const [displayCount, setDisplayCount] = useState(6);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setDisplayCount(tickets.length);
    setShowMore(false);
  };

  const handleShowLess = () => {
    setDisplayCount(6);
    setShowMore(true);
  };

  return (
    <div className="ticket-container">
      <h1>必要チケット数</h1>
      <div className="content">
        {tickets.slice(0, displayCount).map((ticket, index) => (
          <div className="ticket-item" key={index}>
            <div className="ticket-name">{ticket.name}</div>
            <div className="ticket-number">{ticket.number}枚</div>
          </div>
        ))}
        {showMore ? (
          <button className='show-more-btn' onClick={handleShowMore}>もっと見る </button>
        ) : (
          <button className='show-more-btn' onClick={handleShowLess}>閉じる</button>
        )}
        <div className="ticket-info">(1枚に2時間、1:1の授業)</div>
      </div>
    </div>
  );
};

export default TicketContainer;