import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import './SiteGrid.css';

interface SiteGridProps {
    id: string,
    key: string,
}

const SiteGrid: React.FC<SiteGridProps> = (props) => {
    const title = "Grid";
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

export default SiteGrid;