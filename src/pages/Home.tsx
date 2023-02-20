import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import SearchBar from '../components/SearchBar/SearchBar';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Minara Tanzania</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <SearchBar/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
