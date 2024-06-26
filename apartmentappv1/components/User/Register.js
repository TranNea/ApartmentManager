import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, TouchableRipple, Button, HelperText } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import APIs, { endpoints } from '../../configs/APIs';
import MyStyles from "../../styles/MyStyles";
import Background from './Background';
import Styles from './Styles';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const nav = useNavigation();

  const picker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("ApartmentApp", "Permissions Denied!!");
    } else {
      let res = await ImagePicker.launchImageLibraryAsync();
      if (!res.canceled) {
        setAvatar(res.assets[0]);
      }
    }
  }

  const register = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu không khớp!");
      setErr(true);
    } else {
      setErr(false);
      setLoading(true);
      try {
        let form = new FormData();
        form.append('username', username);
        form.append('email', email);
        form.append('password', password);
        if (avatar) {
          form.append('avatar', {
            uri: avatar.uri,
            name: avatar.uri.split('/').pop(),
            type: 'image/jpeg'
          });
        }
        let res = await APIs.post(endpoints['register'], form, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (res.status === 201) {
          nav.navigate("Login");
        }
      } catch (ex) {
        console.error(ex);
        if (ex.response && ex.response.status === 400) {
          setErrorMessage("Thông tin đăng ký không hợp lệ. Vui lòng kiểm tra lại.");
          // Bạn có thể truy cập thông tin chi tiết từ ex.response.data nếu cần
        } else {
          setErrorMessage("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
        }
        setErr(true);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === 'ios' ? '40' : '0'}>
        <View style={Styles.container}>
          <Text style={Styles.textTitle}>Đăng kí</Text>
          <ScrollView style={[Styles.form, { paddingTop: 50 }]}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={Styles.input}
              label="Tên đăng nhập"
              right={<TextInput.Icon icon="account" />}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={Styles.input}
              label="Email"
              right={<TextInput.Icon icon="email" />}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={Styles.input}
              label="Mật khẩu"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={Styles.input}
              label="Xác nhận mật khẩu"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />
            <TouchableRipple onPress={picker}>
              <Text style={[Styles.content, { alignSelf: 'center', paddingTop: 10 }]} icon="image">Chọn ảnh đại diện</Text>
            </TouchableRipple>
            {avatar && <Image style={[MyStyles.avatar, { alignSelf: 'center' }]} source={{ uri: avatar.uri }} />}
            <HelperText type="error" visible={err}>
              {errorMessage}
            </HelperText>
            <Button loading={loading} onPress={register} style={[Styles.button]} mode="contained" icon="account">
              ĐĂNG KÍ
            </Button>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Background>
  )
};
export default Register;


