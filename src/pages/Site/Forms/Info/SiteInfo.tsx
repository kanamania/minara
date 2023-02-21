import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import './SiteInfo.css';

interface SiteInfoProps {
    id: string,
    key: string,
}

const SiteInfo: React.FC<SiteInfoProps> = (props) => {
    const title = "Info";
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

export default SiteInfo;