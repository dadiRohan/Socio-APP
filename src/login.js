import React , {useState,useEffect} from 'react';

const Login = () => {

    const [sEmail,setsEmail] = useState("");
    const [sPassword,setsPassword] = useState("");

    useEffect(()=>{
         
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Login Clicked');
        // console.log(sEmail);
        // console.log(sPassword);

        const loginData = {
            "email" : sEmail,
            "password" : sPassword
        };

        fetch("http://127.0.0.1:8000/api/login",{
            method:"post",
            headers : {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            data : loginData
        }).then(res=>{
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <form>
                <input type="email" name="email" value={sEmail} onChange={(e)=>{setsEmail(e.target.value)}} placeholder="Enter Email" />
                <input type="password" name="password" value={sPassword} onChange={(e)=>{setsPassword(e.target.value)}} placeholder="Enter Password" />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
};

export default Login;