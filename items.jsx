import React from 'react'

const Items = ({ image, label, id, price, category }) => {
    return (
        <div>

            {/* items-cards srtarts here*/} 
            <a href={`/view/${id}`} className=''>
                <div className="card bg-white rounded px-3 py-2">
                    <div className="card-body px-3 mb-1">
                        <img src={`/images/${image}`}
                            alt=""
                            className="p"
                        />
                    </div>
                    <div className="card-footer">
                        <p className="truncate text-sm">{label}</p>
                        <p className='text-slate-500 text-xs'><span className='text-slate-800 font-semibold'>category:</span> {category}</p>
                        {/* price break */}
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-sm">₹ {price}</span>
                            <del className="text-slate-400 text-xs">₹<span> 5,099</span></del>
                            <span className="text-green-500 font-bold">81% off</span>
                        </div>
                    </div>
                </div>
            </a>
            {/* items-cards ends here */}

        </div>
    )
}

export default Items