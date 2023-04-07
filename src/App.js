import './App.css';
import { Container, Row, Table } from 'react-bootstrap';
import React, { useState, useRef } from "react";
import Header2 from './Header/Header2.js';
import Footer from './Footer/Footer.js'
import { AiFillPhone } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ja } from "date-fns/esm/locale";

import { BsCalendarCheck } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TicketContainer from './curriculum.js'
import NoticesList from './notice';
import ReservationButton from './components/ReservationButton';

import { Routes, Route } from 'react-router-dom'
import Campaign from './components/Campaign';
import LineButton from './components/LineButton';
import { DefineClinic, DefineAcademy } from './components/Define';
import MainLogo from './components/MainLogo';
import { PriceClinic, PriceAcademy  } from './components/Price'
import FlowClinic from './components/Flow';
import GalleryClinic from './components/Gallery';
import { CEOProfile } from './components/Profile';
import { QnAAcademy, QnAClinic} from './components/QnA';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const handleConfirm = () => {
    setIsConfirm(true);
  };

  const handleReservationComplete = () => {
    setIsConfirm(false);
    form.current.reset();
  };

  const form = useRef();

  /*이메일 같은지 검사*/
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');

  const handleEmailChange = (event) => {
    const { id, value } = event.target;
    if (id === 'email1') {
      setEmail1(value);
    } else if (id === 'email2') {
      setEmail2(value);
    }
  };

  const checkEmails = () => {
    if (email1 === email2) {
      return 'wide';
    } else {
      return 'wide different';
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // form 유효성 검사 start 
    if (form.current.res_category.value === '') {
      alert('予約区分を選択して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.category.value === '') {
      alert('来院を選択して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.nameA.value === '' || form.current.nameB.value === '') {
      alert('お名前を入力して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.kanaA.value === '' || form.current.kanaB.value === '') {
      alert('フリガナを入力して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.sex.value === '') {
      alert('性別を選択して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.age.value === '') {
      alert('年齢を入力して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.tel.value === '') {
      alert('電話番号を入力して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.email1.value === '') {
      alert('メールアドレスを入力して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.email2.value === '') {
      alert('メールアドレス再確認を入力して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.checkInDate.value === '') {
      alert('第1希望日を選択して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.checkInTime.value === '') {
      alert('第1希望日の時間を選択して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (form.current.exp.value === '') {
      alert('アートメイク経験を選択して下さい。');
      setIsConfirm(false);
      return false;
    }
    if (!isChecked) {
      alert('「プライバシーポリシー及びキャンセルポリシーに同意する」チェックして下さい。');
      setIsConfirm(false);
      return false;
    }
    // form 유효성 검사 end


    emailjs.sendForm('service_o0z19lh', 'template_j7f29u8', form.current, 'GFIJ3U6YfAu9Ogia3')
      .then((result) => {
        handleConfirm();
        alert('ご予約をお受け付け完了致しました。');


        handleReservationComplete();
      }, (error) => {
        setIsConfirm(false);
        alert(error);
      });



  };

  const [selected, setSelected] = useState('');

  const handleChange = event => {
    setSelected(event.target.value);
  };

  // 予約希望時間２
  const [selected2, setSelected2] = useState('');

  const handleChange2 = event => {
    setSelected2(event.target.value);
  };

  // 予約希望時間３
  const [selected3, setSelected3] = useState('');

  const handleChange3 = event => {
    setSelected3(event.target.value);
  };

  const [checkInDate, setCheckInDate] = useState('');
  const [checkInDate2, setCheckInDate2] = useState('');
  const [checkInDate3, setCheckInDate3] = useState('');


  return (
    <>
      {/* {Header()} */}
      <div id='sefa-top'></div>
      {Header2()}
      <Routes>
        {/*--- 클리닉 페이지 ---*/}
        <Route path="/" element={<div>
          <img className='banner'
            effect="blur"
            src={'/img/Sefa.jpg'} // use normal <img> attributes as props
            alt="main_banner"
          />
          <Campaign />
          <LineButton />
          <NoticesList />
          <MainLogo />
          <DefineClinic />
          <div className='text-center marginTop'>
            <img className='triangl' src='/img/triangle3point.png' alt='triangl'></img>
          </div>
          <LineButton />
          <PriceClinic />
          <FlowClinic />
          <GalleryClinic />
          <LineButton />

          <CEOProfile />

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
            <LineButton/>
          </div>}>
        </Route>
      </Routes>

      <div className='reserve' id='reserve'>
        <h4>Reservation</h4>
        <form ref={form} onSubmit={sendEmail} id='form-data' className='form-data'>

          <Table>
            <tbody>

              <tr>
                <th>
                  予約区分
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <ul className='list-inline'>
                    <li className='u-radio'>
                      <input name="res_category" type="radio" id="res_category1" value="Clinic" className="label-radio" />
                      <label htmlFor="res_category1" className='label-radio-text'>Clinic</label>
                    </li>
                    <li className='u-radio'>
                      <input name="res_category" type="radio" id="res_category2" value="Academy" className="label-radio" />
                      <label htmlFor="res_category2" className='label-radio-text'>Academy</label>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th>
                  来院
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <ul className='list-inline'>
                    <li className='u-radio'>
                      <input name="category" type="radio" id="category1" value="初めて" className="label-radio" />
                      <label htmlFor="category1" className='label-radio-text'>初めて</label>
                    </li>
                    <li className='u-radio'>
                      <input name="category" type="radio" id="category2" value="2回目以降" className="label-radio" />
                      <label htmlFor="category2" className='label-radio-text'>2回目以降</label>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>お名前
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="nameA" id="nameA" type="text" className="name wide" placeholder="姓" />
                  <input name="nameB" id="nameB" type="text" className="name wide" placeholder="名" />
                </td>
              </tr>
              <tr>
                <th>
                  フリガナ
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="kanaA" id="kanaA" type="text" className="name wide" placeholder="セイ" />
                  <input name="kanaB" id="kanaB" type="text" className="name wide" placeholder="メイ" />
                </td>
              </tr>
              <tr>
                <th>
                  性別
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <ul className="list-inline">
                    <li className="u-radio"><input name="sex" type="radio" id="sex1" value="女性" className="label-radio" />
                      <label htmlFor="sex1" className='label-radio-text'>女性</label>
                    </li>
                    <li className="u-radio"><input name="sex" type="radio" id="sex2" value="男性" className="label-radio" />
                      <label htmlFor="sex2" className='label-radio-text'>男性</label>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  年齢
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input type="number" name="age" className="age validate[required]" min="1" />&nbsp;&nbsp;歳
                  <p className="caption">※未成年の方は保護者同伴か同意書が必要となります。</p>
                </td>
              </tr>
              <tr>
                <th>
                  電話番号
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="tel" type="tel" className="wide telephone" placeholder="半角英数字" />
                  <p className="caption">※ご連絡可能な電話番号をご記入ください</p>
                </td>
              </tr>
              <tr>
                <th>
                  メールアドレス
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="email" id="email1" value={email1} type="text" onChange={handleEmailChange} className={checkEmails()} /></td>
              </tr>
              <tr>
                <th>
                  メールアドレス再確認
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="email" id="email2" type="text" value={email2} onChange={handleEmailChange} className={checkEmails()} /></td>
              </tr>
              <tr>
                <th>
                  予約内容
                  <span className='must-icon must-pos'></span>
                </th>
                <td className="hope">
                  <div className='hope-tr'>
                    <span>第1希望日</span><span className='datepicker-icon'>

                      <DatePicker
                        locale={ja}
                        dateFormat="yyyy年MM月dd日"    // 날짜 형식 설정
                        className="input-datepicker"    // 클래스 명 지정 css주기 위해
                        minDate={new Date()}
                        closeOnScroll={false}
                        selected={checkInDate}    // value
                        onChange={(date) => setCheckInDate(date)}
                        placeholderText="クリックして日付を入力"
                        name="checkInDate"
                        onFocus={e => e.target.blur()}
                        excludeDates={[
                          new Date('2023-03-24'),
                          new Date('2023-03-25'),
                          new Date('2023-03-29'),
                          new Date('2023-03-30'),
                          new Date('2023-04-06'),
                          new Date('2023-04-07'),
                          new Date('2023-04-10'),
                          new Date('2023-04-11'),
                          new Date('2023-04-18'),
                          new Date('2023-04-19'),
                          new Date('2023-04-25'),
                          new Date('2023-04-26'),
                        ]}
                      />
                      <BsCalendarCheck className='calendar-icon' />
                    </span>
                    <span>
                      <select value={selected} onChange={handleChange} name="checkInTime" className='checkInTime' >
                        <option value="">時間を選択</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                      </select>

                    </span></div>
                  <div className='hope-tr'>
                    <span>第2希望日</span><span className='datepicker-icon'>

                      <DatePicker
                        locale={ja}
                        dateFormat="yyyy年MM月dd日"    // 날짜 형식 설정
                        className="input-datepicker"    // 클래스 명 지정 css주기 위해
                        minDate={new Date()}
                        closeOnScroll={false}
                        selected={checkInDate2}    // value
                        onChange={(date) => setCheckInDate2(date)}
                        placeholderText="クリックして日付を入力"
                        name="checkInDate2"
                        onFocus={e => e.target.blur()}
                        excludeDates={[
                          new Date('2023-03-24'),
                          new Date('2023-03-25'),
                          new Date('2023-03-29'),
                          new Date('2023-03-30'),
                          new Date('2023-04-06'),
                          new Date('2023-04-07'),
                          new Date('2023-04-10'),
                          new Date('2023-04-11'),
                          new Date('2023-04-18'),
                          new Date('2023-04-19'),
                          new Date('2023-04-25'),
                          new Date('2023-04-26'),
                        ]}
                      />
                      <BsCalendarCheck className='calendar-icon' />
                    </span>
                    <span>
                      <select value={selected2} onChange={handleChange2} name="checkInTime2" className='checkInTime' >
                        <option value="">時間を選択</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                      </select>
                    </span></div>
                  <div className='hope-tr'>
                    <span>第3希望日</span><span className='datepicker-icon'>

                      <DatePicker
                        locale={ja}
                        dateFormat="yyyy年MM月dd日"    // 날짜 형식 설정
                        className="input-datepicker"    // 클래스 명 지정 css주기 위해
                        minDate={new Date()}
                        closeOnScroll={false}
                        selected={checkInDate3}    // value
                        onChange={(date) => setCheckInDate3(date)}
                        placeholderText="クリックして日付を入力"
                        value={checkInDate3}
                        name="checkInDate3"
                        onFocus={e => e.target.blur()}
                        excludeDates={[
                          new Date('2023-03-24'),
                          new Date('2023-03-25'),
                          new Date('2023-03-29'),
                          new Date('2023-03-30'),
                          new Date('2023-04-06'),
                          new Date('2023-04-07'),
                          new Date('2023-04-10'),
                          new Date('2023-04-11'),
                          new Date('2023-04-18'),
                          new Date('2023-04-19'),
                          new Date('2023-04-25'),
                          new Date('2023-04-26'),
                        ]}
                      />
                      <BsCalendarCheck className='calendar-icon' />
                    </span>

                    <span>
                      <select value={selected3} onChange={handleChange3} name="checkInTime3" className='checkInTime' >
                        <option value="">時間を選択</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                      </select></span></div>
                </td>
              </tr>


              <tr>
                <th>
                  ご希望の施術
                </th>
                <td>
                  <p className="caption">
                    {/* <span>あてはまるものにチェックしてください</span> */}
                  </p>
                  <ul className="list-block">
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu1" value="1部位 (モニター1回価格) 3分割" />
                      <label htmlFor="kibou-sizyutsu1">1部位 (モニター1回価格) 3分割</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu2" value="1部位 (モニター1回価格) 2分割" />
                      <label htmlFor="kibou-sizyutsu2">1部位 (モニター1回価格) 2分割</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu3" value="眉毛(モニター2回セット価格)" />
                      <label htmlFor="kibou-sizyutsu3">眉毛(モニター2回セット価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu12" value="眉毛お試し(モニター1回価格)" />
                      <label htmlFor="kibou-sizyutsu12">眉毛お試し(モニター1回価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu4" value="眉毛 (2回セット価格)" />
                      <label htmlFor="kibou-sizyutsu4">眉毛 (2回セット価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu5" value="他院の施術リタッチ(1回価格)" />
                      <label htmlFor="kibou-sizyutsu5">他院の施術リタッチ(1回価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu6" value="他院の施術修正(1回価格)" />
                      <label htmlFor="kibou-sizyutsu6">他院の施術修正(1回価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu7" value="アイラインモニター(2回セット価格)" />
                      <label htmlFor="kibou-sizyutsu7">アイラインモニター(2回セット価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu8" value="アイライン(2回セット価格)" />
                      <label htmlFor="kibou-sizyutsu8">アイライン(2回セット価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu9" value="リップお試し(1回価格)" />
                      <label htmlFor="kibou-sizyutsu9">リップお試し(1回価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu10" value="リップモニター(2回セット価格)" />
                      <label htmlFor="kibou-sizyutsu10">リップモニター(2回セット価格)</label>
                    </li>
                    <li className="u-check"><input name="kibou-sizyutsu[]" type="checkbox" id="kibou-sizyutsu11" value="リップ(2回セット価格)" />
                      <label htmlFor="kibou-sizyutsu11">リップ(2回セット価格)</label>
                    </li>
                  </ul>
                </td>
              </tr>




              <tr>
                <th>
                  確認事項
                </th>
                <td>
                  <p className="caption"><span>あてはまるものにチェックしてください</span></p>

                  <ul className="list-block">
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf1" value="妊娠、または授乳中" />
                      <label htmlFor="conf1">妊娠、または授乳中</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf2" value="ケロイド体質" />
                      <label htmlFor="conf2">ケロイド体質</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf3" value="金属アレルギー" />
                      <label htmlFor="conf3">金属アレルギー</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf4" value="直近3週間前後に美容系サービスを受けた、または受ける予定がある" />
                      <label htmlFor="conf4">直近3週間前後に美容系サービスを受けた、または受ける予定がある</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf5" value="心療内科、メンタルクリニックを受診中、および受診予定" />
                      <label htmlFor="conf5">心療内科、メンタルクリニックを受診中、および受診予定</label>
                    </li>
                    {/* <li className="u-check"><input name="conf[]" type="checkbox" id="conf6" value="アーティストを指名したい（アーティスト名を備考欄にご記入ください。指名料：1500円）" />
                      <label htmlFor="conf6">アーティストを指名したい（アーティスト名を備考欄にご記入ください。指名料：1500円）</label>
                    </li> */}
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf7" value="ユベラ・トコフェロール(ビタミンE)服用注" />
                      <label htmlFor="conf7">ユベラ・トコフェロール(ビタミンE)服用注</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf8" value="持病、皮膚疾患、アレルギー体質" />
                      <label htmlFor="conf8">持病、皮膚疾患、アレルギー体質</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf9" value="直近でのイベントがある(結婚式、卒業式など)" />
                      <label htmlFor="conf9">直近でのイベントがある(結婚式、卒業式など)</label>
                    </li>
                  </ul>
                  <p className="caption">※医師の診断により施術が出来ない、または有料のパッチテストにて確認が必要な場合がございます。	  </p>
                </td>
              </tr>

              <tr>
                <th>
                  アートメイク経験
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <ul className="list-block harf">
                    <li className="u-radio"><input name="exp" type="radio" id="exp1" value="経験無し" className='label-radio' />
                      <label htmlFor="exp1" className='label-radio-text'>経験無し</label>
                    </li>
                    <li className="u-radio"><input name="exp" type="radio" id="exp2" value="1年以内に経験" className='label-radio' />
                      <label htmlFor="exp2" className='label-radio-text'>1年以内に経験</label>
                    </li>
                    <li className="u-radio"><input name="exp" type="radio" id="exp3" value="1～3年前に経験" className='label-radio' />
                      <label htmlFor="exp3" className='label-radio-text'>1～3年前に経験</label>
                    </li>
                    <li className="u-radio"><input name="exp" type="radio" id="exp4" value="3年以上前に経験" className='label-radio' />
                      <label htmlFor="exp4" className='label-radio-text'>3年以上前に経験</label>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  その他ご質問事項等
                </th>
                <td>
                  <textarea name="comment" rows="5" className="wide"></textarea></td>
              </tr>
            </tbody>
          </Table>
          <div className="form-privacy">
            <h3 className="form-privacy_title">ご予約に関する注意事項</h3>
            <div className="form-privacy_inner scroll">
              <p>こちらのフォームは仮のお問い合わせ受付です。<br />
                上記の予約フォームにご入力後、当クリニックより折り返しご連絡させて頂き、提示した日時のご了承を頂いた時点で予約確定となります。<br />
                メールでご連絡がつかない場合は、お電話にてご連絡させていただくこともございますのでご了承くださいませ。</p>
              <p>ご予約フォームよりメール送信後、当クリニックより内容確認メールが24時間以内に届かない場合は、お手数ですが再度ご予約フォームをご記入の上、ご送信ください。<br />
                また当クリニックよりご予約枠仮おさえのメール送信時間より、48時間が過ぎてもお客様よりご返信が無い場合は自動キャンセルとなりますのでご注意ください。</p>
              <p>コロナワクチンの予防接種を予定されている場合、1週間前後は予約を避けてください。</p>
              <h4 className="form-privacy_subtitle">【メール指定受信拒否設定をされている方へ】</h4>
              <p>お使いのメールサービス等の設定により「迷惑メール」と認識され、メールが届かない場合や迷惑メールフォルダに入っている場合もございますので一度ご確認ください。<br />
                受信されるデバイスで迷惑メールの設定をされている場合、onclinic.res@gmail.comからの受信が行えるよう、設定のご確認をお願い致します。</p>
            </div>
          </div>
          <div className="form-privacy">
            <h3 className="form-privacy_title">プライバシーポリシー</h3>
            <div className="form-privacy_inner scroll">
              <p>On Clinic 銀座医院（以下「当クリニック」といいます。）は、お客様のプライバシー・個人情報（以下、個人情報と称します）を保護し、ご提供いただいた個人情報の取扱いについて、最大限の注意を払います。個人情報の利用には利用目的を特定し、特定された目的以外の利用はいたしません。</p>
              <dl>
                <dt>方針1</dt>
                <dd>すべての事業で取扱う個人情報及び従業者等の個人情報の取扱いに関し、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守致します。</dd>
                <dt>方針2</dt>
                <dd>個人情報の取得や利用にあたっては、あらかじめお客様の同意を得て、適法かつ公正な方法で取得します。特定された利用目的の達成に必要な範囲を超えた個人情報の取扱い（目的外利用）はいたしません。</dd>
                <dt>方針3</dt>
                <dd>ご本人の同意を得ている場合を除き、取得した個人情報を第三者に提供することはいたしません。ただし、法令等にもとづき、取得した個人情報を第三者に提供する場合があります。</dd>
                <dt>方針4</dt>
                <dd>当クリニックは、個人情報の取扱いに関する苦情及び相談を受けた場合は、その内容について迅速に事実関係等を調査し、合理的な期間内に誠意をもって対応致します。</dd>
                <dt>方針5</dt>
                <dd>個人情報の毀損、漏洩、不正取得を防止するために、個人情報の保護に関する内部規程を定め、適切な体制を整えるとともに、厳重なセキュリティ対策を実施する等、必要かつ適切な措置を講じます。</dd>
                <dt>方針6</dt>
                <dd>個人情報を利用する必要がなくなったときは、遅滞なく消去するよう努めます。</dd>
              </dl>
              <p>個人情報の取扱いに関するご相談・苦情について<br />当クリニックの個人情報の取扱いに関するご相談や苦情等のお問い合わせについては、 下記の窓口までご連絡ください。</p>
              <p>［お問い合わせ先］<br />On Clinic<br />電話：06-6867-9797　受付時間：日月火水木10:00～19:00、金土10:00～19:00</p>
            </div>
          </div>
          <div className="form-privacy">
            <h3 className="form-privacy_title">キャンセルポリシー</h3>
            <div className="form-privacy_inner scroll">
              <p>ご予約のキャンセル及びご変更を希望される場合、3日前までに電話、メールにてご連絡をお願い致します。<br />
                当クリニックはキャンセル費は頂きません。施術当日10分以上遅れる場合はご連絡下さい。</p>
            </div>
          </div>


          <li className="u-check"><input name="Consentornot" type="checkbox" id="conf10" value="同意する" onChange={(e) => { setIsChecked(!isChecked) }} />
            <label htmlFor="conf10">プライバシーポリシー及びキャンセルポリシーに同意する</label>
          </li>

          <center>
            {/* <Button variant="outline-secondary" type="submit" value="Send" className='submit-btn'>
              ご予約
            </Button> */}


            <ReservationButton
              isConfirm={isConfirm}
              onConfirm={handleConfirm}
              confirmedClassName="confirmed"
            />
          </center>
        </form>
      </div>




      {/* ACCESS */}
      <Container className='text-center access' id='access'>
        <Row>
          <h4>ACCESS</h4>
          <h4>On Clinic & Sefa Artmake Academy</h4>
          <h6>〒104-0061 東京都中央区銀座1-5-13 ZX銀座ビル4F</h6>
          <h6>営業時間 </h6>
          <h6>日月火水木：11:00-20:00</h6>
          <h6>金土：10:00-20:00</h6>
          <h2>
            <AiFillPhone />
            <a href="tel:0355799319">03-5579-9319</a>
          </h2>
        </Row>

        <div className="time-table">
          <Table responsive className='time-table-inner'>
            <tbody>
              <tr>
                <td></td>
                <td key={0}>月</td>
                <td key={1}>火</td>
                <td key={2}>水</td>
                <td key={3}>木</td>
                <td key={4}>金</td>
                <td key={5}>土</td>
                <td key={6}>日/祝</td>
              </tr>
              <tr>
                <td>11:00 - 20:00</td>
                <td key={0}>●</td>
                <td key={1}>●</td>
                <td key={2}>●</td>
                <td key={3}>●</td>
                <td key={4}></td>
                <td key={5}></td>
                <td key={6}>●</td>

              </tr>
              <tr>
                <td>10:00 - 20:00</td>
                <td key={0}></td>
                <td key={1}></td>
                <td key={2}></td>
                <td key={3}></td>
                <td key={4}>●</td>
                <td key={5}>●</td>
                <td key={6}></td>

              </tr>
            </tbody>
          </Table>
        </div>

        <div className="google-maps">
          <iframe
            title='googlemaps'
            // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.355608363963!2d139.7669851!3d35.6748129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e3ddd4bba87b7e1!2sSefa%20Artmake%20Clinic%20%26%20Academy!5e0!3m2!1sko!2sjp!4v1671517355220!5m2!1sko!2sjp"
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0889028952465!2d139.7647964151112!3d35.67481288019577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7938443b71%3A0x5e3ddd4bba87b7e1!2sON%20Clinic%20%26%20Sefa%20Artmake%20Academy!5e0!3m2!1sja!2sjp!4v1675678797270!5m2!1sja!2sjp'
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </Container>



      {Footer()}
      <div className='bottom-margin'>
        <h6> </h6>
      </div>


    </>
  );
}



export default App;
