import React from 'react'; 
import { Link } from 'react-router-dom'; 

function Header() { 
    return ( 
        <header style={headerStyle}> 
            <h1>My Task List</h1>
        </header>
    )
}

const headerStyle = { 
    background: '#CFFFE5', 
    color: '#429E9D',
    textAlign: 'center',  
    margin: '20px 2px' 
}

const linkStyle = { 
    color: '#fff', 
    textDecoration: 'none'
}

export default Header; 