import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import SearchBar from '../components/SearchBar/SearchBar';

const Home: React.FC = () => {
    const title = "Home";
    document.title = `${title} - Minara`;
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <SearchBar key="searchbar"/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
