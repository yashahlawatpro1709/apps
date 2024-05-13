import React from 'react';

interface Props {
    image: string;
    heading: string;
    dataset: string;
    Largeimg: string;
}

export default function Data({ image, heading, dataset, Largeimg }: Props) {
    const datasetLines = dataset.split('\n');
    return (
        <>
            <div className='flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 justify-center py-10 space-x-10'>
                <div className='Datas-left '>
                    <img src={image} alt="Image1" className='py-10' />
                    <h1 className='text-3xl py-3'>{heading}</h1>
                    <ul className='text-xl space-y-2 py-3'>
                        {datasetLines.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className='Datas-right'>
                    <img src={Largeimg} alt="Image2" className="w-full h-auto xl:max-w-[688px]" />
                </div>
            </div>
        </>
    );
}
