import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { StyledEngineProvider } from '@mui/material/styles';

// const theme = unstable_createMuiStrictModeTheme();

export class FormUserDetails5 extends Component {
    state = {
        firstChoiceDate: '',
        firstChoiceTime: '',
        secondChoiceDate: '',
        secondChoiceTime: '',
        thirdChoiceDate: '',
        thirdChoiceTime: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // const { values, handleChange } = this.props;
        return (
            <StyledEngineProvider injectFirst>
                <>
                    <div className='mens-main-bg5'>
                        <Dialog
                            open
                            fullWidth
                            maxWidth='sm'
                        >
                            <LinearProgressWithLabel value={90} />
                            <div className='mens-dailog-wrap'>
                                <h4>ON Clinic for men ご予約</h4>
                                <div className='mens-hope-day-time'>
                                    <p>予約内容</p>

                                    <div>
                                        <label>
                                            第1希望日
                                            <input
                                                type="date"
                                                name="firstChoiceDate"
                                                value={this.state.firstChoiceDate}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <label>
                                            第1希望時間
                                            <select
                                                name="firstChoiceTime"
                                                value={this.state.firstChoiceTime}
                                                onChange={this.handleChange}
                                            >
                                                <option value="">選択してください</option>
                                                {Array.from({ length: 9 }, (_, i) => i + 9).flatMap(hour =>
                                                    ['00', '30'].map(minute => (
                                                        <option key={`${hour}:${minute}`} value={`${hour}:${minute}`}>
                                                            {`${hour}:${minute}`}
                                                        </option>
                                                    )),
                                                )}
                                            </select>
                                        </label>
                                    </div>
<br/>
                                    <div>
                                        <label>
                                            第2希望日
                                            <input
                                                type="date"
                                                name="secondChoiceDate"
                                                value={this.state.secondChoiceDate}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <label>
                                            第1希望時間
                                            <select
                                                name="secondChoiceTime"
                                                value={this.state.secondChoiceTime}
                                                onChange={this.handleChange}
                                            >
                                                <option value="">選択してください</option>
                                                {Array.from({ length: 9 }, (_, i) => i + 9).flatMap(hour =>
                                                    ['00', '30'].map(minute => (
                                                        <option key={`${hour}:${minute}`} value={`${hour}:${minute}`}>
                                                            {`${hour}:${minute}`}
                                                        </option>
                                                    )),
                                                )}
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <br></br>
                                        <label>
                                            第3希望日
                                            <input
                                                type="date"
                                                name="thirdChoiceDate"
                                                value={this.state.thirdChoiceDate}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <label>
                                            第3希望時間
                                            <select
                                                name="thirdChoiceTime"
                                                value={this.state.thirdChoiceTime}
                                                onChange={this.handleChange}
                                            >
                                                <option value="">選択してください</option>
                                                {Array.from({ length: 9 }, (_, i) => i + 9).flatMap(hour =>
                                                    ['00', '30'].map(minute => (
                                                        <option key={`${hour}:${minute}`} value={`${hour}:${minute}`}>
                                                            {`${hour}:${minute}`}
                                                        </option>
                                                    )),
                                                )}
                                            </select>
                                        </label>
                                    </div>

                                </div>


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

export default FormUserDetails5;
