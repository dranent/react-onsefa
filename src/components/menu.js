import React from "react";
import "./Menu.css";

function Menu() {
    return (
        <div className="AboutArtist">
            <div className="AboutArtistHeader">
                <span>Eyebrow Menu</span>
            </div>
            <div className="AboutArtistPhotosContainer">
                <div className="AboutArtistPhotoContainer">
                    <img
                        src="/img/menu/1.webp"
                        alt="About Artist 1"
                        className="AboutArtistPhoto"
                    />
                    <div className="AboutArtistTextContainer">
                        <h4>Natural</h4>
                        <h6>お客様の毛並みに合わせて一本一本毛を表現する技法です。</h6>
                    </div>
                </div>
                <div className="AboutArtistPhotoContainer">
                    <img
                        src="/img/menu/2.webp"
                        alt="About Artist 2"
                        className="AboutArtistPhoto"
                    />
                    <div className="AboutArtistTextContainer">
                        <h4>Powder</h4>
                        <h6>ふんわりお化粧をしたようにグラデーションをかける技法です。</h6>
                    </div>
                </div>
                <div className="AboutArtistPhotoContainer">
                    <img
                        src="/img/menu/3.webp"
                        alt="About Artist 3"
                        className="AboutArtistPhoto"
                    />
                    <div className="AboutArtistTextContainer">
                        <h4>Combo</h4>
                        <h6>毛並みとパウダーのコンビネーション技法です。</h6>
                    </div>
                </div>
                <div className="AboutArtistPhotoContainer">
                    <img
                        src="/img/menu/4.webp"
                        alt="About Artist 4"
                        className="AboutArtistPhoto"
                    />
                    <h4>Mix</h4>
                    <h6>お好みの技法を眉の状態に合わせてミックスできる技法です。</h6>
                </div>
            </div>
        </div>
    );
}

export default Menu;