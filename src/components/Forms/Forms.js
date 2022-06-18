import React, { useState } from 'react'
import { Typography, Paper,TextField, Button, Input } from '@mui/material'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/post'

 const Forms = () => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createPost(postData));
    };

    const resetForm = () => {
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    };

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <Input type='file' name='Image File' value={postData.selectedFile} onChange={(e) => setPostData({...postData, selectedFile: e.target.value})}/>
                <Button variant="contained" component="label" value={postData.selectedFile} onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value})}>Upload File"</Button>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={resetForm} fullWidth>Clear</Button>
            </form>

        </Paper>
        

    )
}

export default Forms