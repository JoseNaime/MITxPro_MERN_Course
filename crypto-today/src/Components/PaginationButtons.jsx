import React from 'react';

function PaginationButtons({dataLength, pageSize, pageOffset, currentPage, handlePageChange}) {
    const pageButtons = Array(Math.floor(dataLength / pageSize)).fill(0)
        .map((pageNo, i) => {
            pageNo = i + pageOffset
            return (
                <button
                    className={"pagination-button " + (currentPage === i && "active")}
                    onClick={(e) => handlePageChange(e, i)}>{pageNo}
                </button>
            )
        })

    return (
        <section className="pagination-button-container">
            <div className="left">
                {(currentPage !== 0) && <button onClick={(e) => handlePageChange(e, currentPage - 1)}>{'<'}</button>}
            </div>
            <div className="center">
                <ul>
                    {pageButtons}
                </ul>
            </div>
            <div className="right">
                {(currentPage < (dataLength / pageSize) - 1) &&
                <button onClick={(e) => handlePageChange(e, currentPage + 1)}>{'>'}</button>}
            </div>
        </section>
    );
}

export default PaginationButtons;