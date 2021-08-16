import React from 'react'
import { CoinRow } from './CoinRow';

export const TableCoins = ({ coins, search }) => {

    const titles = ['#', 'Name', 'Price', 'Price Change', '14h Volume'];

    const filteredCoins = coins.filter((coin) => (
        coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
    ))

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    filteredCoins.map((coin, index) => (
                        <CoinRow coin={coin} index={index} key={index} />
                    ))
                }
            </tbody>
        </table>
    )
}
