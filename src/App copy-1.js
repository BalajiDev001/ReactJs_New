import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [post, setPost] = useState(null);
  const inputRef = useRef();

  const count =  useRef(0);

  const focusInput = ()=>{
    inputRef.current.focus();
  }

  const updateCount = ()=>{
    count.current = count.current + 1;
    console.log(count.current, "counter")
  }
  // console.log(post,"post .....");

  // useEffect(()=>{
  //   async function getData(){
  //   const res = await fetch("https://dummyjson.com/posts");
  //   const data = await res.json();
  //   setPost(data?.posts);
  // };
  // getData()
  // },[]);
  return (
    <div className="App">
      <h1>Focus when click on button : count {count.current}</h1>
      <button onClick={updateCount}>Update Count</button>
<br/>
      <input placeholder='Enter name' ref={inputRef}/>
      
      <button onClick={focusInput}>Focus</button>
      {/* <ul>
      {
        post?.map((item)=>(
          <li>{item.title}</li>
        ))
      }
      </ul> */}
    </div>
  );
}

export default App;
