import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

function MainLogo() {
  return (
    <div>
      <center className='main-logo-area'>

        <ResponsiveImage>
          <ResponsiveImageSize
            className='ResponsiveImageSize-mainlogo'
            default
            minWidth={0}
            path={'./img/ONARTMAKE.svg'}
            background={true}

          />
          <ResponsiveImageSize
            className='ResponsiveImageSize2'
            minWidth={768}
            background={true}
            path={'./img/ONARTMAKE.svg'}
          />
          <ResponsiveImageSize
            className='ResponsiveImageSize3'
            minWidth={1100}
            background={true}
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