import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import './SiteTenants.css';

interface SiteTenantsProps {
    id: string,
    key: string,
}

const SiteTenants: React.FC<SiteTenantsProps> = (props) => {
    const title = "Tenants Form";
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

export default SiteTenants;