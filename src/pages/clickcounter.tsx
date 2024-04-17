import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './clickcounter.css';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
       <br />
       <br />
       <br /> 
        <center><p>Number of clicks: {count}</p>
        <IonButton onClick={handleClick}>Click me</IonButton>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
