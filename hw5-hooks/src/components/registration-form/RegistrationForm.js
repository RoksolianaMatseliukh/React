import React, {useEffect, useState} from "react";

import hidePasswordImg from "../../images/hide_password.png";
import s from './RegistrationForm.module.css';
import showPasswordImg from "../../images/show_password.png";

function RegistrationForm() {

    const [isPasswordHidden, setIsPasswordHidden] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [loginMsg, setLoginMsg] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');

    const setFormData = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const setMsgForLogin = (login) => {
        if (!login) {
            setLoginMsg('enter login');
            return;
        }

        if (login.length > 8) {
            setLoginMsg('valid login');
            return;
        }

        setLoginMsg('invalid login');
    }

    const setMsgForPassword = (password) => {
        if (!password) {
            setPasswordMsg('enter password');
            return;
        }

        const regex = '^(?!.* )(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[@$!%*#?&]).{8,}$';
        const isPasswordValid = password.match(regex);

        if (isPasswordValid) {
            setPasswordMsg('valid password');
            return;
        }

        setPasswordMsg('invalid password');
    }

    useEffect(() => {
        setMsgForLogin(formValues.login);
        setMsgForPassword(formValues.password);
    }, [formValues]);

    return (
        <form onSubmit={(e) => e.preventDefault()}
              className={s.formView}>

            { (loginMsg.startsWith('enter') || passwordMsg.startsWith('enter')) &&
                <h4> fill both fields </h4> }

            <div>
                <input type="text"
                       name="login"
                       placeholder="enter login"
                       onChange={setFormData}/>
            </div>

            { loginMsg.startsWith('invalid') && <p> {loginMsg} </p> }

            <div className={s.inputPasswordView}>
                <input type={!isPasswordHidden ? 'text' : 'password'}
                       name="password"
                       placeholder="enter password"
                       onChange={setFormData}/>

                <img src={!isPasswordHidden ? hidePasswordImg : showPasswordImg}
                     onClick={() => setIsPasswordHidden(prevValue => !prevValue)}
                     alt="show_hide_password"/>
            </div>

            { passwordMsg.startsWith('invalid') && <p> {passwordMsg} </p> }

            <button type="submit"
                    className="btn btn-success btn-sm"
                    disabled={!loginMsg.startsWith('valid') || !passwordMsg.startsWith('valid')}>
                submit
            </button>

        </form>
    );
}

export default RegistrationForm;
