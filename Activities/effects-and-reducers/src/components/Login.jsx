import { useState, useReducer, useEffect } from "react";
import classes from "./Login.module.css";

// const[state, dispatch] = userReducer(reducer, initialArg);
//

const emailReducer = (state, action) => {

  if (action.type === 'USER_INPUT') {
    return{
      value: action.val,
      isValid: action.val.includes('@')
    }
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    }
  }

  return{
    value: '',
    isValid: false
  }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  }

  if (action.type === 'INPUT_BLUR'){
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }

  return {
    value: '',
    isValid: false
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer (emailReducer, {
    value: '',
    isValid: null
  })
  const { isValid: emailIsValid } = emailState;


  const [passwordState, dispatchPassword] = useReducer (passwordReducer, {
    value: '',
    isValid: null
  })
  const { isValid: passwordIsValid } = passwordState;


  useEffect(() => {
    console.log(emailState);
    console.log(passwordState);
    const timerId = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timerId)
    }
  }, [emailIsValid, passwordIsValid])

 // useEffect(() => {
  //   console.log('effect fired')
  // }, [enteredEmail]);
  //
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     console.log(enteredEmail);
  //     setFormIsValid(
  //       enteredPassword.length > 6 && enteredEmail.includes("@")
  //     );
  //   }, 500);
  //
  //   return () => {
  //     console.log('cleaning up');
  //     clearTimeout(timerId)
  //   };
  // }, [enteredPassword, enteredEmail]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    });

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };


  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_INPUT',
      val: event.target.value
    });

    setFormIsValid(
      passwordState.isValid && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <div className={classes.card}>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button 
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
