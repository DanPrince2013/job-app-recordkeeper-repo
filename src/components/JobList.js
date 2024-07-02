// src/components/JobList.js
import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { truncate } from '../utils/truncate';

const JobList = ({ jobs, setSelectedJob, refreshJobs }) => {

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'jobs', id));
    refreshJobs();
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id} onClick={() => handleJobClick(job)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={(e) => { e.stopPropagation(); handleDelete(job.id); }} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <span title={job.companyName}>{truncate(job.companyName)}</span> -
            <span title={new Date(job.date.seconds * 1000).toLocaleString()}>{new Date(job.date.seconds * 1000).toLocaleString()}</span> -
            <a href={job.resumeLink} target="_blank" rel="noopener noreferrer" title={job.resumeLink}>{truncate(job.resumeLink)}</a> -
            <span title={job.coverLetter}>{truncate(job.coverLetter)}</span> -
            <span title={job.jobNotes}>{truncate(job.jobNotes)}</span> -
            <span title={job.status}>{truncate(job.status)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
