import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { StyledEngineProvider } from '@mui/material/styles';

// const theme = unstable_createMuiStrictModeTheme();

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
              <LinearProgressWithLabel value={0} />
              <div className='mens-dailog-wrap'>
                <h4>ON Clinic for men ご予約</h4>
                <label htmlFor="surname">姓</label>
                <input type="text" id="surname" className="mens-surname" required onChange={handleChange('firstName')} value={values.firstName}/>
                <label htmlFor="given-name">名</label>
                <input type="text" id="given-name" className="mens-given-name" required onChange={handleChange('lastName')} value={values.lastName}/>
                <label htmlFor="sei">セイ</label>
                <input type="text" id="sei" className="mens-sei" required onChange={handleChange('firstNameKana')} value={values.firstNameKana} />
                <label htmlFor="mei">メイ</label>
                <input type="text" id="mei" className="mens-mei" required onChange={handleChange('lastNameKana')} value={values.lastNameKana} />
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" className="mens-email" required onChange={handleChange('email')} value={values.email} />
                <div className='mens-res-btn-wrap'>
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

export default FormUserDetails;
