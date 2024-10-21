import { useState, useEffect } from 'react';
import { ArrowLeftRight, Send, BarChart2, Bell } from 'lucide-react';

const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
];

interface ExchangeRates {
  [key: string]: number;
}

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('232.00');
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});

  useEffect(() => {
    const mockExchangeRates: ExchangeRates = {
      USD: 1,
      EUR: 0.920263,
      GBP: 0.76619,
      JPY: 149.20,
      CAD: 1.3804,
      INR: 84.059,
    };
    setExchangeRates(mockExchangeRates);
  }, []);

  const handleConvert = () => {
    if (toCurrency.code in exchangeRates && fromCurrency.code in exchangeRates) {
      const rate = exchangeRates[toCurrency.code] / exchangeRates[fromCurrency.code];
      const result = (parseFloat(amount) * rate).toFixed(5);
      setConvertedAmount(result);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const ExchangeRateTable = () => (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Currency</th>
              <th className="p-2 text-right">Amount</th>
              <th className="p-2 text-right">Change (24h)</th>
              <th className="p-2 text-center">Chart (24h)</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(exchangeRates).map(([code, rate]) => (
              <tr key={code} className="border-t">
                <td className="p-2">
                  <div className="flex items-center">
                    <span className="mr-2">{currencies.find(c => c.code === code)?.flag}</span>
                    {currencies.find(c => c.code === code)?.name}
                  </div>
                </td>
                <td className="p-2 text-right">{rate.toFixed(5)}</td>
                <td className="p-2 text-right">
                  <span className={`${Math.random() > 0.5 ? 'text-green-500' : 'text-red-500'}`}>
                    {(Math.random() * 0.1 - 0.05).toFixed(3)}%
                  </span>
                </td>
                <td className="p-2">
                  <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purpleCustom/90" 
                      style={{width: `${Math.random() * 100}%`}}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-16 ">
      <div className="container mx-auto px-4 py-8">
        <div className="md:max-w-[50rem] mx-auto text-center max-w-full">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">
            Global currency conversions & money transfers
          </h1>
          <p className="text-sm text-gray-600 mb-8 max-w-[18rem] md:max-w-full mx-auto">
            Leading the world in currency information and global transfers for 30+ years
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-full flex items-center justify-center">
              <ArrowLeftRight className="w-4 h-4 mr-2" /> Convert
            </button>
            <button className="hidden flex-1 bg-white text-gray-800 py-2 px-4 rounded-full border border-gray-300 md:flex items-center justify-center">
              <Send className="w-4 h-4 mr-2" /> Send
            </button>
            <button className="hidden flex-1 bg-white text-gray-800 py-2 px-4 rounded-full border border-gray-300 md:flex items-center justify-center">
              <BarChart2 className="w-4 h-4 mr-2" /> Charts
            </button>
            <button className="hidden flex-1 bg-white text-gray-800 py-2 px-4 rounded-full border border-gray-300 md:flex items-center justify-center">
              <Bell className="w-4 h-4 mr-2" /> Alerts
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <select
                value={fromCurrency.code}
                onChange={(e) => setFromCurrency(currencies.find((c) => c.code === e.target.value) || currencies[0])}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.flag} {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <div className="flex items-center">
                <button onClick={swapCurrencies} className="p-2 bg-gray-100 rounded-full mr-2">
                  <ArrowLeftRight className="w-6 h-6" />
                </button>
                <select
                  value={toCurrency.code}
                  onChange={(e) => setToCurrency(currencies.find((c) => c.code === e.target.value) || currencies[1])}
                  className="flex-grow p-2 border border-gray-300 rounded-md"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleConvert}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition duration-300 mb-4"
          >
            Convert
          </button>

          {convertedAmount && (
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="text-lg">
                {amount} {fromCurrency.code} =
              </p>
              <p className="text-3xl font-bold mb-2">
                {convertedAmount} {toCurrency.code}
              </p>
              <p className="text-sm text-gray-600">
                1 {fromCurrency.code} = {(
                  exchangeRates[toCurrency.code] / exchangeRates[fromCurrency.code]
                ).toFixed(6)}{' '}
                {toCurrency.code}
              </p>
              <p className="text-sm text-gray-600">
                1 {toCurrency.code} = {(
                  exchangeRates[fromCurrency.code] / exchangeRates[toCurrency.code]
                ).toFixed(6)}{' '}
                {fromCurrency.code}
              </p>
              <div className="flex justify-between mt-2">
                <button className="text-purple-600 text-sm">Track currency</button>
                <button className="bg-purple-600 text-white px-4 py-1 rounded-md text-sm">View transfer quote</button>
              </div>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4">
            We use the mid-market rate for our Converter. This is for informational purposes only. You won't receive this
            rate when sending money.{' '}
            <a href="#" className="text-purple-600">
              Learn to view send rates
            </a>
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
            Live exchange rates
          </h2>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Compare 100+ currencies in real time & find the right moment to transfer funds
          </p>
          <ExchangeRateTable />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
