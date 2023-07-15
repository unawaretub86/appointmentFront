import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem } from '@mui/material';

const AppointmentForm = () => {
    const [specialty, setSpecialty] = useState('');
    const [personDocument, setPersonDocument] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(process.env.APPOINTMENTS_API_URL, {
                specialty,
                person_document: personDocument
            });

            console.log(response.data);

            setSpecialty('');
            setPersonDocument('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Select
                label="Especialidad"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
            >
                <MenuItem value="Medicina general">Medicina general</MenuItem>
                <MenuItem value="Cardiología">Cardiología</MenuItem>
                <MenuItem value="Medicina interna">Medicina interna</MenuItem>
                <MenuItem value="Dermatología">Dermatología</MenuItem>
                <MenuItem value="Rehabilitación física">Rehabilitación física</MenuItem>
                <MenuItem value="Psicología">Psicología</MenuItem>
                <MenuItem value="Odontología">Odontología</MenuItem>
                <MenuItem value="Radiología">Radiología</MenuItem>
            </Select>
            <TextField
                label="Documento de la persona"
                value={personDocument}
                onChange={(e) => setPersonDocument(e.target.value)}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Crear Cita
            </Button>
        </form>
    );
};

export default AppointmentForm;
