// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Select from 'react-select';
// import styles from '../styles/CurrencyConverter.module.css'; // CSS module
// import '@fortawesome/fontawesome-free/css/all.min.css';// for icons

// const currencies = [
//   { code: 'USD', label: 'US Dollar', flag: 'https://flagcdn.com/us.svg' },
//   { code: 'GBP', label: 'British Pound', flag: 'https://flagcdn.com/gb.svg' },
//   { code: 'EUR', label: 'Euro', flag: 'https://flagcdn.com/eu.svg' },
//   { code: 'KES', label: 'Kenyan Shilling', flag: 'https://flagcdn.com/ke.svg' },
//   { code: 'JPY', label: 'Japanese Yen', flag: 'https://flagcdn.com/jp.svg' },
//   { code: 'CAD', label: 'Canadian Dollar', flag: 'https://flagcdn.com/ca.svg' },
//   { code: 'AUD', label: 'Australian Dollar', flag: 'https://flagcdn.com/au.svg' },
// ];

// const CurrencyConverter = () => {
//   const [amount, setAmount] = useState('1.00');
//   const [fromCurrency, setFromCurrency] = useState(currencies[0]);
//   const [toCurrency, setToCurrency] = useState(currencies[1]);
//   const [convertedAmount, setConvertedAmount] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const [showNavBar, setShowNavBar] = useState(true); // State for navbar visibility
//   const [lastScrollTop, setLastScrollTop] = useState(0); // Store the last scroll position

//   useEffect(() => {
//     const handleScroll = () => {
//       let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//       // If scrolling down, hide the navbar. If scrolling up, show it.
//       if (scrollTop > lastScrollTop) {
//         setShowNavBar(false); // Scrolling down
//       } else {
//         setShowNavBar(true); // Scrolling up
//       }

//       setLastScrollTop(scrollTop);
//     };

//     // Attach the event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollTop]);

//   const mockConvertCurrency = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const mockRate = 1.25;
//       const result = (parseFloat(amount) * mockRate).toFixed(2);
//       setConvertedAmount(result);
//       setLoading(false);
//     }, 1000);
//   };

//   const swapCurrencies = () => {
//     const temp = fromCurrency;
//     setFromCurrency(toCurrency);
//     setToCurrency(temp);
//   };

//   const customSingleValue = ({ data }) => (
//     <div className="d-flex align-items-center justify-content-center" style={{ fontSize: '1.5rem' }}>
//       <img
//         src={data.flag}
//         alt={data.code}
//         style={{ width: '50px', height: '30px', marginRight: '20px' }} // Make the flag bigger
//       />
//       <span>{data.label}</span> {/* Bigger text */}
//     </div>
//   );

//   const customOption = (props) => {
//     const { data, innerRef, innerProps } = props;
//     return (
//       <div ref={innerRef} {...innerProps} className="d-flex align-items-center p-2">
//         <img
//           src={data.flag}
//           alt={data.code}
//           style={{ width: '50px', height: '30px', marginRight: '20px' }} // Bigger flag size
//         />
//         <span style={{ fontSize: '1.5rem' }}>{data.label}</span> {/* Bigger text */}
//       </div>
//     );
//   };

//   return (
//     <div className={styles.converterBackground}>
//       {/* Horizontal Nav Bar */}
//       <nav className={`${styles.navbar} ${!showNavBar ? styles.hide : ''}`}>
//         {/* Left section: Price Link */}
//         <div className={styles.logo}>
//         Price<span style={{color:'blue'}}>Link</span> 
//         </div>

//         {/* Right section: Other links */}
//         <ul className={styles.navLinks} >
//           <li className={styles.navItem} >Currency Converter</li>
//           <li className={styles.navItem} >Compare Prices</li>
//           <li className={styles.navItem} >Track Deals</li>
//           <li className={styles.navItem} >Sign In</li>
//         </ul>
//       </nav>

      
//       {/* <div className={styles.curve}></div> */}
//       <div className={styles.bubble}></div>
//       <h2 className={styles.title}>Price Link Currency Converter
//       <h5 className={styles.subtitle}>Get real-time currency conversion rates</h5>
//       </h2>
      


//       <div className={`card ${styles.converterCard}`}>
//         <div className={styles.boxContainer}>
//           <div className={styles.box}><i class='fas fa-coins' style={{ marginRight: '10px' }}></i>Convert</div>
//           <div className={styles.box}><i class="fa" style={{ marginRight: '10px' }}>&#xf1d9;</i>Send</div>
//           <div className={styles.box}><i  class="fa" style={{ marginRight: '10px' }}>&#xf201;</i>Charts</div>
//           <div className={styles.box}><i  class='fas' style={{ marginRight: '10px' }}>&#xf0f3;</i>Alerts</div>
//         </div>
        
//         <div className="row g-3 align-items-center">
//           <div className="col-md-4">
//             <input
//               type="text"
//               className={`form-control ${styles.input}`}
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           <div className="col-md-3">
//             <Select
//               value={fromCurrency}
//               options={currencies}
//               getOptionLabel={(e) => `${e.label} (${e.code})`}
//               components={{ SingleValue: customSingleValue, Option: customOption }}
//               onChange={setFromCurrency}
//               isSearchable={false}
//             />
//           </div>

//           <div className="col-md-2 text-center">
//             <button
//               className={`btn btn-light rounded-circle ${styles.swapButton}`}
//               onClick={swapCurrencies}
//             >
//               ⇄
//             </button>
//           </div>

//           <div className="col-md-3">
//             <Select
//               value={toCurrency}
//               options={currencies}
//               getOptionLabel={(e) => `${e.label} (${e.code})`}
//               components={{ SingleValue: customSingleValue, Option: customOption }}
//               onChange={setToCurrency}
//               isSearchable={false}
//             />
//           </div>

          
//         </div>

//         {convertedAmount && (
//           <div className={`alert alert-success mt-4`}>
//             Converted Amount: {convertedAmount} {toCurrency.code}
//           </div>
//         )}

//         {error && (
//           <div className="alert alert-danger mt-4">
//             Error: {error}
//           </div>
//         )}

        

//         <div className={styles.buttonContainer}>
//           <button
//             className={`btn ${styles.convertButton}`}
//             onClick={mockConvertCurrency}
//             disabled={loading}
//           >
//             {loading ? 'Converting...' : 'Convert'}
//           </button>
//         </div>
//       </div>
      

//       {/* mock conversion part */}
//       <div className={styles.mockConversion}>
//         <i className={`fas fa-info-circle ${styles.icon}`}></i> {/* Icon */}
//         This is a mock conversion for demonstration purposes. 
//       </div> 


//     </div>
//   );
// };

// export default CurrencyConverter;
