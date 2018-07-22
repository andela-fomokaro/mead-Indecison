class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState( () => ({options: []}));
  }

  handlePick() {
    let indexOfArray = Math.floor(Math.random() * this.state.options.length);
    indexOfArray = this.state.options[indexOfArray]
    alert(indexOfArray);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    }else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState( (prevState) => ({
        options: prevState.options.concat([option])
    }));
  }

  render () {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer ";
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          handlePick={this.handlePick}
          hasOptions={this.state.options.length}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

// Stateless Components
const Header = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      <h2> {props.subtitle} </h2>
    </div>
  )
}

// Stateless Component
const Action = (props) => {
  return (
    <div>
      <button 
        disabled={!props.hasOptions}
        onClick={props.handlePick}> What should I do? </button>
    </div>
  )
}

// Stateless components
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}> Remove All </button>
      {
        props.options.map( (option) => <Option key={option} optionText={option} />)
      }
    </div>
  )
}

// Stateless Components
const Option = (props) => {
  return (
    <div>
     {props.optionText}
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState( () => ({error}));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
         {
           this.state.error && <p>{this.state.error}</p>
         }
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));