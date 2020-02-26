import React from "react";
import { observer } from 'mobx-react';
import { useStores } from '../store/useStores';
import items from "./items";

function FrameworksPage() {
    const { searchStore } = useStores();

    const search = 'React';

    const res = items.filter(obj => Object.values(obj).some(val => val.toLowerCase().indexOf(search.toLowerCase()) !== -1));

    console.log('search', res, searchStore);

    const renderHighlight = (string) => {
        const newString = string.toLowerCase().split(search.toLowerCase()).join(`<span style="color: red;">${search}</span>`);
        

        return <div dangerouslySetInnerHTML={{ __html: newString }} />
    }

    return (
        <div>
            Hello World 
            {res && res.length > 0 ? res.map(item => <div><p>{renderHighlight(item.title)}</p><p>{renderHighlight(item.description)}</p></div>
            ) : (<p>no results found</p>)}
        </div>
    );
}

export default FrameworksPage;