import React, {
  Component
} from 'react';

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        number: 1,
        descr: 'Enabled when Item 1 is checked'
      }, {
        number: 2,
        descr: 'Enabled when Items 3 & 5 are checked'
      }, {
        number: 3,
        descr: 'Enabled when all items are checked'
      }, {
        number: 4,
        descr: 'Enabled when no items are checked'
      }, {
        number: 5,
        descr: 'Enabled when all odd items are checked'
      }, {
        number: 6,
        descr: 'Enabled when all even items are checked'
      }, {
        number: 7,
        descr: 'Enabled when at least one item is checked'
      }]
    };
  }

  // The state above includes the number of the link and the description associated with it.

  // Below is the render function. Originally, I mapped over the items state object and used props to pass down a function that decided on whether the link was enabled from App. Because of the method I went with, and because each link needed a unique prop I decided to go with this method.

  // The prop with the reference to the 'xActive' function decides whether the link is activated or deactivated, depending on if it's been assigned a 'true' or 'false' boolean.

  render() {
    const {
      items
    } = this.state;
    return (<div className="links">
      <div className="link" key={items[0].number}>
        <a href="/" className={this.props.oneActive
            ? 'deactivated activated'
            : 'deactivated'}>Link {items[0].number}</a>
        <p>
          {items[0].descr}</p>
      </div>
      <div className="link" key={items[1].number}>
        <a href="/" className={this.props.twoActive
            ? 'deactivated activated'
            : 'deactivated'}>Link {items[1].number}</a>
        <p>
          {items[1].descr}</p>
      </div>
      <div className="link" key={items[2].number}>
        <a href="/" className={this.props.threeActive
            ? 'deactivated activated'
            : 'deactivated'}>Link {items[2].number}</a>
        <p>
          {items[2].descr}</p>
      </div>
      <div className="link" key={items[3].number}>
        <a href="/" className={this.props.fourActive
            ? 'deactivated activated'
            : 'deactivated'}>Link {items[3].number}</a>
        <p>
          {items[3].descr}</p>
      </div>
      <div className="link" key={items[4].number}>
        <a href="/" className={this.props.fiveActive
            ? 'deactivated activated'
            : 'deactivated'}>Link {items[4].number}</a>
        <p>
          {items[4].descr}</p>
      </div>
      <div className="link" key={items[5].number}>
        <a href="/" className={this.props.sixActive
            ? 'deactivated activated'
            : 'deactivated'}>Link {items[5].number}</a>
        <p>
          {items[5].descr}</p>
      </div>
      <div className="link" key={items[6].number}>
        <a href="/" className={this.props.sevenActive
            ? 'deactivated activated'
            : 'deactivated'}>Link {items[6].number}</a>
        <p>
          {items[6].descr}</p>
      </div>
    </div>);
  }
}

export default Links;