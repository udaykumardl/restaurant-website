import React, { useContext } from 'react';
import Candidate from './Candidate';
import { VoteContext } from '../Context/VoteContext';

const CandidateList = () => {
  const { candidates } = useContext(VoteContext);

  return (
    <div>
      {candidates.map(candidate => (
        <Candidate key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidateList;
