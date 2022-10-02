import React, {useEffect, useState, useRef, useContext} from "react";
import {Keyboard, KeyboardAvoidingView, Text, View} from 'react-native';
//import AsyncStorage from "@react-native-community/async-storage";
import { MemberApi } from "../../api/MemberApi";
import SelectBox from "../../components/SelectBox";
import SignupInput from "../../components/SignupInput";
import Button from "../../components/Button";
import ScreenContainer from "../../components/ScreenContainer";

const SignupScreen = () => {

    const [userInput, setUserInput] = useState("");
    const [field, setField ] = React.useState('');

    const HandleChange = (e, type) => {
        const value = e.target.value;
        
        if(type == 'field')
            setField(value)
    };

    const FIELD_SELECT = ['백엔드', '프론트엔드']

    // useEffect(() => {
    //     const fetchMemberInfo = async () => {
    //         setIsLoading(true);
    //         const newMemberInfo = await MemberApi.get(token);
    //         setMemberInfo(newMemberInfo);
    //         setIsLoading(false);
    //     };
    //     fetchMemberInfo();
    // }, []);

    // /*
    //     AsyncStorage 토큰 저장
    //     -비동기적(async)으로 데이터를 저장 or 불러오며, 영구적으로 저장시킴
    //     -앱이 다운되더라도 기존 저장된 변수 및 세팅 사항들이 보존됨.
    // */
    // const onSubmit = async () => {
    //     Keyboard.dismiss();
    //     setIsLoading(true);
    //     await AsyncStorage.setItem(TOKEN_STORAGE, token);

    //     try{
    //         await MemberApi.patchName(token, userInput);
    //         setMemberInfo({
    //             ...memberInfo,
    //             name: userInput,
    //         });

    //         const formData = new FormData();
    //         formData.append("profile_image", {
    //             uri: memberInfo.profile,
    //             type: "image/jpeg",
    //             name: memberInfo.profile.substring(9),
    //         });
    //         await MemberApi.postProfile(token, formData);
    //         //navigateWithoutHistory(navigation, "ApplicationNavigationRoot");
    //     }catch (error){
    //         console.log(error.response.data.message);
    //     }
    //     setIsLoading(false);
    // };

    return (
        <ScreenContainer>
            <View>
                <SignupInput
                    userInput={userInput}
                />
            </View>
            <View> 
                <SelectBox 
                    value={field}
                    onChange={(e) => HandleChange(e, 'field')}
                >
                    {
                        FIELD_SELECT.map((field, idx) => {
                            return <option key={idx} value={field}>{field}</option>
                        })
                    }
                </SelectBox>
            </View> 
            <View>
                <Button
                    title="Signup"
                    //onPress={__handleSignupButtonPress}
                    //disabled={disabled}
                />
            </View>
        </ScreenContainer>
    );
};

export default SignupScreen;