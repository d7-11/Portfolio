import React, { useState, useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

// Use the styled API to create the "toTop" button style
const ToTopButton = styled(IconButton)(({ theme }) => ({
    zIndex: 2,
    position: 'fixed',
    bottom: '9vh',
    backgroundColor: '#0050FF',
    color: '#E6DACE',
    "&:hover": {
        transform: 'scale(1.2)',
        color: '#E6DACE',
        backgroundColor: '#0050FF'
    },
    right: '15%',
}));

const Scroll = ({ showBelow }) => {
    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };

    useEffect(() => {
        if (showBelow) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [showBelow, show]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {show && (
                <ToTopButton onClick={handleClick}>
                    <ExpandLessIcon />
                </ToTopButton>
            )}
        </div>
    );
};

export default Scroll;
