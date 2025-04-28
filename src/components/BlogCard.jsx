import React from 'react'
import { FiArrowRight } from 'react-icons/fi'; import { FaRegClock } from "react-icons/fa";
export default function BlogCard({ blog }) {
    console.log("blog", blog)
    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    };
    return (
        <div className="relative group w-full h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
            ></div>

            {/* Overlay Blur & Arrow on Hover */}
            <div className="absolute  top-0 right-0 left-0 bottom-[30%] flex items-center justify-center z-20 ">
                <div className='bg-white bg-opacity-70 backdrop-blur-sm w-[70px] h-[70px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center'>
                    <FiArrowRight className="text-blue-700 lg:text-[10rem] text-[3rem] -rotate-45 " /></div>

            </div>

            {/* Read Time */}
            <p className="absolute top-0 -right-3 bg-white text-blue-900 font-semibold text-sm px-3 py-2 pr-10 rounded-b-xl shadow flex items-center justify-between gap-2">
                <span><FaRegClock className='text-blue-900 ' /></span> {blog.read_time_minute} min read
            </p>

            {/* Bottom Info */}
            <div className="absolute bottom-0 group-hover:bottom-0 h-[8rem] group-hover:h-[10rem] transition-all duration-300 ease-in-out w-full bg-white p-4">
                <div className="flex items-center gap-4 mb-2">
                    <img className="w-10 h-10 rounded-full object-cover" src={blog.author.image} alt={blog.author.full_name} />
                    <div>
                        <p className="text-sm font-medium text-gray-900">{blog?.author?.full_name}</p>
                        <p className="text-xs text-gray-500">{formatDate(new Date(blog.created_at))}</p>
                    </div>
                </div>
                <p className="lg:text-md text-sm font-semibold text-gray-800">{blog.title}</p>
                <p className='pb-5'>{blog.description}</p>
            </div>
        </div>
    )
}
