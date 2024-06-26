import React, { useContext, useState } from 'react';
import { ScrollView, View, Text, ActivityIndicator, RefreshControl, StyleSheet } from "react-native";
import MyStyles from "../../styles/MyStyles";
import { Checkbox, List, Searchbar, Button } from "react-native-paper";
import { isCloseToBottom } from "../../Utils/Utils";
import APIs, { endpoints } from '../../configs/APIs';
import { useNavigation } from "@react-navigation/native";
import { MyUserContext } from '../../configs/Contexts';

const Dichvu = () => {
    const [dichvus, setDichvus] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [q, setQ] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [selectedServices, setSelectedServices] = useState([]);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const nav = useNavigation();

    const user = useContext(MyUserContext)
    const loadDichVus = async () => {
        if (page > 0) {
            let url = `${endpoints['dichvus']}?q=${q}&page=${page}`
            try {
                setLoading(true)
                let res = await APIs.get(url)
                // let filteredResults = res.data.results.filter(item => item.name.toLowerCase().includes(q.toLowerCase()));
                // console.log(filteredResults)
                //co result vi co phan trang
                if (page === 1)
                    setDichvus(res.data.results);
                else if (page > 1)
                    setDichvus(current => {
                        return [...current, ...res.data.results]
                    });
                if (res.data.next === null)
                    setPage(0);
            } catch (ex) {
                console.error(ex);
            } finally {
                setLoading(false);
            }
        }
    }
    const handleSubmit = async () => {
        if (selectedServices.length === 0) {
            setError('Vui lòng điền đầy đủ thông tin và tải lên hình ảnh.');
            return;
        }

        const formData = new FormData();

        formData.append('thongTinHD', "noiDung");

        selectedServices.forEach(service => {
            formData.append('dichVu', service.id); // Gửi từng ID dịch vụ riêng lẻ
        });

        console.log('FormData to be sent:', formData);

        try {
            let res = await APIs.post(endpoints['themhoadon'], formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${user.access_token}`,
                },
            });
            console.log('Success:', res.data);
            setSuccessMessage('DANG KI THANH CONG.');
        } catch (ex) {
            console.error(ex)
            console.error('Error posting:', ex.res?.data || ex.message);
            setError('Có lỗi xảy ra khi DK DV.');
        }
    };


    React.useEffect(() => {
        loadDichVus()
        // console.log(selectedServices)
    }, [q, page])

    const loadMore = ({ nativeEvent }) => {
        if (loading === false && isCloseToBottom(nativeEvent) && page > 0) {
            setPage(page + 1);
        }
    }

    const search = (value, callback) => {
        setPage(1);
        callback(value);
        loadDichVus();
    }

    const checked = (index) => {
        const updatedDichvus = dichvus.map((item, i) => {
            if (i === index) {
                const updatedItem = { ...item, checked: !item.checked };
                if (updatedItem.checked) {
                    setSelectedServices([...selectedServices, updatedItem]);
                } else {
                    setSelectedServices(selectedServices.filter((service) => service.id !== updatedItem.id));
                }
                return updatedItem;
            }
            return item;
        });
        setDichvus(updatedDichvus);
    };


    return (
        <View style={MyStyles.container}>
            <Text style={MyStyles.subject}>DANH SÁCH DỊCH VỤ TRONG CHUNG CƯ</Text>
            <View>
                <Searchbar style={{ backgroundColor: '#F5EFE6' }} placeholder="Tìm dịch vụ..." value={q} onChangeText={t => search(t)} />
            </View>
            <ScrollView onScroll={loadMore}>
                <RefreshControl refreshing={loading} onRefresh={() => loadDichVus()} />
                {loading && <ActivityIndicator />}

                {dichvus.map((c, index) => (
                    <List.Item
                        style={styles.listItem}
                        key={c.id}
                        title={
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox
                                    status={c.checked ? 'checked' : 'unchecked'}
                                    onPress={() => checked(index)}
                                    color="#1A4D2E"
                                />
                                <Text>{c.name}</Text>
                            </View>
                        }
                        description={`Mô tả: ${c.thongTinDV.replace(/<\/?p>/g, '')}\nGiá dịch vụ: ${c.giaDV} VND`}
                    />
                ))}

                {loading && page > 1 && <ActivityIndicator />}
            </ScrollView>
            <Button style={MyStyles.button} mode="contained" onPress={handleSubmit}>Xác nhận</Button>

            {error ? <Text style={MyStyles.errorText}>{error}</Text> : null}
            {successMessage ? <Text style={MyStyles.successText}>{successMessage}</Text> : null}
        </View>
    );
};
export default Dichvu

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 5,
        backgroundColor: '#FEFAF6',
        borderRadius: 5,
    },
});
