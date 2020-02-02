import React, { useState } from 'react';
import './App.css';
import DonationForm from './DonationForm'
import Progress from './Progess'
import TopBar from './TopBar'
import RecentDonations from './RecentDonations'


function App() {
  const [totalDonated, setTotalDonated] = useState(0)
  const [progressPercentage, setProgressPercentage] = useState(0)
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationGoal, setDonationGoal] = useState(5000);
  const [submittedForm, setSubmittedForm] = useState([]);



  const submitedFormData = () => {
    if (name && message && donationAmount > 0) {
      let obj = {
        donorName: name,
        donorMessage: message,
        donorDonation: donationAmount
      }

      setSubmittedForm([...submittedForm, obj])
      setName('')
      setMessage('')
      setDonationAmount(0)
    }

  }


  return (
    <div className="App">

      <TopBar />
      <RecentDonations
        donationList={submittedForm}
      />
      <Progress
        totalDonated={totalDonated}
        donationGoal={donationGoal}
        progressPercentage={progressPercentage}
      />
      <DonationForm
        donationAmount={donationAmount}
        customRangeFunct={(e) => setDonationAmount(e.target.value)}
        name={name}
        nameInput={(e) => setName(e.target.value)}
        message={message}
        messageInput={(e) => setMessage(e.target.value)}

        submitedFormData={submitedFormData}

      />
    </div>
  );
}
export default App;