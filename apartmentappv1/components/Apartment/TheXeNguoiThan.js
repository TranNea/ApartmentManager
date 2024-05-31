import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useContext, useState } from 'react';
import MyStyles from '../../styles/MyStyles';
import APIs, { endpoints } from '../../configs/APIs';
import { MyUserContext } from '../../configs/Contexts';


const TheXeNguoiThan = () => {
    const [name, setName] = useState('');
    const [cccd, setCccd] = useState('');
    const [sdt, setSdt] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const user = useContext(MyUserContext)

    const handleSubmit = async () => {
        if (!name || !cccd || !sdt) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }


        Alert.alert(
            'Xác nhận',
            'Hãy chắc chắn bạn đã điền thông tin chính xác.',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý',
                    onPress: async () => {
                        const formData = new FormData();
                        formData.append('name', name);
                        formData.append('cccd', cccd);
                        formData.append('sdt', sdt);
                        formData.append('user_id', user.id);

                        try {
                            let res = await APIs.post(endpoints['nguoithans'], formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': `Bearer ${user.access_token}`,
                                },
                            });
                            console.log('Success:', res.data);
                            setSuccessMessage('Đăng ký thành công.');
                        } catch (ex) {
                            console.error('Error posting:', ex.response?.data || ex.message);
                            setError('Có lỗi xảy ra khi đăng bài viết.');
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    }


    return (
        <View style={MyStyles.container}>
            <Text style={MyStyles.subject}>ĐĂNG KÍ THÔNG TIN NGƯỜI THÂN</Text>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput
                    placeholder="Họ và tên"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Số căn cước công dân"
                    keyboardType="numeric"
                    value={cccd}
                    onChangeText={setCccd}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Số điện thoại"
                    keyboardType="phone-pad"
                    value={sdt}
                    onChangeText={setSdt}
                    style={styles.input}
                />
                {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
                {successMessage ? <Text style={{ color: 'green', marginTop: 10 }}>{successMessage}</Text> : null}

                <Button onPress={handleSubmit} style={MyStyles.margin} title="Submit" />
            </KeyboardAvoidingView>
        </View>
    )
};
export default TheXeNguoiThan

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});