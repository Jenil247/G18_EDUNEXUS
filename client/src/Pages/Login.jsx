import * as React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import StudentLogin from "../Images/student_login.png";
import FacultyLogin from "../Images/faculty.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarouselBack from "../Components/Login/Carousel";

const defaultTheme = createTheme();
const UserRole = {
  STUDENT: "student",
  FACULTY: "faculty",
};

export default function Login() {
  const [capVal, setcapVal] = useState(null);
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(UserRole.STUDENT);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Current User Role:", currentUser);
  };

  const handleStudentLogin = () => {
    setCurrentUser(UserRole.STUDENT);
  };

  const handleFacultyLogin = () => {
    setCurrentUser(UserRole.FACULTY);
  };

  // Define a border style for the selected avatar
  const avatarStyle = (role) => ({
    boxShadow: currentUser === role ? "5px 3px 10px black" : "none",
    cursor: "pointer",
  });

  return (
    <div className="my-glass-effect">
      <CarouselBack />
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <CssBaseline />
          <Box
            style={{
              backgroundColor: "#f5f7f7",
              boxShadow: "0px 4px 8px #f5f7f7",
              // background: "transparent",

            }}
            sx={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "2em",
              padding: "3em",
              height: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{ mr: 8, width: 56, height: 56 }}
                style={{ backgroundColor: "#25396F", ...avatarStyle(UserRole.STUDENT) }} // Apply border style
                src={StudentLogin}
                onClick={handleStudentLogin}
              />
              <Avatar
                sx={{ ml: 8, width: 56, height: 56 }}
                style={{ backgroundColor: "#25396F", ...avatarStyle(UserRole.FACULTY) }} // Apply border style
                src={FacultyLogin}
                onClick={handleFacultyLogin}
              />
            </Box>

            <Typography
              component="h1"
              variant="h5"
              sx={{ fontFamily: "Quicksand", fontWeight: "bold", m:3 }}
            >
              Sign in As {currentUser}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                id="standard-basic-1"
                variant="standard"
                margin="normal"
                required
                fullWidth
                label="User Id "
                name="userid"
                autoFocus
                value={userid}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    color: "#25396F",
                  },
                }}
                autoComplete="off"
              />
              <TextField
                id="standard-basic-2"
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                autoComplete="off"
              />
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(val) => setcapVal(val)}
              />
              <Button
                type="submit"
                fullWidth
                disabled={!capVal}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                  backgroundColor: "#25396F",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}