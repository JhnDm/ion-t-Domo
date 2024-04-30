import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './clickcounter.css';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const history = useHistory(); // Initialize useHistory hook

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleBack = () => {
    history.push('/home'); // Navigate back to the home page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonButton onClick={handleBack}>Back</IonButton>
        <br />
        <br />
        <br /> 
        <center>
          <p>Number of clicks: {count}</p>
          <IonButton onClick={handleClick}>Click me</IonButton>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
