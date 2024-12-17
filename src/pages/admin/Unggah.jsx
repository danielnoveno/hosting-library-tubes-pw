import React, { useState } from "react";
import "./unggah.css";
import { CreateBook } from "../../api/apiUnggah";

const Unggah = () => {
  const [coverFile, setCoverFile] = useState(null);
  const [bookFile, setBookFile] = useState(null);
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [isbn, setIsbn] = useState("");
  const [tanggalTerbit, setTanggalTerbit] = useState("");
  const [jenisBuku, setJenisBuku] = useState("");
  const [bahasa, setBahasa] = useState("");
  const [halaman, setHalaman] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [hargaDownload, setHargaDownload] = useState("");
  const [hargaSewa, setHargaSewa] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append("cover", coverFile);
    formData.append("book", bookFile);
    formData.append("judul", judul);
    formData.append("penulis", penulis);
    formData.append("penerbit", penerbit);
    formData.append("isbn", isbn);
    formData.append("tanggalTerbit", tanggalTerbit);
    formData.append("jenisBuku", jenisBuku);
    formData.append("bahasa", bahasa);
    formData.append("halaman", halaman);
    formData.append("sinopsis", sinopsis);
    formData.append("deskripsi", deskripsi);
    formData.append("hargaDownload", hargaDownload);
    formData.append("hargaSewa", hargaSewa);

    try {
      const response = await CreateBook(formData);
      // Handle the response (e.g., show success message)
      console.log("Book created successfully", response);
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Error creating book", error);
    }
  };

  return (
    <div
      className='justify-content-center py-1 px-1'
      style={{ marginLeft: "-10px", marginRight: "-10px" }}
    >
      <form onSubmit={handleSubmit}>
        {/* Informasi Umum Buku */}
        <div className='card mb-4'>
          <div className='card-body'>
            <div className='row'>
              {/* Row 1 */}
              <div className='col-md-3'>
                <label className='form-label'>Cover Buku</label>
                <div className='rounded p-3 text-center'>
                  <input
                    type='file'
                    id='cover'
                    className='d-none'
                    onChange={handleCoverUpload}
                    accept='image/*'
                  />
                  <label htmlFor='cover' className='file-upload-box'>
                    <div className='file-upload-icon'>☁️</div>
                    <p>
                      Drag & drop files or{" "}
                      <span className='text-primary'>Browse</span>
                    </p>
                    <p className='supported-formats'>
                      Supported formats: JPEG, PNG, GIF, WEBP, WEB
                    </p>
                    {coverFile && <p className='file-name'>{coverFile.name}</p>}
                  </label>
                </div>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>File Buku</label>
                <div className='rounded p-3 text-center'>
                  <input
                    type='file'
                    id='book'
                    className='d-none'
                    onChange={handleBookUpload}
                    accept='.pdf,.epub,.mobi,.azw,.doc,.rtf'
                  />
                  <label htmlFor='book' className='file-upload-box'>
                    <div className='file-upload-icon'>📄</div>
                    <p>
                      Drag & drop files or{" "}
                      <span className='text-primary'>Browse</span>
                    </p>
                    <p className='supported-formats'>
                      Supported formats: PDF, EPUB, MOBI, DOC, RTF
                    </p>
                    {bookFile && <p className='file-name'>{bookFile.name}</p>}
                  </label>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='col-md-12'>
                  <label className='form-label'>Judul</label>
                  <textarea
                    className='form-control'
                    rows='4'
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    placeholder='Masukkan judul buku'
                  ></textarea>
                </div>
                <div className='col-md-12'>
                  <label className='form-label'>Penulis</label>
                  <textarea
                    className='form-control'
                    rows='4'
                    value={penulis}
                    onChange={(e) => setPenulis(e.target.value)}
                    placeholder='Masukkan penulis buku'
                  ></textarea>
                </div>
                <div className='col-md-12'>
                  <label className='form-label'>Penerbit</label>
                  <textarea
                    className='form-control'
                    rows='4'
                    value={penerbit}
                    onChange={(e) => setPenerbit(e.target.value)}
                    placeholder='Masukkan penerbit buku'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='mb-3'>
                  <label className='form-label'>ISBN</label>
                  <input
                    type='text'
                    className='form-control'
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    placeholder='Masukkan ISBN buku'
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Tanggal Terbit</label>
                  <input
                    type='date'
                    className='form-control'
                    value={tanggalTerbit}
                    onChange={(e) => setTanggalTerbit(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Jenis Buku</label>
                  <select
                    className='form-select'
                    value={jenisBuku}
                    onChange={(e) => setJenisBuku(e.target.value)}
                  >
                    <option>Pilih jenis buku</option>
                    <option value='fiction'>Fiksi</option>
                    <option value='non-fiction'>Non-Fiksi</option>
                    <option value='educational'>Pendidikan</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Bahasa</label>
                  <select
                    className='form-select'
                    value={bahasa}
                    onChange={(e) => setBahasa(e.target.value)}
                  >
                    <option>Pilih bahasa buku</option>
                    <option value='id'>Indonesia</option>
                    <option value='en'>Inggris</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Halaman</label>
                  <input
                    type='number'
                    className='form-control'
                    value={halaman}
                    onChange={(e) => setHalaman(e.target.value)}
                    placeholder='Masukkan jumlah halaman buku'
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className='row'>
              <div className='col-md-6'>
                <label className='form-label'>Sinopsis</label>
                <textarea
                  className='form-control'
                  rows='5'
                  value={sinopsis}
                  onChange={(e) => setSinopsis(e.target.value)}
                  placeholder='Masukkan sinopsis buku'
                ></textarea>
              </div>
              <div className='col-md-6'>
                <label className='form-label'>Deskripsi</label>
                <textarea
                  className='form-control'
                  rows='5'
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder='Masukkan deskripsi buku'
                ></textarea>
              </div>
            </div>

            {/* Row 3 */}
            <div className='row'>
              <div className='col-md-6'>
                <label className='form-label'>Harga Download</label>
                <input
                  type='number'
                  className='form-control'
                  value={hargaDownload}
                  onChange={(e) => setHargaDownload(e.target.value)}
                  placeholder='Harga download buku'
                />
              </div>
              <div className='col-md-6'>
                <label className='form-label'>Harga Baca / Sewa Mingguan</label>
                <input
                  type='number'
                  className='form-control'
                  value={hargaSewa}
                  onChange={(e) => setHargaSewa(e.target.value)}
                  placeholder='Harga sewa buku'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type='submit' className='btn btn-primary w-100'>
          Simpan Buku
        </button>
      </form>
    </div>
  );
};

export default Unggah;
