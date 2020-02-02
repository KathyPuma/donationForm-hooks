import React, { useState, useEffect } from 'react';
import RecentDonations from "./RecentDonations"
const DonationForm = (props) => {
    const [submittedForm, setSubmittedForm] = useState([]);
    const submitedForm = () => {
        if (props.name && props.message && props.donationAmount) {
            let obj = {
                donorName: props.name,
                donorMessage: props.message,
                donorDonation: props.donationAmount
            }
            setSubmittedForm([...submittedForm, obj])
        }
    }
    return (
        <div className='donation-form section'>

            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                name='name'
                type='text'
                onChange={props.nameInput}
                value={props.donorName}
            />

            <label htmlFor='caption'>Caption: </label>
            <input
                id='caption'
                name='caption'
                type='text'
                onChange={props.messageInput}
                value={props.message}
            />

            <label htmlFor='amount'>Amount: </label>
            <input
                id='amount'
                name='amount'
                type='range'
                min="0"
                max="1000"
                onChange={props.customRangeFunct}
                value={props.donationAmount}
            />
            <span>{props.donationAmount}</span>

            <input type="submit" value="Donate" onClick={submitedForm} />
            <RecentDonations
                donationList={submittedForm}

            />
        </div>

    )
}

export default DonationForm;