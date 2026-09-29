const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onConfirm}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorModal;
