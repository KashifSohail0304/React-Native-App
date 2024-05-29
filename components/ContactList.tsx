import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Shahid Iqbal',
          status: 'Founder of Mirak Labs ',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxL0Sd3z-nRjmTU_UVta84zEdjBmFQ17p_A&s',
        },
        {
          uid: 2,
          name: 'Kashif Khan',
          status: 'Intern at Mirak Labs',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxL0Sd3z-nRjmTU_UVta84zEdjBmFQ17p_A&s',
        },
        {
          uid: 3,
          name: 'Sohail Quereshi',
          status: 'Software Engineer at Infosys',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxL0Sd3z-nRjmTU_UVta84zEdjBmFQ17p_A&s',
        },
        {
          uid: 4,
          name: 'Mohd Kashif Sohail',
          status: 'Student at BIT',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxL0Sd3z-nRjmTU_UVta84zEdjBmFQ17p_A&s',
        },
      ];
      return (
        <View>
          <Text style={styles.headingText}>ContactList</Text>
          <ScrollView
          style={styles.container}
          scrollEnabled={false}
          >
            {contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                    <Image
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
          </ScrollView>
        </View>
      )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }

})