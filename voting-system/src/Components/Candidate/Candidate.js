import React, { useContext } from 'react';
import { VoteContext } from '../Context/VoteContext';
import DeleteModal from '../Modal/DeleteModal';


const Candidate = ({ candidate }) => {
  const { deleteVote } = useContext(VoteContext);

  return (
    <div>
      <h2>{candidate.name} - Votes: {candidate.votes}</h2>
      {candidate.voters.map(voter => (
        <div key={voter.id} style={{ marginLeft: '20px' }}>
          {voter.name}
          <button onClick={() => deleteVote(candidate.id, voter.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Candidate;

