import React from 'react';
import './vip-price.css';
import LineButton from './LineButton'

const VIPPrice = () => {
    return (
        <div className="vip-price">
            <h1 className="vip-title">VIP価格</h1>
            <div className="vip-grade">
                <div className="vip-diamond">
                    <h2>DIAMOND</h2>
                    <p>700,000円(税込)</p>
                    <h6>全メニュー施術し放題</h6>
                </div>
                <div className="vip-platinum">
                    <h2>PLATINUM</h2>
                    <p>500,000円(税込)</p>
                    <h6>SMP、ヘアライン除く施術し放題</h6>
                </div>
                <div className="vip-gold">
                    <h2>GOLD</h2>
                    <p>300,000円(税込)</p>
                    <h6>施術部位二つ施術し放題</h6>
                </div>

                <h6>有効期限：購入時から1年</h6>

                
            </div>
            <LineButton/>
        </div>
    );
}

export default VIPPrice;