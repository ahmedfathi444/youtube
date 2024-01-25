import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

 const ChannelCard = ({ChannelDetails,marginTop,channelProfile}) => {
//  const ImageUrl=ChannelDetails?.snippet?.thumbnails?.high?.url;
//  const profileTitle=ChannelDetails?.snippet?.title;
//  console.log(ImageUrl);
//  console.log(profileTitle);
  console.log(ChannelDetails);
  console.log(channelProfile);

  return (
    <Box sx={{boxShadow:'none',borderRadius:0 ,display:'flex',justifyContent:'center',alignItems:'center',
      width:{ xs:'356px',md:'320px'},height:'326px',margin:'auto',marginTop}} >

      <Link to={`/channel/${ChannelDetails?.id?.channelId}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
       <CardMedia image={ChannelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={ChannelDetails?.snippet?.title} sx={{borderRadius:'50%',height:'200px',width:'200px',mb:2, border:'1px solid #e3e3e3'}}/>
        <Typography variant='h6'>
          {ChannelDetails?.snippet?.title}
          <CheckCircle sx={{color:'gray',fontSize:14,ml:'5px'}}/>
        </Typography>
        {channelProfile?.statistics?.subscriberCount &&(
          <Typography>
            {parseInt(channelProfile?.statistics?.subscriberCount).toLocaleString()}Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>

      

      

    </Box>
  )
}
export default ChannelCard;
