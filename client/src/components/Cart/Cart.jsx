import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/11569311/pexels-photo-11569311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2: 'https://images.pexels.com/photos/8882143/pexels-photo-8882143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Long Sleeve Graphic t-shirt',
            isNew: true,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2: 'https://images.pexels.com/photos/8882143/pexels-photo-8882143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Coat',
            isNew: true,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            oldPrice: 25,
            newPrice: 15,
        },
    ];
  
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt='' />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>1 X ${item.newPrice}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))}
            <div className='total'>
                <span>Sub Total</span>
                <span>$123</span>
            </div>
            <button>Proceed to checkout</button>
            <span className='reset'>Reset Cart</span>            
        </div>
    )
}

export default Cart