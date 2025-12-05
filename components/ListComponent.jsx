import React from 'react';
import axios from 'axios';

export default function ListComponent() {
  const [people, setPeople] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('http://localhost:8081/users')
      .then(res => {
        console.log('Успех:', res.data);
        setPeople(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка:', err.response?.data || err.message);
        setPeople([]);
        setLoading(false);
      });
  }, []);

  if (!Array.isArray(people) || people.length === 0) {
    return (
      <div className="list-container">
        <h2>List</h2>
        <p>No users found</p>
      </div>
    );
  }

  const listItems = people.map((person, index) => (
    <li key={person.id || `user-${index}`} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
      <strong>Username:</strong> {person.username || 'N/A'}
      <br />
      <strong>Email:</strong> {person.email || 'N/A'}
      <br />
      <strong>Password:</strong> {person.password || 'N/A'}
    </li>
  ));

  return (
    <div className="list-container">
      <h2>List ({people.length} users)</h2>
      <ul>{listItems}</ul>
    </div>
  );
}






/*const people = [{
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
*/