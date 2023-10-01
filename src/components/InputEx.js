import React from 'react';

function InputEx({ fromCurrency, toCurrency, amount, onAmountChange, onSwitch, onFromCurrencyChange, onToCurrencyChange }) {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <select className="form-control" value={fromCurrency} onChange={(e) => onFromCurrencyChange(e.target.value)}>
m<option value="ILS">ILS - ש"ח</option>
                        <option value="EUR">EUR - יורו</option>
                        <option value="BTC">BTC - ביטקוין</option>
                        <option value="THB">THB - באט תאילנדי</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <input className="form-control" type="number" value={amount} onChange={(e) => onAmountChange(Number(e.target.value))} />
                </div>
                <div className="col-md-1 d-flex align-items-center">
                    <button className="btn btn-primary mx-auto" onClick={onSwitch}>↔</button>
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={toCurrency} onChange={(e) => onToCurrencyChange(e.target.value)}>
                        <option value="USD">USD - דולר אמריקאי</option>
                        <option value="ILS">ILS - ש"ח</option>
                        <option value="EUR">EUR - יורו</option>
                        <option value="BTC">BTC - ביטקוין</option>
                        <option value="THB">THB - באט תאילנדי</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default InputEx;
