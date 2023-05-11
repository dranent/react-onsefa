import './reserverMens.css';

import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormUserDetails2 from './FormPersonalDetails';
import FormUserDetails3 from './FormPersonalDetails2';
import FormUserDetails4 from './FormPersonalDetails3';
import FormUserDetails5 from './FormPersonalDetails4';
import Confirm from './Confirm';
import Success from './Success';
// import LinearProgressWithLabel from './LinearProgressWithLabel';

export class ReservationMens extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        firstNameKana: '',
        lastNameKana: '',
        email: '',
        birthdayYear: '',
        birthdayMonth: '',
        birthdayDay: '',
        phone: '',
        treatment1: false,
        treatment2: false,
        treatment3: false,
        treatment4: false,
        treatment5: false,
        treatment6: false,
        treatment7: false,
        treatment8: false,
        treatment9: false,
        treatment10:false,
        treatment11:false,
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        firstChoiceDate: '',
        firstChoiceTime: '',
        secondChoiceDate: '',
        secondChoiceTime: '',
        thirdChoiceDate: '',
        thirdChoiceTime: '',
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [input]: e.target.value });
        console.log(value);
    };

    render() {
        const { step } = this.state;
        const {
            firstName,
            lastName,
            firstNameKana,
            lastNameKana,
            email,
            birthdayYear,
            birthdayMonth,
            birthdayDay,
            phone,
            treatment1,
            treatment2,
            treatment3,
            treatment4,
            treatment5,
            treatment6,
            treatment7,
            treatment8,
            treatment9,
            treatment10,
            treatment11,
            check1,
            check2,
            check3,
            check4,
            check5,
            check6,
            check7,
            check8,
            firstChoiceDate,
            firstChoiceTime,
            secondChoiceDate,
            secondChoiceTime,
            thirdChoiceDate,
            thirdChoiceTime
        } = this.state;
        const values = {
            firstName,
            lastName,
            firstNameKana,
            lastNameKana,
            email,
            birthdayYear,
            birthdayMonth,
            birthdayDay,
            phone,
            treatment1,
            treatment2,
            treatment3,
            treatment4,
            treatment5,
            treatment6,
            treatment7,
            treatment8,
            treatment9,
            treatment10,
            treatment11,
            check1,
            check2,
            check3,
            check4,
            check5,
            check6,
            check7,
            check8,
            firstChoiceDate,
            firstChoiceTime,
            secondChoiceDate,
            secondChoiceTime,
            thirdChoiceDate,
            thirdChoiceTime
        } ;

        // console.log(values);

        switch (step) {
            case 1:
                return (
                    <div>
                        {/* <p>{values}</p> */}
                        <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />

                    </div>
                );
            case 2:
                return (
                    <div>
                        {/* <p>{values}</p> */}
                    <FormUserDetails2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    </div>
                );

            case 3:
                return (
                    <FormUserDetails3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <FormUserDetails4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 5:
                return (
                    <FormUserDetails5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 6:
                return (
                    <div>
                        <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    </div>
                );
            case 7:
                return <Success />;
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default ReservationMens;