import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

function MainLogo() {
  return (
    <div>
      <center className='main-logo-area'>

        <ResponsiveImage>
          <ResponsiveImageSize
            default
            minWidth={0}
            path={'./img/ONARTMAKE540x860.jpg'}
          />
          <ResponsiveImageSize
            minWidth={768}
            path={'./img/ONARTMAKE540x860.jpg'}
          />
          <ResponsiveImageSize
            minWidth={1100}
            path={'./img/ONARTMAKE.jpg'}
          />
        </ResponsiveImage>


        {/* <div className='main-logo'
        ></div> */}
      </center>
    </div>
  )
}

export default MainLogo;