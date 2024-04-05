import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonAlert, IonButton,
  IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './profile.css';

const profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Profile</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonCard>
          <img alt="" src="../src/Assets/img/p2.jpg" />
          <IonCardHeader>
            <IonCardTitle>Jhunalyn Domo</IonCardTitle>
            <IonCardSubtitle>BSIT Third Year</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Quote: Try and try until you succeed</IonCardContent>
         <IonButton id="present-alert" expand="full">Quick facts</IonButton>
         <IonAlert
            trigger="present-alert"
            header="A Short Title Is Best"
            subHeader="A Sub Header Is Optional"
            message="A message should be a short, complete sentence."
            buttons={['Action']} 
      ></IonAlert>

      <IonButton id="open-action-sheet" expand="block">Open Action Sheet</IonButton>
      <IonActionSheet
            trigger="open-action-sheet"
            header="Actions"
            buttons={[
              {
                text: 'Delete',
                role: 'destructive',
                data: {
                  action: 'delete',
                },
              },
              {
                text: 'Share',
                data: {
                  action: 'share',
                },
              },
              {
                text: 'Cancel',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ]}
          ></IonActionSheet>
      
        </IonCard>
      
        
            
          </IonContent>
    </IonPage>
  );
};

export default profile;
