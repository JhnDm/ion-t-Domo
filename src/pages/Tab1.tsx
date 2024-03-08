import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Tab 1</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonCard>
          <img alt="" src="../src/Assets/img/p2.jpg" />
          <IonCardHeader>
            <IonCardTitle>Jhunalyn Domo</IonCardTitle>
            <IonCardSubtitle>BSIT Third Year</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Nothing</IonCardContent>
        </IonCard>
            
          </IonContent>
    </IonPage>
  );
};

export default Tab1;
