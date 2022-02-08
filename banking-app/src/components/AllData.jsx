import React from 'react';
import {UserContext} from "../App";

function AllData() {
    const {userContext, setUserContext} = React.useContext(UserContext);

    return (
        <>
            <h1>All Data</h1>
            {JSON.stringify(userContext)}
        </>
    );
}

export default AllData;