import React from 'react'

export default function Table({data, delimitter=",", rows=2}) {
    return (
        rows && <table>
            <tbody>
                {
                 data.slice(0,rows).map( (item, index) => {
                        return (
                            <tr key={index}>
                                {
                                    item.split(`${delimitter}`).map( (rowItem, rowIndex) => {
                                        return(<td key={`${rowItem}-${rowIndex}`}>
                                           {rowItem} 
                                        </td>)
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
