import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import "./index.scss";

function LoginPage() {
  let histroy = useNavigate();
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  const submitData = (e) => {
    let getdata = JSON.parse(localStorage.getItem("user-data"));
    let namevalue = getdata.filter((item, i) => {
      if (item.name == name) {
        return item;
      }
    });
    if (namevalue.length === 0) {
      alert("user not present please sign in");
      histroy("/");
    } else if (namevalue[0].password === password) {
      histroy("/home");
    } else {
      alert("please provide valid password");
    }
  };
  return (
    <div className="sign-page">
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            Login Page
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                {" "}
                <TextField
                  label="Name"
                  placeholder="Enter Name"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                {" "}
                <TextField
                  type="password"
                  label="password"
                  placeholder="Enter password"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>

              <Grid xs={12} item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={submitData}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
