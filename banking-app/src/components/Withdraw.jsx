import React, {useState} from 'react';
import {UserContext} from "../App";
import TransactionHistoryCard from "./TransactionHistoryCard";

function Withdraw() {
    const {userContext, setUserContext} = React.useContext(UserContext);
    const [error, setError] = useState("")
    const [userInput, setUserInput] = useState(null)
    const user = userContext.users.find(user => user.id === userContext.currentUser);

    function handleWithdraw(e) {
        e.preventDefault();
        const amount = e.target.amount.value;
        const newBalance = Number(user.balance) - Number(amount);
        if (newBalance >= 0) {

            setUserContext({
                ...userContext,
                users: userContext.users.map(user => user.id === userContext.currentUser ? {
                    ...user,
                    balance: newBalance,
                    withdraws: [...user.withdraws, {
                        amount: amount,
                        date: new Date().toLocaleDateString()
                    }]
                } : user)
            });
            alert("Withdraw completed successfully!");
        } else {
            setError("Insufficient funds")
        }
        setUserInput("")
    }

    function handleUserInputChange(e){
        let input = e.target.value
        if (input < 0){
            input *= -1
        }
        setUserInput(input)
    }

    const userWithdrawElements = user && user.withdraws.map((withdraw,i) => {
        return (
            <TransactionHistoryCard id={i} amount={withdraw.amount} date={withdraw.date}/>)
    })

    return (
        <>
            <h1>Withdraw</h1>
            {userContext.currentUser !== null ?
                <div>
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <h2>{user.username}</h2>
                                <p>Current Balance: ${user.balance}</p>
                            </div>
                            <form onSubmit={handleWithdraw} className="position-relative">
                                <div className="form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="number"
                                           className="form-control"
                                           onChange={handleUserInputChange}
                                           onFocus={() => setError("")}
                                           value={userInput}
                                           id="amount"
                                           placeholder="Enter Amount" />
                                    <p className="text-danger">{error} </p>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2 m-auto" disabled={!userInput}>
                                    Withdraw
                                </button>
                            </form>
                        </div>
                    </div>
                    { user.withdraws.length > 0 &&
                    <div>
                        <div className="card my-3">
                            <div className="card-body m-3">
                                <h3 className="card-title mb-3 text-center">History</h3>
                                <div>
                                    {userWithdrawElements}
                                </div>
                            </div>
                        </div>
                    </div>
                        }
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