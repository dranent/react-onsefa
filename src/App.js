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
import { DefineClinic, DefineAcademy } from './components/Define';
import MainLogo from './components/MainLogo';
import { PriceClinic, PriceAcademy } from './components/Price'
import FlowClinic from './components/Flow';
import GalleryClinic from './components/Gallery';
import { CEOProfile } from './components/Profile';
import { QnAAcademy, QnAClinic } from './components/QnA';
import { Access } from './components/Access';
import { ReserveClinic } from './components/Reserve';
import AboutArtist from './components/AboutArtist';
import Mens from './components/mens';
import Menu from './components/menu';
import ReservationMens from './components/ReserveMens';
import { ReserveAcademy } from './components/ReserveAcademy';
import { Influencer } from './components/influencer';
import VIPPrice from './components/vip-price';
import YouTubePlayer from './components/YouTubePlayer';
import Directors from './components/Directors.js';
import Partner from './components/Partner.js';

function App() {
  return (
    <>
      <div id='sefa-top'></div>
      <Routes>
        {/*--- 클리닉 페이지 ---*/}
        <Route path='*' element={<div>
          {Header2()}
        </div>}></Route>

        <Route path="/" element={<div>
          {Header2()}
          <MainLogo />
          <Directors/>
          <YouTubePlayer/>
          <Campaign />
          <NoticesList />
          <DefineClinic />
          <div className='text-center marginTop'>
            <img className='triangl' src='/img/triangle3point.png' alt='triangl'></img>
          </div>
          <Menu />
          <PriceClinic />
          <VIPPrice/>
          {/* <div className='text-center marginTop'>
            <img className='triangl' src='/img/doctor.webp' alt='triangl'></img>
          </div> */}
          <AboutArtist />
          <GalleryClinic />
          <Influencer/>
          <FlowClinic />
          <ReserveClinic />
          <QnAClinic />
          <DefineAcademy />
            {/* <CEOProfile /> */}
            <div className='ticket-area' id='ticket-area'>
              <center>
                <img src='/img/チケットシステム2.png' alt='' className='ticket-area-img' width={950} />
              </center>
            </div>
            <TicketContainer />
            <PriceAcademy />
            <QnAAcademy />
            <ReserveAcademy/>
          <Access />
          <Footer />
          <div className='bottom-margin'>
            <h6> </h6>
          </div>
        </div>}></Route>

        {/*--- 아카데미 페이지 ---*/}
        <Route path="/academy/" element={
          <div>
            {Header2()}
            <DefineAcademy />
            <CEOProfile />
            <div className='ticket-area' id='ticket-area'>
              <center>
                <img src='/img/チケットシステム2.png' alt='' className='ticket-area-img' width={950} />
              </center>
            </div>
            <TicketContainer />
            <PriceAcademy />
            <QnAAcademy />
            <ReserveAcademy/>
            <Access />
            <Footer />
            <div className='bottom-margin'>
              <h6> </h6>
            </div>
          </div>}>
        </Route>
        {/* 멘즈 페이지  */}
        <Route path='/mens/' element={
          <div>
            <Mens/>
          </div>
        }
        >
        </Route>
        
        <Route path='/mens/res/' element={
            <>
            <ReservationMens/>
            </>
          }></Route>

        <Route path='/partner/' element={
                    <>
                    <Partner/>
                    </>
                  }></Route>

      </Routes>

      

    </>
  );
}

export default App;
