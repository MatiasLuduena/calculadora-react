import React, { useState } from 'react';
import './calculadora.css';

const Calculadora = () => {
    const [calculo, setCalculo] = useState('');
    const [resultado, setResultado] = useState('');
    const [igual, setIgual] = useState(false);

    const operadores = ['/', '*', '-', '+', '.'];

    function calcularResultado(valor) {
        if (igual) {
            setCalculo(valor);
            setIgual(false);
            return;
        }

        if (
            operadores.includes(valor) && calculo === '' || operadores.includes(valor) && operadores.includes(calculo.slice(-1))
        ) {
            return;
        }

        setCalculo(calculo + valor);

        if (!operadores.includes(valor)) {
            setResultado(eval(calculo + valor).toString());
        }
    }

    function calcular() {
        setCalculo(eval(calculo).toString());
        setResultado('');
        setIgual(true);
    }

    function borrarTodo() {
        setResultado('');
        setCalculo('');
    }

    function borrar() {
        let valor = calculo.slice(0, -1).toString();
        setCalculo(valor);
        setResultado('');
    }

  return (
    <div className='contenedor'>
        <div className='pantalla'>
            <span>{resultado ? '(' + resultado + ')' : ''}</span>
            <span>{calculo || 0}</span>
        </div>
        <div className='botones'>
            <div className='col'>
                <button onClick={() => calcularResultado('-')}>-</button>
                <button onClick={() => calcularResultado('+')}>+</button>
                <button onClick={() => borrar()}>←</button>
            </div>
            <div className='col'>
                <button onClick={() => borrarTodo()}>C</button>
                <button onClick={() => calcularResultado('*')}>x</button>
                <button onClick={() => calcularResultado('/')}>÷</button>
            </div>
            <div className='col'>
                <button onClick={() => calcularResultado('7')}>7</button>
                <button onClick={() => calcularResultado('8')}>8</button>
                <button onClick={() => calcularResultado('9')}>9</button>
            </div>
            <div className='col'>
                <button onClick={() => calcularResultado('4')}>4</button>
                <button onClick={() => calcularResultado('5')}>5</button>
                <button onClick={() => calcularResultado('6')}>6</button>
            </div>
            <div className='col'>
                <button onClick={() => calcularResultado('1')}>1</button>
                <button onClick={() => calcularResultado('2')}>2</button>
                <button onClick={() => calcularResultado('3')}>3</button>
            </div>
            <div className='col'>
                <button onClick={() => calcularResultado('.')}>.</button>
                <button onClick={() => calcularResultado('0')}>0</button>
                <button onClick={() => calcular()}>=</button>
            </div>
        </div>
    </div>
  );
}

export default Calculadora;