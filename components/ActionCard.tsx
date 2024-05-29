import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]} >
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 24 - ES6
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png',
          }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer} >
            <Text numberOfLines={3}>
            A new version of JS always causes a stir. 
            Since the ES6 update there has been a new version every year, 
            and we're expecting this year's (ES2024) to land around June.
            ES6 was a massive release that came six years after its predecessor, ES5.
             Browser vendors and JavaScript developers were overwhelmed with the sheer number of 
             new features to adopt and learn. Since then, to prevent such a big drop of new features 
             happening at once, there's been a yearly release cycle.
            </Text>
        </View>
        <View style={styles.footerContainer} >
            <TouchableOpacity
            onPress={() => openWebsite('https://www.sitepoint.com/new-javascript-ecmascript/')}
            >
                <Text style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.linkedin.com/in/mohammad-kashif-sohail-khan-38b72122b/')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 26
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }
})