import React from 'react';

const NoticesList = () => {

    const notices = [
        {
            text: '8月から施術場所が変わります。詳しいはこちら',
            url: '#access',
        },
        {
            text: 'ON Artmakeは6月から「K-Beauty専門家連合会」と協力しています。',
            url: '#access',
        },
        {
            text: '研修生モニターを予約開始！（）',
            url: '#trainee',
        },
    ];

    return (
        <div>
            <div className='notice-signboard'>

                <center>
                    <h2 className='notice-signboard-title'>Notice</h2>
                    <h6>お知らせ</h6>
                </center>
            </div>
            <div className="notices-container">
                {notices.map((notice, index) => (
                    <div key={index} className="notice">
                        <a href={notice.url}>{notice.text}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticesList;