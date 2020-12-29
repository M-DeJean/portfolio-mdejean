import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component{
    render(){
        return(
            //FOOTER
            <div className='footer'>
                {/* Will add logo and other useful links in the future */}
                <div className="inner-footer">
                        <h3>&copy; Malik DeJean 2020</h3>
                </div>
            </div>
        )
    }
}