import React from 'react';

const Progress = (props) => {
  return (
    <div className="progress">
      <h2> Raised ${props.totalDonated} of ${props.donationGoal} </h2>
      <div className="progress-bar" role="progressbar"
        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.progressPercentage}%</div>
    </div>
  )
}

export default Progress;