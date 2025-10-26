import ReactDOM from 'react-dom/client';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

export default function App() {
  return (
    <div>
      <LoginComponent />
      <RegisterComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);