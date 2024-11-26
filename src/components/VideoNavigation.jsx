import React, { useState } from 'react';
import styles from './VideoNavigation.css';

function VideoNavigation({ nextVideo, prevVideo }) {
  let startY = 0;
  const [isDragging, setIsDragging] = useState(false); 


  const handleMouseDown = (e) => {
    startY = e.clientY; 
    setIsDragging(true); 
    e.preventDefault(); 
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return; 

    const endY = e.clientY; 
    const deltaY = endY - startY; 

    
    if (deltaY < -50) {
      nextVideo();
      setIsDragging(false); 
    } else if (deltaY > 50) {
      prevVideo();
      setIsDragging(false); 
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); 
  };

  const handleMouseLeave = () => {
    setIsDragging(false); 
  };

  return (
    <div
      className={styles.videoContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove} // Thêm sự kiện di chuyển chuột
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave} // Kiểm tra khi chuột rời khỏi vùng
    >
      {/* Video hiện tại */}
      <video controls>
        <source src="your-video-source.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoNavigation;
