import React from 'react'
import styles from './Calculator.module.css'
import { useRef, useState } from 'react'
import { Calc } from '../services/Calc'

const Calculator = () => {

    const[operation, setOperation] = useState('');
    const panel = useRef();

    function handleOperation(str){
        const result = Calc(str);
        setOperation(result);
    }


  return (
    <div className={styles.calculator}>
        <div className={styles.panel} ref={panel}>
            {operation}
        </div>

        <div className={styles.keyboard}>
            <div className={styles['operator']} onClick={() => setOperation(operation + ' + ')}> + </div>
            <div className={styles['operator']} onClick={() => setOperation(operation + ' - ')}> - </div>
            <div className={styles['operator']} onClick={() => setOperation(operation + ' * ')}> * </div>
            <div className={styles['operator']} onClick={() => handleOperation(operation)}> = </div>
        </div>

        <div className={styles.keyboard}>
            <div className={styles['operator']} onClick={() => setOperation(operation + ' / ')}> / </div>
            <div className={styles['operator']} onClick={() => setOperation(operation + ' ^ ')}> ^ </div>
            <div className={styles['operator']} onClick={() => setOperation(operation + ' v ')}> sqrt </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '0')}> 0 </div>
        </div>

        <div className={styles.keyboard}>
            <div className={styles['number']} onClick={() => setOperation(operation + '1')}> 1 </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '2')}> 2 </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '3')}> 3 </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '4')}> 4 </div>
        </div>

        <div className={styles.keyboard}>
            <div className={styles['number']} onClick={() => setOperation(operation + '5')}> 5 </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '6')}> 6 </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '7')}> 7 </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '8')}> 8 </div>
        </div>

        <div className={styles.keyboard}>
            <div className={styles['number']} onClick={() => setOperation(operation + '9')}> 9 </div>
            <div className={styles['number']} onClick={() => setOperation(operation + '.')}> , </div>
            <div className={styles['number']} onClick={() => setOperation('')}> Del </div>
            <div><center>
                <img src="./einstein.png" width='80vw' onClick={() => setOperation('Einstein')}/>
                </center>    
            </div>
        </div>

        <h4>David Santos - Web Developer</h4>
    </div>
  )
}

export default Calculator