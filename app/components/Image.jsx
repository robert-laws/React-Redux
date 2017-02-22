var React = require('react');

var Image = React.createClass({
  render: function() {
    var { title, url } = this.props;
    var urlSource = "/photos/" + url;
    return (
      <figure>
        <a href="#"><img src={urlSource} /></a><figcaption>{title}</figcaption>
      </figure>
    )
  }
});

module.exports = Image;
