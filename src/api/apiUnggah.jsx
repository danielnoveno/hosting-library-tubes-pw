import useAxios from ".";

// Fetch all books
export const GetAllBooks = async () => {
  try {
    const response = await useAxios.get("/bukus", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch a single book by ID
export const GetBookById = async (id) => {
  try {
    const response = await useAxios.get(`/buku/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Create a new book
export const CreateBook = async (bookData) => {
  try {
    const response = await useAxios.post("/buku", bookData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update an existing book
export const UpdateBook = async (id, bookData) => {
  try {
    const response = await useAxios.put(`/buku/${id}`, bookData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete a book by ID
export const DeleteBook = async (id) => {
  try {
    const response = await useAxios.delete(`/buku/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
