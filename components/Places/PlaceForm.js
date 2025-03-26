import { useCallback, useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "../../constants/colors"
import ImagePicker from "./ImagePicker"
import LocationPicker from "./LokationPicker"
import Button from "../UI/Button"

function PlaceForm(){
    const [enteredTitle, setEnteredtitle] = useState('')
    const [pickedLocaton, setPickedLocaton] = useState()
    const [selectedImage, setSelectedImage] = useState()
    function changeTitleHandler(enteredText){
        setEnteredtitle(enteredText)
    }
    function takeImageHandler(enteredText){
        setSelectedImage(enteredText)
    }
    const pickLocationHandler = useCallback((location) =>{
        setPickedLocaton(location)

    }, [])
    function savePlaceHandler(){
        console.log(enteredTitle)
        console.log(selectedImage)
        console.log(pickedLocaton)
    }
    return (
      <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>
                Title
            </Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}/>
        </View>
        <ImagePicker onImageTaken={takeImageHandler}/>
        <LocationPicker onLocationPick={pickLocationHandler}/>
        <Button onPress={savePlaceHandler} >Add Place</Button>
      </ScrollView>
    ) 

}
export default PlaceForm

const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:24

    },
    label:{
        fontWeight:'bold',
        marginBottom:4,
        color: Colors.primary500

    },
    input:{
        marginVertical:8,
        paddingHorizontal:4,
        paddingVertical: 8,
        fontSize:16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth:2,
        backgroundColor: Colors.primary100

    }
})