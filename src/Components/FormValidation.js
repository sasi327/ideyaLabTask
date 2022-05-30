import React, { useState } from 'react'
import { Box, Container, Paper, Stack, Typography, TextField, MenuItem, FormControl, FormLabel, Button, InputLabel, Select, Radio } from '@mui/material'

function FormValidation() {

    const regex = /\d/;
    const [verify, setVerify] = useState([])
    const [Address1, setAddress1] = useState('')
    const [Address2, setAddress2] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Zipcode, setZipcode] = useState('')
    const [Country, setCountry] = useState('India')
    const [Date, setDate] = useState('')
    const [security, setSecurity] = useState('')
    const [radio, setRadio] = useState('')
    const handleClick = () => {

        let validate = [];
        const validAddress1 = Address1;
        const validAddress2 = Address2;
        const validCity = City;
        const validState = State;
        const validZipcode = Zipcode;
        const validCountry = Country;
        const validDate = Date;
        const validSecurity = security
        const validRadio = radio
        //Address 1 validation
        const address1Element = document.getElementById('adress1Error')

        if (validAddress1 == '') {
            validate.push(false)
            address1Element.innerText = 'Please Enter Address 1'
        } else {
            validate.push(true)
            address1Element.innerText = ''
        }

        //address 2 validation
        const address2Element = document.getElementById('adress2Error')
        if (validAddress2 == '') {
            validate.push(false)
            address2Element.innerText = 'Please Enter Address 2'
        } else {
            validate.push(true)
            address2Element.innerText = ''
        }
        //validCity  validation
        const validCityElement = document.getElementById('CityError')
        if (validCity == '') {
            validate.push(false)
            validCityElement.innerText = 'Please validCity'
        } else {
            validate.push(true)
            validCityElement.innerText = ''
        }
        //state validation
        const validStateElement = document.getElementById('StateError')
        if (validState == '') {
            validate.push(false)
            validStateElement.innerText = 'Please select the city'
        } else {
            validate.push(true)
            validStateElement.innerText = ''
        }
        //zipcode validation
        const zipcodeElement = document.getElementById('zipcodeError')
        const zipcodeChars = 6;
        if (validZipcode == '') {
            validate.push(false)
            zipcodeElement.innerText = 'Please enter zipcode'
        } else if (validZipcode == isNaN) {
            validate.push(false)
            zipcodeElement.innerText = 'zipcode should be numerical Digits'
        }
        else if (validZipcode.length > zipcodeChars) {
            validate.push(false)
            zipcodeElement.innerText = 'zipcode should be 6 characters'
        } else {
            validate.push(true)
            zipcodeElement.innerText = ''
        }
        // //country validation
        // const countryElement = document.getElementById('countryError')
        // if (validCountry == '') {
        //     validate.push(false)
        //     countryElement.innerText = 'Please Enter country'
        // } else {
        //     validate.push(true)
        //     countryElement.innerText = ''
        // }
        // Date of Birth Validation
        const DateOfBirthElement = document.getElementById('dateError')
        if (validDate == '') {
            validate.push(false)
            DateOfBirthElement.innerText = 'Please Enter Date of Birth'
        } else {
            validate.push(true)
            DateOfBirthElement.innerText = ''
        }
        // Security Code Validation
        const SecurityCodeElement = document.getElementById('securityError')
        const SecurityChar = 4;
        if (validSecurity == '') {
            validate.push(false)
            SecurityCodeElement.innerText = 'Please Enter valid security code'
        }
        else if (validSecurity.length > SecurityChar) {
            validate.push(false)
            SecurityCodeElement.innerText = 'security digit must be 4 Chracters'
        } else {
            validate.push(true)
            SecurityCodeElement.innerText = ''
        }
        //radio buttons validations
        const radioElement = document.getElementById('radioError')
        if (validRadio == false) {
            validate.push(false)
            radioElement.innerText = 'select atleast 1'
        } else {
            validate.push(true)
            radioElement.innerText = ''
        }


        //data 
        if (validate.every(status => status)) {
            setVerify([...verify, {
                Address1: validAddress1,
                Address2: validAddress2,
                City: validCity,
                State: validState,
                Zipcode: validZipcode,
                // Country: validCountry,
                Date: validDate,
                security: validSecurity,
                radio: validRadio


            }])
            console.log(verify);
            setAddress1("")
            setAddress2("")
            setCity("")
            setState("")
            // setCountry("")
            setDate("")
            setSecurity("")
            setRadio("")

        } else {
            alert('enter proper')
        }
    }
    return (
        <>
            <Container>
                <Box >
                    <Paper sx={{ padding: '35px' }}>
                        <Typography variant="h4" sx={{ color: 'cyan' }}>Verify Your Identity</Typography>
                        <Typography variant="subtitle1" color="initial" component={"div"} >
                            Please Enter Your valid Mailing Address of Your Personal Details For Identity VErification Please Donot Use A Po Box
                        </Typography>
                        <Typography component={'div'} sx={{ marginTop: '50px' }} >
                            <Container maxWidth="lg">
                                <Stack spacing={3} direction='row'>
                                    <TextField fullWidth
                                        value={Address1}
                                        label=" Mailing Address Line 1"
                                        onChange={(event) => setAddress1(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' component={'div'} id="adress1Error" sx={{ color: 'red' }} ></Typography>
                                    <TextField fullWidth
                                        value={Address2}
                                        label=" Mailing Address Line 2"
                                        onChange={(event) => setAddress2(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="adress2Error" sx={{ color: 'red' }} ></Typography>
                                </Stack>
                            </Container>
                        </Typography>
                        <Typography component={'div'} sx={{ marginTop: '50px' }} >
                            <Container maxWidth="lg">
                                <Stack spacing={3} direction='row'>
                                    <TextField fullWidth
                                        id=""
                                        label="City"
                                        value={City}
                                        onChange={(event) => setCity(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="CityError" sx={{ color: 'red' }} ></Typography>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={State}
                                            label="State"
                                            onChange={(event) => setState(event.target.value)}
                                        >
                                            <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                                            <MenuItem value={"telengana"}>telengana</MenuItem>
                                            <MenuItem value={"tamilnadu"}>tamilnadu</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <TextField fullWidth
                                        id=""
                                        value={State}
                                        label="State"
                                        onChange={(event) => setState(event.target.value)}
                                    /> */}
                                    <Typography variant='subtitle2' id="StateError" sx={{ color: 'red' }} ></Typography>

                                    <TextField fullWidth
                                        id=""
                                        label="Zip Code"
                                        value={Zipcode}
                                        onChange={(event) => setZipcode(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="zipcodeError" sx={{ color: 'red' }} ></Typography>
                                    <TextField fullWidth
                                        id=""
                                        label="Country"
                                        value={Country}
                                        onChange={(event) => setCountry(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="countryError" sx={{ color: 'red' }} ></Typography>

                                </Stack>
                            </Container>
                        </Typography>
                        <Typography component={"div"} sx={{ marginTop: '50px' }} >
                            <Container maxWidth="lg">
                                <Stack spacing={2} direction='row'>
                                    <TextField
                                        id=""
                                        label="Date Of Birth"
                                        value={Date}
                                        onChange={(event) => setDate(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="dateError" sx={{ color: 'red' }} ></Typography>

                                    <TextField
                                        id=""
                                        label="Social Security Last 4"
                                        value={security}
                                        onChange={(event) => setSecurity(event.target.value)}
                                    />
                                    <Typography variant='subtitle2' id="securityError" sx={{ color: 'red' }} ></Typography>
                                    <FormLabel id="demo-controlled-radio-buttons-group"> select for identification</FormLabel>
                                    <Radio
                                        checked={radio === 'Driving Licience'}
                                        onChange={(event) => setRadio(event.target.value)}
                                        value="Driving Licience"
                                        name="radio-buttons"
                                    />Driving Licience
                                    <Radio
                                        checked={radio === 'State Issued Id'}
                                        onChange={(event) => setRadio(event.target.value)}
                                        value="State Issued Id"
                                        name="radio-buttons"
                                    />State Issued Id
                                    <Radio
                                        checked={radio === 'passport'}
                                        onChange={(event) => setRadio(event.target.value)}
                                        value="passport"
                                        name="radio-buttons"
                                    />Passport
                                    <Typography variant='subtitle2' id="radioError" sx={{ color: 'red' }} ></Typography>
                                </Stack>
                            </Container>

                        </Typography>
                    </Paper>
                    <Typography component={'div'} sx={{ marginTop: "50px" }}>
                        <Button onClick={() => { handleClick() }} variant="contained">Upload Driving Licience</Button>
                    </Typography>
                </Box>
            </Container>

        </>
    )
}

export default FormValidation