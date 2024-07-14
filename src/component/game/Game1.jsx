import { useEffect, useState } from 'react'

function Square({value,onclick}){
  return(
    <button onClick={onclick} className='w-24 h-24 px-0 text-center cursor-pointer text-4xl float-left border-2  border-yellow-400'>{value}</button>
  )
}

function Game1() {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [XTurn,setXTurn] = useState(true)
  const [status,setStatus]=useState("")

function getWinner(sqr){
  const winningPattern=[
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
  ]
  for(let i=0;i<winningPattern.length;i++){
    const[x,y,z]=winningPattern[i]
    
    if(sqr[x]&&sqr[x]===sqr[y]&&sqr[x]===sqr[z]){
      // console.log(sqr[x]);
      return sqr[x];
    }
  }
  return null
}


function handleClick(getCurrentIndex){
  const copy=[...squares]
  if(getWinner(copy)||copy[getCurrentIndex]) return
  copy[getCurrentIndex]= XTurn ?"X":"O"
  setXTurn(!XTurn)
  setSquares(copy)
}

function handleRestart(){
  setXTurn(true)
  setSquares(Array(9).fill(""))
}

useEffect(()=>{
  if(!getWinner(squares) && squares.every((item) => item!== "")){
    setStatus(`this is draw ! please restart the game`)
  }else if(getWinner(squares)){
    setStatus(`${getWinner(squares)} win the game.please restart the game`)
  }else{
    setStatus(`Next player is ${XTurn ? "X" : "O"}`)
  }
},[squares,XTurn])

// console.log(squares);
return (
    <div className='flex flex-col place-items-center p-6 dark:bg-black dark:text-slate-500 '>
      <div>
         <Square value={squares[0]} onclick={()=>handleClick(0)} />
         <Square value={squares[1]} onclick={()=>handleClick(1)} />
         <Square value={squares[2]} onclick={()=>handleClick(2)} />
      </div>
      <div>
         <Square value={squares[3]} onclick={()=>handleClick(3)} />
         <Square value={squares[4]} onclick={()=>handleClick(4)} />
         <Square value={squares[5]} onclick={()=>handleClick(5)} />
      </div>
      <div>
         <Square value={squares[6]} onclick={()=>handleClick(6)} />
         <Square value={squares[7]} onclick={()=>handleClick(7)} />
         <Square value={squares[8]} onclick={()=>handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button className='border-2  hover:border-cyan-400' onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default Game1
