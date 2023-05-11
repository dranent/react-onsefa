import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { StyledEngineProvider } from '@mui/material/styles';

// const theme = unstable_createMuiStrictModeTheme();

export class FormUserDetails3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            treatment1: false,
            treatment2: false,
            treatment3: false,
            treatment4: false,
            treatment5: false,
            treatment6: false,
            treatment7: false,
            treatment8: false,
            treatment9: false,
            treatment10: false,
            treatment11: false,
        };

    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values } = this.props;
        const handleChange = name => e => {
            const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
            this.setState({ [name]: value });
        };

        return (
            <StyledEngineProvider injectFirst>
                <>
                    <div className='mens-main-bg5'>
                        <Dialog
                            open
                            fullWidth
                            maxWidth='sm'
                        >
                            <LinearProgressWithLabel value={50} />
                            <div className='mens-dailog-wrap'>
                                <h4>ON Clinic for men ご予約</h4>
                                <div className="checkbox-group">
                                    <p>ご希望の施術</p>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment1" value="hokuro1" onChange={handleChange("treatment1")} checked={values[true]} />
                                        SMP(モニター直径10cm 1回価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment2" value="hokuro2" onChange={handleChange('treatment2')} checked={values[true]} />
                                        SMP(直径10cm 1回価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment3" value="mayuge1" onChange={handleChange('treatment3')} checked={values[true]} />
                                        ヘアライン(モニター2回セット価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment4" value="mayuge2" onChange={handleChange('treatment4')} checked={values[true]} />
                                        ヘアライン(2回セット価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment5" value="mayuge3" onChange={handleChange('treatment5')} checked={values[true]} />
                                        眉毛(モニター2回セット価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment6" value="mayuge4" onChange={handleChange('treatment6')} checked={values[true]} />
                                        眉毛お試し(モニター1回価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment7" value="mayuge5" onChange={handleChange('treatment7')} checked={values[true]} />
                                        眉毛 (2回セット価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment8" value="retouch" onChange={handleChange('treatment8')} checked={values[true]} />
                                        他院の施術リタッチ(モニター1回価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment9" value="modify" onChange={handleChange('treatment9')} checked={values[true]} />
                                        他院の施術修正(モニター1回価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment10" value="eyeline1" onChange={handleChange('treatment10')} checked={values[true]} />
                                        アイライン(モニター2回セット価格)
                                    </label>
                                    <label className='checkbox-label'>
                                        <input type="checkbox" name="treatment11" value="eyeline2" onChange={handleChange('treatment11')} checked={values[true]} />
                                        アイライン(2回セット価格)
                                    </label>
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

export default FormUserDetails3;
