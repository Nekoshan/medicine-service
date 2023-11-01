import React from 'react';
import MedItem from './UI/MedItem';

export default function MainPage({ medicines }) {
  return (
    <main role="main">
      <ul className="entries-list no-bullets no-padding">
        {medicines?.map((med) => (
          <MedItem key={med.id} med={med} />
        ))}
      </ul>
    </main>
  );
}
