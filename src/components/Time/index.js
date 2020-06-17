import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import ruLocale from 'date-fns/locale/ru';

const Time = ({date}) => (
    <>
        {formatDistanceToNowStrict(date, {addSuffix: true, locale: ruLocale})}
    </>
);

Time.propTypes = {
    date: PropTypes.string,
};

export default Time;