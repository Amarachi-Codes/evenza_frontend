import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaLocationDot } from "react-icons/fa6";
import "./Card.css"
import { IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

interface IEventCard{
  logo: string
  title:string
  date: string
  image:string
  location:string
  
}

export default function RecipeReviewCard({ logo,title,date,image,location}:IEventCard) {
  // const navigate = useNavigate();
  //    const navigateTo = (path: string) => {
  //    navigate(path);
    


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {logo}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       
        title={title}
         
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        
        image={image}
        alt="virtual networking"
      />
      <CardContent className='card-content-wrapper'>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <FaLocationDot />{location}
        </Typography>

        

        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  />
        </IconButton>
        <IconButton aria-label="share" >
          <ShareIcon  />
        </IconButton>
        </CardActions>
      </CardContent>

      <button className='bookButton' >Book</button>
      
    </Card>
  );
}

