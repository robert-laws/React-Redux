var React = require('react');
var Titles = require('Titles');
var Gallery = require('Gallery');
import { books } from './../data/Data.json';
import { images } from './../data/Images.json';

var DataLoader = React.createClass({
  getDefaultProps: function() {
    return {
      heading: "List of good books"
    }
  },
  render: function() {
    return (
      <div className="row">
        <h2>{this.props.heading}</h2>
        <hr/>
        <Titles books={books} />
        <Gallery images={images} />
      </div>
    )
  }
});

module.exports = DataLoader;
