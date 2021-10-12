import React from 'react'
import men from "./../../assets/men.jpg"
import woman from "./../../assets/woman.jpg"
import "./styles.scss"


function Directory() {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                className="item"
                style={{
                    backgroundImage:`url(${woman})`
                }}
                >
                    <a href="/">
                        Shop Women
                    </a>
                </div>
                <div
                className="item"
                style={{
                    backgroundImage:`url(${men})`
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
