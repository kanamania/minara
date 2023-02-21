import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './SiteDG.css';

interface SiteDGProps {
    id: string,
    key: string,
}

const SiteDG: React.FC<SiteDGProps> = (props) => {
    const title = "DGs";
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

export default SiteDG;