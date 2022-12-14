import React from 'react';

const Review = () => {
  return (
    <div class="w-full mx-auto flex justify-center items-center shadow">

      <div className="stats stats-vertical lg:stats-horizontal w-full md:w-4/5 mx-auto">
        <div class="stat text-center">
          <div class="stat-title">Doctors</div>
          <div class="stat-value">321</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat text-center">
          <div class="stat-title">Web Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat text-center">
          <div class="stat-title">Patients</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

    </div>
  );
};

export default Review;