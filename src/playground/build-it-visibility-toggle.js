class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = {
      showDetails: false,
    }
  }

  toggleDetails() {
    this.setState( (prevState) => {
      return {
        showDetails: !prevState.showDetails
      }
    });
  }

  render() {
    return (
      <div>
        <h1>VISIBILITY TOGGLE</h1>
        <button onClick={this.toggleDetails}>{
          !this.state.showDetails ? 'Show details' : 'Hide details'
          }</button>
        { this.state.showDetails && 
          <p>Hey. These are some details you can now see!</p>
        }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));