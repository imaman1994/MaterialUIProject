import { Typography,AppBar,Button,Grid,Toolbar,Container }from '@material-ui/core';
import  { CameraAlt } from '@material-ui/icons';
import CardList from './CardList';
import useStyles from './styles';


function App() {
  const classes = useStyles()
  return (
   <>
   <AppBar>
    <Toolbar position='relative'>
      <CameraAlt/>
      <Typography variant='h6'>
        Photo Album
      </Typography>
    </Toolbar>
   </AppBar>
   <main style={{margin:'5rem'}} className={classes.container}>
    <div >
      <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary'>
            Photo Album
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Hello friend I uploading the photos to help other to create a album.
          </Typography>
      </Container>
    </div>
    <div>
      <Grid container spacing={2} justifyContent='center'>
       <Grid item>
        <Button variant='contained' color='primary'>
          See my photos
        </Button>
       </Grid>
       <Grid item>
        <Button variant='outlined' color='primary'>
          Secondary Action
        </Button>
       </Grid>
      </Grid>
    </div>
    <Container >
        <Grid className={classes.alig}>
           <CardList/>
           <CardList/>
           <CardList/>
        </Grid>
    </Container>
   </main>
   </>
  );
}


export default App;
