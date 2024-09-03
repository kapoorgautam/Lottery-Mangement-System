// import React, { useState, useEffect } from 'react'
// import Navbar from './Navbar';
// import Color from './Color';
// import Avatar1 from './Avatar1';
// import Avatar2 from './Avatar2';
// import { Button } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom'


// const LandingPage = () => {

//     const [colorResult, setcolorResult] = useState([])
//     const [numberResult, setnumberResult] = useState([]);
//     const [start, setStart] = useState()
//     const [startcolor, setStartcolor] = useState()
//     const navigate = useNavigate()
//     const time = ["2AM", "4AM", "6AM", "8AM", "10AM", "12PM", "2PM", "4PM"]
//     const time2 = ["2AM", "6AM", "10AM", "2PM"]

//     const getArray = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/arruser')
//             const data = await response.json()
//             setnumberResult(data.numberArr)
//             setcolorResult(data.colorArr)
//             localStorage.setItem('colorArr', JSON.stringify(data.colorArr))
//             localStorage.setItem('numberArr', JSON.stringify(data.numberArr))
//             setStart(data.numberArr.length - 17)
//             setStartcolor(data.colorArr.length - 17)
//         } catch (error) {
//             console.error('Error:', error)
//         }
//     }
//     useEffect(() => {
//         getArray()
//     }, []);

//     return (
//         <><div>
//             <Navbar />
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
//                 <div className=''>
//                     <div className='makerow'>
//                         <div>
//                             <h4>Number Results</h4>
//                             <span style={{ color: 'red' }}>You can play this game<br /> between 2am and 4pm everyday</span>
//                             <div className='makecol boxes2'>
//                                 {numberResult.slice(start, start + 16).map((ele, ind) => (
//                                     ind > 7 ? null : (
//                                         <div className='makecol card1' style={{ justifyContent: 'center', alignItems: 'center', padding: '1rem', fontSize: '1.3rem', fontWeight: '600' }}>
//                                             <div className='makerow' style={{ justifyContent: 'center', marginRight: '0.5rem', fontSize: '1rem' }}>
//                                                 <div>{ind + 1}. ({time[ind]})</div>
//                                             </div>
//                                             <div className='makerow'>
//                                                 <div style={{ marginRight: '0.5rem' }} >{numberResult[start + ind]}
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Yesterday
//                                                     </div>
//                                                 </div>
//                                                 <div>{numberResult[start + ind + 8]}
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Today
//                                                     </div >
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>
//                             {/* <Avatar1 info={{ ind: 1, val: yourNumber[1], editNumber: editNumber }} /> */}
//                         </div>
//                     </div>
//                 </div>
//                 <div className=''>
//                     <div className='makerow'>
//                         <div>
//                             <h4>Color Results</h4>
//                             <span style={{ color: 'red' }}>You can play this game<br /> between 2am and 2pm everyday</span>
//                             <div className='makecol boxes2'>
//                                 {colorResult.slice(startcolor, startcolor + 8).map((ele, ind) => (
//                                     ind > 3 ? null : (
//                                         <div className='makecol card1' style={{ backgroundColor: '#d47328', justifyContent: 'center', alignItems: 'center', padding: '1rem', fontSize: '1.3rem', fontWeight: '600' }}>
//                                             <div className='makerow' style={{ justifyContent: 'center', marginRight: '0.5rem', fontSize: '1rem' }}>
//                                                 <div>{ind + 1}. ({time2[ind]})</div>
//                                             </div>
//                                             <div className='makerow'>
//                                                 <div style={{ marginRight: '0.5rem' }} ><Color colour={colorResult[startcolor + ind]} />
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Yesterday
//                                                     </div>
//                                                 </div>
//                                                 <div><Color colour={colorResult[startcolor + ind + 4]} />
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Today
//                                                     </div >
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>

//                             {/* <Avatar1 info={{ iscolor: true, ind: 1, val: yourColor[1], editColor: editColor }} /> */}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div style={{ margin: '2rem', display: 'flex', justifyContent: 'space-around' }} >
//                 <Button variant="contained"
//                     sx={{ mt: 3, mb: 2 }} onClick={() => { navigate('/color-chart') }}>Past color chart
//                 </Button>
//                 <Button variant="contained"
//                     sx={{ mt: 3, mb: 2 }} onClick={() => { navigate('/number-chart') }}>Past number chart
//                 </Button>
//                 {/* <Avatar2 info={{ colorArr: colorResult }} />
//                 <Avatar2 info={{ numberArr: numberResult }} /> */}
//             </div>
//             <div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default LandingPage

// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Color from './Color';
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//     const [colorResult, setcolorResult] = useState([]);
//     const [numberResult, setnumberResult] = useState([]);
//     const [start, setStart] = useState();
//     const [startcolor, setStartcolor] = useState();
//     const navigate = useNavigate();
//     const time = ["2AM", "4AM", "6AM", "8AM", "10AM", "12PM", "2PM", "4PM"];
//     const time2 = ["2AM", "6AM", "10AM", "2PM"];

