import axios from "axios";

const baseUrl = "http://localhost:3000/api";


export const registerUser = async (data) => {
    try {
        const response = await axios({
            method: "POST",
            url: `${baseUrl}/auth/register`,
            data,
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log("Response:", response);
        return response.data;
    } catch (error) {
        console.error("API call failed", error);
        return null;
    }
}