import useAxios from ".";

export const AddToWatchLater = async (contentId, dateAdded) => {
  const userId = JSON.parse(sessionStorage.getItem("user")).id;
  try {
    const response = await useAxios.post(
      "/watchlater",
      { id_user: userId, id_content: contentId, date_added: dateAdded },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      if (error.response.data.message === "Video already in watch later") {
        throw new Error("Video already in watch later");
      } else if (
        error.response.data.message === "Cannot add your own content"
      ) {
        throw new Error("Cannot add your own content");
      }
    }
    throw error;
  }
};

export const GetMyWatchLater = async () => {
  try {
    const response = await useAxios.get("/watchlater", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const DeleteFromWatchLater = async (id) => {
  try {
    const response = await useAxios.delete(`/watchlater/${id}`, {
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

export const GetAllVideos = async () => {
  try {
    const response = await useAxios.get("/watchlater", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const CreateVideo = async (data) => {
  try {
    const response = await useAxios.post("/watchlater", data, {
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

export const UpdateVideo = async (values) => {
  try {
    const response = await useAxios.put(`/watchlater/${values.id}`, values, {
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

export const DeleteVideo = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await useAxios.delete(`/watchlater/${id}`, {
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
