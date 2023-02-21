import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonIcon,
    IonImg, IonItem, IonLabel,
    IonPage,
    IonRouterLink,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Site.css';
import locateIcon from '../../icons/locate-icon.svg';
import infoIcon from '../../icons/info-icon.svg';
import dgsIcon from '../../icons/dgs-icon.svg';
import tenantsIcon from '../../icons/tenants-icon.svg';
import gridIcon from '../../icons/grid-icon.svg';
import visitIcon from '../../icons/visit-icon.svg';
import contactIcon from '../../icons/contact-icon.svg';
import {useEffect, useState} from 'react';
import DataService from '../../services/data/DataService';
import {TSite} from '../../types/TSite';
import {Link} from 'react-router-dom';

interface SiteProps {
    id: string,
    key: string,
}
const Site: React.FC<SiteProps> = (props) => {
    const dataService = new DataService();
    const operations = [
        [
            {
                title: 'Locate',
                icon: locateIcon,
                url: `/locate/${props.id}`,
            },
            {
                title: 'Site Info',
                icon: infoIcon,
                url: `/info/${props.id}`,
            },
        ], [
            {
                title: 'DGs',
                icon: dgsIcon,
                url: `/dgs/${props.id}`,
            },
            {
                title: 'Tenants',
                icon: tenantsIcon,
                url: `/tenants/${props.id}`,
            },
        ], [
            {
                title: 'Grid',
                icon: gridIcon,
                url: `/grid/${props.id}`,
            },
            {
                title: 'Visit',
                icon: visitIcon,
                url: `/visit/${props.id}`,
            },
        ], [
            {
                title: 'Contacts',
                icon: contactIcon,
                url: `/contacts/${props.id}`,
            },
            {
                title: null,
                icon: null,
                url: null,
            },
        ]
    ];
    let [site, setSite] = useState<TSite|null>(null);
    let title = null;
    let [initial, setInitial] = useState(true);

    const goTo = (event: Event, url: string) => {
        console.log(url);
    };

    useEffect(() => {
        if(initial) {
            console.log({props})
            dataService.find(props.id).then(res => {
                setSite(res.data);
                title = `${res.data.minara_id} - ${res.data.site_name}`;
            });
            setInitial(false);
        }
    });
    document.title = `${title} - Minara`;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    {operations.map((row, rowIndex) => {
                        return <>
                        <IonRow key={rowIndex} className="row">
                            {row.map((col, colIndex) => {
                            return <>
                            <IonCol key={colIndex} className="col">
                                {col.url && col.icon ?
                                <Link to={col.url} >
                                    <IonIcon className="icon" icon={col.icon} />
                                    <IonLabel className="label">{col.title}</IonLabel>
                                </Link> : <></> }
                            </IonCol>
                            </>
                        })}
                        </IonRow>
                        </>
                    })}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Site;
