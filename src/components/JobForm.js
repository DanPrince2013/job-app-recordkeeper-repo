// src/components/JobForm.js
import React, { useState, useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { jobPlatforms, statuses } from '../constants';
import { handleSubmit, handlePlatformChange, handleCancel } from '../handlers';

import TextInput from './inputs/TextInput';
import TextArea from './inputs/TextArea';
import DateTimeInput from './inputs/DateTimeInput';
import SelectInput from './inputs/SelectInput';
import AutoCompleteInput from './inputs/AutoCompleteInput';

const JobForm = ({ selectedJob, setSelectedJob, refreshJobs }) => {
  const [companyName, setCompanyName] = useState('');
  const [agency, setAgency] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
  const [resumeLink, setResumeLink] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [jobNotes, setJobNotes] = useState('');
  const [jobPlatform, setJobPlatform] = useState('');
  const [status, setStatus] = useState('');
  const [filteredPlatforms, setFilteredPlatforms] = useState(jobPlatforms);

  useEffect(() => {
    if (selectedJob) {
      setCompanyName(selectedJob.companyName || '');
      setAgency(selectedJob.agency || '');
      setDate(new Date(selectedJob.date.seconds * 1000).toISOString().slice(0, 16));
      setResumeLink(selectedJob.resumeLink || '');
      setCoverLetter(selectedJob.coverLetter || '');
      setJobNotes(selectedJob.jobNotes || '');
      setJobPlatform(selectedJob.jobPlatform || '');
      setStatus(selectedJob.status || '');
    }
  }, [selectedJob]);

  const resetForm = () => {
    setCompanyName('');
    setAgency('');
    setDate(new Date().toISOString().slice(0, 16));
    setResumeLink('');
    setCoverLetter('');
    setJobNotes('');
    setJobPlatform('');
    setStatus('');
  };

  const jobData = {
    companyName: companyName || '',
    agency: agency || '',
    date: Timestamp.fromDate(new Date(date)),
    resumeLink: resumeLink || '',
    coverLetter: coverLetter || '',
    jobNotes: jobNotes || '',
    jobPlatform: jobPlatform || '',
    status: status || ''
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={(e) => handleSubmit(e, selectedJob, setSelectedJob, refreshJobs, jobData, resetForm)}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="companyName">Company Name</label>
                <TextInput
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="agency">Agency</label>
                <TextInput
                  id="agency"
                  value={agency}
                  onChange={(e) => setAgency(e.target.value)}
                  placeholder="Agency"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="date">Date</label>
                <DateTimeInput
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="resumeLink">Resume Version</label>
                <TextInput
                  id="resumeLink"
                  value={resumeLink}
                  onChange={(e) => setResumeLink(e.target.value)}
                  placeholder="Resume Version"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="coverLetter">Cover Letter</label>
                <TextArea
                  id="coverLetter"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Cover Letter"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="jobNotes">Job Notes/Description</label>
                <TextArea
                  id="jobNotes"
                  value={jobNotes}
                  onChange={(e) => setJobNotes(e.target.value)}
                  placeholder="Job Notes/Description"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="jobPlatform">Job Platform</label>
                <AutoCompleteInput
                  id="jobPlatform"
                  value={jobPlatform}
                  onChange={(e) => handlePlatformChange(e, setJobPlatform, setFilteredPlatforms, jobPlatforms)}
                  placeholder="Job Platform"
                  options={filteredPlatforms}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="status">Status</label>
                <SelectInput
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  options={statuses}
                  required
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-primary">{selectedJob ? 'Update Job' : 'Add Job'}</button>
                {selectedJob && (
                  <button type="button" onClick={() => handleCancel(setSelectedJob, resetForm)} className="btn btn-secondary ml-2">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobForm;
