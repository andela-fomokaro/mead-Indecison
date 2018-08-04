class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
    this.state = {
      options: []
    }
  }

  componentDidMount () {
    try {
      let options = localStorage.getItem('options');
      options = JSON.parse(options);
      if(options) {
        this.setState( () => ({options}));
      }
    } catch (e) {
      // Do Nothing at all
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if(prevState !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  // fires when your component goes away or unmounts from the screen
  componentWillUnMount () {
    console.log(...arguments);
  }

  handleDeleteOptions() {
    this.setState( () => ({options: []}));
  }

  handleDeleteSingleOption (optionToRemove) {
    this.setState( (prevState) => ({
        options: prevState.options.filter( (option) => {
          return optionToRemove !== option ? true : false;
        })
    }));
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
          handleDeleteSingleOption={this.handleDeleteSingleOption}
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

// Stateless Components
const Option = (props) => {
  return (
    <div>
     {props.optionText}
     <button
      onClick={ () => props.handleDeleteSingleOption(props.optionText) }>
      Remove
    </button>
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

    if(!error) {
      e.target.elements.option.value = '';
    }
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