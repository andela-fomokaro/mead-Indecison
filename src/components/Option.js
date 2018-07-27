// Stateless Components
const Option = (props) => (
  <div>
   {props.optionText}
   <button
    onClick={ () => props.handleDeleteSingleOption(props.optionText) }>
    Remove
  </button>
  </div>
);

export default Option;