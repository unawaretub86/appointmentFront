import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Import the components for the different routes
import Doctor from './Doctor';
import Person from './Person';
import Appointment from './Appointments';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  banner: {
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.banner}>
        ¡Bienvenido(a) a la aplicación de citas!
      </Typography>
      <nav>
        <ul>
          <li>
            <Link to="/doctor">
              <Button variant="contained" color="primary" className={classes.button}>
                Doctores
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/personas">
              <Button variant="contained" color="primary" className={classes.button}>
                Personas
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/citas">
              <Button variant="contained" color="primary" className={classes.button}>
                Citas
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/personas" element={<Person />} />
        <Route path="/citas" element={<Appointment />} />
      </Routes>
    </div>
  );
};


export default App;
