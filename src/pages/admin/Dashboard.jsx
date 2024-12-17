import React, { useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import ManyUser from "/src/assets/icons/filled-users.webp";
import bookRent from "/src/assets/icons/color-book.webp";
import bookDownload from "/src/assets/icons/unduhcolor-icon.webp";
import bookUpload from "/src/assets/icons/upload-icon.webp";
import yellowPencil from "/src/assets/icons/pencil-edit-yellow.webp";
import singleStar from "/src/assets/icons/single-star.webp";

const DashboardAdmin = () => {
  const cardData = [
    {
      id: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "Almira Bastari",
      title: "Home Sweet Loan",
      year: "2015",
      price: "Rp. 90.000",
      rentalFee: "Gratis",
      readers: 67,
      rating: 4.9,
      category: "Drama",
      isBookmarked: false,
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "J.K. Rowling",
      title: "Harry Potter",
      year: "1997",
      price: "Rp. 100.000",
      rentalFee: "Rp. 10.000",
      readers: 120,
      rating: 4.8,
      category: "Fantasy",
      isBookmarked: false,
    },
    {
      id: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "George Orwell",
      title: "1984",
      year: "1949",
      price: "Rp. 80.000",
      rentalFee: "Rp. 8.000",
      readers: 90,
      rating: 4.7,
      category: "Politik",
      isBookmarked: false,
    },
    {
      id: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "H.G. Wells",
      title: "The War of the Worlds",
      year: "1898",
      price: "Rp. 70.000",
      rentalFee: "Rp. 5.000",
      readers: 150,
      rating: 4.5,
      category: "Sci-Fi",
      isBookmarked: false,
    },
    {
      id: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "Sun Tzu",
      title: "The Art of War",
      year: "5th Century BC",
      price: "Rp. 50.000",
      rentalFee: "Rp. 3.000",
      readers: 250,
      rating: 4.6,
      category: "Sejarah",
      isBookmarked: false,
    },
    {
      id: 6,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "Webster",
      title: "Webster's Dictionary",
      year: "2021",
      price: "Rp. 120.000",
      rentalFee: "Gratis",
      readers: 50,
      rating: 4.3,
      category: "Kamus",
      isBookmarked: false,
    },
    {
      id: 7,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "Albert Einstein",
      title: "Relativity",
      year: "1916",
      price: "Rp. 85.000",
      rentalFee: "Rp. 7.000",
      readers: 180,
      rating: 4.8,
      category: "Jurnal Ilmiah",
      isBookmarked: false,
    },
    {
      id: 8,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
      author: "Jamie Oliver",
      title: "5 Ingredients",
      year: "2017",
      price: "Rp. 95.000",
      rentalFee: "Gratis",
      readers: 85,
      rating: 4.9,
      category: "Resep",
      isBookmarked: false,
    },
  ];
  const users = [
    {
      id: "101",
      name: "Arif Rahman Hakim",
      email: "arifrahman@gmail.com",
      borrowed: 5,
      downloaded: 12,
      lastActivity: "15 Mar 2021, 12:47 PM",
    },
    {
      id: "102",
      name: "Dina Kurniawati",
      email: "dina.kurnia@gmail.com",
      borrowed: 3,
      downloaded: 8,
      lastActivity: "12 Mar 2021, 10:00 AM",
    },
    {
      id: "103",
      name: "Budi Santoso",
      email: "budi.santoso@gmail.com",
      borrowed: 7,
      downloaded: 15,
      lastActivity: "11 Mar 2021, 05:30 PM",
    },
  ];

  const books = [
    {
      id: "101",
      title: "Funiculi Funicula",
      publisher: "William Morrow and Co.",
      copies: 50,
      rating: 5,
      issn: "9786231648761",
    },
    {
      id: "102",
      title: "The Great Gatsby",
      publisher: "Charles Scribner's Sons",
      copies: 40,
      rating: 4,
      issn: "9780743273565",
    },
    {
      id: "103",
      title: "To Kill a Mockingbird",
      publisher: "J.B. Lippincott & Co.",
      copies: 60,
      rating: 5,
      issn: "9780061120084",
    },
  ];

  return (
    <Container fluid className="px-0">
      {/* Section Cards */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
        <div style={{ flex: 1 }}>
          <Row className="align-items-center">
            <div
              style={{
                display: "flex",
                gap: "65px",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              {/* Card 1 */}
              <div
                className="card"
                style={{ width: "300px", height: "130px", flexShrink: 0 }}
              >
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <img
                        src={ManyUser}
                        width="80"
                        height="80"
                        alt="Icon Pengguna"
                        className="rounded-circle"
                      />
                    </Col>
                    <Col>
                      <h1 className="card-title mb-0">2510</h1>
                      <p className="card-text">Pengguna</p>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="card"
                style={{ width: "300px", height: "130px", flexShrink: 0 }}
              >
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <img
                        src={bookRent}
                        width="80"
                        height="80"
                        alt="Icon Buku Terpinjam"
                        className="rounded-circle"
                      />
                    </Col>
                    <Col>
                      <h1 className="card-title mb-0">710</h1>
                      <p className="card-text">Buku Terpinjam</p>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="card"
                style={{ width: "300px", height: "130px", flexShrink: 0 }}
              >
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <img
                        src={bookDownload}
                        width="80"
                        height="80"
                        alt="Icon Buku Terunduh"
                        className="rounded-circle"
                      />
                    </Col>
                    <Col>
                      <h1 className="card-title mb-0">970</h1>
                      <p className="card-text">Buku Terunduh</p>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className="card"
                style={{ width: "300px", height: "130px", flexShrink: 0 }}
              >
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <img
                        src={bookUpload}
                        width="80"
                        height="80"
                        alt="Icon Buku Terunggah"
                        className="rounded-circle"
                      />
                    </Col>
                    <Col>
                      <h1 className="card-title mb-0">5500</h1>
                      <p className="card-text">Buku Terunggah</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Row>

          {/* Section Tabel */}
          <div style={{ marginTop: "40px" }}>
            <h4
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "2px",
                  height: "24px",
                  backgroundColor: "#42CBF7",
                  marginRight: "10px",
                  display: "inline-block",
                }}
              ></span>
              Daftar Pengguna
            </h4>
            <div
              className="border rounded p-2"
              style={{ backgroundColor: "#fff" }}
            >
              <Table
                bordered
                hover
                responsive
                style={{
                  borderColor: "white",
                  textAlign: "center",
                }}
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>ID PENGGUNA</th>
                    <th>NAMA USER</th>
                    <th>EMAIL</th>
                    <th>TERPINJAM</th>
                    <th>TERUNDUH</th>
                    <th>AKTIVITAS TERAKHIR</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      style={{ textAlign: "center", verticalAlign: "middle" }}
                    >
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td style={{ color: "#007bff" }}>{user.id}</td>
                      <td style={{ color: "#007bff" }}>{user.name}</td>
                      <td style={{ color: "#007bff" }}>{user.email}</td>
                      <td style={{ color: "#007bff" }}>{user.borrowed}</td>
                      <td style={{ color: "#007bff" }}>{user.downloaded}</td>
                      <td style={{ color: "#007bff" }}>{user.lastActivity}</td>
                      <td className="text-center">
                        <img
                          src={yellowPencil}
                          width="30"
                          height="30"
                          alt="Edit"
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <h4
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "2px",
                  height: "24px",
                  backgroundColor: "#42CBF7",
                  marginRight: "10px",
                  display: "inline-block",
                }}
              ></span>
              Daftar Buku
            </h4>
            <div
              className="border rounded p-2"
              style={{ backgroundColor: "#fff", border: "1px solid #3C64EF" }}
            >
              <Table
                bordered
                hover
                responsive
                style={{
                  textAlign: "center",
                  borderColor: "white",
                }}
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>ID BUKU</th>
                    <th>NAMA BUKU</th>
                    <th>PENERBIT</th>
                    <th>JML SALINAN</th>
                    <th>RATING</th>
                    <th>ISSN</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr key={index} style={{ verticalAlign: "middle" }}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td style={{ color: "#007bff" }}>{book.id}</td>
                      <td style={{ color: "#007bff" }}>{book.title}</td>
                      <td style={{ color: "#007bff" }}>{book.publisher}</td>
                      <td style={{ color: "#007bff" }}>{book.copies}</td>
                      <td>
                        {/* Menampilkan bintang sesuai rating */}
                        {[...Array(book.rating)].map((_, i) => (
                          <img
                            key={i}
                            src={singleStar}
                            alt="Star Icon"
                            width="20"
                            height="20"
                            style={{ marginRight: "2px" }}
                          />
                        ))}
                      </td>
                      <td style={{ color: "#007bff" }}>{book.issn}</td>
                      <td className="text-center">
                        <img
                          src={yellowPencil}
                          width="30"
                          height="30"
                          alt="Edit"
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <h4
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "2px",
                  height: "24px",
                  backgroundColor: "#42CBF7",
                  marginRight: "10px",
                  display: "inline-block",
                }}
              ></span>
              Banyak Disukai
            </h4>
            <div
              style={{
                width: "1540px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                paddingBottom: "16px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  gap: "16px",
                }}
              >
                {cardData.map((card) => (
                  <div
                    key={card.id}
                    style={{
                      width: "200px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ padding: "16px", textAlign: "center" }}>
                      <img
                        src={card.image}
                        alt="Book Cover"
                        style={{
                          width: "156px",
                          height: "230px",
                          objectFit: "cover",
                          marginBottom: "16px",
                          borderRadius: "8px",
                        }}
                      />
                      <p
                        style={{
                          margin: "0",
                          color: "#5f6368",
                          fontSize: "14px",
                        }}
                      >
                        Pengarang{" "}
                        <span style={{ color: "#3C64EF", fontWeight: "bold" }}>
                          {card.author}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardAdmin;
