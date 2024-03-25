import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src='https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className='row'>
                <img src='https://images.pexels.com/photos/1861907/pexels-photo-1861907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <button>
                    <Link className='link' to='/products/2'>Women</Link>
                </button>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
                <img src='https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                <button>
                    <Link className='link' to='/products/3'>New Season</Link>
                </button>
            </div>
        </div>
        <div className='col col-l'>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                    <img src='https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <button>
                        <Link className='link' to='/products/4'>Men</Link>
                    </button>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                    <img src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <button>
                        <Link className='link' to='/products/5'>Accessories</Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className='row'>
            <img src='https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <button>
                        <Link className='link' to='/products/6'>Shoes</Link>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Categories