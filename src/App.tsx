import './app.css';

const App = () => {
  // const numbers = [1, 2, 3, 4, 5, 5, 7];

  // const newNumbers: any[] = [];

  // for (let i = 0; i < numbers.length; i++) {
  //   newNumbers.push(<li> {numbers[i]}</li>);
  // }

  interface IUser {
    id: number;
    username: string;
    password: string;
    role?: string;
  }

  const users: IUser[] = [];

  users.push({
    id: 1,
    username: 'saleh',
    password: '123',
    role: 'admin',
  });

  users.push({
    id: 2,
    username: 'ali',
    password: '1234',
    role: 'user',
  });

  console.log(users);

  return (
    <div className='App'>
      {/* <ul> */}
      {/* <h1>{newNumbers}</h1> */}
      {/* {numbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })} */}
      {/* </ul> */}

      <ul className='list-group'>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <li className='list-group-item'>{user.username}</li>
              <li className='list-group-item'>{user.role}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
