import React from 'react';
import { useSelector } from 'react-redux';

function SearchJobPage() {
  const jobPostings = useSelector((state) => state.job);

  return (
    <div>
      <h2>Search Jobs</h2>
      <ul>
        {jobPostings.map((job, index) => (
          <li key={index}>
            <h3>{job.companyName}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchJobPage;
