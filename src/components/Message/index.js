import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';

import './Message.scss';

const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => {
    return (
        <div className={classNames("message", {'message--isme': isMe})}>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__content">
                <div>
                    <div className="message__background">
                        <p className="message__text">{text}</p>
                    </div>
                    <div className="message__attachments">
                        {attachments &&
                        attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename}/>
                            </div>
                        ))}
                    </div>
                    <div className="message__info">
                        {isMe && (isReaded ? <span className="message__icon-readed">++ </span> :
                            <span className="message__icon-readed">+</span>)}
                        <span className="message__date">{formatDistanceToNowStrict(date, {locale: ruLocale})}</span>
                    </div>
                </div>

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
    attachments: PropTypes.array,
};

export default Message;