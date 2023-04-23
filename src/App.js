import './App.css';

import React from "react";
import Header2 from './Header/Header2.js';
import Footer from './Footer/Footer.js'

import 'react-datepicker/dist/react-datepicker.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TicketContainer from './curriculum.js'
import NoticesList from './notice';
import { Routes, Route } from 'react-router-dom'
import Campaign from './components/Campaign';
// import LineButton from './components/LineButton';
import { DefineClinic, DefineAcademy } from './components/Define';
import MainLogo from './components/MainLogo';
import { PriceClinic, PriceAcademy  } from './components/Price'
import FlowClinic from './components/Flow';
import GalleryClinic from './components/Gallery';
import { CEOProfile } from './components/Profile';
import { QnAAcademy, QnAClinic} from './components/QnA';
import Access from './components/Access';
import { ReserveClinic } from './components/Reserve';
import AboutArtist from './components/AboutArtist';

function App() {


  return (
    <>
      {/* {Header()} */}
      <div id='sefa-top'></div>
      {Header2()}
      <Routes>
        {/*--- 클리닉 페이지 ---*/}
        <Route path="/" element={<div>
          <MainLogo />
          <Campaign />
          <NoticesList />
          <DefineClinic />
          <div className='text-center marginTop'>
            <img className='triangl' src='/img/triangle3point.png' alt='triangl'></img>
          </div>
          <PriceClinic />
          <div className='text-center marginTop'>
            <img className='triangl' src='/img/doctor.jpg' alt='triangl'></img>
          </div>
          <AboutArtist/>
          <GalleryClinic />
          <FlowClinic />
          <ReserveClinic/>
          <QnAClinic/>
        </div>}></Route>

        {/*--- 아카데미 페이지 ---*/}
        <Route path="/academy" element={
          <div>
            <DefineAcademy />
            <CEOProfile />
            <div className='ticket-area' id='ticket-area'>
              <center>
                <img src='/img/チケットシステム2.png' alt='' className='ticket-area-img' width={950} />
              </center>
            </div>
            <TicketContainer/>
            <PriceAcademy/>
            <QnAAcademy/>
            {/* <LineButton/> */}
          </div>}>
        </Route>
      </Routes>



      <Access/>

      <Footer/>
      <div className='bottom-margin'>
        <h6> </h6>
      </div>


    </>
  );
}



export default App;
