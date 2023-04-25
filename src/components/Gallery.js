import Slider from "react-slick";

function GalleryClinic () {

    var settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (

      <div className='gallery-area'>

      <center>
        <div className='flow-title'>
          <h4>症例ギャラリー</h4>
        </div>
        <Slider {...settings}>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case1.webp' alt='オンクリニック症例写真1'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case2.webp' alt='オンクリニック症例写真2'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case3.webp' alt='オンクリニック症例写真3'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case4.webp' alt='オンクリニック症例写真4'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case5.webp' alt='オンクリニック症例写真5'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case6.webp' alt='オンクリニック症例写真6'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case7.webp' alt='オンクリニック症例写真7'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case8.webp' alt='オンクリニック症例写真8'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case9.webp' alt='オンクリニック症例写真9'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case10.webp' alt='オンクリニック症例写真10'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case11.webp' alt='オンクリニック症例写真11'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case12.webp' alt='オンクリニック症例写真12'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case13.webp' alt='オンクリニック症例写真13'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case14.webp' alt='オンクリニック症例写真14'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case15.webp' alt='オンクリニック症例写真15'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case16.webp' alt='オンクリニック症例写真16'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case17.webp' alt='オンクリニック症例写真17'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case18.webp' alt='オンクリニック症例写真18'></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case19.webp' alt='オンクリニック症例写真19'></img>
          </div>
        </Slider>

      </center>
    </div>

    )
}

export default GalleryClinic;
