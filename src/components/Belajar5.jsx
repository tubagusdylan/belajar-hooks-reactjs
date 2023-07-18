/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

export function Belajar5() {
  const [kontak, setKontak] = useState(contacts[0]);

  //   ada tiga properti
  // kontak, onSelect
  return (
    <>
      <ListKontak contacts={contacts} onSelect={(contact) => setKontak(contact)} />
      <Chat key={kontak.email} contact={kontak} />
    </>
  );
}

function ListKontak({ contacts, onSelect }) {
  return (
    <>
      <h2>Kontak</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState("");

  return (
    <>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={"Chat to " + contact.name} />
      <button onClick={() => setText("")}>Send to {contact.email}</button>
    </>
  );
}
