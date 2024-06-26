"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import Link from "next/link";

const  DetailsTable = () => {
  return (
    <>
    
    <Table aria-label="Example static collection table" className="md:w-full  px-4 ">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>TYPE</TableColumn>
        <TableColumn>COUNT</TableColumn>
        <TableColumn>PRICE</TableColumn>

      </TableHeader>
      <TableBody>
      <TableRow key="1">
          <TableCell>Three Bedrooms Duplex</TableCell>
          <TableCell>  Apartment</TableCell>
          <TableCell>197</TableCell>
          <TableCell>
          <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-2 rounded"
                    color="primary"
                  >
                    Request For Price
                  </Button>
                </Link>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Two Bedrooms Simplex</TableCell>
          <TableCell>Apartment</TableCell>
          <TableCell> 66 </TableCell>
          <TableCell>
          <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-2 rounded"
                    color="primary"
                  >
                    Request For Price
                  </Button>
                </Link>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell> Ground Retails Simplex</TableCell>
          <TableCell> Retails</TableCell>
          <TableCell>12 </TableCell>
          <TableCell>
          <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-2 rounded"
                    color="primary"
                  >
                    Request For Price
                  </Button>
                </Link>
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell> Four Bedrooms Duplex</TableCell>
          <TableCell>Penthouse</TableCell>
          <TableCell> 11 </TableCell>
          <TableCell>
          <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-2 rounded"
                    color="primary"
                  >
                    Request For Price
                  </Button>
                </Link>
          </TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Four Bedrooms Triplex</TableCell>
          <TableCell>Townhouse</TableCell>
          <TableCell>04 </TableCell>
          <TableCell>
          <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-2 rounded"
                    color="primary"
                  >
                    Request For Price
                  </Button>
                </Link>
          </TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell> Five Bedrooms Triplex</TableCell>
          <TableCell> Townhouse </TableCell>
          <TableCell> 02</TableCell>
          <TableCell>
          <Link href="/contact-us" className="">
                  <Button
                    className="bg-[#104e3e]  hover:bg-[#104e3e] text-white font-bold p-2 rounded"
                    color="primary"
                  >
                    Request For Price
                  </Button>
                </Link>
          </TableCell>
        </TableRow> 
      </TableBody>
    </Table>
    </>
  );
}
export default  DetailsTable;