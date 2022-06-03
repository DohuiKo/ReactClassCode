import React, { useEffect, useState} from 'react';

const UnmountTest = () => {

  useEffect(() => {
    console.log("Mount!");

    return()=> {
      console.log("unMount!");
    }
  }, []);
  return <div>Unmount Testing Component</div>
}

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return(
    <div>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && < UnmountTest />}
    </div>
  );
};

export default Lifecycle;