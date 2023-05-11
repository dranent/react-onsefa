import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { StyledEngineProvider } from '@mui/material/styles';

// const theme = unstable_createMuiStrictModeTheme();

export class FormUserDetails2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <StyledEngineProvider injectFirst>
                <>
                    <div className='mens-main-bg5'>
                        <Dialog
                            open
                            fullWidth
                            maxWidth='sm'
                        >
                            <LinearProgressWithLabel value={30} />
                            <div className='mens-dailog-wrap'>
                                <h4>ON Clinic for men ご予約</h4>
                                <label htmlFor="birthday">生年月日</label>
                                <div className="mens-birthday">
                                    <select id="birthday-year" name="birthday-year" onChange={handleChange('birthdayYear')} value={values.birthdayYear}>
                                        <option value="">--</option>
                                        {Array.from({ length: 74 }, (_, i) => 1950 + i).map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                    年
                                    <select id="birthday-month" name="birthday-month" onChange={handleChange('birthdayMonth')} value={values.birthdayMonth}>
                                        <option value="">--</option>
                                        {Array.from({ length: 12 }, (_, i) => 1 + i).map((month) => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>
                                    月
                                    <select id="birthday-day" name="birthday-day" onChange={handleChange('birthdayDay')} value={values.birthdayDay}>
                                        <option value="">--</option>
                                        {Array.from({ length: 31 }, (_, i) => 1 + i).map((day) => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                    日
                                </div>
                                <label htmlFor="phone">電話番号</label>
                                <input type="tel" id="phone" name="phone" onChange={handleChange('phone')} value={values.phone} />
                                {/* <label htmlFor="reservation-details"> */}

                                <div className='mens-res-btn-wrap'>
                                    <button
                                        className='mens-res-btn-back'
                                        variant="contained"
                                        onClick={this.back}

                                    >
                                        Back
                                    </button>
                                    <button
                                        className='mens-res-btn-continue'
                                        variant="contained"
                                        onClick={this.continue}

                                    >
                                        Continue
                                    </button>

                                </div>
                            </div>
                        </Dialog>
                    </div>
                </>
            </StyledEngineProvider>
        );
    }
}

export default FormUserDetails2;
