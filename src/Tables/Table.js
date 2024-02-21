import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";
const data = [
  {
    cin:12,
    name: "Hamza",
    adress:"hello@gmail.com",
    age: 22
  },
  {
    cin:12,
    name: "Hamid",
    adress:"hakim@gmail.com",
    age: 21
  },{
    cin:12,
    name: "Hafsa",
    adress:"hello@gmail.com",
    age: 13
  },{
    cin:12,
    name: "karinm",
    adress:"karimo@gmail.com",
    age: 30
  }
];

function Table() {

  const columns = useMemo(
    () => [
      {
        accessorKey: "cin", //simple recommended way to define a column
        header: "Cin",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "age", //simple recommended way to define a column
        header: "Age",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "adress", //simple recommended way to define a column
        header: "Adress",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns
  });

  return (
    // <div className="">
    //     <div className="m-2 w-50 h-30">
    //         
    //     </div>
    //     <div className="m-2 w-50 h-30">
    //         <MaterialReactTable table={table} />
    //     </div>
   
    // </div>
<div className="container-fluid m-0 ">
    <div className="row justify-content-start">
        <div className="col-6">
            <MaterialReactTable table={table} />
        </div>
        <div className="col-6">
            <MaterialReactTable table={table} />
        </div>
    </div>
</div>

  )
}


export default Table;


