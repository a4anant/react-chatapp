import { useState } from "react";
import axios from "axios";

const projectID = "3ae1a91d-d661-450b-af7d-04dcba6b480a";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObj = {
        headers: { 
            'Project-ID': projectID, 
            'User-Name': username, 
            'User-Secret': password
          }
    };

    try {
        await axios.get("https://api.chatengine.io/chats/", authObj);

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        setError('');
        window.location.reload();
        
    } catch (axiosError) {
        setError(axiosError.message);
    }
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <input
                          type="text"
                          id="forUsername"
                          className="form-control form-control-lg"
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                        />
                      </div>

                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <input
                          type="password"
                          id="forPassword"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>

                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                { error && error !== "" 
                  ?
                    (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )
                  :
                    (
                        <></>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
