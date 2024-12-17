import React, { useState, useEffect } from "react";

const RiwayatPage = () => {
  // State untuk menyimpan data riwayat pembelian
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  // Simulasi API call untuk mendapatkan data pembelian
  useEffect(() => {
    // Data dummy
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          bookTitle: "React for Beginners",
          purchaseDate: "2024-12-01",
          price: "Rp 120.000",
          status: "Beli",
        },
        {
          id: 2,
          bookTitle: "Advanced JavaScript",
          purchaseDate: "2024-12-05",
          price: "Rp 150.000",
          status: "Download",
        },
        {
          id: 3,
          bookTitle: "Mastering CSS",
          purchaseDate: "2024-12-10",
          price: "Rp 90.000",
          status: "Sewa",
        },
        {
          id: 4,
          bookTitle: "Introduction to Python",
          purchaseDate: "2024-12-12",
          price: "Gratis",
          status: "Read",
        },
      ];
      setPurchaseHistory(data); // Set state dengan data
    };

    fetchData();
  }, []);

  // Inline CSS untuk styling
  const styles = {
    container: {
      margin: "20px",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      backgroundColor: "#007bff",
      color: "white",
      textAlign: "center",
      padding: "10px",
    },
    td: {
      textAlign: "center",
      padding: "10px",
      border: "1px solid #ddd",
    },
    noData: {
      textAlign: "center",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Riwayat Pembelian</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID Pembelian</th>
            <th style={styles.th}>Judul Buku</th>
            <th style={styles.th}>Tanggal Pembelian</th>
            <th style={styles.th}>Harga</th>
            <th style={styles.th}>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.length > 0 ? (
            purchaseHistory.map((purchase) => (
              <tr key={purchase.id}>
                <td style={styles.td}>{purchase.id}</td>
                <td style={styles.td}>{purchase.bookTitle}</td>
                <td style={styles.td}>{purchase.purchaseDate}</td>
                <td style={styles.td}>{purchase.price}</td>
                <td style={styles.td}>{purchase.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ ...styles.td, ...styles.noData }}>
                Tidak ada riwayat pembelian.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RiwayatPage;
