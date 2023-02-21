import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './SiteVisitForm.css';

interface VisitFormProps {
    id: string,
    key: string,
}

const SiteVisitForm: React.FC<VisitFormProps> = (props) => {
    const title = "Site Visit";
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

export default SiteVisitForm;