import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import { userInputsData } from "../../Helper/Functions/userInputs";
import { getUserData } from "../../Helper/Apis/User/getUserData";

export default function UserData() {
    const [userInputs, setUserInputs] = useState([]); 
    const [userData, setUserData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        user_name: "",
        password: "",
        email: "",
        birthday: "",
        image: "",
        gender: "",
        phone_number: "",
        country: "",
        city: "",
        role: "",
        profession: "",
        personal_code: "",
        number_of_projects: "",
        date_of_joining: ""
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("user"));
                if (user && user.id && user.user_name && user.password) {
                    const fetchedData = await getUserData("2", "KhaledMohamed65@edara.com", "123456");
                    setUserData(fetchedData);  // Set user data from API
                } else {
                    console.error("No user data found in localStorage.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
        setUserInputs(userInputsData);  // Set input fields data
    }, []);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <div className="user-data">
            {/* Pass userData or an empty object as a fallback */}
            <Inputs inputs={userInputs} handleChange={handleChange} values={userData || {}} />
        </div>
    );
}
