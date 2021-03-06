import React, {useState} from 'react'; 
import { Link } from 'react-router-dom'; 

function Header(props) { 
    return ( 
        <header style={headerStyle}> 
            <h1>{props.title}</h1>
        </header>
    )
}

const headerStyle = { 
    background: 'grey', 
    color: 'pink',
    textAlign: 'center',  
    margin: '20px 2px' 
}

const linkStyle = { 
    color: '#fff', 
    textDecoration: 'none'
}

export default Header; 