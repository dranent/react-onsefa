import React from 'react';

const NoticesList = () => {

    const notices = [
        {
            text: '8月から施術場所が変わります。詳しいはこちら',
            url: '#access',
        },
        {
            text: 'ON Artmakeは6月から「K-Beauty専門家連合会」と協力しています。',
            url: 'https://github.com/example/react-native-app',
        },
        // {
        //     text: '新商品のご紹介。',
        //     url: 'https://example.com/new-products',
        // },
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