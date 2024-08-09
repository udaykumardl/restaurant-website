import React, { useState,useContext} from 'react';
import AddVoteForm from './Components/Candidate/AddVoteForm';
import CandidateList from './Components/Candidate/CandidateList';

import { VoteProvider ,VoteContext} from './Components/Context/VoteContext';
import Modal from './Components/Modal/Modal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


const TotalVotes = () => {
  const { getTotalVotes } = useContext(VoteContext);
  const totalVotes = getTotalVotes();

  return (
    <h2>Total Votes: {totalVotes}</h2>
  );
};


  return (
    <VoteProvider>
      <div className="App">
        <h1>Class Monitor Vote</h1>
        <TotalVotes />
        <button onClick={openModal}>Add New Vote</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddVoteForm />
        </Modal>
        <CandidateList />
      </div>
    </VoteProvider>
  );
}

export default App;


