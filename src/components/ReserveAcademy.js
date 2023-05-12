import emailjs from '@emailjs/browser';
import { Table } from 'react-bootstrap';
import { ReservationButtonAcademy } from './ReservationButton';
import React, { useState, useRef } from "react";

function ReserveAcademy() {
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

      // form 유효성 검사 end
  
  
      emailjs.sendForm('service_o0z19lh', 'template_qps5vfo', form.current, 'GFIJ3U6YfAu9Ogia3')
        .then((result) => {
          handleConfirm();
          alert('お問い合わせをお受け付け致しました。');
  
  
          handleReservationComplete();
        }, (error) => {
          setIsConfirm(false);
          alert(error);
        });
  
  
  
    };
  
  
    return (
        <div className='reserve' id='reserve'>
        <h4>Reservation</h4>
        <form ref={form} onSubmit={sendEmail} id='form-data' className='form-data'>

          <Table>
            <tbody>
             
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
                  内容
                </th>
                <td>
                  <textarea name="comment" rows="5" className="wide"></textarea></td>
              </tr>


            </tbody>
          </Table>

          <center>
            <ReservationButtonAcademy
              isConfirm={isConfirm}
              onConfirm={handleConfirm}
              confirmedClassName="confirmed"
            />
          </center>
        </form>
      </div>

    )
}

export { ReserveAcademy };