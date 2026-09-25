import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// import styled from 'styled-components';
//
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: none;
//   background-color: #492365;
//   color: #ffffff;
//   cursor: pointer;
//
//   & :hover,
//   & active {
//     background-color: #36194b;
//   }
// `;


export default Button;
