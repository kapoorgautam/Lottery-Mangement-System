// import React from 'react'
// import Color from './Color'

// const NumberChart = () => {
//     const numberArr = JSON.parse(localStorage.getItem('numberArr')) || []
//     const time2 = ["2AM", "6AM", "10AM", "2PM"].reverse()
//     const time = [" 2AM", "4AM", "Faridabad 6AM", "8AM", "10AM", "12PM", "2PM", "4PM"].reverse()

//     const prettifyDate = (i, parts) => {
//         const time = new Date().getTime() - (i + 1) * 3600 * 24 * 1000;
//         const date = new Date(time)
//         const options = { month: 'short', day: 'numeric' }
//         return date.toLocaleString('en-US', options)
//     }
//     return (
//         <div>
//             <h1>Past Number chart</h1>
//             <div style={{ maxHeight: '100vh', overflowY: 'auto', textAlign: 'center' }}>

//                 <table className="table table-hover table-striped" >
//                     <thead className='table-dark'>
//                         <tr>
//                             <th scope="col">Date</th>
//                             {time.map((ele, i) => (
//                                 <th scope="col" key={i}>{ele}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.from({ length: Math.floor((numberArr?.length - 9) / 8) }).map((_, i) => (
//                             <tr>
//                                 <td>{prettifyDate(i, 8)}</td>
//                                 {Array.from({ length: 8 }).map((_, ind) => {
//                                     return (<td><strong>{numberArr?.slice(0, (numberArr?.length - 9)).reverse()[i * 8 + ind]}</strong></td>)
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default NumberChart


import React from 'react';

const NumberChart = () => {
    const numberArr = JSON.parse(localStorage.getItem('numberArr')) || [];
    const time = ["2AM", "4AM", "6AM", "8AM", "10AM", "12PM", "2PM", "4PM"]

    const startDate = new Date('2024-08-01'); // Adjust to the desired start date

    const prettifyDate = (i) => {
        const date = new Date(startDate.getTime() + i * 3600 * 24 * 1000);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleString('en-US', options);
    };
    const reversedNumberArr = [...numberArr]

    return (
        <div>
            <h1>Past Number Chart</h1>
            <div style={{  overflowY: 'auto', textAlign: 'center', color: 'white' }}>
                <table className="table table-hover table-striped">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Date</th>
                            {time.map((ele, i) => (
                                <th scope="col" key={i}>{ele}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: Math.ceil(reversedNumberArr.length- 9 / 8) }).map((_, i) => (
                            <tr key={i}>
                                <td>{prettifyDate(i,8)}</td>
                                {Array.from({ length: 8 }).map((_, ind) => {
                                    const index = i * 8 + ind;
                                    return (
                                        <td key={ind}>
                                            <strong>{reversedNumberArr[index]}</strong>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NumberChart;
