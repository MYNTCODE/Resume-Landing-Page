import { useState } from "react";
import { message, Button, Upload } from "antd";
import axios from "axios";

function ContactBox() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsError(false);
      setIsLoading(true);

      const response = await axios.post(
        "https://backend-api-deploy.vercel.app/api/v1/users",
        {
          name: userName,
          email: userEmail,
          message: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        }
      );

      setIsLoading(false);

      if (response.status >= 200 && response.status < 300) {
        // Handle success
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        message.success("I appreciate you reaching out");
      } else {
        // Handle other status codes (e.g., show an error message)
        console.error("Unsuccessful response:", response);
        message.error("Failed to submit the form");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error("Error submitting the form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setUserName(value);
        break;
      case "email":
        setUserEmail(value);
        break;
      case "message":
        setUserMessage(value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="text-white flex-col w-[300px] lg:w-[500px] mt-4  lg:my-4 lg:p-10">
        <div className="contacts-box ">
          <form onSubmit={handleSubmit}>
            <div className="ml-[-25px] flex justify-center lg:gap-5">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userName}
                onChange={handleChange}
                className="text-black p-2 rounded-xl ml-2 mb-10 w-[200px] lg:w-[300px] h-[50px]"
                required
              />
            </div>
            <div className="ml-[-30px] flex justify-center lg:gap-5">
              <label htmlFor="email ">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userEmail}
                onChange={handleChange}
                className="text-black p-2 rounded-xl ml-2 mb-10 w-[200px] lg:w-[300px] h-[50px]"
                required
              />
            </div>
            <div className=" flex lg:justify-center lg:ml-[-45px] lg:gap-5">
              <label htmlFor="message" className=" pr-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={userMessage}
                onChange={handleChange}
                required
                style={{ resize: "none" }}
                className="text-black p-2 rounded-xl mb-8 w-[200px] lg:w-[300px] h-[100px]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[40%] lg:ml-10 h-[50px] border rounded-xl "
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
          {isError && (
            <p className="error-message">
              There was an error submitting the form. Please try again.
            </p>
          )}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactBox;
