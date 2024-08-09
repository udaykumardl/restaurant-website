import React, { createContext, useState, useContext } from 'react';

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Suresh', votes: 0, voters: [] },
    { id: 2, name: 'Deepank', votes: 0, voters: [] },
    { id: 3, name: 'Abhik', votes: 0, voters: [] },
  ]);

  const addVote = (candidateId, voterName) => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate =>
        candidate.id === candidateId
          ? {
              ...candidate,
              votes: candidate.votes + 1,
              voters: [...candidate.voters, { id: Date.now(), name: voterName }],
            }
          : candidate
      )
    );
  };

  const deleteVote = (candidateId, voterId) => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate =>
        candidate.id === candidateId
          ? {
              ...candidate,
              votes: candidate.votes - 1,
              voters: candidate.voters.filter(voter => voter.id !== voterId),
            }
          : candidate
      )
    );
  };

  const getTotalVotes = () => {
    return candidates.reduce((total, candidate) => total + candidate.votes, 0);
  };

  return (
    <VoteContext.Provider value={{ candidates, addVote, deleteVote, getTotalVotes }}>
      {children}
    </VoteContext.Provider>
  );
};
