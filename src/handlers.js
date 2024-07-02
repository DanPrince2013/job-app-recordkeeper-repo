// src/handlers.js
import { collection, addDoc, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from './firebase';

export const handleSubmit = async (
  e,
  selectedJob,
  setSelectedJob,
  refreshJobs,
  jobData,
  resetForm
) => {
  e.preventDefault();
  try {
    if (selectedJob) {
      await updateDoc(doc(db, 'jobs', selectedJob.id), jobData);
      toast.success('Job updated successfully!');
      setSelectedJob(null);
    } else {
      await addDoc(collection(db, 'jobs'), jobData);
      toast.success('Job added successfully!');
    }
    resetForm();
    refreshJobs();
  } catch (error) {
    toast.error(`Failed to ${selectedJob ? 'update' : 'add'} job! Details: ${error.message}`);
  }
};

export const handlePlatformChange = (e, setJobPlatform, setFilteredPlatforms, jobPlatforms) => {
  const value = e.target.value;
  setJobPlatform(value);
  setFilteredPlatforms(jobPlatforms.filter(platform => platform.toLowerCase().includes(value.toLowerCase())));
};

export const handleCancel = (setSelectedJob, resetForm) => {
  setSelectedJob(null);
  resetForm();
};
