import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Box } from '@mui/material';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://64b21e3938e74e386d54b0f2.mockapi.io/api/v1/doctors/doctors");
                setDoctors(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Doctors
            </Typography>
            {doctors.map((doctor) => (
                <Box key={doctor.id} sx={{ marginBottom: '1rem' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {doctor.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Specialty: {doctor.specialty}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Office: {doctor.office}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Email: {doctor.email}
                    </Typography>
                </Box>
            ))}
        </div>
    );
};

export default Doctor;
