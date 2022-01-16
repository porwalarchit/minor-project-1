import React from 'react'
import { useLocation} from 'react-router-dom'
import { useEffect } from 'react'

function ProductPage(props) {
    const Fun = ()=>{
        const location = useLocation()
        const {data} = location.state;
        console.log(data.productPrice);
    }
    return (
        <div>
            Product 
            {()=>{Fun();}}
        </div>
    )
}

export default ProductPage
