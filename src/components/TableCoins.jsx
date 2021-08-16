import React from 'react'

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
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <img src={coin.image} alt={coin.name} style={{width:'5%'}} className='img-fluid me-4'/>
                                <span>{coin.name}</span>
                                <span className='text-muted ms-3 text-uppercase'>{coin.symbol}</span>
                            </td>
                            <td>{coin.current_price}</td>
                            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                                {coin.price_change_percentage_24h}
                            </td>
                            <td>{coin.total_volume}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
