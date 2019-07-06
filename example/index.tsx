import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Toast from '../.';

const App = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const showToast = () => {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={showToast}>open toast</button>
      {show ? <Toast show={show} backgroundColor={"red"} text={"this is a text of the toast"} position={"position_right"} duration={1}/> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
