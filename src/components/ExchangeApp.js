import React, { useState, useEffect } from 'react';
import InputEx from './InputEx';
import ScoreEx from './ScoreEx';

function ExchangeApp() {
    const [currencyData, setCurrencyData] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('ILS');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        fetch('https://monkeys.co.il/api2/currency.php')
            .then(response => response.json())
            .then(data => {
                setCurrencyData(data.quotes);
            });
    }, []);

    useEffect(() => {
        if (currencyData) {
            const rate = currencyData[`USD${toCurrency}`] / currencyData[`USD${fromCurrency}`];
            setConvertedAmount(amount * rate);
        }
    }, [currencyData, fromCurrency, toCurrency, amount]);

    const handleSwitchCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div>
            <InputEx
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                amount={amount}
                onAmountChange={setAmount}
                onSwitch={handleSwitchCurrencies}
                onFromCurrencyChange={setFromCurrency}
                onToCurrencyChange={setToCurrency}
            />
            <ScoreEx value={convertedAmount} />
        </div>
    );
}

export default ExchangeApp;
