import React, { Component } from 'react';
import { current, recent, favorites, next } from '../utils/bookLists';

const BookCard = ({ url, title, image }) => {
  return (
    <article className="bookCard">
      <a href={url}>
        <div className="cover" style={{backgroundImage: `url("${image}")`}}></div>
        <div className="panel"> </div>
      </a>
    </article>
  );
};

class Reading extends Component {
  render() {
    return (
      <section className="reading clearfix">

        <section className="clearfix">
          <h2>Currently Reading</h2>
          <BookCard {...current} />
        </section>

        <section className="clearfix">
          <h2>Recent</h2>
          {recent.map(book => (
            <BookCard {...book} key={book.title}/>
          ))}
        </section>

        <section className="clearfix">
          <h2>Favorites</h2>
          {favorites.map(book => (
            <BookCard {...book} key={book.title}/>
          ))}
        </section>

        <section className="clearfix">
          <h2>Next</h2>
          {next.map(book => (
            <BookCard {...book} key={book.title}/>
          ))}
        </section>

      </section>
    );
  }
}

export default Reading;
