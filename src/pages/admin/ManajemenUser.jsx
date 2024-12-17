import React, { useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import * as XLSX from "xlsx";
import yellowPencil from "/src/assets/icons/pencil-edit-yellow.webp";
import userIcon from "/src/assets/icons/user-icon.webp";

const ManageUser = () => {
  const users = [
    {
      id: "101",
      name: "Arif Rahman Hakim",
      email: "arifrahman@gmail.com",
      borrowed: 5,
      downloaded: 12,
      lastActivity: "15 Mar 2021, 12:47 PM",
      whatsapp: "+6281234567891",
      birthdate: "1990-01-01",
      password: "********",
    },
    {
      id: "102",
      name: "Dina Kurniawati",
      email: "dina.kurnia@gmail.com",
      borrowed: 3,
      downloaded: 8,
      lastActivity: "12 Mar 2021, 10:00 AM",
      whatsapp: "+6289876543210",
      birthdate: "1992-02-15",
      password: "********",
    },
    {
      id: "103",
      name: "Budi Santoso",
      email: "budi.santoso@gmail.com",
      borrowed: 7,
      downloaded: 15,
      lastActivity: "11 Mar 2021, 05:30 PM",
      whatsapp: "+6282233445566",
      birthdate: "1991-05-22",
      password: "********",
    },
    {
      id: "104",
      name: "Siti Aminah",
      email: "siti.aminah@gmail.com",
      borrowed: 6,
      downloaded: 20,
      lastActivity: "14 Mar 2021, 03:15 PM",
      whatsapp: "+6288899911223",
      birthdate: "1989-03-10",
      password: "********",
    },
    {
      id: "105",
      name: "Rahmat Hidayat",
      email: "rahmat.hidayat@gmail.com",
      borrowed: 2,
      downloaded: 5,
      lastActivity: "13 Mar 2021, 09:00 AM",
      whatsapp: "+6281223344556",
      birthdate: "1995-06-12",
      password: "********",
    },
    {
      id: "106",
      name: "Nina Kartika",
      email: "nina.kartika@gmail.com",
      borrowed: 8,
      downloaded: 17,
      lastActivity: "16 Mar 2021, 02:30 PM",
      whatsapp: "+6286677889900",
      birthdate: "1993-07-08",
      password: "********",
    },
    {
      id: "107",
      name: "Aldi Setiawan",
      email: "aldi.setiawan@gmail.com",
      borrowed: 4,
      downloaded: 10,
      lastActivity: "17 Mar 2021, 11:45 AM",
      whatsapp: "+6287654321098",
      birthdate: "1994-11-03",
      password: "********",
    },
    {
      id: "108",
      name: "Yusuf Maulana",
      email: "yusuf.maulana@gmail.com",
      borrowed: 5,
      downloaded: 14,
      lastActivity: "18 Mar 2021, 01:00 PM",
      whatsapp: "+6289101112131",
      birthdate: "1992-09-18",
      password: "********",
    },
    {
      id: "109",
      name: "Lestari Widodo",
      email: "lestari.widodo@gmail.com",
      borrowed: 9,
      downloaded: 22,
      lastActivity: "19 Mar 2021, 04:45 PM",
      whatsapp: "+6289123456789",
      birthdate: "1990-12-20",
      password: "********",
    },
    {
      id: "110",
      name: "Rizky Aditya",
      email: "rizky.aditya@gmail.com",
      borrowed: 3,
      downloaded: 7,
      lastActivity: "20 Mar 2021, 08:15 AM",
      whatsapp: "+6288765432109",
      birthdate: "1996-04-14",
      password: "********",
    },
    {
      id: "111",
      name: "Aulia Rahmah",
      email: "aulia.rahmah@gmail.com",
      borrowed: 6,
      downloaded: 18,
      lastActivity: "21 Mar 2021, 09:45 AM",
      whatsapp: "+6285556677889",
      birthdate: "1991-10-11",
      password: "********",
    },
    {
      id: "112",
      name: "Gilang Pratama",
      email: "gilang.pratama@gmail.com",
      borrowed: 4,
      downloaded: 11,
      lastActivity: "22 Mar 2021, 10:30 AM",
      whatsapp: "+6286667788990",
      birthdate: "1995-08-30",
      password: "********",
    },
    {
      id: "113",
      name: "Nabila Sari",
      email: "nabila.sari@gmail.com",
      borrowed: 7,
      downloaded: 15,
      lastActivity: "23 Mar 2021, 02:20 PM",
      whatsapp: "+6284433221100",
      birthdate: "1990-06-25",
      password: "********",
    },
    {
      id: "114",
      name: "Dedi Firmansyah",
      email: "dedi.firmansyah@gmail.com",
      borrowed: 2,
      downloaded: 9,
      lastActivity: "24 Mar 2021, 11:15 AM",
      whatsapp: "+6289988776655",
      birthdate: "1993-01-02",
      password: "********",
    },
    {
      id: "115",
      name: "Rina Permata",
      email: "rina.permata@gmail.com",
      borrowed: 5,
      downloaded: 12,
      lastActivity: "25 Mar 2021, 04:50 PM",
      whatsapp: "+6287766554433",
      birthdate: "1997-02-20",
      password: "********",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [tempUser, setTempUser] = useState({});

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleShowModal = (user) => {
    setCurrentUser(user);
    setTempUser({ ...user }); // Buat salinan sementara untuk input
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUser({ ...tempUser, [name]: value }); // Perbarui state input sementara
  };

  const handleSaveChanges = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === currentUser.id ? tempUser : user))
    );
    setShowModal(false);
  };

  const handleCheckboxChange = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const exportToExcel = () => {
    const selectedData = users.filter((user) =>
      selectedUsers.includes(user.id)
    );
    const worksheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Selected Users");
    XLSX.writeFile(workbook, "selected_users.xlsx");
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    <Container fluid className="px-0">
      <div style={{ marginTop: "20px" }}>
        <div className="border rounded p-2" style={{ backgroundColor: "#fff" }}>
          <Table
            bordered
            hover
            responsive
            style={{ textAlign: "center", borderColor: "white" }}
          >
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setSelectedUsers(
                        e.target.checked ? users.map((user) => user.id) : []
                      );
                    }}
                    checked={selectedUsers.length === users.length}
                  />
                </th>
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
              {currentRows.map((user, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleCheckboxChange(user.id)}
                    />
                  </td>
                  <td style={{ color: "#007bff" }}>{user.id}</td>
                  <td style={{ color: "#007bff" }}>{user.name}</td>
                  <td style={{ color: "#007bff" }}>{user.email}</td>
                  <td style={{ color: "#007bff" }}>{user.borrowed}</td>
                  <td style={{ color: "#007bff" }}>{user.downloaded}</td>
                  <td style={{ color: "#007bff" }}>{user.lastActivity}</td>
                  <td>
                    <img
                      src={yellowPencil}
                      width="30"
                      height="30"
                      alt="Edit"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleShowModal(user)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, users.length)} of{" "}
              {users.length}
            </span>
            <div>
              <Button variant="success" onClick={exportToExcel}>
                Export to Excel
              </Button>
            </div>
            <div>
              <Button
                variant="light"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                &lt;
              </Button>
              <span style={{ margin: "0 10px" }}>{currentPage}</span>
              <Button
                variant="light"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "#007bff", display: "flex", alignItems: "center" }}
          >
            <img
              src={userIcon}
              alt="User Icon"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            Detail Pengguna #{currentUser.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={tempUser.name || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={tempUser.email || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Nomor Whatsapp</Form.Label>
              <Form.Control
                type="text"
                name="whatsapp"
                value={tempUser.whatsapp || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                name="birthdate"
                value={tempUser.birthdate || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={tempUser.password || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageUser;
