import React, { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Mark Johnson' },
    { name: 'Emily Davis' },
    { name: 'Chris Brown' },
    { name: 'Alice Martin' }
  ]);

  const [newContactName, setNewContactName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add a new contact
  const handleAddContact = () => {
    if (newContactName) {
      const newContact = { name: newContactName, isNew: true };
      setContacts([newContact, ...contacts]);
      setNewContactName('');
      setIsModalOpen(false);
    }
  };

  // Handle removing "new" tag
  const handleContactClick = (index) => {
    const updatedContacts = contacts.map((contact, i) =>
      i === index ? { ...contact, isNew: false } : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      
      {/* Add Contact Button */}
      <button className="add-contact-btn" onClick={() => setIsModalOpen(true)}>+ Add Contact</button>
      
      {/* Contact List */}
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index} onClick={() => handleContactClick(index)}>
            <span>{contact.name}</span>
            {contact.isNew && <span className="new-tag">new</span>}
          </li>
        ))}
      </ul>

      {/* Modal for Adding Contact */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Add New Contact</h2>
            <input
              type="text"
              value={newContactName}
              onChange={(e) => setNewContactName(e.target.value)}
              placeholder="Enter contact name"
            />
            <button className="save-btn" onClick={handleAddContact}>Save Contact</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;