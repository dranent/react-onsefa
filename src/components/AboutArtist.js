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
            src="/img/artist/ito.webp"
            alt="About Artist 2"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Ito</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/otsuka.webp"
            alt="About Artist 3"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Otsuka</span>
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
            src="/img/artist/kano.webp"
            alt="About Artist 5"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Kano</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/sora.webp"
            alt="About Artist 6"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Sora</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArtist;