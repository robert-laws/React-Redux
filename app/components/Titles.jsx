var React = require('react');
var Title = require('Title');

var Titles = React.createClass({
  render: function() {
    var { books } = this.props;
    var bookList = books.map((book) =>
      <Title key={book.id} title={book.title} author={book.author} />
    )
    // debugger;
    return (
      <div>
        {bookList}
      </div>
    )
  }
});

module.exports = Titles;
