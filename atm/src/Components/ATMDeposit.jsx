import React, {useState} from 'react';

function AtmDeposit({state, dispatch, onChange}) {
    const [currencyInput, setCurrencyInput] = useState('');
    const [validInput, setValidInput] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value
        setCurrencyInput(newValue)


        if (state.isDeposit) {
            setValidInput((newValue >= 1))
        } else {
            setValidInput((newValue >= 1 && (state.totalBalance - newValue >= 0)));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrencyInput('')
        console.log(e.target.form);
        if (state.isDeposit) {
            // Deposit
            dispatch({type: "Deposit", payload: {amount: Number(currencyInput)}})
        } else {
            // Cash Back
            dispatch({type: "Cash Back", payload: {amount: Number(currencyInput)}})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <select onChange={(e) => {onChange(e);  setCurrencyInput('')}}>
                    <option name="Deposit" value="Deposit">Deposit</option>
                    <option name="Cash Back" value="Cash Back">Cash Back</option>
                </select>
            </div>
            <div className="flex-horizontal">
                <input type="number" name="currency" min={1} onChange={handleChange} value={currencyInput} placeholder="Amount" />
                <input type="submit"
                       name="submit"
                       disabled={!validInput}
                       className={state.isDeposit ? "deposit" : "cash-back"}
                       value={state.isDeposit ? "Deposit" : "Cash Back"} />
            </div>
        </form>
    );
}

export default AtmDeposit;