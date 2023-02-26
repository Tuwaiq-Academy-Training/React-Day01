import { useState } from 'react';
import { IUser } from '../types/mainTypes';

const Form = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/users');
      const newUsers = (await request.json()) as IUser[];
      setUsers(newUsers);
      console.log('AFTER FETCH');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Email address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          className='form-control'
          id='exampleInputPassword1'
        />
      </div>

      <button type='submit' className='btn btn-primary w-100'>
        Submit
      </button>

      <ol>
        {users.map((user) => {
          return <li>{user.username}</li>;
        })}
      </ol>
    </form>
  );
};

export default Form;
