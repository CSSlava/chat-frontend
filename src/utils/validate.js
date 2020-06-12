const validate = ({isAuth, values, errors}) => {

    const rules = {
        email: ( value) => {
            if (!value) {
                errors.email = 'Обязательное поле'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Неверный формат почты'
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = 'Введите пароль'
            } else if (!/(?=.*[a-zA-Z0-9])/i.test(value)) {
                errors.password = isAuth ? 'Неверный пароль' : 'Неверный формат пароля';
            }
        }
    };

    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );

};

export default validate;