//     const getArray = async () => {
//         try {
//             const response = await fetch('http://localhost:4000/arruser');
//             const data = await response.json();
//             setnumberResult(data.numberArr);
//             setcolorResult(data.colorArr);
//             localStorage.setItem('colorArr', JSON.stringify(data.colorArr));
//             localStorage.setItem('numberArr', JSON.stringify(data.numberArr));
//             setStart(data.numberArr.length - 17);
//             setStartcolor(data.colorArr.length - 17);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     useEffect(() => {
//         getArray();
//     }, []);

//     // Alphabetic labels for boxes
//     const alphabetLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//     return (
//         <div>
//             <Navbar />
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                
//                 {/* Number Results Section */}
//                 <div className='number-results'>
//                     <div className='makerow'>
//                         <div>
//                             <h4 style={{ textDecoration: 'underline' }}>Number Results</h4>
//                             <span style={{ color: 'red', fontWeight: 'bold' }}>
//                                 You can play this game<br /> between 2am and 4pm everyday
//                             </span>
//                             <div className='makecol boxes2'>
//                                 {numberResult.slice(start, start + 16).map((ele, ind) => (
//                                     ind > 7 ? null : (
//                                         <div className='makecol card1 number-box' 
//                                             key={`number-box-${ind}`}
//                                             style={{ 
//                                                 justifyContent: 'center', 
//                                                 alignItems: 'center', 
//                                                 padding: '1rem', 
//                                                 fontSize: '1.3rem', 
//                                                 fontWeight: '600' 
//                                             }}>
//                                             <div className='makerow' style={{ justifyContent: 'center', marginRight: '0.5rem', fontSize: '1rem' }}>
//                                                 <div>Box {alphabetLabels[ind]}: ({time[ind]})</div>
//                                             </div>
//                                             <div className='makerow'>
//                                                 <div style={{ marginRight: '0.5rem' }}>
//                                                     {numberResult[start + ind]}
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Yesterday
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     {numberResult[start + ind + 8]}
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Today
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Color Results Section */}
//                 <div className='color-results'>
//                     <div className='makerow'>
//                         <div>
//                             <h4 style={{ textDecoration: 'underline' }}>Color Results</h4>
//                             <span style={{ color: 'red', fontWeight: 'bold' }}>
//                                 You can play this game<br /> between 2am and 2pm everyday
//                             </span>
//                             <div className='makecol boxes2'>
//                                 {colorResult.slice(startcolor, startcolor + 8).map((ele, ind) => (
//                                     ind > 3 ? null : (
//                                         <div className='makecol card1 color-box' 
//                                             key={`color-box-${ind}`}
//                                             style={{ 
//                                                 backgroundColor: '#d47328', 
//                                                 justifyContent: 'center', 
//                                                 alignItems: 'center', 
//                                                 padding: '1rem', 
//                                                 fontSize: '1.3rem', 
//                                                 fontWeight: '600' 
//                                             }}>
//                                             <div className='makerow' style={{ justifyContent: 'center', marginRight: '0.5rem', fontSize: '1rem' }}>
//                                                 <div>Box {alphabetLabels[ind + 8]}: ({time2[ind]})</div>
//                                             </div>
//                                             <div className='makerow'>
//                                                 <div style={{ marginRight: '0.5rem' }}>
//                                                     <Color colour={colorResult[startcolor + ind]} />
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Yesterday
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <Color colour={colorResult[startcolor + ind + 4]} />
//                                                     <div style={{ fontSize: '1rem', fontWeight: '600' }}>
//                                                         Today
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div style={{ margin: '2rem', display: 'flex', justifyContent: 'space-around' }} >
//                 <Button variant="contained"
//                     sx={{ mt: 3, mb: 2 }} onClick={() => { navigate('/color-chart') }}>Past color chart
//                 </Button>
//                 <Button variant="contained"
//                     sx={{ mt: 3, mb: 2 }} onClick={() => { navigate('/number-chart') }}>Past number chart
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Color from './Color';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

