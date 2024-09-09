import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import { userInputsData } from "../../Helper/Functions/userInputs";

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
        setUserInputs(userInputsData); 
    }, []);

    return (
        <div className="user-data">
            <Inputs inputs={userInputs} />
        </div>
    );
}
