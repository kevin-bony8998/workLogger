import React, { useContext } from "react";
import DataTable, { TableColumn } from 'react-data-table-component';
import { Styled } from "./index.styles";
import { ThemeContext } from "../../../../App";

const TaskLister= () => {
    // let data = [
    //     {
    //         task: "Task1",
    //         points: "20",
    //         finished: false
    //     },
    //     {
    //         task: "Task2",
    //         points: "10",
    //         finished: Complete
    //     }
    // ];
    interface rowType{
        task: string,
        points: string,
        finished: string
    }
    const contextValues = useContext(ThemeContext);
    const isDarkMode = contextValues[0];
    interface DataRow {
        task: string;
        points: string;
        finished: string;
    }    
    const data = React.useMemo(
        () => [
            {
                task: "Be awesome!",
                points: "100",
                finished: "Incomplete"
            },
            {
                task: "Task1",
                points: "20",
                finished: "Incomplete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
            {
                task: "Task2",
                points: "10",
                finished: "Complete"
            },
        ],
        []
    );
    const columns:TableColumn<DataRow>[] = [
        {
            name: 'Task',
            selector: row => row.task,
            sortable: true,
        },
        {
            name: 'Points',
            selector: row => row.points,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.finished,
            sortable: true,
        },
    ];
    const customStyles = {
        rows: {
            style: {
                alignItems: 'center', // override the row height
                justifyContent: 'center',
            },
        },
        cells: {
            style: {
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        headCells: {
            style: {
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid black',
            },
        },
    };
    const conditionalRowStyles = [
        {
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            when: (row: rowType) => row.finished == "Incomplete",
            style: {
                backgroundColor: '#F70000',
                color: 'white',
            },
        },
        {
            when: (row: rowType) => row.finished == "Complete",
            style: {
                backgroundColor: '#03AC13',
                color: 'white',
                filter: 'contrast(0.3)'
            },
        },
    ];
    const itemsPerPage = 5;
    const paginationArray = [itemsPerPage];
    return(
        <>
            <Styled>
                <div className={`task-display ${isDarkMode? "dark-mode":"light-mode"}`}>
                    <h3 className="component-header">
                        Your Tasks:
                    </h3>
                    <DataTable 
                        columns={columns} 
                        data={data}
                        customStyles={customStyles} 
                        conditionalRowStyles={conditionalRowStyles}
                        pagination
                        paginationRowsPerPageOptions={paginationArray}
                        paginationPerPage={itemsPerPage}/>
                </div>
            </Styled>
        </>
    )
}

export default TaskLister;