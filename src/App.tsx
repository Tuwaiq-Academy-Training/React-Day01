import { useEffect, useState } from 'react';
import './app.css';
import { IUser } from './types/mainTypes';

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Saleh');

  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/users');
      const newUsers = (await request.json()) as IUser[];
      console.log(newUsers);
      //  setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  // First Version
  useEffect(() => {
    console.log('Hey from useEffect 1');
    const res = 1274218759812 * 21321;

    return () => {
      console.log('Component did unmount');
    };
  });

  // Second Version
  useEffect(() => {
    console.log('Hey from useEffect 2');

    getUsers();
  }, []);

  // Third Version
  useEffect(() => {
    console.log('Hey from useEffect 3');
  }, [name]);

  console.log('Hey form  مطبخ');

  return (
    <div className='App '>
      <h1>{count}</h1>
      <button
        onClick={(e) => setCount(count + 1)}
        type='button'
        className='btn btn-primary'
      >
        Click me
      </button>
      <h1>{name}</h1>
      <button
        onClick={(e) => setName('Ali')}
        type='button'
        className='btn btn-primary'
      >
        Change me
      </button>
      <>
        {/*  @ts-ignore:  */}
        {console.log('Hey form  كيكية')}
      </>
    </div>
  );
};

export default App;
