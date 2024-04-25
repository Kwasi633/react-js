// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// const App = () => {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true)
 
//   const handlePrevious = () => {
//     if(step > 1){
//       setStep((s) => s - 1)
//       //setStep(step - 1)
//     }
//   }

//   const handleNext = () => {
//       if(step < 3){
//         setStep((s) => s + 1)
//         //setStep(() => step + 1)
//       }
//   }

//   return(
//     <>
//     <button className="close"
//     onClick={() => setIsOpen(!isOpen)}
//     >&times;</button>
    
//     { isOpen ? (
//       <div className="steps">
//     <div className="numbers">
//       <div className={step >= 1 ? 'active' : ""}>1</div>
//       <div className={step >= 2 ? 'active' : ""}>2</div>
//       <div className={step >= 3 ? 'active' : ""}>3</div>
//     </div>

//     <p className="message">Step {step}: {messages[step - 1]}</p>

//     <div className="buttons">
//       <button style={{backgroundColor: '#7950f2', color: "#fff" }}
//       onClick={handlePrevious}
//       >
//       Previous
//       </button>

//       <button style={{backgroundColor: '#7950f2', color: "#fff" }}
//       onClick={handleNext}
//       >
//       Next
//       </button>
//     </div>
  
//     </div>
//     ) : null }
//     </>
    
//   )
// }

// export default App;

// import { useState } from "react"

// const day = new Date();
// const App = () => {

// const [step, setStep] = useState(1);
// const [countNum, setCountNum] = useState(0);

// const date = new Date('June 21 2027');
// date.setDate(date.getDate() + countNum);

// const symbolsData = [

//   {
//     plus: '+',
//     minus: '-'
//   },
//   {
//     txt1: 'Step',
//     txt2: 'Count'
//   },
//   {
//     date: day
//   }

// ]

//   return (
//   <div className="buttonHolder">
//   {console.log(day)}
//   <Counter 
//     dec={symbolsData[0].minus}
//     inc={symbolsData[0].plus}
//     desc={symbolsData[1].txt1}
//     num={step}
//     numSub={() => setStep((a) => a - 1)}
//     numAdd={() => setStep((b) => b + 1)}
//   />
//   <Counter 
//     dec={symbolsData[0].minus}
//     inc={symbolsData[0].plus}
//     desc={symbolsData[1].txt2}
//     countAdd={() => setCountNum((x) => x + step)}
//     countMin={() => setCountNum((y) => y - step)}
//     countNum={countNum}
//   />

//      <p>
//      <span>{countNum === 0 
//       ? 'Today is '
//       : countNum > 0 
//       ? `${countNum} days from today is `
//       : `${Math.abs(countNum)} days from today is `}
//       </span>
//      {date.toDateString()}</p>

//   </div>
//   )
// }

// const Counter = (props) => {

//   return(
//     <div className="content"> 
//       <button
//       onClick={props.desc === 'Step' ? props.numSub : props.countMin}>
//       {props.dec}</button>
      
//       <p>{props.desc}: {props.desc === 'Step' ? props.num : props.countNum}</p>
    
//      <button
//      onClick={props.desc === 'Step' ? props.numAdd : props.countAdd}
//      > {props.inc}</button> 
//    </div>
//   )
// }

// export default App;

import React, {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  const handleReset = () => {
    setCount(0);
    setStep(1)
  }

 const date = new Date('June 21 2027');
 date.setDate(date.getDate() + count);

  return(
    <div>
      <div>

<input type="range" min="0" 
m ax="10" value={step} 
onChange={e =>setStep(Number(e.target.value))}
/>
      
        <span>Step: {step}</span>
      </div>

    <div>
        <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />    
    </div>
    
    <p>
    <span>{count === 0 
     ? 'Today is '
     : count > 0 
     ? `${count} days from today is `
     : `${Math.abs(count)} days from today is `}</span>
    {date.toDateString()}</p>

      { count !== 0 || step !== 1 ?
        <div>
        <button>Reset</button>
      </div>   : null 
      }
    </div>
      
  )
}
export default App;