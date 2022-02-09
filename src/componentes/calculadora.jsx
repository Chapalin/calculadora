import React, {useState} from 'react'; 
import './calculadora.css';


export default function Calculadora(){
    const[num, setNum]= useState()
    const[velhoNum, setVelhoNum]= useState()
    const[operador, setOperador]= useState()

  function operadorGuarda(e){
    var operadorInput = e.target.value
    setOperador(operadorInput)
    setVelhoNum(num)
    setNum("")
  }
 function calcular(){
    if (operador==="/"){
        setNum(parseFloat(velhoNum)/parseFloat(num))
 }else if (operador==="x"){
     setNum(parseFloat(velhoNum)*parseFloat(num))
 }else if (operador==="-"){
     setNum(parseFloat(velhoNum)-parseFloat(num))
 }else if (operador==="+"){
     setNum(parseFloat(velhoNum)+parseFloat(num))
 }
}
  function inputNum(e){
      var input = e.target.value;
    if(num===0){
        setNum (input);
    }else{
        setNum(num+input)
    }
  }
  function porcentagem(){
      setNum(num/100)
  }
  function operadorAltSinal(){
      if (num > 0){
          setNum(-num)
    } else{
        setNum(Math.abs(num))
    }

  }
  function clear(e){
    setNum("")
  }

    return(
        <div className="container">
            <div className ="base">
                <h4 className="cldpaulo">Calculadora do Paulo</h4>
                
                <div className= "visor">
                    <h4 className="resultado">{num}</h4>
                </div>
                <div>
                    <button className="cinza" onClick={clear}>AC</button>
                    <button className="cinza" onClick={operadorAltSinal}>+/-</button>
                    <button className="cinza" onClick={porcentagem}>%</button>
                    <button className="laranja" onClick={operadorGuarda} value={"/"}>÷</button>

                </div>

                <div >
                    <button className="darkk" onClick={inputNum} value={7}>7</button>
                    <button className="darkk" onClick={inputNum} value={8}>8</button>
                    <button className="darkk" onClick={inputNum} value={9}>9</button>
                    <button className="laranja" onClick={operadorGuarda} value={"x"}>X</button>
                </div>

                <div >
                    <button className="darkk" onClick={inputNum} value={4}>4</button>
                    <button className="darkk" onClick={inputNum} value={5}>5</button>
                    <button className="darkk" onClick={inputNum} value={6}>6</button>
                    <button className="laranja" onClick={operadorGuarda} value={"-"}>-</button>
                </div>

                <div >
                    <button className="darkk" onClick={inputNum} value={1}>1</button>
                    <button className="darkk" onClick={inputNum} value={2}>2</button>
                    <button className="darkk" onClick={inputNum} value={3}>3</button>
                    <button className="laranja" onClick={operadorGuarda} value={"+"}>+</button>
                </div> 

                <div className= "ultima-linha">
                    <div className="botao-duplo">
                        <button className="botao-zero darkk" onClick={inputNum} value={0}>0</button>
                    </div>
                    <button className="darkk" onClick={inputNum} value={"."}>.</button>
                    <button className="laranja" onClick={calcular}>=</button>
                </div>
            </div>
        </div> 
       
    )
}