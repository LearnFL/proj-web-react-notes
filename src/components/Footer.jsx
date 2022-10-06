import React from 'react';
export default function Footer(){
    let year = new Date().getFullYear();
    return(
        <footer>
            <p>
                &copy; Copyright Dennis Rotnov {year}.
            </p>
        </footer>        
    );
}