import { useState } from 'react';
import './app.css';
import Form from './components/Form';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setCount(count + 1);
  };

  console.log('Hey from مطبخ');

  return (
    <div className='App '>
      {/* <h1>{count}</h1>
      <button onClick={onClick} type='button' className='btn btn-primary'>
        Click me
      </button> */}
      <Form />
    </div>
  );
};

export default App;
