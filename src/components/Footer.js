import React from 'react';
import { FaHeart } from "react-icons/fa";

export default function Footer() {

    const defaultYear = () => {
        const today = new Date();
        return today.getFullYear()
    }

    return (
        <div>
            <div className="line"></div>
            <div className="footer">
                © {defaultYear()} Built with <FaHeart style={{color:"red"}}/> by Sukhman 
        </div>
        </div>
    )
}
