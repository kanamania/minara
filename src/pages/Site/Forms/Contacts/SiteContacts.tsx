import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import './SiteContacts.css';

interface SiteContactsProps {
    id: string,
    key: string,
}

const SiteContacts: React.FC<SiteContactsProps> = (props) => {
    const title = "Contacts";
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

export default SiteContacts;