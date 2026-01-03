import React, { useContext } from 'react'
import { appContextApi } from '../contextApi/AppContext';

const SubHome = () => {
    const {subHome} = useContext(appContextApi);
  return (
    <div>
      {subHome}
    </div>
  )
}

export default SubHome
