import React from "react";
import { Link } from "react-router-dom";

// Import icons
import userIcon from "../../assets/icons/user-icon.webp";
import searchIcon from "../../assets/icons/search-icon.webp";
import notificationIcon from "../../assets/icons/notification-icon.webp";
import pencilEditIcon from "../../assets/icons/pencil-edit-icon.webp";
import lockIcon from "../../assets/icons/icons-lock-blue-fill.webp";
import languageIcon from "../../assets/icons/fa6-solid-language.webp";

const AdminProfile = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const styles = {
    pageContainer: {
      padding: "24px",
      maxWidth: "1200px",
      margin: "0 auto",
      boxSizing: "border-box",
    },
    profileCard: {
      borderRadius: "8px",
      padding: "20px",
      backgroundColor: "#D6E4FC",
      position: "relative",
      marginTop: "60px",
    },
    profilePicture: {
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      position: "absolute",
      left: "50px",
      top: "-50px",
      border: "4px solid white",
    },
    editButton: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: "20px",
    },
    editLink: {
      color: "#3C64EF",
      textDecoration: "none",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
    },
    editIcon: {
      width: "15px",
      height: "15px",
      marginRight: "8px",
    },
    profileContent: {
      color: "#3C64EF",
      padding: "20px",
      paddingBottom: "20px",
    },
    profileTitle: {
      color: "#3C64EF",
      marginBottom: "19px",
      fontSize: "24px",
      fontWeight: "bold",
    },
    profileRow: {
      display: "flex",
      marginBottom: "8px",
    },
    label: {
      width: "200px",
    },
    settingTitle: {
      marginTop: "32px",
      color: "#3C64EF",
      fontSize: "20px",
      fontWeight: "bold",
    },
    settingItem: {
      marginTop: "8px",
      borderRadius: "8px",
      backgroundColor: "#F0F4FF",
    },
    settingLink: {
      display: "flex",
      alignItems: "center",
      marginLeft: "30px",
      padding: "16px",
      textDecoration: "none",
      color: "#3C64EF",
    },
    settingIcon: {
      marginRight: "8px",
    },
    languageValue: {
      width: "200px",
      marginLeft: "950px",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.profileCard}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1149/1149386.png"
          alt="Profile Picture"
          style={styles.profilePicture}
        />

        <div style={styles.editButton}>
          <Link to="/admin/edit-profile" style={styles.editLink}>
            <img src={pencilEditIcon} alt="Edit" style={styles.editIcon} />
            <strong>Edit</strong>
          </Link>
        </div>

        <div style={styles.profileContent}>
          <h1 style={styles.profileTitle}>Profile</h1>

          <div style={styles.profileRow}>
            <span style={styles.label}>Nama</span>
            <span>Admin</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.label}>Email</span>
            <span>admin@digilibrary.com</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.label}>WhatsApp</span>
            <span>+6281234567891</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.label}>Password</span>
            <span>********</span>
          </div>
        </div>
      </div>

      <h2 style={styles.settingTitle}>Setting</h2>

      <div style={styles.settingItem}>
        <Link to="#" style={styles.settingLink}>
          <img
            src={lockIcon}
            width="30"
            height="30"
            style={styles.settingIcon}
            alt="Lock"
          />
          Ubah Password
        </Link>
      </div>

      <div style={styles.settingItem}>
        <Link to="#" style={styles.settingLink}>
          <img
            src={languageIcon}
            width="30"
            height="25"
            style={styles.settingIcon}
            alt="Language"
          />
          Bahasa
          <span style={styles.languageValue}>Indonesia</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminProfile;
