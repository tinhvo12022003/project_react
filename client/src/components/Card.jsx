import React from "react";

export default function Card(props) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img 
                src={props.img_path} 
                alt={props.name} 
                className="w-full h-48 object-cover" 
            /> {/* Image */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{props.name}</h3> {/* Product name */}
                <p className="text-gray-600 mt-2">${props.price}</p> {/* Price */}
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Add to Cart
                </button> {/* Add to Cart button */}
            </div>
        </div>
    );
}