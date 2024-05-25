"use client"

import Image from "next/image"
import { useState } from "react";

    // const images = [
    //             {
    //                 id: 1,
    //                 url: "/photo4.jpg",
    //             },
    //             {
    //                 id: 2,
    //                 url: "/photo5.jpg",
    //             },
    //             {
    //                 id: 3,
    //                 url: "/photo6.jpg",
    //             },
    //             {
    //                 id: 4,
    //                 url: "/photo7.jpg",
    //             },
    //             ];

const ProductImages = ({ items }: {items: any}) => {
    const [index, setIndex] = useState(0)

  return (
    <div>
        <div className="h-[500px] relative">
            <Image 
                src={items[index].image?.url} 
                alt=""
                fill
                sizes="50vw"
                className="object-cover rounded-md"
             />
        </div>
        <div className="flex justify-between gap-4 mt-8 cursor-pointer">
                {items.map((item:any, i:number) => (
                     <div className=" w-1/4 h-32 relative gap-4 mt-8" 
                        key={item._id}
                        onClick={() => setIndex(i)}
                        >
                       <Image 
                       src={item.image?.url} 
                       alt=""  
                       fill 
                       className="object-cover rounded-md"
                       sizes="30vw" 
                        />
                    </div>
                ))}
             
        </div>
    </div>
  )
}

export default ProductImages