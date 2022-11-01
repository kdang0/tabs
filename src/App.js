import './App.css';
import Tabs from './components/Tabs';
import {useState} from 'react'
function App() {
  const list = [
    {label: "Tab 1", content: "Content 1"},
    {label: "Tab 2", content: "Content 2"},
    {label: "Tab 3", content: "Content 3"}
  ]
  // const [currentContent, setCurrentContent]  = useState();

  // const handleContent = (content) => {
  //   setCurrentContent(content);
  // }
  return (
    <div className="App">
      <Tabs tabs= {list}/>
      <div>
        <p></p> 
      </div>
    </div>
  );
}

export default App;
