import React, { useState, useContext } from 'react';
import { VoteContext } from '../Context/VoteContext';


const AddVoteForm = () => {
  const { candidates, addVote } = useContext(VoteContext);
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0].id);
  const [voterName, setVoterName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (voterName.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    addVote(selectedCandidate, voterName);
    setVoterName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={voterName}
          onChange={(e) => setVoterName(e.target.value)}
          required
        />
      </label>
      <label>
        Select Candidate:
        <select
          value={selectedCandidate}
          onChange={(e) => setSelectedCandidate(parseInt(e.target.value))}
        >
          {candidates.map(candidate => (
            <option key={candidate.id} value={candidate.id}>
              {candidate.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Vote</button>
    </form>
  );
};

export default AddVoteForm;


