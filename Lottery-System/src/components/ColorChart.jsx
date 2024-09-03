// import React from 'react'
// import Color from './Color'

// const ColorChart = () => {
//     const colorArr = JSON.parse(localStorage.getItem('colorArr')) || []
//     const time2 = ["2AM", "6AM", "10AM", "2PM"].reverse()
//     const prettifyDate = (i) => {
//         const time = new Date().getTime() - (i + 1) * 3600 * 24 * 1000;
//         const date = new Date(time)
//         const options = { month: 'short', day: 'numeric' }
//         return date.toLocaleString('en-US', options)
//     }
//     return (
//         <div>
//             <h1>Past color chart</h1>
//             <div style={{ maxHeight: '100vh', overflowY: 'auto', textAlign: 'center' }}>

//                 <table className="table table-hover table-striped" >
//                     <thead className='table-dark'>
//                         <tr>
//                             <th scope="col">Date</th>
//                             {time2.map((ele, i) => (
//                                 <th scope="col" key={i}>{ele}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.from({ length: Math.floor((colorArr?.length - 9 - 4) / 4) }).map((_, i) => (
//                             <tr>
//                                 <td>{prettifyDate(i, 4)}</td>
//                                 {Array.from({ length: 4 }).map((_, ind) => {
//                                     return (<td><Color colour={colorArr?.slice(0, (colorArr?.length - 9 - 4)).reverse()[i * 4 + ind]} /></td>)
//                                 })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default ColorChart


import React from 'react';
import Color from './Color';

const ColorChart = () => {
    const colorArr = JSON.parse(localStorage.getItem('colorArr')) || [];
    const time2 = ["2AM", "6AM", "10AM", "2PM"].reverse();

    // Start date set to August 1, 2024
    const startDate = new Date('2024-08-01');

    const prettifyDate = (i) => {
        const date = new Date(startDate.getTime() + i * 3600 * 24 * 1000);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleString('en-US', options);
    };

    // Reverse the colorArr array to ensure the latest dates appear at the bottom
    const reversedColorArr = [...colorArr].reverse();

    return (
        <div>
            <h1>Past Color Chart</h1>
            <div style={{ maxHeight: '100vh', overflowY: 'auto', textAlign: 'center' , color: 'white'}}>
                <table className="table table-hover table-striped">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Date</th>
                            {time2.map((ele, i) => (
                                <th scope="col" key={i}>{ele}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: Math.ceil(reversedColorArr.length / 4) }).map((_, i) => (
                            <tr key={i}>
                                <td>{prettifyDate(i)}</td>
                                {Array.from({ length: 4 }).map((_, ind) => {
                                    const index = i * 4 + ind;
                                    return (
                                        <td key={ind}>
                                            <Color colour={reversedColorArr[index]} />
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

export default ColorChart;
