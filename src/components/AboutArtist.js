import React from "react";
import "./AboutArtist.css";

function AboutArtist() {
  return (
    <div className="AboutArtist" id="AboutArtist">
      <div className="AboutArtistHeader">
        <span>Introducing ON Artists</span>
        <h6>プロフィール写真をクリニックするとアーティストのインスタグラムをご覧いただけます。</h6>
      </div>
      <div className="AboutArtistPhotosContainer">
        <div className="AboutArtistPhotoContainer">
          <a href="https://www.instagram.com/on_artmake_sefa/">
            <img
              src="/img/artist/asami.webp"
              alt="About Artist 1"
              className="AboutArtistPhoto AboutArtistSpecial"
            />
          </a>
          <div className="AboutArtistTextContainer">
            <span>Sefa (Artmake Academy)</span>
          </div>
          
        </div>

        <div className="AboutArtistPhotoContainer">
          <a href="https://www.instagram.com/yujin_scalp/">
            <img
              src="/img/artist/hyunyoung.jpg"
              alt="About Artist 2"
              className="AboutArtistPhoto AboutArtistSpecial"
            />
          </a>
          <div className="AboutArtistTextContainer">
            <span>HyunYoung (SMP)</span>
          </div>
          
        </div>
        <div className="AboutArtistPhotoContainer">
          <a href="https://www.instagram.com/on_miyu_artmake/">
            <img
              src="/img/artist/okubo.webp"
              alt="About Artist 3"
              className="AboutArtistPhoto"
            />
          </a>
          <div className="AboutArtistTextContainer">
            <span>Miyu</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <a href="https://www.instagram.com/on_natsumi_artmake/">
            <img
              src="/img/artist/natsumi.webp"
              alt="About Artist 4"
              className="AboutArtistPhoto"
            />
          </a>
          <div className="AboutArtistTextContainer">
            <span>Natsumi</span>
          </div>
        </div>



      </div>
    </div>
  );
}

export default AboutArtist;