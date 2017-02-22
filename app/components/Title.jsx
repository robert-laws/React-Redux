var React = require('react');

var Title = React.createClass({
  render: function() {
    var { title, author } = this.props;
    return (
        <li className="bookTitle">Title: {title} by {author}</li>
    )
  }
});

module.exports = Title;
