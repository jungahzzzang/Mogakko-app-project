import { useLayoutEffect } from "react";

const StudyChat = ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({headerTitle: route.params.title || 'Chat'});
    }, []);
}

export default StudyChat;