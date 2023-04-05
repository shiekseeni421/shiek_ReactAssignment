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

function SiginPage() {
  let histroy = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [profissionValue, setProfission] = useState("");
  let [number, setNumber] = useState("");
  const Profession = [
    {
      value: "frontend developer",
      label: "frontend developer",
    },
    {
      value: "backend developer",
      label: "backend developer",
    },
  ];

  const submitData = (e) => {
    let getdata = JSON.parse(localStorage.getItem("user-data"));
    if (getdata == null) {
      var data = [];
      data.push({ name, password, profissionValue, number, email });
      localStorage.setItem("user-data", JSON.stringify(data));
      histroy("/home");
    } else {
      let namevalue = getdata.filter((item, i) => {
        if (item.name == name) {
          return item.name;
        }
      });

      if (namevalue.length != 0) {
        alert("user alredy exit please login");
        histroy("/login");
      } else {
        var data = [...getdata];
        data.push({ name, password, profissionValue, number, email });
        localStorage.setItem("user-data", JSON.stringify(data));
        histroy("/home");
      }
    }
  };

  return (
    <div className="sign-page">
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            Sign Page
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
                {" "}
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                {" "}
                <TextField
                  type="number"
                  label="Phone"
                  placeholder="Enter Phone number"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  select
                  label="Select"
                  helperText="Please select your profession"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => {
                    setProfission(e.target.value);
                  }}
                >
                  {Profession.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={submitData}
                >
                  sign in
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SiginPage;
