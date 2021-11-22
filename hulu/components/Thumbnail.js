import React from 'react'
import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline'

function Thumbnail({result}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className="group cursor-pointer p-2 transition 
            duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50 
            ">
            <Image src={
                `${BASE_URL}${result.backdrop_path || result.posters_path}` ||
                `${BASE_URL}${result.posters_path}`
            } 
                layout='responsive'
                height={1080} width={1920}
            />
            <div className='p-4'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100 '>
                    {result.media_type && `${result.media_type} ·`}{" "}
                    {result.release_date || result.first_air_date} ·{" "}
                    <ThumbUpIcon className='h-5 mx-2'/>{result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
