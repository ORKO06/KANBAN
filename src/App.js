import './App.css';
import Header from './component/Header/Header';
import Kanban from './component/Screen/Kanban';
import GroupContextProvider from './utils/GroupContext';

function App() {

  return (
    <div className="App">
      <GroupContextProvider>
        <Header />
        <Kanban />
      </GroupContextProvider>
    </div>
  );
}

export default App;
