import './App.css';
import { Container, Row, Collapse, Button, Table } from 'react-bootstrap';
import React, { useState, useRef } from "react";
import Header2 from './Header/Header2.js';
import Footer from './Footer/Footer.js'
import { define, defineIntroduction, defineSefa, defineIntroductionSefa } from './StringData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillPhone, AiFillCaretDown } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ja } from "date-fns/esm/locale";

import { BsCalendarCheck } from "react-icons/bs";
import SimpleImageSlider from "react-simple-image-slider";

// smooth scroll 설정
// scrollbar.init(document.querySelector('#smooth-scroll'));

function App() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);
  const [open18, setOpen18] = useState(false);
  const [open19, setOpen19] = useState(false);
  const [open20, setOpen20] = useState(false);
  const [open21, setOpen21] = useState(false);
  const [open22, setOpen22] = useState(false);
  const [open23, setOpen23] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const form = useRef();

  // 사례 갤러리 이미지 배열
  const images = [
    { url: "/img/case-gallery/남자결2.png" },
    { url: "/img/case-gallery/남자콤보2.png" },
    { url: "/img/case-gallery/아이라인1.png" },
    { url: "/img/case-gallery/자연결4.png" },
    { url: "/img/case-gallery/콤보4.png" },
    { url: "/img/case-gallery/SMP.png" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();


    // form 유효성 검사 start 
    if (form.current.category.value === '') {
      alert('来院を選択して下さい。');
      return false;
    } 
    if (form.current.nameA.value === '' || form.current.nameB.value === '') {
      alert('お名前を入力して下さい。');
      return false;
    } 
    if (form.current.kanaA.value === '' || form.current.kanaB.value === '') {
      alert('フリガナを入力して下さい。');
      return false;
    } 
    if (form.current.sex.value === '') {
      alert('性別を選択して下さい。');
      return false;
    } 
    if (form.current.age.value === '') {
      alert('年齢を入力して下さい。');
      return false;
    } 
    if (form.current.tel.value === '') {
      alert('電話番号を入力して下さい。');
      return false;
    } 
    if (form.current.email.value === '') {
      alert('メールアドレスを入力して下さい。');
      return false;
    } 
    if (form.current.checkInDate.value === '') {
      alert('第1希望日を選択して下さい。');
      return false;
    } 
    if (form.current.checkInTime.value === '') {
      alert('第1希望日の時間を選択して下さい。');
      return false;
    } 
    if (form.current.exp.value === '') {
      alert('アートメイク経験を選択して下さい。');
      return false;
    }    
    if (!isChecked) {
      alert('「プライバシーポリシー及びキャンセルポリシーに同意する」チェックして下さい。');
      return false;
    }    
    // form 유효성 검사 end

    
    emailjs.sendForm('service_o0z19lh', 'template_j7f29u8', form.current, 'GFIJ3U6YfAu9Ogia3')
    .then((result) => {
      alert('ご予約をお受け付け完了致しました。');
    }, (error) => {
      alert(error);
    });
    


  };

  const [selected, setSelected] = useState('');

  const handleChange = event => {
    // console.log('Label 👉️', event.target.selectedOptions[0].label);
    // console.log(event.target.value);
    setSelected(event.target.value);
  };

  // 予約希望時間２
  const [selected2, setSelected2] = useState('');

  const handleChange2 = event => {
    // console.log('Label 👉️', event.target.selectedOptions[0].label);
    // console.log(event.target.value);
    setSelected2(event.target.value);
  };

  // 予約希望時間３
  const [selected3, setSelected3] = useState('');

  const handleChange3 = event => {
    // console.log('Label 👉️', event.target.selectedOptions[0].label);
    // console.log(event.target.value);
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
      {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        calendarContainer={MyContainer}
                      /> */}
      {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}

      <LazyLoadImage className='banner'
        effect="blur"
        src={'/img/Sefa.jpg'} // use normal <img> attributes as props
      />

      <center className='main-logo-are'>
        <LazyLoadImage className='main-logo'
          src='/img/onclinic-logo.gif' effect='blur'></LazyLoadImage>
      </center>
      <div className='define-area' id='define'>
        <h4 className='display-enter'>
          {define}
        </h4>
        <h6 className='define-introduction'>
          {defineIntroduction}
        </h6>
      </div>

      <div className='text-center marginTop'>
        <LazyLoadImage className='triangl' src='/img/triangl.jpg'></LazyLoadImage>
      </div>
      {/* <center>
        <div className='curriculum' id='curriculum'>

          <LazyLoadImage className='ticket-img' src='/img/ticket.png'></LazyLoadImage>
          <h2 className='marginTop'>Academy カリキュラム</h2>

          <Table responsive className='marginTop padding2em'>
            <tbody>
              <tr>
                <td colSpan={2}><h4>眉毛コース</h4></td>
              </tr>
              <tr>
                <td>1Day Class</td>
                <td>1日４時間 体験コース</td>
              </tr>
              <tr>
                <td colSpan={2}>未経験者：SEFAの眉毛の基礎を勉強し、毛並みとマシンのタッチを経験します。
                  <br></br>
                  経験者：SEFA眉毛の基礎を勉強し、SEFAのエンボとマシンの違いを練習します。
                </td>
              </tr>

              <tr>
                <td colSpan={2}><h5>1 Day クラスの費用 </h5></td>
              </tr>
              <tr>
                <td>チケット2枚<LazyLoadImage className='ticket-img-icon' src='/img/ticket.png'></LazyLoadImage>
                  ※別当購入材料費の1万円(税抜)は含まれておりません。 </td>
                <td>6 Times Class 一回６時間</td>
              </tr>
              <tr>
                <td colSpan={2}>6回のカリキュラムで終了致します。 <br></br>
                  お早めに終わらせたい方は週2回まで受講可能です。 <br></br>
                  ただし、練習と課題に関しては厳しくチェックを行います。
                </td>
              </tr>
              <tr>
                <td>
                  未経験者：SEFAの眉毛の基礎を勉強し、毛並みとマシーンのタッチを練習します。 <br></br>
                  経験者：SEFA眉毛の基礎を勉強し眉毛3種類の悩みと修正と練習を行いま す。
                </td>
              </tr>
              <tr>
                <td>
                  <h5>教育 内容</h5>
                </td>
              </tr>
              <tr>
                <td>
                  ①基礎の座学＋毛並み基礎練習<br></br>
                  ②ゴムシート練習（毛並みと毛並み用シャドウ）<br></br>
                  ③色素座学＋マシン（シャドウ）<br></br>
                  ④デザイン座学＋デザイン練習<br></br>
                  ⑤全体練習→タッチの違い<br></br>
                  ⑥まとめ練習、ディプロマ<br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>6回クラス費用
                  </h5>
                </td>
              </tr>
              <tr>
                <td>
                  チケット18枚
                </td>
              </tr>
              <tr>
                <td>
                  ※別当購入材料費 5万円(税抜)は含まれておりません 、マシンはレンタル可能。<br></br>
                  ※スケジュールはチケットでスピード変更可能です。<br></br>
                  例）週2回3週間で終わるコースと週1回1.5ヶ月で終わるコース調節可能。
                </td>
              </tr>
              <tr>
                <td>
                  <h5>無料モニターデモ施術</h5>
                </td>
              </tr>
              <tr>
                <td>
                  1回4時間<br></br>
                  ①デザイン<br></br>
                  ②麻酔<br></br>
                  ③施術<br></br>
                  ④片付け<br></br>
                  ※医療従事者のみクリニックにて施術を行います。<br></br>
                  DVORAはDIPLOMAの習得後も2回の補講（チケット2枚）が付きます。
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </center> */}

      <div className="price-table" id='price'>
        <div>
          <h4>ON CLINIC 施術料金表</h4>
          <h6>2回セット価格(単位:円(税込))</h6>
        </div>
        <Table responsive striped bordered>
          <tbody>
            <tr>
              <td><h6>Eybrow + Eyeline SET</h6></td>
              <td>260,000</td>
            </tr>
            <tr>
              <td>↳ monitor</td>
              <td>130,000</td>
            </tr>
            <tr>
              <td><h6>Eyebrow</h6>
                <div className='draw-img-bg-area'>
                  <div className='draw-img-bg'>
                    <h6>natural</h6>
                    <center>
                      <LazyLoadImage src='/img/draw/eyebrows-shadow.png' className='draw-img' /></center>
                  </div>
                  <div className='draw-img-bg'>
                    <h6>powder</h6>
                    <center>
                      <LazyLoadImage src='/img/draw/eyebrow-powder.png' className='draw-img' /></center>
                  </div>
                  <div className='draw-img-bg'>
                    <h6>powder + natural</h6>
                    <center>
                      <LazyLoadImage src='/img/draw/Eyebrows-Powder-Shadow.png' className='draw-img' /></center>
                  </div>
                </div>
              </td>
              <td>150,000</td>
            </tr>
            <tr>
              <td>↳ monitor</td>
              <td>80,000</td>
            </tr>
            <tr>
              <td><h6>Eyeline</h6>
                <div className='draw-img-bg-area'>
                  <div className='draw-img-bg'>
                    <center>
                      <LazyLoadImage src='/img/draw/eyeline.png' className='draw-img' /></center>
                  </div>
                </div>


              </td>
              <td>120,000</td>
            </tr>
            <tr>
              <td>↳ monitor</td>
              <td>60,000</td>
            </tr>
            <tr>
              <td><h6>Lip(準備中)</h6>
                <div className='draw-img-bg-area'>
                  <div className='draw-img-bg'>
                    <center>
                      <LazyLoadImage src='/img/draw/lip.png' className='draw-img' /></center>
                  </div>
                </div>

              </td>
              <td>170,000</td>
            </tr>
            <tr>
              <td>↳ monitor</td>
              <td>90,000</td>
            </tr>
            <tr>
              <td><h6>Hairline(準備中)</h6>
              <div className='draw-img-bg-area'>
                  <div className='draw-img-bg'>
                    <center>
                      <LazyLoadImage src='/img/draw/hairline.png' className='draw-img' /></center>
                  </div>
                </div>
              </td>
              <td>170,000</td>
            </tr>
            <tr>
              <td>↳ monitor</td>
              <td>90,000</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className='flow-area text-center'>
        <div className='u-layout__inner'>

          <div className='flow-title'>
            <h4>On Clinic 施術の流れ</h4>
          </div>

          <div className='flow-div'>
            <div className='flow-contents'>
              <h5 className='flow-step'>STEP 1</h5>
              <LazyLoadImage src='/img/on-flow/電話相談.jpeg' alt='' className='img-boder img-resize' />
              <h6 className='flow-text'>
                LINE、電話相談、予約
              </h6>
            </div>

            <div className='flow-contents'>
              <h5 className='flow-step'>STEP 2</h5>
              <LazyLoadImage src='/img/on-flow/カウンセリング1.jpeg' alt='' className='img-boder img-resize' />
              <h6 className='flow-text'>
                当日カウンセリング
              </h6>
            </div>

            <div className='flow-contents'>
              <h5 className='flow-step'>STEP 3</h5>
              <LazyLoadImage src='/img/on-flow/決済.jpeg' alt='' className='img-boder img-resize' />
              <h6 className='flow-text'>
                決済
              </h6>
            </div>

          </div>
          <div className='flow-div'>
            <div className='flow-contents'>
              <h5 className='flow-step'>STEP 4</h5>
              <LazyLoadImage src='/img/on-flow/デザイン1.jpeg' alt='' className='img-boder img-resize' />
              <h6 className='flow-text'>
                診察、デザイン
              </h6>
            </div>

            <div className='flow-contents'>
              <h5 className='flow-step'>STEP 5</h5>
              <LazyLoadImage src='/img/on-flow/施術.jpeg' alt='' className='img-boder img-resize' />
              <h6 className='flow-text'>
                施術
              </h6>
            </div>

            <div className='flow-contents'>
              <h5 className='flow-step'>STEP 6</h5>
              <LazyLoadImage src='/img/on-flow/アフターケアー.jpeg' alt='' className='img-boder img-resize' />
              <h6 className='flow-text'>
                アフターケア
              </h6>
            </div>

          </div>
        </div>
      </div>


      <div className='gallery-area'>

        <center>
        <div className='flow-title'>
            <h4>症例ギャラリー</h4>
          </div>
        <SimpleImageSlider
        width={400}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        
        />
        </center>
      </div>



      <div className='defineSefa-area' id='defineSefa'>
        <h4 className='display-enter'>
          {defineSefa}
        </h4>
        <h6 className='defineSefa-introduction'>
          {defineIntroductionSefa}
        </h6>
      </div>

      <div className='ticket-area'>
        <center>
        <LazyLoadImage src='/img/チケットシステム.png' alt='' className='ticket-area-img' effect='blur'></LazyLoadImage>
        </center>

      </div>

      <Container className='qna-area padding-left padding-top padding-right' id='qna-a'>
        <Row className='margin-1em'><div>
          <h4>よくある質問</h4>
        </div>
        </Row>
        <Row className='margin-1em'><div>
        <h5 className='qna-sub-title'>施術について</h5>
        </div>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen9(!open9)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open9}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : どのくらい持続しますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open9 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open9} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 個人差はありますが、大体1年から2年にかけて代謝と共に薄くなっていきます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen10(!open10)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open10}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : メイクはいつから大丈夫ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open10 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open10} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : カサブタが取れたら可能です。7日から10日で取れます。
              </h6>
            </div>
          </Collapse>
        </Row>
        
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen11(!open11)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open11}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 施術中の痛みはありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open11 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open11} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 痛みは個人差があります。その日の体調が影響しますので前日にアルコールを控えて睡眠をよくとることをおすすめします。
              </h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen12(!open12)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open12}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 施術後は腫れますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open12 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open12} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 眉毛の腫れはほぼありません。アイラインとリップは翌日まで腫れることがございます。
              </h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen13(!open13)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open13}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 定着までに何回施術が必要ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open13 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open13} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 施術は2回で定着になります。皮膚タイプや過去の残り具合によって3回目以降が必要な場合もございます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen14(!open14)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open14}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 施術によるリスクはありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open14 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open14} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 色素は時間と共に70％から90％消えていきますが、100％消えるわけではありませんのでご了承ください。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen15(!open15)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open15}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : MRIは大丈夫ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open15 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open15} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : MRIを受けることは問題ありませんが、事前報告は必要になります。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen16(!open16)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open16}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 肌が弱いのですが施術は可能ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open16 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open16} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : はい、可能です。カウンセリング時に相談の上施術させて頂きます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen17(!open17)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open17}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : アトピーでも施術は可能ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open17 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open17} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 予約前にご確認致します。ひどい方は施術を受けれない場合もございます。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen18(!open18)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open18}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 金属アレルギーでも施術は可能ですか
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open18 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open18} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 基本的に問題はございませんが、アレルギーをお持ちの方は申し出てください。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen19(!open19)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open19}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 持病や飲んでいる薬によって施術が出来ない可能性はありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open19 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open19} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : はい、休薬が必要な成分がございますので飲んでる薬があれば予約前にご確認お願い致します。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen20(!open20)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open20}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 妊娠中は施術を受けられますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open20 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open20} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 妊娠中の方は麻酔を使用しますので施術は受けれません。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen21(!open21)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open21}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 男性も施術は可能ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open21 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open21} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : もちろんです。おすすめします。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen22(!open22)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open22}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : アフターケアですることはありますか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open22 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open22} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 施術部位を触らないようご注意ください。
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen23(!open23)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open23}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
              Q : 洗顔・入浴はいつから大丈夫ですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open23 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open23} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
              A : 3日間施術部位に水や洗顔など直接当たらないように気を付けてください。入浴、サウナ、プール等は5日間避けてください。（シャワーは大丈夫です。）
              </h6>
            </div>
          </Collapse>
        </Row>

        <Row className='margin-1em'><div>
        <h5 className='qna-sub-title'>教育について</h5>
        </div>
        </Row>
        
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text text-left"
            aria-expanded={open}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 学べる技法はマシンですか？
              </h6>
              <AiFillCaretDown className={`qna-arrow ${open ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 眉毛の毛並みとヘアラインは手彫りを学びます。眉毛、アイライン、リップ、SMPはマシンです。
              </h6>

            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 人体への講習は行いませんか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open2 ? 'open' : ''}`} />
            </div>
          </Button>
          <Collapse in={open2} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : クリニック内で医療従事者のみモニター施術可能です。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>Q : どのような方が実際に受けられていますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open3 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open3} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 基本医療従事者の看護師が多いです。
                医療従事者以外はモニター施術以外なら可能です。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen4(!open4)}
            aria-controls="example-collapse-text"
            aria-expanded={open4}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : まったくの初心者ですが、大丈夫ですか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open4 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open4} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : 初心者用のカリキュラムがあるのでお任せください。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen5(!open5)}
            aria-controls="example-collapse-text"
            aria-expanded={open5}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 針とインクは受講者が準備するとありますが、どこで買えますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open5 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open5} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : マシン、インク、ニードル等施術に必要なものはSEFAアカデミーで購入可能です。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen6(!open6)}
            aria-controls="example-collapse-text"
            aria-expanded={open6}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : この講習を受けると、実際に人に施術できるレベルになれますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open6 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open6} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : ゴム練習シートだけだと難しいので、モニター施術受講をおすすめします。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen7(!open7)}
            aria-controls="example-collapse-text"
            aria-expanded={open7}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : アフターフォローはありますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open7 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open7} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : もちろんです。
                補講も可能で、その他アカデミー卒業生はいつでも気楽にご連絡ください。</h6>
            </div>
          </Collapse>
        </Row>
        <Row className='margin-1em'>
          <Button
            className='text-left'
            onClick={() => setOpen8(!open8)}
            aria-controls="example-collapse-text"
            aria-expanded={open8}
            variant="light"
          >
            <div className='text-center'>
              <h6 className='qna-q'>
                Q : 麻酔は使用しますか？</h6>
              <AiFillCaretDown className={`qna-arrow ${open8 ? 'open' : ''}`} />
            </div>
            <h6>

            </h6>
          </Button>
          <Collapse in={open8} className='margin-top-1em'>
            <div id="example-collapse-text">
              <h6>
                A : モニター施術の時は麻酔を使用します。練習の時は使用しません。</h6>
            </div>
          </Collapse>
        </Row>
      </Container>


      <div className='reserve' id='reserve'>

        <h4>Reservation</h4>
        <form ref={form} onSubmit={sendEmail} id='form-data' className='form-data'>

          <Table>
            <tbody>
              <tr>
                <th>
                  来院
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <ul className='list-inline'>
                    <li className='u-radio'>
                      <input name="category" type="radio" id="category1" value="1" className="label-radio"  />
                      <label htmlFor="category1" className='label-radio-text'>初めて</label>
                    </li>
                    <li className='u-radio'>
                      <input name="category" type="radio" id="category2" value="2" className="label-radio"  />
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
                  <input name="nameA" id="nameA" type="text" className="name wide" placeholder="姓"  />
                  <input name="nameB" id="nameB" type="text" className="name wide" placeholder="名"  />
                </td>
              </tr>
              <tr>
                <th>
                  フリガナ
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="kanaA" id="kanaA" type="text" className="name wide" placeholder="セイ"  />
                  <input name="kanaB" id="kanaB" type="text" className="name wide" placeholder="メイ"  />
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
                  <input type="number" name="age" className="age validate[required]" min="1"  />&nbsp;&nbsp;歳
                  <p className="caption">※未成年の方は保護者同伴か同意書が必要となります。</p>
                </td>
              </tr>
              <tr>
                <th>
                  電話番号
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="tel" type="tel" className="wide telephone" placeholder="半角英数字"  />
                  <p className="caption">※ご連絡可能な電話番号をご記入ください</p>
                </td>
              </tr>
              <tr>
                <th>
                  メールアドレス
                  <span className='must-icon must-pos'></span>
                </th>
                <td>
                  <input name="email" id="email" type="email" className="wide validate[required,custom[email]]"  /></td>
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
                        closeOnScroll={true}
                        selected={checkInDate}    // value
                        onChange={(date) => setCheckInDate(date)}
                        placeholderText="クリックして日付を入力"
                        name="checkInDate"
                        
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
                        closeOnScroll={true}
                        selected={checkInDate2}    // value
                        onChange={(date) => setCheckInDate2(date)}
                        placeholderText="クリックして日付を入力"
                        name="checkInDate2"
                        
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
                        closeOnScroll={true}
                        selected={checkInDate3}    // value
                        onChange={(date) => setCheckInDate3(date)}
                        placeholderText="クリックして日付を入力"
                        value={checkInDate3}
                        name="checkInDate3"
                        
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
                  確認事項
                </th>
                <td>
                  <p className="caption"><span>あてはまるものにチェックしてください</span></p>

                  <ul className="list-block">
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf1" value="1" />
                      <label htmlFor="conf1">妊娠、または授乳中</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf2" value="2" />
                      <label htmlFor="conf2">ケロイド体質</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf3" value="3" />
                      <label htmlFor="conf3">金属アレルギー</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf4" value="4" />
                      <label htmlFor="conf4">直近3週間前後に美容系サービスを受けた、または受ける予定がある</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf5" value="5" />
                      <label htmlFor="conf5">心療内科、メンタルクリニックを受診中、および受診予定</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf6" value="6" />
                      <label htmlFor="conf6">アーティストを指名したい（アーティスト名を備考欄にご記入ください。指名料：1500円）</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf7" value="7" />
                      <label htmlFor="conf7">ユベラ・トコフェロール(ビタミンE)服用注</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf8" value="8" />
                      <label htmlFor="conf8">持病、皮膚疾患、アレルギー体質</label>
                    </li>
                    <li className="u-check"><input name="conf[]" type="checkbox" id="conf9" value="9" />
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
                    <li className="u-radio"><input name="exp" type="radio" id="exp1" value="1" className='label-radio'  />
                      <label htmlFor="exp1" className='label-radio-text'>経験無し</label>
                    </li>
                    <li className="u-radio"><input name="exp" type="radio" id="exp2" value="2" className='label-radio'  />
                      <label htmlFor="exp2" className='label-radio-text'>1年以内に経験</label>
                    </li>
                    <li className="u-radio"><input name="exp" type="radio" id="exp3" value="3" className='label-radio'  />
                      <label htmlFor="exp3" className='label-radio-text'>1～3年前に経験</label>
                    </li>
                    <li className="u-radio"><input name="exp" type="radio" id="exp4" value="4" className='label-radio'  />
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
                受信されるデバイスで迷惑メールの設定をされている場合、onclinicsefa@gmail.comからの受信が行えるよう、設定のご確認をお願い致します。</p>
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
              <p>［お問い合わせ先］<br />On Clinic<br />電話：080-4763-0858　受付時間：10:00～19:00</p>
            </div>
          </div>
          <div className="form-privacy">
            <h3 className="form-privacy_title">キャンセルポリシー</h3>
            <div className="form-privacy_inner scroll">
              <p>ご予約のキャンセル及びご変更を希望される場合、3日前までに電話、メールにてご連絡をお願い致します。<br />
                当クリニックはキャンセル費は頂きません。施術当日10分以上遅れる場合はご連絡下さい。</p>
            </div>
          </div>


          <li className="u-check"><input name="Consentornot" type="checkbox" id="conf10" value="同意する" onChange={(e)=>{setIsChecked(!isChecked)}}/>
            <label htmlFor="conf10">プライバシーポリシー及びキャンセルポリシーに同意する</label>
          </li>

          {/* <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
          type='email'
          placeholder="@.com"
          aria-label="email"
          aria-describedby="basic-addon1"
          name='user_email'
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">お名前</InputGroup.Text>
        <Form.Control
          type='text'
          placeholder="田中　幸弘"
          aria-label="user_name"
          aria-describedby="basic-addon1"
          name='user_name'
        />
      </InputGroup> */}
          <center>
            <Button variant="outline-secondary" type="submit" value="Send" className='submit-btn'>
              ご予約
            </Button>
          </center>
        </form>
      </div>




      {/* ACCESS */}
      <Container className='text-center access' id='access'>
        <Row>
          <h4>ACCESS</h4>
          <h4>On Clinic & Sefa Artmake Academy</h4>
          <h6>東京都中央区銀座1-5-13 ZX銀座ビル4F</h6>
          <h6>営業時間 10:00-21:00</h6>
          <h2>
            <AiFillPhone />
            <a href="tel:08047630858">080-4763-0858</a>
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
                <td>11:00 - 21:00</td>
                <td key={0}>●</td>
                <td key={1}>●</td>
                <td key={2}>●</td>
                <td key={3}>●</td>
                <td key={4}>●</td>
                <td key={5}>●</td>
                <td key={6}>●</td>

              </tr>
            </tbody>
          </Table>
        </div>

        <div className="google-maps">
          <iframe
            title='googlemaps'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.355608363963!2d139.7669851!3d35.6748129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e3ddd4bba87b7e1!2sSefa%20Artmake%20Clinic%20%26%20Academy!5e0!3m2!1sko!2sjp!4v1671517355220!5m2!1sko!2sjp"
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
