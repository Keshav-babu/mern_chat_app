import { Box} from '@chakra-ui/react';
import React from 'react'
import ChatBox from '../component/ChatBox';
import SideDrawer from '../component/miscellaneous/SideDrawer';
import MyChats from '../component/MyChats';
import { ChatState } from '../Context/ChatProvider'

function ChatPage() {
const { user } = ChatState();
  return (
    <div style={{width:'100%'}}>
    {user && <SideDrawer/>}
    <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats/>}
        {user && <ChatBox/>}
    </Box>
    </div>
  )
}

export default ChatPage;