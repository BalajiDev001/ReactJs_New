import React, { useContext } from 'react'
import { appContextApi } from '../contextApi/AppContext';

const CounterHeading = () => {
    const {counter} = useContext(appContextApi);
  return (
    <h1>Counter: {counter}</h1>
  )
}

export default CounterHeading
