import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useState } from "react";

function App() {
  const [principle, setprinciple] = useState(0);
  const [intrestRate, setIntrestRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [result, setResult] = useState(0);

  const [isInvalidPrinciple, setInvalidPrinciple] = useState(false);
  const [isInvalidIntrestRate, setInvalidIntrestRate] = useState(false);
  const [isInvalidTimePeriod, setInvalidTimePeriod] = useState(false);

  const validateForm = (event) => {
    const { value, name } = event; //destructuring method
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    //strating with ^ and ending with $, * means occurance may not occur or more than one occurance, ? means the decimal may or may not occure,
    //after the decimal there should be atleast one desimal so + is used.
    if (name == "principle") {
      setprinciple(value);
      !!value.match(/^[0-9]*.?[0-9]+$/)
        ? setInvalidPrinciple(false)
        : setInvalidPrinciple(true);
    } else if ((name == "period")) {
      setTimePeriod(value);
      console.log("period");
      
      !!value.match(/^[0-9]*.?[0-9]+$/)
        ? setInvalidTimePeriod(false)
        : setInvalidTimePeriod(true);
    } else if ((name == "interestRate")) {
      setIntrestRate(value);
      !!value.match(/^[0-9]*.?[0-9]+$/)
        ? setInvalidIntrestRate(false)
        : setInvalidIntrestRate(true);
    }
  };
  const calculate=()=>{
    if(principle&&timePeriod &&intrestRate ){
setResult((principle*timePeriod *intrestRate)/100)

    } else{
      alert("Please fill the form")
    }
  }
  const Reset=()=>{
    setprinciple(0);
    setIntrestRate(0);
    setTimePeriod(0);
    setResult(0);
    setInvalidPrinciple(false);
    setInvalidIntrestRate(false);
    setInvalidTimePeriod(false);
  }
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="bg-dark d-flex justify-content-center align-items-center"
      >
        <div style={{ width: "610px" }} className="rounded bg-light">
          <div className="p-5">
            <h1>Interest Calculator</h1>
            <p>Calculate your simple interest</p>
            <div
              style={{ minHeight: "50px", minWidth: "80px", color: "white" }}
              className="p-3  bg-warning  text-center"
            >
              <h1>₹ {result}</h1>
              <h6 className="">your total interest</h6>
            </div>
            <div>
              <TextField
                onChange={(e) => {
                  validateForm(e.target);
                }}
                value={principle||''}
                className="w-100 mt-3"
                name="principle"
                id="outlined-PrincipleAmount"
                label="Principle amount"
                variant="outlined"
              />
              {isInvalidPrinciple ? (
                <div className="text-danger fw-bolder m-3 text-center">
                  Please enter a valid digit
                </div>
              ) : (
                ""
              )}

              <TextField
                onChange={(e) => {
                  validateForm(e.target);
                }}
                value={timePeriod||''}
                className="w-100 mt-3"
                name="period"
                id="outlined-Timeperiod"
                label="Time period"
                variant="outlined"
              />
              {isInvalidTimePeriod ? (
                <div className="text-danger fw-bolder m-3 text-center">
                  Please enter a valid digit
                </div>
              ) : (
                ""
              )}

              <TextField
                onChange={(e) => {
                  validateForm(e.target);
                }}
                value={intrestRate||''}
                className="w-100 mt-3"
                name="interestRate"
                id="outlined-Interest"
                label="Rate of interest"
                variant="outlined"
              />
              {isInvalidIntrestRate ? (
                <div className="text-danger fw-bolder m-3 text-center">
                  Please enter a valid digit
                </div>
              ) : (
                ""
              )}
            </div>
            <Stack
              className="mt-3 mb-3"
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Button
              disabled={isInvalidPrinciple||isInvalidTimePeriod||isInvalidIntrestRate}
                onClick={calculate}
                className="p-3 bg-dark"
                variant="contained"
              >
                Calculate
              </Button>
              <Button onClick={Reset} variant="outlined">Reset</Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
