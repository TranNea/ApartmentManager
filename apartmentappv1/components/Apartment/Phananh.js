
import MyStyles from "../../styles/MyStyles";

import React, { useState } from "react";
import { Avatar, Button, Card, Chip, List,Searchbar } from "react-native-paper";
import { View,Text,ActivityIndicator,Image, ScrollView, RefreshControl,TouchableOpacity } from "react-native";
import moment from "moment";
import { isCloseToBottom } from "../../Utils/Utils";
import RenderHTML from "react-native-render-html";
import APIs, { endpoints } from "../../configs/APIs";
import { useNavigation } from "@react-navigation/native";

const Phananh = () => {
    const[phananhs,setPhananhs]=useState(null);
    const[phananhId,setPhananhId]=useState("");
    const[loading,setLoading]=useState(false);
    // const LeftContent = props => <Avatar.Icon {...props} icon="account-alert" />

    const nav= useNavigation();


    const loahPhananhs= async () => {
        try{
            let res=await APIs.get(endpoints['phananhs']) 
            setPhananhs(res.data);
        }catch(ex){
            console.error(ex);
        }
    }
    React.useEffect(() => {
        loahPhananhs();
    },[]);


    return(
     
            <View style={ MyStyles.container}>
          <Button icon="plus" mode="contained" onPress={() => {nav.navigate('Themphananh')}}>
                                Thêm phản ánh
            </Button>
            <ScrollView >
            {phananhs === null?<ActivityIndicator />:<> 
            {phananhs.map(c => <Card key={c.id} style={MyStyles.margin} >
                <Card.Title title={c.name} subtitle={c.user.username} 
                left={(props) => <Avatar.Image {...props} source={{ uri: c.user.avatar}} />}
                //  left={(props) => <Avatar.Image {...props} source={{ uri: `https://res.cloudinary.com/dawe6629q/${c.user.avatar}` }} />}
                  />
                
                <Card.Content>
                {/* <Text variant="titleLarge">{c.noiDung}</Text> */}
               <RenderHTML source={{html: c.noiDung}}/>
                </Card.Content>
          {/* https://res.cloudinary.com/dawe6629q/ */}
                <Card.Cover source={{ uri: c.image }} />
                {/* <Card.Cover source={{ uri:`https://res.cloudinary.com/dawe6629q/${c.image}` }} /> */}
                <Text>{moment(c.created_date).calendar()}</Text>
                
            
                <Card.Actions>
                <Button>Cancel</Button>
                <Button>Detail</Button>
                </Card.Actions>
            </Card>
                )}
            </>}
            
            </ScrollView>
        </View>
    )
}
export default Phananh