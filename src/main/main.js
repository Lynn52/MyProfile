import React from 'react';
import './main.css'
import SideHeader from './module/sideHeader';
import Content from './module/content';

function Main() {
    return(
        <div className="mainBody">
            <div className="page">
                <div className="page_content">
                <SideHeader></SideHeader>
                <Content></Content>
                </div>
            </div>
        </div>
    )
}

export default Main;