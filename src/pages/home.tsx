import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

import './home.css';

const Home: React.FC = () => {
  const history = useHistory(); // Initialize useHistory hook

{/* const navigateToProfile = () => {
    history.push('/profile'); // Navigate to the '/profile' route
  };*/}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="welcome-text">
          <h1>Welcome to my App!</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
