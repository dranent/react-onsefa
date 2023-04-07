import { LazyLoadImage } from 'react-lazy-load-image-component';

function MainLogo () {
    return (
        <div>
        <center className='main-logo-area'>
          <LazyLoadImage className='main-logo'
            src='/img/onclinic-logo.gif' effect='blur'></LazyLoadImage>
        </center>
      </div>
    ) 
}

export default MainLogo;