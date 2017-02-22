var React = require('react');
var Image = require('Image');

var Gallery = React.createClass({
  render: function() {
    var { images } = this.props;

    var imageList = images.map((image) =>
      <Image key={image.id} title={image.title} url={image.url} />
    )

    return (
      <div id="columns">
        {imageList}
      </div>
    )
  }
});

module.exports = Gallery;
