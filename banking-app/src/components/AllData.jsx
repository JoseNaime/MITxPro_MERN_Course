import React from 'react';
import {UserContext} from "../App";
import UserInfo from "./UserInfo";

function AllData() {
    const {userContext, setUserContext} = React.useContext(UserContext);

    const currentUserData = userContext.users && userContext.users[userContext.currentUser];
    const OthersUserData = () => {

        const users = userContext.users.map(user => {
            return (
                <UserInfo key={"user_data_" + user.id} user={user} />
            )
        })

        return (
            <div>
                <h3 className="text-center">All Users Data</h3>
                <div className="d-grid gap-4">
                    {users}
                </div>
            </div>
        )

    }

    return (
        <>
            <h1>All Data</h1>

            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">Current User Data</h3>
                    <div className={"mb-5"}>
                        {currentUserData ?
                            <UserInfo user={currentUserData} />
                            :
                            <h5>User not found</h5>
                        }
                    </div>
                    <div>
                        {userContext.users.length > 1 &&

                            <OthersUserData />
                        }
                    </div>
                </div>
            </div>

            <div className="mt-4 ">
                <h6 className="card-title text-center">Raw Data</h6>
                <p className="text-muted text-wrap w-100 text-break">{JSON.stringify(userContext)}</p>
            </div>


        </>
    );
}

export default AllData;