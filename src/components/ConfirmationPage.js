// ConfirmationPage.js

import React from 'react';
import './ConfirmationPage.css';

function ConfirmationPage({ formData, onEdit, onSubmit, formRef}) {
    const sendFormRef = formRef;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formElement = sendFormRef.current;
        console.log('sendFormRef.current: ' + sendFormRef.current);
        onSubmit(e, formElement);
    }

    return (
        <div className="confirmation-container">
            <h2>入力した情報の確認</h2>
            <div className="confirmation-info">
                <p>第一希望日: {formData.firstChoiceDate}</p>
                <p>第一希望時間: {formData.firstSelectedTime}</p>
                <p>第二希望日: {formData.secondChoiceDate}</p>
                <p>第二希望時間: {formData.secondSelectedTime}</p>
                <p>第三希望日: {formData.thirdChoiceDate}</p>
                <p>第三希望時間: {formData.thirdSelectedTime}</p>
                <p>お名前: {formData.fullName}</p>
                <p>電話番号: {formData.phoneNumber}</p>
                <p>メールアドレス: {formData.emailAddress}</p>
                <p>ご希望施術部位: {formData.selectedTreatment}</p>
                <p>ご相談内容: {formData.consultation}</p>

                <form ref={sendFormRef} onSubmit={handleSubmit}>
                    <button type='button' onClick={onEdit}>
                        修正
                    </button>

                    {/* 데이터 확인 후 제출할 수 있는 버튼 */}
                    <button type="submit">
                        送信
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConfirmationPage;
