'use client';
import Image from 'next/image';
import React from 'react';

const SquareCard = ({ cards }) => {

    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-10">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="w-full h-80 overflow-hidden flex flex-col items-center"
                >
                    <div className="w-full h-full relative overflow-hidden cursor-pointer">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-all hover:scale-125 duration-300"
                        />
                    </div>
                    <h3 className="text-center text-xl font-medium my-5">{card.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default SquareCard;
