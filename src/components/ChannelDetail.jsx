import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {

  const [channelProfile, setChannelProfile] = useState(null)
  const [videos, setVideos] = useState(null)

  const { id } = useParams()


  // console.log(profileImage,profileTitle);
  // console.log(id);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelProfile(data.items[0]))
  }, [id])

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  }, [id])

  console.log(channelProfile);
  console.log(Videos);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,255,214,1) 0%, rgba(76,68,190,1) 35%, rgba(255,0,224,1) 100%)'
          , height: '300px', zIndex: 10
        }} />
        <ChannelCard channelProfile={channelProfile} marginTop='-100px' />
      </Box>
      <Box sx={{ display: 'flex', p: '2' }} >

      <Box sx={{ mr: { sm: '100px' } ,backgroundColor:'orange' }}/>
        <Videos videos={videos} />

      </Box>

    </Box>
  )
}

export default ChannelDetail