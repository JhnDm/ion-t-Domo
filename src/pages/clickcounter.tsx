import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './clickcounter.css';


  const ClickCounter: React.FC = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };


  return (
    <IonPage>
    <IonContent>
      <h2>Click Counter</h2>
      <p>Number of clicks: {count}</p>
      <IonButton onClick={handleClick}>Click me</IonButton>
    </IonContent>
  </IonPage>
);
};

export default ClickCounter;
