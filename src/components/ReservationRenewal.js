import React, { useState, useRef, useEffect  } from 'react';
import './ReservationRenewal.css';
// import ConfirmationPage from './ConfirmationPage'; // ConfirmationPage 컴포넌트를 임포트
import emailjs from '@emailjs/browser';
import ReservationComplete from './ReservationComplete'; // 예약 완료 페이지 컴포넌트를 임포트


function ReservationRenewal() {

    const form = useRef();

    const [formData, setFormData] = useState({
        firstChoiceDate: '',
        secondChoiceDate: '',
        thirdChoiceDate: '',
        firstSelectedTime: '',
        secondSelectedTime: '',
        thirdSelectedTime: '',
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        selectedTreatment: '',
        consultation: '',
        validationError: '',
        showConfirmationPage: false, // 초기에는 입력 폼을 표시합니다.
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

    };
    const [showCompletePage, setShowCompletePage] = useState(false); // 예약 완료 페이지를 표시할 상태 추가

    useEffect(() => {
        if (showCompletePage) {
          // 예약 완료 페이지가 표시될 때 처리할 로직 추가
          // 예를 들어, 스크롤을 페이지 상단으로 이동하는 등의 작업 수행 가능
          window.scrollTo(0, 0);
        }
      }, [showCompletePage]);

     const sendEmail = (e) => {
        e.preventDefault();

        // console.log('firstChoiceDate '+form.current.firstChoiceDate.value);
        if (
            form.current.firstChoiceDate.value === '' ||
            form.current.firstSelectedTime.value === '' ||
            form.current.secondChoiceDate.value === '' ||
            form.current.secondSelectedTime.value === '' ||
            form.current.thirdChoiceDate.value === '' ||
            form.current.thirdSelectedTime.value === '' ||
            form.current.fullName.value === '' ||
            form.current.phoneNumber.value === '' ||
            form.current.emailAddress.value === '' ||
            form.current.selectedTreatment.value === ''
        ) {
            window.alert('すべての必須情報(*)を入力する必要があります。');

            return false;
        } else {
            // setShowCompletePage(true);
            emailjs.sendForm('service_o0z19lh', 'template_j7f29u8', form.current, 'GFIJ3U6YfAu9Ogia3')
            .then((result) => {
                // alert('ご予約をお受け付け完了致しました。');
                setShowCompletePage(true);
                // console.log(result.text);
            }, (error) => {
                alert('error');
                // console.log(error.text);
            });
        }
    };

    // const handleConfirmationButtonClick = () => {
    //     setFormData({ ...formData, showConfirmationPage: true });
    // };

    // const handleEditButtonClick = () => {
    //     setFormData({ ...formData, showConfirmationPage: false });
    // };

    return (
        <div className="reservation-container">
                  {showCompletePage ? ( // 예약 완료 페이지를 표시하는 조건 추가
        <ReservationComplete/>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
            
        <h2>ご予約</h2>
                    <div className="date-selection">
                        {/* 날짜 및 시간 선택 부분 */}
                        <label className='required'>第一希望日: </label>
                        <input
                            type="date"
                            name="firstChoiceDate"
                            value={formData.firstChoiceDate}
                            onChange={handleInputChange}
                        />
                        <select
                            name="firstSelectedTime"
                            value={formData.firstSelectedTime}
                            onChange={handleInputChange}
                        >
                            <option value="">時間帯を選択</option>
                            <option value="10:00">10:00</option>
                            <option value="13:30">13:30</option>
                            <option value="16:00">16:00</option>
                        </select>
                        <label className='required'>第二希望日: </label>
                        <input
                            type="date"
                            name="secondChoiceDate"
                            value={formData.secondChoiceDate}
                            onChange={handleInputChange}
                        />
                        <select
                            name="secondSelectedTime"
                            value={formData.secondSelectedTime}
                            onChange={handleInputChange}
                        >
                            <option value="">時間帯を選択</option>
                            <option value="10:00">10:00</option>
                            <option value="13:30">13:30</option>
                            <option value="16:00">16:00</option>
                        </select>
                        <label className='required'>第三希望日: </label>
                        <input
                            type="date"
                            name="thirdChoiceDate"
                            value={formData.thirdChoiceDate}
                            onChange={handleInputChange}
                        />
                        <select
                            name="thirdSelectedTime"
                            value={formData.thirdSelectedTime}
                            onChange={handleInputChange}
                        >
                            <option value="">時間帯を選択</option>
                            <option value="10:00">10:00</option>
                            <option value="13:30">13:30</option>
                            <option value="16:00">16:00</option>
                        </select>
                    </div>
                    <div className="customer-info">
                        {/* 고객 정보 입력 부분 */}
                        <label className='required'>お名前: </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                        <label className='required'>電話番号(「−」無し): </label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                        <label className='required'>メールアドレス: </label>
                        <input
                            type="text"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                        />
                        <label className='required'>ご希望施術メニュー: </label>
                        <input
                            type="text"
                            name="selectedTreatment"
                            value={formData.selectedTreatment}
                            onChange={handleInputChange}
                        />
                        <label>ご相談内容: </label>
                        <textarea
                            rows="2" // 5줄로 설정
                            name="consultation"
                            value={formData.consultation}
                            onChange={handleInputChange}
                        />
                    </div>
            <input className="SendButton"type="submit" value="送信" />
           
        </form> )}
      </div>
      
    );
}



export default ReservationRenewal;