import React, { Component } from 'react';
import HomeIcon from './Menu-Bar/home-icon';
import Courses from './Menu-Bar/courses';
import Categories from './Menu-Bar/categories';
import SearchBar from './Menu-Bar/search-bar';


class MenuBar extends Component {
    render(){
        return(
            <div>
                <HomeIcon />
                <SearchBar />
                <Courses />
                <Categories />
            </div> 
  );
 }
}



export default MenuBar;