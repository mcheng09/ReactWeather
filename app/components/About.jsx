var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a Weather App build on React. This is a practice app from a class on Udemy.</p>
      <p>
        Here are the some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map API</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
