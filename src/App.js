import './App.css';
import Pomodoro from './components/Pomodoro/Pomodoro';
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  return (
    <div className="App">
      <header className="header">
          <h1 className='title'>Kameleo - Focus Time!</h1>
          <SettingsIcon className='settings-icon' />
      </header>
      <Pomodoro />
    </div>
  );
}

export default App;
