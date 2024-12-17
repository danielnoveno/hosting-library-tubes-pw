import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import './Profile.css';

// Import icons
import userIcon from '../../assets/icons/user-icon.webp';
import searchIcon from '../../assets/icons/search-icon.webp';
import notificationIcon from '../../assets/icons/notification-icon.webp';
import pencilEditIcon from '../../assets/icons/pencil-edit-icon.webp';
import lockIcon from '../../assets/icons/icons-lock-blue-fill.webp';
import languageIcon from '../../assets/icons/fa6-solid-language.webp';
import clockIcon from '../../assets/icons/clock-clockwise.webp';
import trashIcon from '../../assets/icons/tabler-trash-filled.webp';

const Profile = () => {
  const location = useLocation();
  const userData = location.state?.userData || {
    name: "Default User",
    email: "default@gmail.com",
    whatsapp: "N/A",
    profilePic: "https://via.placeholder.com/150",
  };

  return (
    <Container fluid className="profile-container">
      {/* Profile Card */}
      <Card className="profile-main-card">
        {/* Profile Picture */}
        <Image 
          src={userData.profilePic}
          alt="Profile Picture" 
          className="profile-picture"
        />

        {/* Edit Button */}
        <Card.Body>
        <div className="d-flex justify-content-end align-items-center mb-3">
            <Link 
              to="/edit-profile" 
              className="d-flex align-items-center text-decoration-none"
            >
              <img src={pencilEditIcon} alt="Edit" className="edit-icon me-2" />
              <span className="text-primary fw-bold">Edit</span>
            </Link>
          </div>

          {/* Profile Information */}
          <div className="profile-info">
            <h1 className="profile-title">Profile</h1>
            
            <Row className="profile-details">
              <Col xs={12} className="mb-2">
                <Row>
                  <Col xs={4} md={3} className="info-label">Nama</Col>
                  <Col>{userData.name}</Col>
                </Row>
              </Col>
              <Col xs={12} className="mb-2">
                <Row>
                  <Col xs={4} md={3} className="info-label">Email</Col>
                  <Col>{userData.email}</Col>
                </Row>
              </Col>
              <Col xs={12} className="mb-2">
                <Row>
                  <Col xs={4} md={3} className="info-label">WhatsApp</Col>
                  <Col>{userData.whatsapp}</Col>
                </Row>
              </Col>
              <Col xs={12} className="mb-2">
                <Row>
                  <Col xs={4} md={3} className="info-label">Password</Col>
                  <Col>********</Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>

      {/* Settings Section */}
      <h2 className="settings-title">Setting</h2>

      {/* Settings Cards */}
      <Card className="settings-card">
        <Card.Body className="settings-item">
          <img src={lockIcon} alt="Lock" className="settings-icon" />
          <Link to="/password" className="settings-link">
            Ubah Password
          </Link>
        </Card.Body>
      </Card>

      <Card className="settings-card">
        <Card.Body className="settings-item">
          <img src={languageIcon} alt="Language" className="settings-icon language-icon" />
          <Link to="#" className="settings-link d-flex justify-content-between w-100">
            <span>Bahasa</span>
            <span className="language-value">Indonesia</span>
          </Link>
        </Card.Body>
      </Card>

      <Card className="settings-card">
        <Card.Body className="settings-item">
          <img src={clockIcon} alt="History" className="settings-icon" />
          <Link to="#" className="settings-link">
            Riwayat terakhir
          </Link>
        </Card.Body>
      </Card>

      <Card className="settings-card delete-account">
        <Card.Body className="settings-item">
          <img src={trashIcon} alt="Delete" className="settings-icon" />
          <Link to="#" className="settings-link text-danger">
            Hapus Akun
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;