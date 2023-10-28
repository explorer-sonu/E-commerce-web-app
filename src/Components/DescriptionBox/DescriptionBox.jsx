import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
          </div>
          <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, officiis cupiditate. Consequuntur 
               autem placeat mollitia fugit fuga totam amet ut nisi ipsam consequatur distinctio, odio nemo sequi 
               illo voluptas ullam magni dolorum adipisci odit a perspiciatis ipsa laborum blanditiis! Explicabo 
               officiis corrupt vitae culpa voluptas porro at nesciunt enim dolorem.</p>
               <p>
                E-commerce website typacelly display products or services and detailed description, image, prices, 
                and any avilable various (e.g., size, colors). Each product usally has its own dediacted with 
                relevant information.
               </p>
          </div>
    </div>
  )
}

export default DescriptionBox