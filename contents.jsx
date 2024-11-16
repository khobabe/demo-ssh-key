import React from 'react'
import SideBar from './side-bar'
import Items from './items'
import Product from '@/app/models/Product'
import DbConnect from '@/utils/dbConnection'

const Contents = async () => {
    DbConnect();
    const callingItems = await Product.find({}).populate('category_id');
    return (
        <div className="flex flex-1 px-10 py-5 gap-5">
            <div className="w-3/12 bg-slate-300 rounded">
                <SideBar />
            </div>
            <div className="w-9/12 bg-green-400 rounded">
                <div className="grid grid-cols-4 gap-2 px-3 py-2">
                    {callingItems.map((item, i) => <Items
                        key={i}
                        id={item._id}
                        label={item.product_title}
                        price={item.product_price}
                        category={item.category_id.category_title}
                        image={item.product_image} />)}
                </div>
            </div>
        </div>
    )
}

export default Contents