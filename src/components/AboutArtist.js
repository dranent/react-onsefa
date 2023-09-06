import React from "react";
import "./AboutArtist.css";

function AboutArtist() {
  return (
    <div className="AboutArtist">
      <div className="AboutArtistHeader">
        <span>Introducing ON Artists</span>
      </div>
      <div className="AboutArtistPhotosContainer">
        <div className="AboutArtistPhotoContainer">
          <a href="https://www.instagram.com/sefa_artmake_on/">
            <img
              src="/img/artist/asami.webp"
              alt="About Artist 1"
              className="AboutArtistPhoto AboutArtistSpecial"
            />
          </a>
          <div className="AboutArtistTextContainer">
            <span>Asami (Academy)</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <a href="https://www.instagram.com/on_miyu_artmake/">
            <img
              src="/img/artist/okubo.webp"
              alt="About Artist 4"
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
              alt="About Artist 2"
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