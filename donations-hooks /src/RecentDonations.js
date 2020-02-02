import React from 'react';

const RecentDonations = (props) => {
  return (

    <div className="left-side">
      <h3 className="recentDonation">Recent Donations</h3>
      <div>{props.donationList.map(el => {
        return <div>
          <p>{el.donorName}</p>
          <p>{el.donorMessage}</p>
          <p>{el.donorDonation}</p>
        </div>
      })
      }
      </div>
    </div>
  )
}

export default RecentDonations;





