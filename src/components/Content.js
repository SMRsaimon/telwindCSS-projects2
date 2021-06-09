import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';


const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Egg Muffins</h2>
          <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$16</span>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Order Now 
</button>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$18</span>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Order Now 
</button>
        </div>
      </div>
    </>
  );
};

export default Content;
