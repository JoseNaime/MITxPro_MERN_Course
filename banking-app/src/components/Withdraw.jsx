import React from 'react';
import {UserContext} from "../App";

function Withdraw() {
    const {userContext, setUserContext} = React.useContext(UserContext);
    const user = userContext.users.find(user => user.id === userContext.currentUser);

    function handleWithdraw(e) {
        e.preventDefault();
        const amount = e.target.amount.value;
        const newBalance = Number(user.balance) - Number(amount);
        setUserContext({
            ...userContext,
            users: userContext.users.map(user => user.id === userContext.currentUser ? {
                ...user,
                balance: newBalance
            } : user)
        });

    }

    return (
        <>
            <h1>Withdraw</h1>
            {userContext.currentUser !== null ?
                <div className="card">
                    <div className="card-body">
                        <div>
                            <h2>{user.username}</h2>
                            <p>Current Balance: ${user.balance}</p>
                        </div>
                        <form onSubmit={handleWithdraw}>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" className="form-control" id="amount" placeholder="Enter Amount" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Withdraw
                            </button>
                        </form>
                    </div>
                </div>
                :
                <>
                    <h4 className="text-muted">Please create an account</h4>
                </>
            }
        </>
    );
}

export default Withdraw;