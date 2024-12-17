import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Mail, Phone, Lock } from "lucide-react";
import axios from "axios";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },
  loginContainer: {
    background: "white",
    height: "95vh",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    width: "98vw",
    maxWidth: "1200px",
    overflow: "hidden",
    margin: "18px auto",
  },
  formSection: {
    flex: "0 0 60%",
    padding: "60px 100px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  imageSection: {
    flex: "0 0 40%",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2023/05/07/18/00/library-7976837_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    minHeight: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#333",
  },
  subtitle: {
    color: "#666",
    marginBottom: "32px",
  },
  formRow: {
    display: "flex",
    gap: "30px",
    marginBottom: "24px",
  },
  formGroup: {
    flex: 1,
    marginBottom: "24px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#333",
    fontSize: "14px",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "14px",
    paddingLeft: "45px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    color: "#333",
    backgroundColor: "white",
  },
  icon: {
    position: "absolute",
    left: "12px",
    color: "#666",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4361ee",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "20px",
    marginBottom: "20px",
  },
  footer: {
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
  },
  link: {
    color: "#4361ee",
    textDecoration: "none",
    fontWeight: "500",
  },
  socialIcons: {
    marginTop: "auto",
    display: "flex",
    gap: "16px",
  },
  socialButton: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4361ee",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
  },
};
const UserRegister = () => {
  const [formData, setFormData] = useState({
    nama_depan: "",
    nama_belakang: "",
    email: "",
    no_telp: "",
    tgl_lahir: "",
    jenis_kelamin: "",
    sandi: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        nama_depan: formData.nama_depan,
        nama_belakang: formData.nama_belakang,
        email: formData.email,
        no_telp: formData.no_telp,
        tgl_lahir: formData.tgl_lahir,
        jenis_kelamin: formData.jenis_kelamin,
        sandi: formData.sandi,
      });

      if (response.status === 201) {
        toast.success("Registrasi berhasil");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Terjadi kesalahan di server"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.formSection}>
        <h1 style={styles.title}>Registrasi</h1>
        <p style={styles.subtitle}>Silahkan buat akun terlebih dahulu.</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label htmlFor="nama_depan" style={styles.label}>
                Nama Depan
              </label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input
                  type="text"
                  id="nama_depan"
                  name="nama_depan"
                  placeholder="Nama depan"
                  value={formData.nama_depan}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="nama_belakang" style={styles.label}>
                Nama Belakang
              </label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input
                  type="text"
                  id="nama_belakang"
                  name="nama_belakang"
                  placeholder="Nama belakang"
                  value={formData.nama_belakang}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <div style={styles.inputWrapper}>
              <Mail size={18} style={styles.icon} />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="no_telp" style={styles.label}>
              Nomor Whatsapp
            </label>
            <div style={styles.inputWrapper}>
              <Phone size={18} style={styles.icon} />
              <input
                type="tel"
                id="no_telp"
                name="no_telp"
                placeholder="Nomor telepon"
                value={formData.no_telp}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="tgl_lahir" style={styles.label}>
              Tanggal Lahir
            </label>
            <div style={styles.inputWrapper}>
              <Calendar size={18} style={styles.icon} />
              <input
                type="date"
                id="tgl_lahir"
                name="tgl_lahir"
                placeholder="Pilih tanggal lahir"
                value={formData.tgl_lahir}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="jenis_kelamin" style={styles.label}>
              Jenis Kelamin
            </label>
            <div style={styles.inputWrapper}>
              <User size={18} style={styles.icon} />
              <select
                id="jenis_kelamin"
                name="jenis_kelamin"
                value={formData.jenis_kelamin}
                onChange={handleInputChange}
                style={styles.input}
                required
              >
                <option value="">Pilih gender</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="sandi" style={styles.label}>
              Sandi
            </label>
            <div style={styles.inputWrapper}>
              <Lock size={18} style={styles.icon} />
              <input
                type="password"
                id="sandi"
                name="sandi"
                placeholder="Masukkan sandi"
                value={formData.sandi}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Loading..." : "Register sekarang"}
          </button>

          {errorMessage && (
            <div style={{ color: "red", marginBottom: "20px" }}>
              {errorMessage}
            </div>
          )}

          <div style={styles.footer}>
            Sudah punya akun?{" "}
            <Link to="/" style={styles.link}>
              Masuk di sini
            </Link>
          </div>
        </form>
      </div>

      <div style={styles.imageSection}>
        <div style={styles.overlay}>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Digi<span style={{ color: "#4361ee" }}>Library</span>
          </h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
