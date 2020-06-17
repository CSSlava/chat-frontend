import React from 'react';
import PropTypes from 'prop-types';

// const IconReaded = ({isMe, isReaded}) => (
//     isMe &&
//     (isReaded ? (
//         <span className="message__icon-readed">++ </span>
//     ) : (
//         <span className="message__icon-readed">+</span>
//     ))
// );

const IconReaded = ({isMe, isReaded}) => (
    <>
        {
            isMe &&
            (isReaded ? (
                <span className="message__icon-readed">++ </span>
            ) : (
                <span className="message__icon-readed">+</span>
            ))
        }
    </>
);

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
}

export default IconReaded;