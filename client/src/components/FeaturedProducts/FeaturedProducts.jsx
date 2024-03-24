import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: 'https://www.pexels.com/photo/redhead-woman-posing-in-building-entrance-11569311/',
            img2: 'https://www.pexels.com/photo/a-woman-in-white-sleeveless-shirt-sitting-on-a-chair-8882143/',
            title: 'Long Sleeve Graphic t-shirt',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: 'https://www.pexels.com/photo/man-wearing-brown-coat-840916/',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 3,
            img: 'https://www.pexels.com/photo/woman-wearing-skirt-holding-her-shoes-601316/',
            title: 'Skirt',
            isNew: false,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 4,
            img: 'https://www.pexels.com/photo/beige-and-black-hat-near-swimming-pool-984619/',
            title: 'Hat',
            isNew: false,
            oldPrice: 19,
            newPrice: 12,
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