import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/11569311/pexels-photo-11569311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2: 'https://images.pexels.com/photos/8882143/pexels-photo-8882143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Long Sleeve Graphic t-shirt',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2: 'https://images.pexels.com/photos/8882143/pexels-photo-8882143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Coat',
            isNew: true,
            oldPrice: 25,
            newPrice: 15,
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Skirt',
            isNew: false,
            oldPrice: 12,
            newPrice: 8,
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Hat',
            isNew: false,
            oldPrice: 19,
            newPrice: 15,
        },

]
  return (
    <div className='featuredproducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <div className='bottom'>
            {data.map((item) =>
                <Card key={item.id} item={item} />
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts