import './SearchBar.css';
import {IonItem, IonList, IonSearchbar} from '@ionic/react';
import {useEffect, useState} from 'react';
import DataService from '../../services/data/DataService';
import {TSite} from '../../types/TSite';
import {Link} from 'react-router-dom';


const SearchBar: React.FC = () => {
    let [term, setTerm] = useState("");
    let [filtered, setFiltered] = useState([]);
    const dataService = new DataService();
    let [search, setSearch] = useState(false);
    const doSearch = () => {
        dataService.search(term).then((res) => {
            setFiltered(res.data);
            return true;
        });
    };
    useEffect(() => {
        if(search && term.length > 2) {
            doSearch();
        }
        setSearch(false)
    });
    return (
        <>
        <IonSearchbar value={term} onIonChange={(e: any) => {setTerm(e.target.value); setSearch(true)}} placeholder="Search sites by name|id">

        </IonSearchbar>
        <IonList>
            {filtered.map((item: TSite) => {
                return <>
                <IonItem>
                    <Link to={`/site/${item.minara_id}`}>
                        {item.minara_id}
                    </Link>
                </IonItem>
                </>
            })}
        </IonList>
        </>
    );
};

export default SearchBar;
