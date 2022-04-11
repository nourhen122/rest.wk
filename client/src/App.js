import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/actions';
import { useEffect } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  const {loading,users} = useSelector(state=>state)
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  

  return (
    <div className="App">
      <AddUser />   
   {
     loading ? <h2>loading...</h2>
     :
     <UserList  users={users} />
   }
    </div>
  );
}

export default App;
