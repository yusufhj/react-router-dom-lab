import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css'

// Components
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox.id = mailboxes.length + 1;
    setMailboxes([...mailboxes,newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="/mailnoxes/*" element={<h2>Mailbox Not Found!</h2>} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
};

export default App;