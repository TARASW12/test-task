import './App.css';
import Input from './components/Input';
import Test from './components/Test';
import Button from './components/Button';
import { MenuProvider } from './components/Content';
import Contents from './components/Contents';
function App() {
  return (
    <MenuProvider>
      <div className="App">
        <div className='wrapper'>
          <Input />
          <Button />
        </div>
        <Contents />
      </div>
    </MenuProvider>
  );
}

export default App;
