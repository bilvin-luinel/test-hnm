import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ item }) => {

    const navigate = useNavigate();
    const showDetail = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div>
            <img className="card-img" src={item?.img} onClick={() => showDetail(item.id)} />
            <div>{item?.choice == true ? "HOT" : ""}</div>
            <div>{item?.title}</div>
            <div>\{item?.price}</div>
            <div>{item?.new == true ? "NEW" : ""}</div>
        </div>
    )
}

export default Card;