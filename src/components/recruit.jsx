"use client"

import Image from "next/image";
import Link from "next/link"
import AccordionSalse from "./accordionSales";
import AccordionGeneralAffairs from "./accordionGeneralAffairs";

const Recruit = () => {

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <AccordionSalse />
      <AccordionGeneralAffairs />
      <AccordionGeneralAffairs />
    </div>
  );
};

export default Recruit;