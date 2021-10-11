import React from 'react'
import mens from "./../../assets/mens.jpg"
import ladies from "./../../assets/ladies.jpg"
import "./styles.scss"


function Directory() {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                className="item"
                style={{
                    backgroundImage:`url(${ladies})`
                }}
                >
                    <a href="/">
                        Shop Women
                    </a>
                </div>
                <div
                className="item"
                style={{
                    backgroundImage:`url(${mens})`
                }}
                >
                    <a href="/">
                        Shop Mens
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Directory
