import Option from './Option';
// Stateless components
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}> Remove All </button>
      {!props.options.length && <p>Please add an option to get started</p>}
      {
        props.options.map( (option) => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
        />
      )
      )}
    </div>
  )
}

export default Options;