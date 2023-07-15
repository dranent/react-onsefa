import React from 'react';
import GalleryClinic from './Gallery';
import MainLogo from './MainLogo';
import './Partner.css';

const Partner = () => {
    return (
        <div className="partner-container">
            <MainLogo />
            <h1>【パートナークリニックのご依頼】</h1>
            <p>ON Artmakeは韓国技術を基盤としたアートメイク専門です。</p>

            <h2>【導入メリット】</h2>
            <ol>
                <li>
                    <strong>コスト０円&ベッド1台からスタート可能</strong><br />★空きスペースを有効活用させて頂き、施術料金の30%をお支払い致します。
                </li>
                <li>
                    <strong>新規スタッフの採用&教育が不要</strong><br /> ★既存の看護師様へのアートメイク教育も可能です
                </li>
                <li>
                    <strong>潜在層への認知により、新規患者の獲得へ</strong><br />★当社のHPやSNSへの記載で、美容に関心のある潜在層へのアプローチが可能となり新規患者の増加が見込めます。
                </li>
            </ol>

            <p>また、当院の特徴として患者様の特性が幅広く男女問わず20代~60代の方がご来院されます。</p>
            <GalleryClinic/>

            <center>
                <br/>
                <br/>
                <img className='k-beauty-logo' alt= 'k-beauty-logo' src='../img/k-beauty-logo.png' ></img>

                <p>
                    お問い合わせ先<br /><br/>
                    株式会社SEFA ON Artmake <br />
                    担当　竹安<br />
                    <a href="tel:08071856458">080-7185-6458</a><br/>
                   sefa.takeyasu@gmail.com<br />
                </p>
            </center>
        </div>
    );
};

export default Partner;
