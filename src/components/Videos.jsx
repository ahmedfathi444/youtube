import { Box, Stack } from '@mui/material';
import React from 'react'
import {VideoCard,ChannelCard} from './';





const Videos = ({ videos , direction}) => {


    // console.log(videos);

    if(!videos?.length)return'Loadin...'

    return <>

        <Stack direction={direction || 'row' } flexWrap='wrap' justifyContent='start' gap={3} sx={{margin:'auto'}}>
           {videos?.map((item , idx)=>
           <Box key={idx}>
            {item.id.videoId ? <VideoCard video={item}/>:''}
            {item.id.channelId ? <ChannelCard ChannelDetails={item}/>:''}
           </Box>
           )}
        </Stack>



    </>
}

export default Videos