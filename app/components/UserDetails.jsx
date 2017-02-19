var React = require('react');
var YoungPerson = require('YoungPerson');
var OldPerson = require('OldPerson');

var UserDetails = React.createClass({
  render: function() {
    var { name, age, date } = this.props;
    
    var userType;
    var userAge = this.props.age;
    userAge > 20 ? userType = <OldPerson /> : userType = <YoungPerson />;

    return (
      <div>
        <h3>User Details...</h3>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Date: {date}</h4>
        <hr />
        {userType}
      </div>
    )
  }
});

module.exports = UserDetails;
