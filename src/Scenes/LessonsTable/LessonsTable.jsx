import React, {useCallback, useEffect, useState} from "react";

const LessonsTable = ({columnsFromProps, tableDataFromProps, isPaginable}) => {
    const [tableData, setTableData] = useState(tableDataFromProps);

    const [filterString, setFilterString] = useState();
    const [filteredData, setFilteredData] = useState();

    const [page, setPage] = useState();

    const [sortBy, setSortBy] = useState();
    const [sortDirection, setSortDirection] = useState();


    const throttleFunction = (callBack, timeout) => {
        let timeoutID = null;

        return useCallback((...args) => {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }

            timeoutID = setTimeout(() => {
                callBack(...args);
                timeoutID = null;
            }, timeout);
        }, [])
    }

    const handleSortClick = (sortKey) => () => {
     if (sortKey === sortBy) {
         setSortDirection(-1 * sortDirection);
     } else {
         setSortBy(sortKey);
         setSortDirection(1);
     }
     setPage(0);
    }

    const filterTable= (data) => {
        return data;
    };

    const sortTable = (data) => {
        return data.sort((a, b) => {return a > b ? -1 * sortDirection : sortDirection});
    };

    const paginateTable = (data) => {
        return data;
    };

    useEffect(() => {
        setTableData(filterTable(paginateTable(sortTable(tableDataFromProps))))
    }, [sortBy, sortDirection, filteredData]);

    const getTableBody = () => {
        console.log("tableData", tableData, tableDataFromProps);
        if (tableDataFromProps) return  tableDataFromProps.map(entry => (
                <tr>
                    {columnsFromProps.map(column => {
                        return <td>
                            {entry[column.dataKey]}
                        </td>
                    })}
                </tr>
            )
        )

        return null
    }

    console.log("tableData", tableData);
    return (
        <React.Fragment>
            <input type={"text"} onChange={(e) => {setFilterString(e.target.value)}} value={filterString}/>
            <table>

                <th>
                    {columnsFromProps.map(column => {
                        return <td onClick={handleSortClick(column.key)}>
                            {column.name}

                        </td>
                    })}
                </th>
                <tbody>
                {getTableBody()}
                </tbody>
                {isPaginable &&
                    <tfoot>
                    <button type={"button"} onClick={() => {setPage(page+1)}}>add page</button>
                    </tfoot>
                }
            </table>
        </React.Fragment>
    )
}

export default LessonsTable