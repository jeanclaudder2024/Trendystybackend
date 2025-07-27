
import React from 'react';
import '../style/SectionDivider.css'; // Adjust the path as necessary
import { Star } from "lucide-react"; // Adjust the import based on your icon library
import StarIcon from '@mui/icons-material/Star';
import { red } from '@mui/material/colors';

const SectionDivider = () => {
  return (
    <div className="section-divider">
      <div>
       <StarIcon className="star-icon" size={24}sx={{ color:" #141C40" }}  />
       <StarIcon className="star-icon" size={24} sx={{ color:" #141C40" }}/>
       <StarIcon className="star-icon" size={24}sx={{ color:" #141C40" }} />
      </div>
    </div>
  );
};

export default SectionDivider;
