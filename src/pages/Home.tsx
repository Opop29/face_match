import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonText,
  IonSpinner,
} from '@ionic/react';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useState } from 'react';
import './Home.css'; // Keep your theme styles here

const onePieceCharacters = [
  { name: 'Monkey D. Luffy', bounty: '1,500,000,000', image: 'https://i.pinimg.com/564x/c8/60/42/c86042cf617254d976db93dcc61037d7.jpg' },
  { name: 'Roronoa Zoro', bounty: '320,000,000', image: 'https://i.redd.it/1znk933bwzsb1.jpg' },
  { name: 'Sanji', bounty: '330,000,000', image: 'https://static.toiimg.com/thumb/msid-120213925,width-1280,height-720,resizemode-4/120213925.jpg' },
  { name: 'Nami', bounty: '66,000,000', image: 'https://64.media.tumblr.com/affc1050e53758478983a470fb82032b/tumblr_o3x7jafSkf1shof5ko2_540.jpg' },
  { name: 'Nico Robin', bounty: '130,000,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUptrvtF6QjSVaRyOIpEcMjVSULuQ_RyIIQ&s' },
  { name: 'Usopp', bounty: '200,000,000', image: 'https://wallpapers.com/images/hd/one-piece-usopp-funny-shriek-80j09wr2i8m4cgqe.jpg' },
  { name: 'Franky', bounty: '94,000,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM4tdeSwR1kISrMpl9g8UF5TriKV0yFPcnA&s' },
  { name: 'Brook', bounty: '83,000,000', image: 'https://lh5.googleusercontent.com/oq7zlpdeNLQKHU1_gs03VhH89Dp0dSOLi05YfVdQl1LDlbb96-v54A3u4hbXMfzLDF9Oast_2piXBKuPjAfb88FkhN4n43RlkhASuxTXf_3vzfnlblDCkKbZlCDBWcNEigQfsVOh' },
  { name: 'Jinbei', bounty: '438,000,000', image: 'https://c.tenor.com/taD6l-ijy4IAAAAd/jimbei-jinbe.gif' },
  { name: 'Trafalgar Law', bounty: '500,000,000', image: 'https://44.media.tumblr.com/393ea8465c526068419bc06a328d608a/9792da084374c04d-f5/s540x810_f1/737ab9c86f5bc1d1f9dec28e4c144523637f1eed.gif' },
];

const Home: React.FC = () => {
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [matchedCharacter, setMatchedCharacter] = useState<typeof onePieceCharacters[0] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openCamera = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        allowEditing: false,
        quality: 90,
      });

      setUserPhoto(photo.dataUrl ?? null);
      setIsLoading(true);
      setMatchedCharacter(null); // Clear previous match

      setTimeout(() => {
        const match = onePieceCharacters[Math.floor(Math.random() * onePieceCharacters.length)];
        setMatchedCharacter(match);
        setIsLoading(false);
      }, 5000); // 5 seconds delay for dramatic effect
    } catch (error) {
      console.error('Camera error:', error);
    }
  };

  const resetToStart = () => {
    setUserPhoto(null);
    setMatchedCharacter(null);
    setIsLoading(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>🔥 One Piece Face Match</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding content-bg">
        <div className="content-wrapper">
          {!userPhoto && (
            <IonButton expand="block" onClick={openCamera} color="warning" className="animated-button">
              📸 Start Matching!
            </IonButton>
          )}

          {userPhoto && (
            <div className="card fade-in">
              <IonButton expand="block" color="medium" onClick={resetToStart} className="animated-button">
                🔙 Back to Take Picture
              </IonButton>

              <IonText color="primary">
                <h2 className="section-title">🧍 Your Selfie</h2>
              </IonText>
              <IonImg src={userPhoto} className="rounded-img pulse-border" />

              {isLoading ? (
                <div className="loading-screen">
                  <IonText color="warning">
                    <h2>🔍 Analyzing... Hold Tight!</h2>
                  </IonText>
                  <IonSpinner name="dots" />
                </div>
              ) : (
                matchedCharacter && (
                  <div className="match-card pop-in">
                    <IonText color="success">
                      <h2>🎯 You Matched With:</h2>
                    </IonText>
                    <IonImg src={matchedCharacter.image} className="rounded-img shadow-img" />
                    <IonText>
                      <h3>{matchedCharacter.name}</h3>
                      <p className="bounty-text">💰 Bounty: {matchedCharacter.bounty} Berries</p>
                    </IonText>
                  </div>
                )
              )}

              <IonButton expand="block" onClick={openCamera} color="warning" className="animated-button">
                🔄 Try Again
              </IonButton>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
