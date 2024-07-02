// src/JobDetail.js
import React from 'react';

const JobDetail = ({ job }) => {
  if (!job) {
    return <div>Select a job to see details</div>;
  }

  return (
    <div>
      <h2>{job.companyName}</h2>
      <p>Agency: {job.agency}</p>
      <p>Date: {job.date}</p>
      <p>Resume Version: {job.resumeVersion}</p>
      <p>Cover Letter: {job.coverLetter}</p>
    </div>
  );
};

export default JobDetail;
