"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const  DetailsTable = () => {
  return (
    <>
    <p className="py-2 text-3xl font-bold">Total Units 292</p>
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>TYPE</TableColumn>
        <TableColumn>COUNT</TableColumn>
      </TableHeader>
      <TableBody>
      <TableRow key="1">
          <TableCell>Three Bedrooms Duplex</TableCell>
          <TableCell>  Apartment</TableCell>
          <TableCell>197</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Two Bedrooms Simplex</TableCell>
          <TableCell>Apartment</TableCell>
          <TableCell> 66 </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell> Ground Retails Simplex</TableCell>
          <TableCell> Retails</TableCell>
          <TableCell>12 </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell> Four Bedrooms Duplex</TableCell>
          <TableCell>Penthouse</TableCell>
          <TableCell> 11 </TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Four Bedrooms Triplex</TableCell>
          <TableCell>Townhouse</TableCell>
          <TableCell>04 </TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell> Five Bedrooms Triplex</TableCell>
          <TableCell> Townhouse </TableCell>
          <TableCell> 02</TableCell>
        </TableRow> 
      </TableBody>
    </Table>
    </>
  );
}
export default  DetailsTable;