import React from 'react'

// export default function Items() {
//     return (
//         <div>
//             <table>
//                 <tr>
//                     <th>Company</th>
//                     <th>Contact</th>
//                     <th>Country</th>
//                 </tr>
//                 <tr>
//                     <td>Alfreds Futterkiste</td>
//                     <td>Maria Anders</td>
//                     <td>Germany</td>
//                 </tr>
//                 <tr>
//                     <td>Centro comercial Moctezuma</td>
//                     <td>Francisco Chang</td>
//                     <td>Mexico</td>
//                 </tr>
//             </table>
//         </div>
//     )
// }

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20];

export default function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }
