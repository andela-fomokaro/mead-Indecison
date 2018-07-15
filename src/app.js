var template = (
  <div>
    <p>DOES THIS CHANGE?</p>
    <h2>The React Way</h2>
  </div>
);

var templateTwo = (
  <div>
    <h1> Omokaro Faith</h1>
    <p> Age: 25</p>
    <p> Location: Nigeria</p>

  </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);