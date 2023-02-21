import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Site from './pages/Site/Site';
import SiteVisitForm from './pages/Site/Forms/Visit/SiteVisitForm';
import SiteContacts from './pages/Site/Forms/Contacts/SiteContacts';
import SiteGrid from './pages/Site/Forms/Grid/SiteGrid';
import SiteTenants from './pages/Site/Forms/Tenants/SiteTenants';
import SiteDG from './pages/Site/Forms/DG/SiteDG';
import SiteInfo from './pages/Site/Forms/Info/SiteInfo';
import SiteLocate from './pages/Site/Forms/Locate/SiteLocate';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/site/:id" render={(props) => (
          <Site key="site" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/visit/:id" render={(props) => (
          <SiteVisitForm key="visit" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/locate/:id" render={(props) => (
          <SiteLocate key="locate" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/info/:id" render={(props) => (
          <SiteInfo key="info" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/dg/:id" render={(props) => (
          <SiteDG key="dg" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/tenants/:id" render={(props) => (
          <SiteTenants key="tenants" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/grid/:id" render={(props) => (
          <SiteGrid key="grid" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/contacts/:id" render={(props) => (
          <SiteContacts key="contacts" id={props.match.params.id} />
        )}></Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
