import axios from "axios";

export const login = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:9090/auth/login",{
                userName: data.user_name,
                password: data.password
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}