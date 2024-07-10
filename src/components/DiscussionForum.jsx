import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, CardMedia, Link, Button, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function DiscussionForum() {

  const [isCommentOpen, setIsCommentOpen] = useState(false)
  const [isPostOpen, setIsPostOpen] = useState(false)
  const [newPost, setNewPost] = useState('');

  const handleClick = () => {
    setIsCommentOpen(!isCommentOpen) // Toggle the state
  }

  const handlePost = () => {
    setIsPostOpen(!isPostOpen) // Toggle the state
  }

  

  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

        <Box gridColumn="span 12">
          <Typography>
            Ask.Discuss.Find
            <br /><br /><hr />
          </Typography>
        </Box>

        <Box gridColumn="span 12">
        <Link href="#" underline="none" color={'gray'} onClick={handlePost}>Add New Post</Link>
        {isPostOpen && ( // Conditionally render the text field
                    <div>
                    <TextField
                      fullWidth
                      id="new-post"
                      label="Add a Post"
                      multiline
                      rows={2}
                      variant="outlined" 
                      value={newPost}
                      onChange={(event) => setNewPost(event.target.value)}                    
                    />
                    <br /><br />
                    <Button type="submit" variant="contained"  disabled={!newPost}>
                      Submit
                    </Button>
                    </div>
                )}
        </Box>

        <Box gridColumn="span 12">
          <Typography align='left'>
            Posts
          </Typography>
        </Box>

        <Box gridColumn="span 12">
          <Card>
            <CardContent>
              <Typography align='start'>
                StudentName
              </Typography>
              <Typography variant='h6' align='start'>
                <br />
                Question
              </Typography>
              <Typography variant="body2" color="text.secondary" align='start'>
                10 July 2024
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                p: 2,
                justifyContent: 'start',
                typography: 'body1',
                '& > :not(style) ~ :not(style)': {
                  ml: 2,
                },
              }}
            >
              <Link href="#" underline="none" color={'gray'} onClick={handleClick}>
                Comments
              </Link>
              <Link href="#" underline="none">
                Edit
              </Link>
              <Link href="#" underline="none">
                Delete
              </Link>
            </Box>
            {isCommentOpen && ( // Conditionally render the card when comments are open
           <List sx={{ width: '100%', maxWidth: 'auto', bgcolor: 'background.paper' }}>
           <ListItem>
             <ListItemAvatar>
               <Avatar>
                 <ImageIcon />
               </Avatar>
             </ListItemAvatar>
             <ListItemText primary="Photos" secondary="Jan 9, 2014" />
           </ListItem>
           <ListItem>
             <ListItemAvatar>
               <Avatar>
                 <WorkIcon />
               </Avatar>
             </ListItemAvatar>
             <ListItemText primary="Work" secondary="Jan 7, 2014" />
           </ListItem>
           <ListItem>
             <ListItemAvatar>
               <Avatar>
                 <BeachAccessIcon />
               </Avatar>
             </ListItemAvatar>
             <ListItemText primary="Vacation" secondary="July 20, 2014" />
           </ListItem>
           <ListItem>
              <TextField
                      fullWidth
                      id="new-comment"
                      label="Add a Comment"
                      multiline
                      rows={2}
                      variant="outlined"                     
                    />
           </ListItem>
           <ListItem>
           <Button type="submit" variant="contained">Submit</Button>
           </ListItem>
         </List>
            )}
          </Card>
        </Box>

      </Box>
    </Box>
  );
}
