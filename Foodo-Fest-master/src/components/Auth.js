import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
function Auth(props) {
  const [isLogin, setIsLogin] = useState(undefined);
  useEffect(() => {
    let localData = localStorage.getItem("user");
    if (localData) {
        let data = JSON.parse(localData)
        console.log(data);
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      {isLogin !== undefined && isLogin === true ? (
        props.children
      ) : (
        <div>
        <Typography variant="h1" component="h2">
        <Alert severity="error">Not login. Please <Link to={"login"}>Login</Link></Alert>
        </Typography>
        
            
        </div>
      )}
    </>
  );
}

export default Auth;
