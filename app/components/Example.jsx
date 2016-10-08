var React = require('react');
var {Link} = require('react-router');

// var Example = React.createClass({
//   render: function() {
//     return (
//       <h3>Example Component</h3>
//     )
//   }
// });

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=WalnutCreek'>Walnut Creek, CA</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Example;
