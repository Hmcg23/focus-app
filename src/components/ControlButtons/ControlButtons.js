import './ControlButtons.css';


function ControlButtons({handleClick, showStart}) {

  return (
    <div className="control-buttons">
        <button onClick={handleClick}>{showStart ? 'Start' : 'Stop'}</button>
        <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default ControlButtons;
