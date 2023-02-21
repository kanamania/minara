import React, {FC} from "react";
import {IonItem, IonLabel, IonInput, IonText} from "@ionic/react";
import {Controller, Control} from "react-hook-form";

export interface InputProps {
    name: string;
    control?: Control;
    label?: string;
    component?: JSX.Element;
    errors?: any;
}

const Input: FC<InputProps> = ({name,
                                   control,
                                   component,
                                   label,
                                   errors,
                               }) => {
    return (
        <>
            <IonItem>
                {label && (
                    <IonLabel position="floating">{label}</IonLabel>
                )}
                <Controller
                    // @ts-ignore
                    as={component ?? <IonInput/>}
                    name={name}
                    control={control}
                    onChangeName="onIonChange"
                />
            </IonItem>
            {errors && errors[name] && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors[name].message}</small>
                </IonText>
            )}
        </>
    );
};

export default Input;