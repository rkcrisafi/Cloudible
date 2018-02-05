import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    debugger
    super(props);

    this.state = { title: "", body: "" };
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.props.bookId, this.props.ratingId, this.state)
      .then(data => this.props.history.push(`/library`));
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Enter a headline for your review:
            <input type="text" value={this.state.title} onChange={this.update('title')}/>
          </label>
          <label>Write your review in the space below:
            <textarea value={this.state.body} onChange={this.update('body')}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

export default ReviewForm;
