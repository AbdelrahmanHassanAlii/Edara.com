import axios from "axios";

export const sign = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:9090/users/register",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
