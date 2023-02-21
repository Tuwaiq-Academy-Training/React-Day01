import './app.css';

const App = () => {
  const age = 10;

  const hardSum = 5125215 + 123213;
  let res;

  if (age > 20) {
    res = 'You are older than 20';
  } else {
    res = 'You are less than 20';
  }

  return (
    <div className='App'>
      <h1>{res}</h1>
      <h1>{hardSum}</h1>
      <h1 className='mt-5'>
        {age > 20 ? 'You are older than 20' : 'You are less than 20'}
      </h1>
    </div>
  );
};

export default App;
