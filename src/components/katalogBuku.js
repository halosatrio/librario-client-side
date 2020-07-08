import React, { Component } from "react";

import Pagination from "./common/pagination";
import ListGenre from "./common/listGenre";

import { getBooks } from "./../services/BookService";
import { getGenres } from "./../services/GenreService";
import { paginate } from "../utils/paginate";

class KatalogBuku extends Component {
  state = {
    books: [],
    genres: [],
    pageSize: 8,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "Semua Buku" }, ...getGenres()];
    this.setState({ books: getBooks(), genres });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      books: allBooks,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allBooks.filter((b) => b.genre._id === selectedGenre._id)
        : allBooks;

    const books = paginate(filtered, currentPage, pageSize);

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 col-lg-2 mb-5">
            <ListGenre
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
              {books.map((book, index1) => {
                return (
                  <div
                    key={`buku-${index1}`}
                    className="col-6 col-md-5 offset-md-1 col-lg-3 offset-lg-0 mb-5"
                  >
                    <div className="card">
                      <figure
                        className="img-wrapper"
                        style={{ maxHeight: 300 }}
                      >
                        <img
                          src={book.imageUrl}
                          alt={book.judul}
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                  </div>
                );
              })}
            </div>
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default KatalogBuku;
