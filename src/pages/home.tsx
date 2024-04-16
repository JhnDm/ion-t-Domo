import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import { speedometerOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function home() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Click-counter</IonCardTitle>
        </IonCardHeader>
        {/* Example button with icon */}
        <Link to="/clickcounter"><IonButton>
            <IonIcon slot="icon-only" icon={speedometerOutline} />
          </IonButton>
        </Link>
      </IonCard>
    </>
  );
}

export default home;
