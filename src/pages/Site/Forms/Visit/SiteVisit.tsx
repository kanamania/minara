import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonPage, IonSelect,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { useForm } from 'react-hook-form';
import { object, string, number } from 'yup';
import './SiteVisit.css';
import Input, {InputProps} from '../../../../components/Input/Input';

interface VisitFormProps {
    id: string,
    key: string,
}

const SiteVisit: React.FC<VisitFormProps> = (props) => {
    const title = "Site Visit";
    document.title = `${title} - Minara`;

    const logVisit = (data: any) => {
        console.log(data)
        console.log('log visit')
    }
    const validationSchema = object().shape({
        activity_category: string().required(),
        activity_type: string().required(),
        remarks: string().required(),
        fuel_level: number().required(),
        dg_rhs: number().required(),
        luku_meter_reading: number().required(),
        dg1_galooli_fuel_app_amount: number().required(),
        dg2_galooli_fuel_app_amount: number().required(),
        tenants_clamp_meter_reading: number().required(),
        dg_service_check: string().required(),
    });
    const formFields: InputProps[] = [
        {
            name: "activity_category",
            component: <IonSelect />,
            label: "Activity Category",
        },
        {
            name: "activity_type",
            component: <IonSelect />,
            label: "Activity Type",
        },
        {
            name: "remarks",
            label: "Remarks",
        },
        {
            name: "fuel_level",
            component: <IonInput type="number" clearOnEdit={false} />,
            label: "Fuel Level",
        },
        {
            name: "dg_rhs",
            component: <IonInput type="number" clearOnEdit={false} />,
            label: "DG RHs",
        },
        {
            name: "luku_meter_reading",
            component: <IonInput type="number" clearOnEdit={false} />,
            label: "Luku Reading",
        },
        {
            name: "dg1_galooli_fuel_app_amount",
            component: <IonInput type="number" clearOnEdit={false} />,
            label: "DG1 Galooli Fuel Level",
        },
        {
            name: "dg2_galooli_fuel_app_amount",
            component: <IonInput type="number" clearOnEdit={false} />,
            label: "DG2 Galooli Fuel Level",
        },
        {
            name: "tenants_clamp_meter_reading",
            component: <IonInput type="number" clearOnEdit={false} />,
            label: "Tenant Clamp Reading",
        },
        {
            name: "dg_service_check",
            component: <IonInput type="number" clearOnEdit={false} />,
            label: "DG Service Check",
        },
    ];
    const {control, handleSubmit, formState: {errors}} = useForm();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form className="ion-padding" onSubmit={handleSubmit(logVisit)}>
                    {formFields.map((field, index) => (
                        <Input {...field} control={control} key={index} errors={errors} />
                    ))}
                    <IonButton className="ion-margin-top" type="submit" expand="block">
                        Submit
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
}

export default SiteVisit;