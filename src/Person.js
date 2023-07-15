import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Typography, Box } from '@mui/material';

const Person = () => {
    const [persons, setPersons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPersons = async () => {
            try {
                const response = await axios.get(process.env.PERSONS_API_URL);
                setPersons(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchPersons();
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
                Persons
            </Typography>
            {persons.map((person) => (
                <Box key={person.id} sx={{ marginBottom: '1rem' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {person.name} {person.surname}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Document: {person.document}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Age: {person.age}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Phone: {person.phone}
                    </Typography>
                </Box>
            ))}
        </div>
    );
};

export default Person;
