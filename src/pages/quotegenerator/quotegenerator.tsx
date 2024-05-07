import React, { useState, useEffect } from 'react';
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
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const QuoteGenerator: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [quotes, setQuotes] = useState<string[]>([]);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const history = useHistory();

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const quotesSnapshot = await getDocs(collection(db, 'quotes'));
        const quotesData = quotesSnapshot.docs.map(doc => doc.data().message);
        setQuotes(quotesData);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
    fetchQuotes();
  }, []);

  const generateRandomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
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

  const renderRandomMessage = () => {
    return randomIndex !== null ? quotes[randomIndex] : '';
  };

  const handleBack = () => {
    history.push('/home');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButton slot="start" onClick={handleBack}>Back</IonButton>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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
