import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonItem,IonLabel,IonList,IonThumbnail,IonIcon, IonRouterLink } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

import './home.css';
import { speedometerOutline } from 'ionicons/icons';

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
        <IonCard className="custom-card">
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                <IonRouterLink href="./clickcounter">
                <IonIcon icon={speedometerOutline} style={{ fontSize: '4rem' }} />
                    </IonRouterLink>
                </IonThumbnail>
                <IonLabel>Click Counter</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  </IonPage>
);
};

export default Home;