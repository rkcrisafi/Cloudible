import React from 'react';
import LibraryItem from './library_item';

class Library extends React.Component {

  componentDidMount() {
    this.props.showLibrary(this.props.currentUserId);
  }

  render () {
    return (<div>
      <div className="library-library">Library</div>
      <table className="library-table">
        <thead className="library-table-header">
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Length</th>
            <th>Rate and Review</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.books.map((book, idx) => (
              <LibraryItem key={idx} book={book} addRating={this.props.addRating} updateRating={this.props.updateRating} currentUserId={this.props.currentUserId}/>
            ))
          }
        </tbody>
      </table>
    </div>);
  }
}

export default Library;
