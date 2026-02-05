import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Discover delicious meals from your favorite restaurants, all in one place. Browse menus, customize your order, and get fresh food delivered straight to your doorstep — fast, easy, and reliable.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} className="explore-menu-list-item" key={index}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="MenuImage" />
                        <p>{item.menu_name}</p>
                    </div> 
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu;