import React from 'react';
import {UserContext} from "../App";

function Deposit() {
    const {userContext, setUserContext} = React.useContext(UserContext);
    const user = userContext.users.find(user => user.id === userContext.currentUser);

    function handleDeposit(e) {
        e.preventDefault();
        const amount = e.target.elements.amount.value;
        const newBalance = Number(user.balance) + Number(amount);
        setUserContext({
            ...userContext,
            users: userContext.users.map(user => user.id === userContext.currentUser ? {
                ...user,
                balance: newBalance,
                deposits: [...user.deposits, {
                    amount: amount,
                    date: new Date().toLocaleDateString()
                }]
            } : user)
        });
        e.target.elements.amount.value = "";
    }

    return (
        <>
            <h1>Deposit</h1>
            {userContext.currentUser !== null ?
                <div className="card">
                    <div className="card-body">
                        <div>
                            <h2>{user.username}</h2>
                            <p>Current Balance: ${user.balance}</p>
                        </div>
                        <form onSubmit={handleDeposit}>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" className="form-control" id="amount" placeholder="Enter Amount" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Deposit
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

export default Deposit;