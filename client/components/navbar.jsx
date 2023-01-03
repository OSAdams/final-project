import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ keyword: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { keyword } = this.state;
    window.location.hash = `keyword?${keyword}`;
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div className="nav-bar">
        <div className="nav-menu-icon">
          <i className="fa-solid fa-bars" />
        </div>
        <div className="nav-search">
          <form className="nav-search-form" onSubmit={ handleSubmit }>
            <div>
              <label htmlFor="keyword" />
              <input
                required
                id="keyword"
                type="text"
                name="keyword"
                onChange={ handleChange }
                placeholder="Type a keyword here"
                className="nav-input" />
            </div>
            <div>
              <button className="nav-button" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}