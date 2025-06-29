import { Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, Slider, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useState } from 'react'

function Options(props) {
    const { map, setMap, cities, setCities, setNewCities, iterations, setIterations, algo, setAlgo, run, stop, reset, running } = props;
    let maxIterations = 300;
    if (algo == "simulated-annealing")
        maxIterations = 1500;
    return (
        <>
            <Grid size={{xs:12 ,md:6}} sx={{ display: { sm: 'block', md: 'none' }, marginBottom: "1em" }}>
                <Button id="run-mobile" onClick={() => run(algo, iterations, map)} variant="contained" size="large" fullWidth>Run</Button>
                <Button id="reset-mobile" onClick={() => reset()} variant="contained" size="large" fullWidth>Reset</Button>
            </Grid>
            <Typography variant='h3' align='center'>
                <Grid container>
                    <Grid size={{xs:10}}>
                        <Typography variant='h3' align='left'>
                            TSP Solver
                        </Typography>
                    </Grid>
                    <Grid  size={{xs:2}}>
                        <a href="" target="_blank">
                            <GitHubIcon fontSize="large" color="primary" />
                        </a>
                    </Grid>
                </Grid>
            </Typography>
            <Typography>Number of cities: {cities}</Typography>
            <Slider aria-label="Cities" valueLabelDisplay="off" value={cities} min={3} max={40} onChange={(e, v) => setCities(v)} disabled={running} />
            <Typography>Number of iterations: {iterations}</Typography>
            <Slider disabled={algo == "greedy" || algo == "hill-climbing" || running} aria-label="Iterations" valueLabelDisplay="off" value={iterations} min={5} max={maxIterations} onChange={(e, v) => setIterations(v)} />
            <Typography>Select algorithm</Typography>
            <Grid container spacing={1} padding={0}>
                <Grid size={{xs:12 ,md:6}}>
                    <Select label="Algorithm" value={algo} onChange={(e, v) => setAlgo(e.target.value)} variant="outlined" fullWidth disabled={running}>
                        <MenuItem value="random">Random</MenuItem>
                        <MenuItem value="greedy">Greedy</MenuItem>
                        <MenuItem value="hill-climbing">Hill climbing</MenuItem>
                        <MenuItem value="simulated-annealing">Simulated Annealing</MenuItem>
                        <MenuItem value="genetic">Genetic</MenuItem>
                    </Select>
                </Grid>
                <Grid size={{xs:12 ,md:6}} sx={{ display: { sm: 'none', md: 'block' } }}>
                    <Button id="run" onClick={() => run(algo, iterations, map)} variant="contained" size="large" fullWidth>Run</Button>
                    <Button id="reset" onClick={() => reset()} variant="contained" size="large" fullWidth disabled={running}>Reset</Button>
                </Grid>
            </Grid>

        </>
    )
}

export default Options
