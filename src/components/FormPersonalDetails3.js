import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { StyledEngineProvider } from '@mui/material/styles';

// const theme = unstable_createMuiStrictModeTheme();

export class FormUserDetails4 extends Component {
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
                            <LinearProgressWithLabel value={70} />
                            <div className='mens-dailog-wrap'>
                                <h4>ON Artmake for men ご予約</h4>
                                <div className="checkbox-group">
                                    <p>確認事項</p>
                                    <p>あてはまるものにチェックしてください</p>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="check1" value="SMP(モニター直径10cm 1回価格)" onChange={handleChange('check1')} checked={values[true]} />
                                        妊娠、または授乳中
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="check2" value="SMP(直径10cm 1回価格)" onChange={handleChange('check2')} checked={values[true]} />
                                        ケロイド体質
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="check3" value="ヘアライン(モニター2回セット価格)" onChange={handleChange('check3')} checked={values[true]} />
                                        金属アレルギー
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="check4" value="ヘアライン(2回セット価格)" onChange={handleChange('check4')} checked={values[true]} />
                                        直近3週間前後に美容系サービスを受けた、または受ける予定がある
                                    </label>
                                   <label className='checkbox-label'>
                                        <input type="checkbox" name="check5" value="mayuge3" onChange={handleChange('check5')} checked={values[true]} />
                                        心療内科、メンタルクリニックを受診中、および受診予定
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="check6" value="mayuge4" onChange={handleChange('check6')} checked={values[true]} />
                                        ユベラ・トコフェロール(ビタミンE)服用注
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="check7" value="mayuge5" onChange={handleChange('check7')} checked={values[true]} />
                                        持病、皮膚疾患、アレルギー体質
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="check8" value="retouch" onChange={handleChange('check8')} checked={values[true]} />
                                        直近でのイベントがある(結婚式、卒業式など)
                                    </label>
                                <p>※医師の診断により施術が出来ない、または有料のパッチテストにて確認が必要な場合がございます。</p>
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

export default FormUserDetails4;
