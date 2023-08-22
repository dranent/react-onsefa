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
          <img
            src="/img/artist/asami.webp"
            alt="About Artist 1"
            className="AboutArtistPhoto AboutArtistSpecial"
          />
          <div className="AboutArtistTextContainer">
            <span>Asami (Academy)</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/okubo.webp"
            alt="About Artist 4"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Miyu</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/ito.webp"
            alt="About Artist 2"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Ito</span>
          </div>
        </div>
 


      </div>
    </div>
  );
}

export default AboutArtist;