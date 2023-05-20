import './App.css'

import { InitSocketProvider } from "./context/contextInitSocket";
import { SocketProvider } from './context/contextSocket';
import {UserProvaider} from './context/mainContext';
import Main from './components/main';
import { Socket } from './components/socket';

function App() {

  return (
    
      <div>
        <InitSocketProvider>
    <SocketProvider>
    <UserProvaider>
      <Main />
      <Socket />
    </UserProvaider>
    </SocketProvider>
        </InitSocketProvider>
      </div>
     
  )
}

export default App
