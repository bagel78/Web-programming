import React from 'react';

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


export default function ListComponent() {
  // Создаем массив элементов с ключами на основе id
  const listItems = people.map(person => (
    <li key={person.id}>
      {person.name} — {person.profession}
    </li>
  ));

  return (
    <div className="list-container">
        <h2>List</h2>
        <ul>{listItems}</ul>
    </div>
  
  )
}
