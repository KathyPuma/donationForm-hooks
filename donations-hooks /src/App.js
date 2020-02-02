import React, { useState } from 'react';
import './App.css';
import DonationForm from './DonationForm'
import Progress from './Progess'
import TopBar from './TopBar'


function App() {


  const [totalDonated, setTotalDonated] = useState(0)
  const [progressPercentage, setProgressPercentage] = useState(0)
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationGoal, setDonationGoal] = useState(5000);


  return (
    <div className="App">

      <TopBar />
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
      />


    </div>
  );
}

export default App;

