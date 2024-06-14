import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Alert, Image, KeyboardAvoidingView, Platform, ScrollView, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import APIs, { authApi, endpoints } from '../../configs/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyDispatchContext } from '../../configs/Contexts';
import { Firestore } from 'firebase/firestore';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore'
import app from '../../firebaseConfig';
import Background from './Background';
import Styles from './Styles';


const Login = () => {



  const fields = [{
    label: "Tên đăng nhập",
    icon: "text",
    name: "username",
  }, {
    label: "Mật khẩu",
    icon: "eye",
    name: "password",
    secureTextEntry: true
  }]
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useContext(MyDispatchContext)
  const nav = useNavigation();


  const db = getFirestore(app);

  const addUserToFirestore = async (user) => {
    try {
      // Thêm người dùng vào collection 'users' trong Firestore
      await addDoc(collection(db, 'users'), user);
      console.log('User added successfully.');
    } catch (error) {
      console.error('Error adding user to Firestore: ', error);
      // Xử lý lỗi nếu cần thiết
    }
  };



  const updateSate = (field, value) => {
    setUser(current => {
      return { ...current, [field]: value }
    });
  }


  const login = async () => {
    setLoading(true);
    try {
      let res = await APIs.post(endpoints['login'], {
        ...user,
        'client_id': 'ga4gpva8OJ4DDAiZ2MBfH0XkXYiHG02P1Cdq1UUG',
        'client_secret': 'LaMlOXMiVIyFMgawsCqDzAae5rS2RhcEjLTLAQB23sHzZZlIzL7z2zAqJgILhcqpFOzDk713UrYsO67r5HASxjce6fdBh4d1XZ4iczeNzpla8F8kFDeCC86DsbFOvwXS',
        'grant_type': 'password'
      });
      console.info(res.data)
      AsyncStorage.setItem('token', res.data.access_token);

      setTimeout(async () => {
        let user = await authApi(res.data.access_token).get(endpoints['current-user']);
        console.info(user.data);
        const token = res.data.access_token;
        //dispatch: Được lấy từ MyDispatchContext để dispatch các hành động cập nhật trạng thái người dùng toàn cục.
        dispatch({
          'type': "login",
          'payload': { ...user.data, access_token: token }
        })

        // Thêm người dùng vào Firestore
        await addUserToFirestore(user.data);
        nav.navigate('Home');


      }, 100)
      // console.info({
      //   ...user,
      //   'client_id': 'ga4gpva8OJ4DDAiZ2MBfH0XkXYiHG02P1Cdq1UUG',
      //   'client_secret': 'LaMlOXMiVIyFMgawsCqDzAae5rS2RhcEjLTLAQB23sHzZZlIzL7z2zAqJgILhcqpFOzDk713UrYsO67r5HASxjce6fdBh4d1XZ4iczeNzpla8F8kFDeCC86DsbFOvwXS',
      //   'grant_type': 'password'
      // });
    } catch (ex) {
      console.error(ex);
      console.error('Response data:', ex.response?.data);
    } finally {
      setLoading(false)
    }
  }

  return (
    <Background>
      <View style={Styles.container}>
        <Text style={Styles.textTitle}>Đăng nhập</Text>
        <View style={[Styles.form, {alignItems: 'center'}, {paddingTop: 100}]}>
          <Text style={Styles.textContent}>Welcome Back</Text>
          <Text style={Styles.content}>Đăng nhập vào tài khoản của bạn</Text>
          {fields.map(c => <TextInput style={Styles.input} secureTextEntry={c.secureTextEntry} value={user[c.name]} onChangeText={t => updateSate(c.name, t)} key={c.name} label={c.label} right={<TextInput.Icon icon={c.icon} />} />)}
          <Button style={[Styles.button, { marginTop: 160 }]} icon="account" loading={loading} mode="contained" onPress={login}>ĐĂNG NHẬP</Button>
        </View>
      </View>
    </Background>
  )
}
export default Login