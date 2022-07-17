import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Box, Button, Grid, List, Modal} from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const RecipeList=({item})=> {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const recipe = item.recipe;
    return (
        <Grid item xs={4}>
            <Button onClick={handleOpen}>
            <Card sx={{ maxWidth: 500 }}>
                    <CardHeader
                        title={recipe.label}
                        sx={{textAlign:'center',color:'#000'}}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={recipe.image}
                        alt={recipe.label}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>

                </Card>
        </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {recipe.label}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2"  sx={{ mt: 2,fontWeight:600 }}>
                        Recipe
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <List>
                        {recipe.ingredientLines.map((item,index)=>{
                            return(
                                <ListItem component="div" disablePadding>
                                    <ListItemText primary={`${index+1}. ${item}`} />
                                </ListItem>
                            )
                        })}
                    </List>
                    </Typography>
                </Box>
            </Modal>
        </Grid>

    );
}
