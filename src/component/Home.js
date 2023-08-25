import React, { useState } from 'react';
import './Home.css'

function Home() {
  const [count,setCount] = useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
      if(count>0){
        setCount(count-1)
      }
  }
  function rst() {
    setCount(0)
  }
  return (
    <>
      <div className='section-0'>
        <ul className='nav nav-underline'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>Home</a>
            </li>
           <li className='nav-item'>
              <a className='nav-link ' aria-current='page' href='#'>About</a>
          </li>
          <li className='nav-item'>
              <a className='nav-link ' aria-current='page' href='#'>Counter</a>
          </li>
          <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>Contact</a>
          </li>
        </ul>
      </div>

      <div className='section-1'>
        <h1 style={{fontSize:"50px"}}>Counter App</h1>
        <div style= {{fontSize:"65px",fontWeight:"700"}}>{count}</div>
        <button className='btns btn1' onClick={inc}>Increment</button>
        <button className='btns btnreset' onClick={rst}>Reset</button>
        <button className='btns btn2' onClick={dec}>Decrement</button>
      </div>
    </>
  )
}
export default  Home;