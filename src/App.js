// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const querySnapshot = await getDocs(collection(db, 'jobs'));
    setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <JobForm selectedJob={selectedJob} setSelectedJob={setSelectedJob} refreshJobs={fetchJobs} />
              <JobList jobs={jobs} setSelectedJob={setSelectedJob} refreshJobs={fetchJobs} />
            </>
          }
        />
        <Route path="/job/:id" element={<JobDetail job={selectedJob} />} />
      </Routes>
    </Router>
  );
};

export default App;
