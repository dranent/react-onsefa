import './App.css';

import React from "react";
import Header2 from './Header/Header2.js';
import Footer from './Footer/Footer.js'

import 'react-datepicker/dist/react-datepicker.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import TicketContainer from './curriculum.js'
import NoticesList from './notice';
import { Routes, Route } from 'react-router-dom'
// import Campaign from './components/Campaign';
import { DefineClinic, DefineAcademy } from './components/Define';
import MainLogo from './components/MainLogo';
import { PriceClinic, PriceAcademy } from './components/Price'
import FlowClinic from './components/Flow';
import GalleryClinic from './components/Gallery';
// import { CEOProfile } from './components/Profile';
import { QnAAcademy, QnAClinic } from './components/QnA';
import { Access } from './components/Access';
// import { ReserveClinic } from './components/Reserve';
import AboutArtist from './components/AboutArtist';
// import Mens from './components/mens';
import Menu from './components/menu';
import { ReserveAcademy } from './components/ReserveAcademy';
import { Influencer } from './components/influencer';
import ReservationRenewal from './components/ReservationRenewal';
import LpIndex from './components/LP/LpIndex';
import Thanks from './components/Thanks.js';
// import Privacy from './components/privacy';
// import VIPPrice from './components/vip-price';
// import Directors from './components/Directors.js';

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
          {/* <Directors/> */}
          {/* <YouTubePlayer/> */}
          {/* <Campaign /> */}
          <NoticesList />
          <DefineClinic />
          <div className='text-center marginTop'>
            <img className='triangl' src='/img/triangle3point.png' alt='triangl'></img>
          </div>
          <Menu />
          <PriceClinic />
          {/* <VIPPrice/> */}
          {/* <div className='text-center marginTop'>
            <img className='triangl' src='/img/doctor.webp' alt='triangl'></img>
          </div> */}
          <AboutArtist />
          <GalleryClinic />
          <Influencer/>
          <FlowClinic />
          {/* <ReserveClinic /> */}
          <QnAClinic />
          <DefineAcademy />
            {/* <CEOProfile /> */}
            {/* <div className='ticket-area' id='ticket-area'>
              <center>
                <img src='/img/チケットシステム2.png' alt='' className='ticket-area-img' width={950} />
              </center>
            </div> */}
            {/* <TicketContainer /> */}
            <PriceAcademy />
            <QnAAcademy />
            <ReserveAcademy/>
            {/* <Privacy/> */}
          <Access />
          <Footer />
          <div className='bottom-margin'>
            <h6> </h6>
          </div>
        </div>}></Route>

        {/* 예약페이지 */}
        <Route path="/res/" element={
          <div>
           {Header2()}
           <ReservationRenewal/>
          </div>
        }
        >
        </Route>

        {/* LP 페이지 */}
        <Route path="/lp/" element={
          <div>
            <LpIndex/>
          </div>
        }
        >
        </Route>
        {/* LP 예약확인 페이지 */}
        <Route path="/lp/thanks/" element={
          <div>
           <Thanks/>
          </div>
        }
        >
        </Route>


        {/*--- 아카데미 페이지 ---*/}
        {/* <Route path="/academy/" element={
          <div> */}
            {/* {Header2()} */}
            {/* <DefineAcademy /> */}
            {/* <CEOProfile /> */}
            {/* <div className='ticket-area' id='ticket-area'>
              <center>
                <img src='/img/チケットシステム2.png' alt='' className='ticket-area-img' width={950} />
              </center>
            </div> */}
            {/* <TicketContainer /> */}
            {/* <PriceAcademy /> */}
            {/* <QnAAcademy />
            <ReserveAcademy/>
            <Access />
            <Footer />
            <div className='bottom-margin'>
              <h6> </h6>
            </div>
          </div>}>
        </Route> */}
        {/* 멘즈 페이지  */}
        {/* <Route path='/mens/' element={
          <div>
            <Mens/>
          </div>
        }
        >
        </Route> */}
        

      </Routes>

      

    </>
  );
}

export default App;
