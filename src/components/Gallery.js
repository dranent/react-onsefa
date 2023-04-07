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
            <img className='case-gallery-img' src='/img/case-gallery/case1.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case2.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case3.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case4.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case5.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case6.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case7.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case8.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case9.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case10.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case11.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case12.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case13.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case14.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case15.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case16.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case17.jpg' alt=''></img>
          </div>
          <div>
            <img className='case-gallery-img' src='/img/case-gallery/case18.jpg' alt=''></img>
          </div>
        </Slider>

      </center>
    </div>

    )
}

export default GalleryClinic;
