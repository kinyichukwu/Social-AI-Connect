import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function GoogleButton() {
  const clientId = "fdgfhj";

  return (
    <div className="flex justify-center">
      <div className="hidden">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
              axios
                .post(`http://localhost:9000/google-sign-in`, decoded)
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
   
      
    </div>
  );
}
