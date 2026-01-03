import React, { useContext } from 'react'
import CounterHeading from './CounterHeading'
import { appContextApi } from '../contextApi/AppContext';
import Button from './Button';

const Contact = ({containerClass,contact}) => {
  const {resetCount} = useContext(appContextApi);
  return (
    <div className={containerClass}>
      <CounterHeading />
      {contact}
      <Button clickHandler={resetCount} label="Rest Count"/>
    </div>
  )
}

export default Contact
