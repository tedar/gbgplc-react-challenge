import * as React from 'react';
import Button from '@mui/material/Button';
import { Card, Checkbox, FormControlLabel, Grid, IconButton, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';

type Task = {
    text: string;
    done: boolean;
  };

const Scenario2 = () => {

    let initialTaskList: Task[] = 
        [ 
            {text: "Apply for GBG Senior Fullstack developer", done: true},
            {text: "Send resignation letter", done: false},             
            {text: "Do a good job", done: false}             
        ]

    const [newToDo, setNewToDo] = useState('') 
    const [taskList, setTaskList] = useState(initialTaskList);

    let numPendingTasks = 0;

    // eslint-disable-next-line array-callback-return
    taskList.map((task: Task) => {
        if (!task.done)
        {
            numPendingTasks++;
        }
    }); 

    const handleButtonClick = () => {  

        const newTask: Task = { text: newToDo, done: false}

        setTaskList([
            ...taskList,
            newTask
        ]);

        console.log(`New To Do added.`);
      };        

    const handleDoneCheckboxOnClick = (index: number) => {

        var newTaskList = [...taskList];
        newTaskList[index].done = !newTaskList[index].done;

        setTaskList(newTaskList);
    };

    const handleDeleteOnClick = (index: number) => {

        var newTaskList = [...taskList];
        newTaskList.splice(index, 1);

        setTaskList(newTaskList);
    };    

    const handleDeleteAllOnClick = () => {

        setTaskList([]);
    }

    return <>
            <p>
                Scenario 2 page
            </p>
    
                <Card variant="outlined"  style={{marginBottom:40, paddingBottom:10}}>
                    <Grid container justifyContent="center" style={{marginBottom:10}} >
                        <Grid item>
                            <Typography variant="h4">
                                Tasks
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <TextField 
                            id="outlined-basic" 
                            label="Add your new To Do" variant="outlined" 
                            value={newToDo} 
                            onChange={(e) => setNewToDo(e.target.value)} />
                        <Button variant="contained" style={{marginLeft:10, height:55}} onClick={handleButtonClick}>
                            <Typography style={{fontSize:36}}>
                                +
                            </Typography>
                        </Button>
                    </Grid>

                    <Grid item>
                        <Grid container justifyContent="center" >
                            {taskList.map((task, index) =>                             
                                <Grid container justifyContent="center" >
                                    <Grid item>
                                        <FormControlLabel
                                            value={task.text}
                                            control={<Checkbox checked={task.done} onClick={(e) => handleDoneCheckboxOnClick(index)} />}
                                            label={task.text}
                                            labelPlacement="end"
                                            style={{textDecorationLine: task.done? 'line-through' : 'none'}}
                                            />     
                                        <IconButton aria-label="done" disabled={task.done} color="primary">
                                            <CreateIcon />
                                        </IconButton>                                               
                                        <IconButton aria-label="delete" onClick={(e) => handleDeleteOnClick(index)} >
                                            <DeleteIcon />
                                        </IconButton>                
                                    </Grid>
                                </Grid>                            
                                )
                            }                         
                        </Grid>
                    </Grid>                    

                    <Grid item>
                        <Grid container justifyContent="center" style={{marginTop:10}}>
                            <Typography>
                                You have {numPendingTasks} pending tasks
                            </Typography>
                            <Button
                                variant="outlined" color="warning" style={{marginLeft:10}}
                                onClick={handleDeleteAllOnClick}>
                                    Clear all
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
           </>
};

export default Scenario2;