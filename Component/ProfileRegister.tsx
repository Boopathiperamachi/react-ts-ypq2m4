import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button/Button';
import ListAllEmployee from '../Component/ListAllEmployee';
const ProfileRegster: React.FC<{}> = () => {
  const [exp, setExp] = React.useState<Date | null>('');
  const [firstName, setFirstName] = React.useState<Date | null>('');
  const [lastName, setLastName] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  var users = [];
  const handleChangeFirst = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLast = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeDob = (e) => {
    setDob(e.target.value);
  };
  const handleChangeExp = (e) => {
    setDesignation(e.target.value);
  };
  const handleChangeDesignation = (e) => {
    setDesignation(e.target.value);
  };

  const handleClick = () => {
    users.push({
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      experience: exp,
      designation: designation,
    });
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="First name"
        variant="outlined"
        name="first_name"
        onChange={handleChangeFirst}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        name="last_name"
        variant="outlined"
      />
      {/* <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}

      <TextField
        id="outlined-basic"
        label="DOB"
        name="dob"
        variant="outlined"
        onChange={handleChangeDob}
      />
      <TextField
        id="outlined-basic"
        label="Designation"
        name="designation"
        variant="outlined"
        onChange={handleChangeExp}
      />
      <TextField
        id="outlined-basic"
        label="Experience"
        name="experience"
        variant="outlined"
        onChange={handleChangeDesignation}
      />
      <Button variant="outlined" onClick={handleClick}>
        Save
      </Button>
      <ListAllEmployee users={users} />
    </Box>
  );
};

export default ProfileRegster;
