import React from "react";
import "./Menu.css";

function Menu() {
    return (
        <div className="AboutMenu">
            <div className="AboutMenuHeader">
                <span>Eyebrow Menu</span>
            </div>
            <div className="AboutMenuPhotosContainer">
                <div className="AboutMenuPhotoContainer">
                    <a href="/res/">
                        <img
                            src="/img/menu/1.webp"
                            alt="About Menu 1"
                            className="AboutMenuPhoto"
                        />
                    </a>
                    <div className="AboutMenuTextContainer">
                        <h4>Natural</h4>
                        <h6>お客様の毛並みに合わせて一本一本毛を表現する技法です。</h6>
                    </div>
                </div>
                <div className="AboutMenuPhotoContainer">
                    <a href="/res/">
                        <img
                            src="/img/menu/2.webp"
                            alt="About Menu 2"
                            className="AboutMenuPhoto"
                        />
                    </a>
                    <div className="AboutMenuTextContainer">
                        <h4>Powder</h4>
                        <h6>ふんわりお化粧をしたようにグラデーションをかける技法です。</h6>
                    </div>
                </div>
                <div className="AboutMenuPhotoContainer">
                    <a href="/res/">
                        <img
                            src="/img/menu/3.webp"
                            alt="About Menu 3"
                            className="AboutMenuPhoto"
                        />
                    </a>
                    <div className="AboutMenuTextContainer">
                        <h4>Combo</h4>
                        <h6>毛並みとパウダーのコンビネーション技法です。</h6>
                    </div>
                </div>
                <div className="AboutMenuPhotoContainer">
                    <a href="/res/">
                        <img
                            src="/img/menu/4.webp"
                            alt="About Menu 4"
                            className="AboutMenuPhoto"
                        />
                    </a>
                    <h4>Mix</h4>
                    <h6>お好みの技法を眉の状態に合わせてミックスできる技法です。</h6>
                </div>
            </div>
        </div>
    );
}

export default Menu;