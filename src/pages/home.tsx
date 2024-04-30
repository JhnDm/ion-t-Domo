import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonItem,IonLabel,IonList,IonThumbnail,IonIcon, IonRouterLink,IonSearchbar, IonGrid,IonRow,IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

import './home.css';
import { calculatorOutline, chatboxOutline, closeOutline, listCircleOutline, listOutline, readerOutline, speedometerOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const history = useHistory(); // Initialize useHistory hook
  {/*Dynamic Search*/}
  const [searchTerm, setSearchTerm] = useState<string>('');


  const cardData = [
    {
      title: 'Click Counter',
      icon: speedometerOutline,
      subtitle: 'Applet #1',
      link: '/clickcounter'
    },
    {
      title: 'Calculator',
      icon: calculatorOutline,
      subtitle: 'Applet #2',
      link: '/calculator'
    },
    {
      title: 'To Do List',
      icon: listCircleOutline,
      subtitle: 'Applet #3',
      link: '/ToDolistApp'
    },
    {
      title: 'Quote Generator',
      icon: chatboxOutline,
      subtitle: 'Applet #3',
      link: '/QuoteGenerator'
    },
    {
      title: 'Notes',
      icon: readerOutline,
      subtitle: 'Applet #4',
      link: '/notes'
    },
    
  ];

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
    {/*Dynamic Search*/}
    <>
      <IonSearchbar 
        value={searchTerm} 
        onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
      />
      
      {cardData
        .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((card, index) => (
          <IonCard key={index} href={card.link}>
            <IonCardHeader>
              <IonCardTitle>
                <IonGrid>
                  <IonRow>
                    <IonCol push=".75">
                      <IonIcon className="home-card-icon" icon={card.icon} color="primary" />
                    </IonCol>
                    <IonCol pull='3'>
                      <div className="home-card-title">{card.title}</div>
                      <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
      ))}
    </>
      </IonContent>
    </IonPage>
);
};

//
export default Home;
