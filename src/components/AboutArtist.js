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
            src="/img/artist/asami.jpg"
            alt="About Artist 1"
            className="AboutArtistPhoto AboutArtistSpecial"
          />
          <div className="AboutArtistTextContainer">
            <span>Asami</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/ito.jpg"
            alt="About Artist 2"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Ito</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/otsuka.jpg"
            alt="About Artist 3"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Otsuka</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/okubo.jpg"
            alt="About Artist 4"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Okubo</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/kano.jpg"
            alt="About Artist 5"
            className="AboutArtistPhoto"
          />
          <div className="AboutArtistTextContainer">
            <span>Kano</span>
          </div>
        </div>
        <div className="AboutArtistPhotoContainer">
          <img
            src="/img/artist/sora.jpg"
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