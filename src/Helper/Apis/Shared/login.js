export const login = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:9090/users/login",
            data
        );
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}