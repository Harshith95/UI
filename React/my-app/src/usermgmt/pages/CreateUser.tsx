import { useState } from "react";
import UserForm from "./UserForm";
import { createUser } from "../utils/useUserAPI";

const CreateUsers = () => {

    const [userReq, setUserReq] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserReq(prev => ({ ...prev, [name]: value }))
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await createUser(userReq);
            console.log(response);
            alert('User Created Successfully');
            setUserReq({ name: '', email: '', phone: '', website: '' });
        } catch (error) {
            console.error(error);
            alert('Error Creating User!! please try again');
        }
    }

    return (<UserForm mode='create' userData={userReq} onChange={handleChange} onSubmit={handleSubmit} />);

}
export default CreateUsers;