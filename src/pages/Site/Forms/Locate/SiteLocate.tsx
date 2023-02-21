import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './SiteLocate.css';

interface SiteLocateProps {
    id: string,
    key: string,
}

const SiteLocate: React.FC<SiteLocateProps> = (props) => {
    const title = "Location";
    document.title = `${title} - Minara`;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

            </IonContent>
        </IonPage>
    );
}

export default SiteLocate;