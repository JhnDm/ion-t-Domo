import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

import './home.css';

const Home: React.FC = () => {
  const history = useHistory(); // Initialize useHistory hook

  const navigateToProfile = () => {
    history.push('/profile'); // Navigate to the '/profile' route
  };

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
          <p>Feel free to open any tabs of this app.</p>
          {/* Use navigateToProfile function on button click */}
          <IonButton onClick={navigateToProfile} color="primary">Go to Profile</IonButton>
          {/* Use routerLink to navigate to '/about' page */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
