import React, { useContext } from 'react'
import CounterHeading from './CounterHeading';
import { appContextApi } from '../contextApi/AppContext';
import Button from './Button';

const About = ({containerClass,about}) => {
  const {decrementCount} = useContext(appContextApi);
  return (
    <div className={containerClass}>
      <CounterHeading />
      {about}
      <Button clickHandler={decrementCount} label="Descrement"/>
    </div>
  )
}

export default About
