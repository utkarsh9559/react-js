
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProiderr'

function App() {
  

  return (
   <UserContextProvider>
   <h1> React is very important</h1>
   <Login />
   <Profile />
   </UserContextProvider>
  )
}

export default App
