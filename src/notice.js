import React from 'react';

const NoticesList = () => {

    const notices = [
        {
            text: 'GLAMで紹介していただきました。',
            url: 'https://www.glam.jp/artmake/area/tokyo',
        },
        // {
        //     text: 'React Nativeアプリがリリースされました。',
        //     url: 'https://github.com/example/react-native-app',
        // },
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