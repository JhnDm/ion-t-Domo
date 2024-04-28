import React, { useState } from 'react';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonAlert,
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import rizzCard from '../Assets/json/rizzCard.json';

const QuoteGenerator: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const history = useHistory(); // Initialize useHistory hook

  const generateRandomIndex = () => {
    return Math.floor(Math.random() * rizzCard.length);
  };

  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return rizzCard[randomIndex].message;
    } else {
      return '';
    }
  };

  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  const handleAlertDismiss = () => {
    setRandomIndex(null);
    setShowAlert(false);
  };

  const handleBack = () => {
    history.push('/home'); // Navigate back to the home page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={handleBack}>Back</IonButton>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <img
              alt="Silhouette of mountains"
              src="https://i.imgflip.com/8oaiez.jpg"
              style={{ maxWidth: '100%', width: '300px' }}
            />
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonButton
                id="present-alert"
                color="warning"
                expand="full"
                onClick={handleOpenAlert}
              >
                Click me
              </IonButton>
              <IonAlert
                isOpen={showAlert}
                onDidDismiss={handleAlertDismiss}
                header="Bisaya Rizz"
                message={renderRandomMessage()}
                buttons={['Close']}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default QuoteGenerator;
