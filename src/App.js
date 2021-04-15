import axios from 'axios';
import { useQuery } from 'react-query';
import './App.css';

function App() {
  const { data: users, status } = useQuery('users', async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
  });

  console.log(status);
  console.log(users);

  if (status === 'loading') {
    return (
      <>
        {/* childrenが空だとcss読み込まれないからloadingは入れといた。color:whiteで見えないようにしてる */}
        <div className="text">loading</div>
        <div className="loader"></div>
      </>
    );
  } else if (status === 'error') {
    return <div className="error">error</div>;
  } else {
    return (
      <ul className="success">
        {users.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    );
  }
}

export default App;
