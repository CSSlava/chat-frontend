import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';

const Message = ({ avatar, user, text, date }) => {
    return (
        <div className="message">
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>
            <div className="message__content">
                <div className="message__background">
                    <p className="message__text">{text}</p>
                </div>
                <span className="message__date">{(new Date()).toDateString()}</span>
            </div>
        </div>
    )
};

Message.defaultProps = {
  user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.object,
    text: PropTypes.string,
    date: PropTypes.string,
};

export default Message;