import { useLanguage } from './LanguageContext';
import { translations } from '../translator/translations';
const LandingPage = () => {
    const [colorResult, setcolorResult] = useState([]);
    const [numberResult, setnumberResult] = useState([]);
    const [start, setStart] = useState();
    const [startcolor, setStartcolor] = useState();
    const navigate = useNavigate();
    const time = ["4:30", "3:10", " 6:00M", "8:40", "11:40", "2:00", "4:00", "7:00"];
    const time2 = ["2PM", "4PM", "6AM", "8PM"];
    const numberNames = ["Sri ganesh ", "Delhi bazaar ", "Faridabad", "Gajiyabad ", "Gali ", "Disawer ", "Dhani ram ", "Mansarovar "];
    const cardBackgrounds = ["#FFDDC1", "#FFE5B4", "#FFDAB9", "#FFDEAD", "#FFDFD3", "#FFCBA4", "#FFD700", "#FFBF00"];
    const nameBackgrounds = ["#dc143c", "#AED581", "#81C784", "#4CAF50", "#8BC34A", "#7CB342", "#689F38", "#558B2F"];
    const { language } = useLanguage();

    const getArray = async () => {
        try {
            const response = await fetch('http://localhost:4000/arruser');
            const data = await response.json();
            setnumberResult(data.numberArr);
            setcolorResult(data.colorArr);
            localStorage.setItem('colorArr', JSON.stringify(data.colorArr));
            localStorage.setItem('numberArr', JSON.stringify(data.numberArr));
            setStart(data.numberArr.length - 17);
            setStartcolor(data.colorArr.length - 17);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getArray();
    }, []);
    const alphabetLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <><div>
            {/* <LanguageProvider> */}
            <Navbar />
          
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>

            <div class="text-container">
                
        <p class="blink-text">Sabse fast result <span style={{ color: 'yellow' }}>SattaLink</span> </p>
        <p class="blink-text">Sabse fast result <span style={{ color: 'yellow' }}>SattaLink</span> </p>
        <p class="blink-text">Sabse fast result <span style={{ color: 'yellow' }}>SattaLink</span> </p>
       
       
    </div>

                {/* Number Results Section */}
                <div className='number-results'>
                    <div className='makerow'>
                        <div>
                            <h4 style={{ textDecoration: 'underline' }}></h4>
                            <span style={{ color: 'white', fontWeight: 'bold' }}>
                                {/* You can play this game<br />  */}
                                {/* between 2am and 4pm everyday */}
                            </span>
                            <div className='makecol boxes2'>
                                {numberResult.slice(start, start + 16).map((ele, ind) => (
                                    ind > 7 ? null : (
                                        <div className='makecol card1 number-box'
                                            key={`number-box-${ind}`}
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '1rem',
                                                fontSize: '1.3rem',
                                                fontWeight: '600',
                                                backgroundColor: cardBackgrounds[ind]
                                            }}>
                                            <div className='makerow' style={{ justifyContent: 'center', marginRight: '0.5rem', fontSize: '1rem', backgroundColor: nameBackgrounds[ind], padding: '0.6rem', borderRadius: '5px', color: 'white', width: '100%' }}>
                                                <div>{numberNames[ind]} ({time[ind]})</div>
                                            </div>
                                            <div className='makerow'>
                                                <div style={{ marginRight: '0.5rem' }}>
                                                    {numberResult[start + ind]}
                                                    <div style={{ fontSize: '1rem', fontWeight: '600',color:'red' }}>
                                                        Yesterday
                                                    </div>
                                                </div>
                                                <div>
                                                    {numberResult[start + ind + 8]}
                                                    <div style={{ fontSize: '1rem', fontWeight: '600' ,color:'green'}}>
                                                        Today
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                    <Button variant="contained"
                        sx={{ mt: 0, mb: 0 }} onClick={() => { navigate('/number-chart'); } }>Past number chart
                    </Button>
                </div>
                <div className="marquee-container">
                    <div className="marquee " style={{ color: 'white' }}>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                        <p> {translations[language].welcome}</p>
                    </div>
                </div>



                {/* Color Results Section */}
                <div className='color-results'>
                    <div className='makerow'>
                        <div>
                            <h4 style={{ textDecoration: 'underline' }}>Color Results</h4>
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                You can play this game<br /> between 2am and 2pm everyday
                            </span>
                            <div className='makecol boxes2'>
                                {colorResult.slice(startcolor, startcolor + 8).map((ele, ind) => (
                                    ind > 3 ? null : (
                                        <div className='makecol card1 color-box'
                                            key={`color-box-${ind}`}
                                            style={{
                                                backgroundColor: 'white',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '1rem',
                                                fontSize: '1.3rem',
                                                fontWeight: '600'
                                            }}>
                                            <div className='makerow' style={{ justifyContent: 'center', marginRight: '0.5rem', fontSize: '1rem' }}>
                                                <div>Game {alphabetLabels[ind + 0]}: ({time2[ind]})</div>
                                            </div>
                                            <div className='makerow'>
                                                <div style={{ marginRight: '0.5rem' }}>
                                                    <Color colour={colorResult[startcolor + ind]} />
                                                    <div style={{ fontSize: '1rem', fontWeight: '600' ,color:'red' }}>
                                                        Yesterday
                                                    </div>
                                                </div>
                                                <div>
                                                    <Color colour={colorResult[startcolor + ind + 4]} />
                                                    <div style={{ fontSize: '1rem', fontWeight: '600', color:'green' }}>
                                                        Today
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ margin: '2rem', display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained"
                    sx={{ mt: 0, mb: 2 }} onClick={() => { navigate('/color-chart'); } }>Past color chart
                </Button>

            </div>
        {/* description */}

        <div className=" py-12 px-6 lg:px-8  mr-5 ml-5">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Our Services</h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto ">
                {translations[language].disclimer}
                </p>
            </div>
        </div>

        {/* </LanguageProvider> */}
        </div>
      
        <Footer/>
      </>
      
    );
};

export default LandingPage;
