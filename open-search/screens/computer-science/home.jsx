import { Image, StyleSheet, Text, View } from "react-native"
import { fontFamilies } from '../../constants/fonts';



function TopicTitle(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Computer Science</Text>
            <Image style={styles.topic_image}source={require('../../images/ComputerScienceBackgroundRemoved.png')} />
        </View>
      


)}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40,
      },
      title: {
        color: "#67BAFF",
        fontFamily: fontFamilies.QUICKSAND.bold,
        fontSize: 30,
      },
      topic_image: {
        width: '300',
        height: '300',
        resizeMode: 'contain',
      }
});

export default TopicTitle;
