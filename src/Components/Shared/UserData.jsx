import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import { userInputsData } from "../../Helper/Functions/userInputs";
import { getUserData } from "../../Helper/Apis/User/getUserData";

export default function UserData() {

    const [userInputs, setUserInputs] = useState([]); 
    const [userPreviousData, setUserPreviousData] = useState({}); // Fixed typo 'useerPrviousData'
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

                // Check if user exists in localStorage
                if (user && user.id && user.username && user.password) {
                    const userPreviousData = await getUserData(user.id, user.username, user.password);
                    setUserPreviousData(userPreviousData);

                    console.log(userPreviousData); // Log the fetched data
                } else {
                    console.error("No user data found in localStorage.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData(); // Call the async function

        setUserInputs(userInputsData); // Set input fields data
    }, []);

    return (
        <div className="user-data">
            <Inputs inputs={userInputs} />
        </div>
    );
}
