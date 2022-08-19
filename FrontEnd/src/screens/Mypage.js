import { useLayoutEffect } from "react";

const Mypage = ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({headerTitle: route.params.title || 'Mypage'});
    }, []);
}
export default Mypage;