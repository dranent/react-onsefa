import './mens.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move,Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// import { FadeOut, MoveIn, MoveOut,Zoom, ZoomOut } from "react-scroll-motion";

import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './mens-price.css';
// import { width } from '@mui/system';
import { QnAClinicForMen } from './QnA';
import { AccessMens } from './Access';



function Mens() {


  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());


  return (
    <div className='mens-container'>

      <ScrollContainer >
        <div className='mens-main-bg'>
          <span className='mens-formen-text' style={{ fontSize: "12vw" }}>for men✨</span>
        </div>

        <ScrollPage >
          <Animator animation={ZoomInScrollOut}>

            <span style={{ fontSize: "10vw" }}>ON Artmake</span>
          </Animator>
        </ScrollPage>

        <div className='mens-main-bg2'></div>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "12vw" }}>For men</span>
          </Animator>
        </ScrollPage>



        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }} >

            <div className='mens-main-bg3'>
              <center style={{ fontSize: "12vw" }}>
                <h1>
                  男性のための<br />
                  SMP<br />
                  眉毛</h1></center></div>

          </div>
        </ScrollPage>

        <div className='mens-main-bg4'></div>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "4vw" }}>ON Artmake for menは男性のために</span>
            <br />
            <span style={{ fontSize: "5vw" }}>
              施術をさせていただいてます。
            </span>
          </Animator>
        </ScrollPage>

        {/* <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className='mens-define'>
              <h5>専用に開発されたマイクロニードルとインクを用いて、<br />
                頭皮に色素を注入することで毛根を描き、
                あたかも髪の毛が生えているかのように見せる技術です。<br></br>
                Scalp Micro Pigmentationの頭文字を取りSMPと呼ばれています。</h5>
            </div>
          </Animator>
        </ScrollPage> */}


        <ScrollPage>
          {/* <Animator animation={batch(Fade())}> */}

          <div className='mens-gallery'>
            <center className='mens-gallery-text'><h4>症例ギャラリー</h4></center>
            <div className="mens-gallery-container">

              <input id="item1" type="checkbox" />
              <label className="item1" htmlFor="item1" style={{ backgroundImage: "url(../img/mens-gallery/4.webp)" }}>
              </label>
              <input id="item2" type="checkbox" />
              <label className="item2" htmlFor="item2" style={{ backgroundImage: "url(../img/mens-gallery/smp1.webp)" }}>
              </label>
              <input id="item3" type="checkbox" />
              <label className="item3" htmlFor="item3" style={{ backgroundImage: "url(../img/mens-gallery/2.webp)" }}>
              </label>
              <input id="item4" type="checkbox" />
              <label className="item4" htmlFor="item4" style={{ backgroundImage: "url(../img/mens-gallery/3.webp)" }}>
              </label>
              <input id="item5" type="checkbox" />
              <label className="item5" htmlFor="item5" style={{ backgroundImage: "url(../img/mens-gallery/1.webp)" }}>
              </label>
              <input id="item6" type="checkbox" />
              <label className="item6" htmlFor="item6" style={{ backgroundImage: "url(../img/mens-gallery/6.webp)" }}>
              </label>
              <input id="item7" type="checkbox" />
              <label className="item7" htmlFor="item7" style={{ backgroundImage: "url(../img/mens-gallery/5.webp)" }}>
              </label>
              <input id="item8" type="checkbox" />
              <label className="item8" htmlFor="item8" style={{ backgroundImage: "url(../img/mens-gallery/8.webp)" }}>
              </label>
              <input id="item9" type="checkbox" />
              <label className="item9" htmlFor="item9" style={{ backgroundImage: "url(../img/mens-gallery/7.webp)" }}>
              </label>
            </div>
          </div>
          {/* </Animator> */}
        </ScrollPage>




        <div className="price-table" id='price'>
          <div>
            <h4>ON ARTMAKE FOR MEN 施術料金表</h4>
            <h6>単位:円(税込)</h6>
          </div>
          <div>
            <div className="mens-table-responsive">
              <table className="mens-table mens-table-dark mens-table-hover">
                <thead>
                  <tr>
                    <th>施術メニュー</th>
                    <th>OPEN CAMPAIGN 価格</th>
                    <th>定価</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    1部位 (モニター1回価格) 3分割
                    </td>
                    <td className='mens-open-price'>15,000(税込)</td>
                    <td>初めての方におすすめ！</td>
                  </tr>
                  <tr>
                    <td>1部位 (モニター1回価格) 2分割</td>
                    <td className='mens-open-price'>25,000(税込)</td>
                    <td>35,000(税込)</td>
                  </tr>
                  <tr>
                    <td>眉毛(モニター1回価格)</td>
                    <td className='mens-open-price'>初めての方におすすめ！お試し価格 38,000(税込)</td>
                    <td>45,000(税込)</td>
                  </tr>
                  <tr>
                    <td>眉毛(1回価格)	</td>
                    <td className='mens-open-price'>45,000(税込)</td>
                    <td>65,000(税込)</td>
                  </tr>
                  <tr>
                    <td>眉毛(モニター2回セット価格)</td>
                    <td className='mens-open-price'>67,500(税込)</td>
                    <td>75,000(税込)</td>
                  </tr>
                  <tr>
                    <td>眉毛 (2回セット価格)</td>
                    <td className='mens-open-price'>100,000(税込)</td>
                    <td>150,000(税込)</td>
                  </tr>
                  <tr>
                    <td>SMP(モニター直径10cm 1回価格)</td>
                    <td className='mens-open-price'>150,000(税込)</td>
                    <td>180,000(税込)</td>
                  </tr>
                  <tr>
                    <td>SMP(直径10cm 1回価格)</td>
                    <td className='mens-open-price'>200,000(税込)</td>
                    <td>250,000(税込)</td>
                  </tr>
                  <tr>
                    <td>ヘアライン(モニター2回セット価格)</td>
                    <td className='mens-open-price'>76,500(税込)</td>
                    <td>85,000(税込)</td>
                  </tr>
                  <tr>
                    <td>ヘアライン(2回セット価格)</td>
                    <td className='mens-open-price'>120,000(税込)</td>
                    <td>170,000(税込)</td>
                  </tr>
                  <tr>
                    <td>アイライン(モニター2回セット価格)</td>
                    <td className='mens-open-price'>54,000(税込)</td>
                    <td>60,000(税込)</td>
                  </tr>
                  <tr>
                    <td>アイライン(2回セット価格)</td>
                    <td className='mens-open-price'>80,000(税込)</td>
                    <td>120,000(税込)</td>
                  </tr>
                  <tr>
                    <td>リップ(モニター1回価格)</td>
                    <td className='mens-open-price'>初めての方におすすめ！お試し価格38,000(税込)</td>
                    <td>45,000(税込)</td>
                  </tr>
                  <tr>
                    <td>リップ(1回価格)</td>
                    <td className='mens-open-price'>45,000(税込)</td>
                    <td>65,000(税込)</td>
                  </tr>
                  <tr>
                    <td>リップ(モニター2回セット価格)	</td>
                    <td className='mens-open-price'>67,500(税込)</td>
                    <td>75,000(税込)</td>
                  </tr>
                  <tr>
                    <td>眉毛 + アイライン SETモニター(2回セット価格)</td>
                    <td className='mens-open-price'>117,000(税込)</td>
                    <td>130,000(税込)</td>
                  </tr>
                  <tr>
                    <td>眉毛 + アイライン SET(2回セット価格)</td>
                    <td className='mens-open-price'>180,000(税込)</td>
                    <td>260,000(税込)</td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>
        </div>

        <div className='mens-main-bg5'>


          <QnAClinicForMen />
          <AccessMens />


        </div>
        <div className='margin-bottom-parent' >
          <div className="margin-bottom-child"></div>
        </div>
      </ScrollContainer>




      <footer className="mens-footer">
        <Container>
          <Row>
            <Col className="text-center">
              <div className="button-container">
                <button className="button-pulse" onClick={() => {
                  window.location.href = 'tel:03-5579-9319';
                }}>
                  <span className="button-text">電話で予約</span>

                </button>
                <button className="button-pulse" onClick={() => {
                  window.location.href = 'https://lin.ee/87QWTkV';
                }}>
                  <span className="button-text">LINEで相談</span>

                </button>
                <div className="insta-area" style={{marginTop: '1rem'}}>
                  <a href="https://www.instagram.com/onclinic_mens/" target="_blank" rel="noreferrer noopener">
                    <img src="/img/instar-icon-mens-hover.svg" alt="Instagram button" id="instagram-mens-btn" />
                  </a>
                </div>
              </div>


            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
export default Mens;