import * as React from 'react';
import Button from '@mui/material/Button';
import { Card, Checkbox, FormControlLabel, Grid, IconButton, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const Scenario2 = () => {
    return <>
            <p>
                Scenario 2 page
            </p>
    
                <Card variant="outlined">
                    <Grid container justifyContent="center" >
                        <Grid item>
                            <Typography variant="h4">
                                Tasks
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <TextField id="outlined-basic" label="Add your new To Do" variant="outlined" />
                        <Button variant="contained">+</Button>
                    </Grid>

                    <Grid item>
                        <Grid container justifyContent="center" >
                                <Grid container justifyContent="center" >
                                    <Grid item>
                                        <FormControlLabel
                                            value="This is the first"
                                            control={<Checkbox />}
                                            label="Apply for GBG Senior Fullstack developer"
                                            labelPlacement="end"
                                            />     
                                        <IconButton aria-label="done" color="primary">
                                            <CreateIcon />
                                        </IconButton>                                               
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>                
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" >
                                    <Grid item>
                                        <FormControlLabel
                                            value="This is the second"
                                            control={<Checkbox />}
                                            label="Send resignation letter"
                                            labelPlacement="end"
                                            />         
                                    <IconButton aria-label="done" color="primary">
                                            <CreateIcon />
                                        </IconButton>                                          
                                    <IconButton aria-label="delete" color="primary">
                                            <DeleteIcon />
                                        </IconButton>                                                  
                                    </Grid>
                            </Grid>
                        </Grid>
                    </Grid>                    

                    <Grid item>
                        <Typography>
                            You have 3 pending tasks"
                        </Typography>
                        <Button variant="outlined" color="warning">Clear all</Button>
                    </Grid>
                </Card>
           </>
};

export default Scenario2;