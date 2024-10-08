"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const MySection: React.FC = () => {
  // Define the type for the offset state
  type Offset = {
    x: number;
    y: number;
  }

  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    // Get the mouse position relative to the window
    const { clientX, clientY } = event;

    // Calculate the percentage of the mouse position
    const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
    const y = (clientY / window.innerHeight) * 2 - 1; // Normalize to [-1, 1]

    // Set the offset with a slight easing effect
    setOffset({
      x: x * 20, // Change the multiplier for how far you want it to shift
      y: y * 20,
    });
  };

  useEffect(() => {
    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="grid grid-cols-[repeat(50,_1fr)] grid-rows-[repeat(50,_1fr)] w-full h-screen">
      <div
        className="col-start-[10] col-span-9 row-start-12 row-span-12 bg-buttonBlack transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
       <Image
       src={"/imgs/2024_OC.png"}
       alt='something'
       width={1290}
       height={830}
       className='h-full object-cover'
        />


      </div>
    </section>
  );
};

export default MySection;
