import React, { useContext } from 'react'
import SubHome from './SubHome'
import CounterHeading from './CounterHeading'
import { appContextApi } from '../contextApi/AppContext';
import Button from './Button';

// props:{
//   containerClass: "page-container-center"
//   home: "Home"
// }
const Home = ({containerClass,home,subHome, children}) => {
  const {incrementCount} = useContext(appContextApi);
  return (
    <div className={containerClass}>
      <CounterHeading />
      {home}
      <Button clickHandler={incrementCount} label="Increment"/>
      <br/>
      {/* {children} */}
      <SubHome subHome={subHome}/>
    </div>
  )
}

export default Home
