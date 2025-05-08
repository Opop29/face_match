import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import './Login.css'; // Import custom CSS

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/face_match/app', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark" className="custom-toolbar">
          <IonTitle className="custom-title">🎯 Find Match Character</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding custom-content">
        <IonButton onClick={doLogin} expand="full" className="custom-button">
          📸 Take a One Pic
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
