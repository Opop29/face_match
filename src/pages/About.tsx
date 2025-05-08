import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
} from '@ionic/react';

import './Home.css'; // Reusing the same styling for consistency

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About This App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding content-bg">
        <IonCard className="card">
          <IonCardContent>
            <IonText color="warning">
              <h2>📱 One Piece Face Match System</h2>
            </IonText>
            <IonText>
              <p style={{ color: '#FFD700', lineHeight: '1.6' }}>
                The <strong>One Piece Face Match System</strong> is an interactive mobile application built using Ionic React and Capacitor.
                Its core feature allows users to take a selfie using their device's camera, which is then compared and randomly matched with a famous character from the
                <strong> One Piece</strong> anime series.
              </p>
              <p style={{ color: '#FFD700', lineHeight: '1.6' }}>
                Once a picture is captured, the system simulates a brief "analyzing" phase to provide an engaging experience, after which it reveals a matched character along
                with the character’s image, name, and bounty. This application is designed for fans of the series to enjoy a fun and personalized interaction with their favorite characters.
              </p>
              <p style={{ color: '#FFD700', lineHeight: '1.6' }}>
                The app incorporates modern technologies such as:
                <ul style={{ paddingLeft: '20px', marginTop: '10px', color: '#FFD700' }}>
                  <li>📸 Capacitor Camera API for capturing photos</li>
                  <li>⚛️ React with Ionic UI Components</li>
                  <li>🎨 Custom themes using black and yellow color scheme for a bold, anime-inspired interface</li>
                </ul>
              </p>
              <p style={{ color: '#FFD700', lineHeight: '1.6' }}>
                This project is intended for educational and entertainment purposes and showcases how hybrid mobile development can be combined with creativity and pop culture references.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
