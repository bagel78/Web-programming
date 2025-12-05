import React from 'react';
import axios from 'axios';

export default function LoginComponent() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Обработчик отправки формы
  /*const handleLogin = (e) => {
    e.preventDefault(); // Отменяем стандартное поведение браузера: перезагрузку страницы при сабмите
    
    // Выводим введённые имя пользователя и пароль через alert (здесь можно заменить на реальную логику авторизации)
    alert(`Login with username: ${username} and password: ${password}`);
  };*/

  function handleSubmit(e) {
    e.preventDefault(); // Отменяем стандартное поведение браузера: перезагрузку страницы при сабмите
    axios.post('http://localhost:8081/login', {username, password})
  .then(res => console.log('Успех:', res.data))
  .catch(err => console.error('Ошибка:', err.response?.data || err.message));
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-username">Username</label>
        <input
          type="text"
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
