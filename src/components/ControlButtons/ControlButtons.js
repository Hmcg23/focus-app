import './ControlButtons.css';


function ControlButtons({handleClick}) {
  return (
    <div className="control-buttons">
        <button onClick={handleClick}>Start!</button>
        <button onClick={handleClick}>Pause</button>
        <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default ControlButtons;
