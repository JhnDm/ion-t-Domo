import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './calculator.css';
import React, { useState } from 'react';


const Calculator: React.FC = () => {
  const [expression, setExpression] = useState('');
  const history = useHistory(); // Initialize useHistory hook

  const handleClick = (value: string) => {
    setExpression(prevExpression => prevExpression + value);
  };
  const handleBack = () => {
    history.push('/home'); // Navigate back to the home page
  };


  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButton slot="start" onClick={handleBack}>Back</IonButton>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br />
        <br />
        <br />
      <div className="calculator">
      <input className="expression" value={expression} readOnly />
      <div className="buttons">
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button operator" onClick={() => handleClick('/')}>/</button>

        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button operator" onClick={() => handleClick('*')}>*</button>

        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button operator" onClick={() => handleClick('-')}>-</button>

        <button className="button" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button equal" onClick={calculateResult}>=</button>
        <button className="button operator" onClick={() => handleClick('+')}>+</button>

        <button className="button clear" onClick={clearExpression}>C</button>
      </div>
    </div>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;
