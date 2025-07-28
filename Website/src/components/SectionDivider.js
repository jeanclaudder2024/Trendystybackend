import React from 'react';
import '../style/SectionDivider.css'; // Adjust the path as necessary
import StarIcon from '@mui/icons-material/Star';

const SectionDivider = () => {
    return ( <
        div className = "section-divider" >
        <
        div >
        <
        StarIcon className = "star-icon"
        size = { 24 }
        sx = {
            { color: " #141C40" } }
        /> <
        StarIcon className = "star-icon"
        size = { 24 }
        sx = {
            { color: " #141C40" } }
        /> <
        StarIcon className = "star-icon"
        size = { 24 }
        sx = {
            { color: " #141C40" } }
        /> <
        /div> <
        /div>
    );
};

export default SectionDivider;