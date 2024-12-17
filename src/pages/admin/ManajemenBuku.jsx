import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toastify
import "./unggah.css";

const ManageBuku = () => {
  const [coverFile, setCoverFile] = useState(null);
  const [bookFile, setBookFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [bookData, setBookData] = useState(null); // State to hold the book data after search

  // Sample book data
  const bookSample = {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646470594i/60129536.jpg",
    author: "William Shakespeare",
    title: "Hamlet",
    year: "1603",
    price: "Rp. 70.000",
    rentalFee: "Rp. 5.000",
    readers: 300,
    rating: 4.9,
    category: "Drama",
    isBookmarked: true,
    synopsis:
      "Hamlet is a tragedy written by William Shakespeare, telling the story of a young Danish prince who seeks revenge against his uncle, who has murdered his father, taken the throne, and married his mother.",
    description:
      "One of Shakespeare's most famous and influential works, Hamlet explores themes of treachery, revenge, incest, and moral corruption. It is considered one of the greatest works in Western literature.",
    downloadPrice: "Rp. 50.000",
    rentalPrice: "Rp. 5.000",
  };

  const handleCoverUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverFile(file);
    }
  };

  const handleBookUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBookFile(file);
    }
  };

  const handleSearch = () => {
    // Simulating search logic. In a real scenario, this would be an API call.
    if (searchQuery === "Hamlet" || searchQuery === "1") {
      setBookData(bookSample);
    } else {
      setBookData(null); // Clear data if no match
      toast.error("Buku tidak ditemukan!"); // Show error toast
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast.success("Buku berhasil disimpan!"); // Success toast on form submission
  };

  return (
    <div
      className="justify-content-center py-1 px-1"
      style={{ marginLeft: "-10px", marginRight: "-10px" }}
    >
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by ID or Title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary mt-2 w-100"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {bookData ? (
        <form onSubmit={handleSubmit}>
          {/* Informasi Umum Buku */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title text-primary mb-4">
                Managemen Informasi Umum Buku ID {bookData.id}
              </h5>
              <div className="row">
                {/* Row 1 */}
                <div className="col-md-3">
                  <label className="form-label">Cover Buku</label>
                  <div className="rounded p-3 text-center">
                    <input
                      type="file"
                      id="cover"
                      className="d-none"
                      onChange={handleCoverUpload}
                      accept="image/*"
                    />
                    <label htmlFor="cover" className="file-upload-box">
                      <div className="file-upload-icon">☁️</div>
                      <p>
                        Drag & drop files or{" "}
                        <span className="text-primary">Browse</span>
                      </p>
                      <p className="supported-formats">
                        Supported formats: JPEG, PNG, GIF, WEBP, WEB
                      </p>
                      {coverFile && (
                        <p className="file-name">{coverFile.name}</p>
                      )}
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-label">File Buku</label>
                  <div className="rounded p-3 text-center">
                    <input
                      type="file"
                      id="book"
                      className="d-none"
                      onChange={handleBookUpload}
                      accept=".pdf,.epub,.mobi,.azw,.doc,.rtf"
                    />
                    <label htmlFor="book" className="file-upload-box">
                      <div className="file-upload-icon">📄</div>
                      <p>
                        Drag & drop files or{" "}
                        <span className="text-primary">Browse</span>
                      </p>
                      <p className="supported-formats">
                        Supported formats: PDF, EPUB, MOBI, DOC, RTF
                      </p>
                      {bookFile && <p className="file-name">{bookFile.name}</p>}
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-md-12">
                    <label className="form-label">Judul</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      value={bookData.title}
                      placeholder="Masukkan judul buku"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Penulis</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      value={bookData.author}
                      placeholder="Masukkan penulis buku"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Penerbit</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      value={bookData.description}
                      placeholder="Masukkan penerbit buku"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label className="form-label">ISBN</label>
                    <input
                      type="text"
                      className="form-control"
                      value={bookData.id}
                      placeholder="Masukkan ISBN buku"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tanggal Terbit</label>
                    <input
                      type="date"
                      className="form-control"
                      value={bookData.year}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Jenis Buku</label>
                    <select className="form-select">
                      <option>Pilih jenis buku</option>
                      <option value="fiction">Fiksi</option>
                      <option value="non-fiction">Non-Fiksi</option>
                      <option value="educational">Pendidikan</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bahasa</label>
                    <select className="form-select">
                      <option>Pilih bahasa buku</option>
                      <option value="id">Indonesia</option>
                      <option value="en">Inggris</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Halaman</label>
                    <input
                      type="number"
                      className="form-control"
                      value={bookData.readers}
                      placeholder="Masukkan jumlah halaman buku"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Sinopsis</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    value={bookData.synopsis}
                    placeholder="Masukkan sinopsis buku"
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Deskripsi</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    value={bookData.description}
                    placeholder="Masukkan deskripsi buku"
                  ></textarea>
                </div>
              </div>

              {/* Row 3 */}
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Harga Download</label>
                  <input
                    type="number"
                    className="form-control"
                    value={bookData.downloadPrice}
                    placeholder="Harga download buku"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Harga Baca / Sewa Mingguan
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={bookData.rentalPrice}
                    placeholder="Harga sewa buku"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Simpan Buku
          </button>
        </form>
      ) : (
        <p>No book found with the given search query.</p>
      )}

      {/* ToastContainer to render toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default ManageBuku;
