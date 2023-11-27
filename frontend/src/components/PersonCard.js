import { Container, Row , Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const PersonCard = ({name, imgPath}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Add your logic here for mouse enter
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
        // Add your logic here for mouse leave
      };

    return (
        <div         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", backgroundColor: isHovered ? '#969696' : '#FAFAFA', borderRadius: "60px", border: "8px solid #4E9DE0", borderColor: "4E9DE0", height: "15rem", width: "15rem"}}>
            <img src={imgPath} style={{borderRadius: "100px", width: "50%"}}></img>
            <p style={{fontWeight: "bold", color: "black"}}>{name}</p>
        </div>
    )
}