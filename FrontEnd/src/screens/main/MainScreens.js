import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {View, Text} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import {Ionicons} from '@expo/vector-icons'; 
import ScreenContainer from "../../components/ScreenContainer";
import SearchBar from "../../components/Searchbar";

const MainScreen = () => {

    const images = [
        require('../../../assets/image/banner/banner_sample1.png'),
        require('../../../assets/image/banner/banner_sample2.png'),
        require('../../../assets/image/banner/banner_sample3.png'),
    ];

    const [keyword, setKeyword] = useState("");

    return(
        <ScreenContainer>
            <SearchBar
                value={keyword}
                onChangeText={text=>setKeyword(text)}
                placeholder="검색어를 입력하세요."
            />
            <SliderBox
                    images={images}
                    autoplay={true} //자동 슬라이더 넘김
                    circleLoop={true}   //맨끝 슬라이드에서 다시 첫 슬라이드로
                    onCurrentImagePressed={index => alert(`image ${index} pressed`)}
                    ImageComponentStyle={{width: wp('100%'), height: hp('25%'), marginTop: 50}}    //이미지 Style 적용
                    resizeMode="cover"
            />

            <Text>
                실시간 스터디 후기
                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="black"
                />
            </Text>
        </ScreenContainer>
    );
}

export default MainScreen;