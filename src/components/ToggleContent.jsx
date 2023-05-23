"use client"
import { useState } from "react";
import React from 'react'

export default function ToggleContent({children, textButton}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button className="w-full text-left text-sm" onClick={toggleContent}>{textButton}</button>
        {isOpen && <div>{children}</div>}
      </div>
    );
}
