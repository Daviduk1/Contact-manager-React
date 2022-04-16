import { useState } from 'react'

const ContactCard = ({ contact, editContact, deleteContact }) => {
    const [open, setOpen] = useState(false)
    
  return (
    <div className="contact-card">
        <header>
            <h3>{ contact.name }</h3>
            <button id='toggle-btn' onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </button>

            <div className="actions">
                <button id='edit-btn' onClick={() => editContact(contact.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
                <button id="delete-btn" onClick={() => deleteContact(contact.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>
        {
            open &&
            <div className="content">
                <p><b>Email:</b> { contact.email }</p>
                <p><b>Phone:</b> { contact.phone }</p>
            </div>
        }
    </div>
  )
}

export default ContactCard