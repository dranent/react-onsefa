import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import { List, ListItem, ListItemText } from '@mui/material/';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import LinearProgressWithLabel from './LinearProgressWithLabel'
import { StyledEngineProvider } from '@mui/material/styles';

// const theme = unstable_createMuiStrictModeTheme();
export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // const { values } = this.props;

        return (
            <StyledEngineProvider injectFirst>
                <>
                <div className='mens-main-bg5'>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <LinearProgressWithLabel value={99}></LinearProgressWithLabel>
                        <div className='mens-dailog-wrap'>
                        <List>
                            <ListItem>
                                <ListItemText primary="性" secondary={this.props.values.firstName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="名" secondary={this.props.values.lastName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="セイ" secondary={this.props.values.firstNameKana} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="メイ" secondary={this.props.values.lastNameKana} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={this.props.values.email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="生年月日" secondary={this.props.values.birthdayYear+ "年" + this.props.values.birthdayMonth +"月"+ this.props.values.birthdayDay + "日"} />
                            </ListItem>
                            <ListItem>
                                {/* <ListItemText primary="Bio" secondary={this.props.values.check} /> */}
                            </ListItem>
                        </List>
                        <br />
                        <div className='mens-res-btn-wrap'>
                            <button
                                className='mens-res-btn-back'
                                variant="contained"
                                onClick={this.back}
                            >Back</button>

                            <button
                                className='mens-res-btn-continue'
                                variant="contained"
                                onClick={this.continue}
                            >Confirm & Continue</button>

                        </div></div>
                    </Dialog>
                
                    </div>
                </>
            </StyledEngineProvider>
        );
    }
}

export default Confirm;