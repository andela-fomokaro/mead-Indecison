// Stateless Component
const Action = (props) => (
  <div>
    <button 
      disabled={!props.hasOptions}
      onClick={props.handlePick}> What should I do? </button>
  </div>
);

export default Action;