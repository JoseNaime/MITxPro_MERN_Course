import React, {useState} from 'react';
import PaginationButtons from "./PaginationButtons";

function Pagination({data, updateDate, pageSize, pageOffset}) {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (e, val) => {
        setCurrentPage(val);
    }

    const updateDateFormatted = new Date(updateDate).toLocaleString()
    const dataElements = data.map(_data => {
        const dollarUSLocale = Intl.NumberFormat('en-US');
        const auxMarketCapUsd = dollarUSLocale.format(parseFloat(_data.priceUsd).toFixed(2));

        const auxChangePercent24Hr = parseFloat(_data.changePercent24Hr).toFixed(4)

        return (
            <li id={_data.id} className="crypto-list-item">
                <div className="crypto-list-item__info">
                    <h3 className="rank">{_data.rank}</h3>
                    <p className="symbol"><b>{_data.symbol}</b></p>
                    <small className="name">{_data.name}</small>
                    <p className="market-cap">USD ${auxMarketCapUsd}</p>
                </div>
                <div>

                    <p className={"crypto-list-item__change " + (auxChangePercent24Hr < 0 && "fall")}>{auxChangePercent24Hr}%</p>
                </div>
            </li>
        )
    })

    return (
        <div id="pagination">
            <ul id="crypto-list-container">
                <small className="update-date">{updateDateFormatted}</small>
                {dataElements.slice(currentPage * pageSize, currentPage * pageSize + pageSize)}
            </ul>
            <PaginationButtons dataLength={data.length}
                               pageSize={pageSize}
                               pageOffset={pageOffset}
                               currentPage={currentPage}
                               handlePageChange={handlePageChange} />
        </div>
    );
}

export default Pagination;