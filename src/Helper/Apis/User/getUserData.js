import axios from 'axios';

export const getUserData = async (id, userName, password) => {
    try {
        const response = await axios.get(`http://localhost:9090/users/get-by-id/${id}`, {
            headers: {
                Authorization: `Basic ${btoa(`${userName}:${password}`)}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

