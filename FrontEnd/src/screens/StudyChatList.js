
const StudyChatList = ({navigation}) => {
    return (
        <Container>
            <Text>Chat List</Text>
            <Button title="Chat Creation" onPress={()=>navigation.navigate('Chat Creation')}/>
        </Container>
    )
}

export default StudyChatList;