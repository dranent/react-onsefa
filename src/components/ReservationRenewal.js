import React, { useState, useRef, useEffect } from 'react';
import './ReservationRenewal.css';
// import ConfirmationPage from './ConfirmationPage'; // ConfirmationPage 컴포넌트를 임포트
import emailjs from '@emailjs/browser';
import ReservationComplete from './ReservationComplete'; // 예약 완료 페이지 컴포넌트를 임포트
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select'

function ReservationRenewal() {

    const form = useRef();

    const options = [
        { value: '眉毛', label: '眉毛' },
        { value: 'リップ', label: 'リップ' },
        { value: 'アイライン', label: 'アイライン' },
        { value: 'ホクロ', label: 'ホクロ' },
        { value: 'ヘアライン', label: 'ヘアライン' },
        { value: 'SMP(頭皮)', label: 'SMP(頭皮)' },
    ];

    const [formData, setFormData] = useState({
        firstChoiceDate: '',
        secondChoiceDate: '',
        thirdChoiceDate: '',
        firstSelectedTime: '',
        secondSelectedTime: '',
        thirdSelectedTime: '',
        fullName: '',
        huriName: '',
        phoneNumber: '',
        emailAddress: '',
        consultation: '',
        validationError: '',
        showConfirmationPage: false, // 초기에는 입력 폼을 표시합니다.
        cancelChangePolicy: '',
        spamMailPolicy: '',
        birthday: '',
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        // input 요소의 타입이 checkbox인 경우 checked 값을 사용하고, 그 외에는 value 값을 사용합니다.
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData({ ...formData, [name]: inputValue });

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
            form.current.cancelChangePolicy.checked === false ||
            form.current.spamMailPolicy.checked === false
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

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <div className="reservation-container">
            {showCompletePage ? ( // 예약 완료 페이지를 표시하는 조건 추가
                <ReservationComplete />
            ) : (
                <form ref={form} onSubmit={sendEmail}>

                    <h2>ご予約</h2>
                    <div className="date-selection">
                        {/* 날짜 및 시간 선택 부분 */}
                        <label className='required'>第一希望日: </label>
                        <DatePicker
                            name="firstChoiceDate"
                            selected={formData.firstChoiceDate}
                            onChange={(date) => setFormData({ ...formData, firstChoiceDate: date })}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="日付選択"
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
                        <DatePicker
                            name="secondChoiceDate"
                            selected={formData.secondChoiceDate}
                            onChange={(date) => setFormData({ ...formData, secondChoiceDate: date })}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="日付選択"
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
                        <DatePicker
                            name="thirdChoiceDate"
                            selected={formData.thirdChoiceDate}
                            onChange={(date) => setFormData({ ...formData, thirdChoiceDate: date })}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="日付選択"
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
                        <label className='required'>お名前(フリガナ): </label>
                        <input
                            type="text"
                            name="huriName"
                            value={formData.huriName}
                            onChange={handleInputChange}
                        />
                        <label className='required'>電話番号(「−」無し): </label>
                        <input
                            type="tel"
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
                        <label>生年月日: </label>
                        <input
                            type="number"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleInputChange}
                            placeholder='例：19990101'
                        />


                        <label>ご希望施術メニュー: </label>
                        <Select
                            name="selectedTreatment"
                            value={selectedOptions}
                            options={options}
                            onChange={handleSelectChange}
                            isMulti // 다중 선택을 허용하려면 isMulti 속성 추가
                            placeholder='施術メニューを選択'
                        />

                        <label>ご相談内容: </label>
                        <textarea
                            rows="2" // 5줄로 설정
                            name="consultation"
                            value={formData.consultation}
                            onChange={handleInputChange}
                        />
                        {/* 체크 박스 1: キャンセル 및 변경에 대한 안내 */}
                        <div className="checkbox-container">
                            <label htmlFor="cancelChangePolicy" className='required-checkbox'>
                                <input
                                    type="checkbox"
                                    id="cancelChangePolicy" // id를 추가하고
                                    name="cancelChangePolicy"
                                    checked={formData.cancelChangePolicy}
                                    onChange={handleInputChange}
                                />
                                ご予約日当日のキャンセル及びご変更を希望される場合、規定のキャンセル料5,000円のご負担がございます。
                            </label>
                        </div>

                        {/* 체크 박스 2: 스팸 메일 설정에 대한 안내 */}
                        <div className="checkbox-container">
                            <label htmlFor="spamMailPolicy" className='required-checkbox'>
                                <input
                                    type="checkbox"
                                    id="spamMailPolicy" // id를 추가하고
                                    name="spamMailPolicy"
                                    checked={formData.spamMailPolicy}
                                    onChange={handleInputChange}
                                />
                                受信されるデバイスで迷惑メールの設定をされている場合、メールからの受信が行えるよう、設定のご確認をお願い致します。
                            </label>
                        </div>

                    </div>
                    <input className="SendButton" type="submit" value="送信" />

                </form>)}
        </div>

    );
}



export default ReservationRenewal;