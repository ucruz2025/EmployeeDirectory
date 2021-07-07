import logo from './logo.svg';
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div>
      <Wrapper>
        <Header/>
        <Main/>
      </Wrapper>
    </div>
  );
}

export default App;
