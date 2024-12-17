import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

const bookList = [
  {
    category: "Novel",
    books: [
      {
        id: 1,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Laut Bercerita",
        authorName: "Leila S. Chudori",
        readProgress: 80, // Persentase selesai membaca
      },
      {
        id: 2,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Supernova",
        authorName: "Dee Lestari",
        readProgress: 45, // Persentase selesai membaca
      },
      {
        id: 3,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Laskar Pelangi",
        authorName: "Andrea Hirata",
        readProgress: 95, // Persentase selesai membaca
      },
      {
        id: 3,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Laskar Pelangi",
        authorName: "Andrea Hirata",
        readProgress: 95, // Persentase selesai membaca
      },
      {
        id: 3,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Laskar Pelangi",
        authorName: "Andrea Hirata",
        readProgress: 95, // Persentase selesai membaca
      },
      {
        id: 3,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Laskar Pelangi",
        authorName: "Andrea Hirata",
        readProgress: 95, // Persentase selesai membaca
      },
      {
        id: 3,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Laskar Pelangi",
        authorName: "Andrea Hirata",
        readProgress: 95, // Persentase selesai membaca
      },
    ],
  },
  {
    category: "Drama",
    books: [
      {
        id: 4,
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
        bookTitle: "Furiously Happy",
        authorName: "Jenny Lawson",
        readProgress: 60, // Persentase selesai membaca
      },
    ],
  },
];

const MydigiPage = () => {
  const [books, setBooks] = useState(bookList);
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <Container fluid className="px-0">
      {books.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {category.category}
          </h3>
          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "nowrap", // Jangan biarkan card berpindah ke bawah
              overflowX: "auto", // Scroll horizontal
              paddingBottom: "20px",
              paddingLeft: "10px",
            }}
          >
            <Row
              style={{
                width: "230px",
                gap: "25px",
                overflowX: "130px",
                whiteSpace: "nowrap",
                paddingBottom: "16px",
                boxSizing: "border-box",
                borderBottom: "1px solid #ddd",
                flexWrap: "nowrap",
              }}
            >
              {category.books.map((book, bookIndex) => (
                <div
                  key={book.id}
                  style={{
                    width: "auto",
                    height: "410px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "#FFF",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Gambar Buku */}
                  <div
                    style={{
                      padding: "12px",
                      borderRadius: "12px 12px 12px 12px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={book.image}
                      alt="Book Cover"
                      style={{
                        width: "195px",
                        height: "280px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  </div>

                  {/* Detail Buku */}
                  <div
                    style={{
                      padding: "0px 12px 0",
                      display: "flex",
                      marginTop: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        color: "#2B2B2B",
                        textAlign: "center",
                      }}
                    >
                      {book.bookTitle}
                    </h5>
                    <p
                      style={{
                        color: "#3C64EF",
                        fontSize: "0.9rem",
                        marginBottom: "2px",
                        textAlign: "center",
                      }}
                    >
                      Oleh {book.authorName}
                    </p>

                    {/* Progress Bar dan Persentase */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          height: "8px",
                          backgroundColor: "#E0E0E0",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${book.readProgress}%`,
                            height: "100%",
                            backgroundColor: "#3C64EF",
                          }}
                        ></div>
                      </div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          margin: 0,
                          marginTop: "10px",
                        }}
                      >
                        {book.readProgress}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default MydigiPage;
