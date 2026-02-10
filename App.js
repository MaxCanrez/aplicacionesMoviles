import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const [numberLikes, setNumberLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikes = () => {
    if (isLiked) {
      setNumberLikes(numberLikes - 1);
      setIsLiked(false);
    } else {
      setNumberLikes(numberLikes + 1);
      setIsLiked(true);
    }
  };

  const handleSave = () => {
    if (isSaved) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('./assets/images/profile.png')} style={styles.profileImage} />
          <Text style={styles.username}>Dark Oficial</Text>
        </View>
        <Image source={require('./assets/images/menu.png')} style={styles.icon} />
      </View>
      <View style={styles.postContainer}>
        <Image source={require('./assets/images/dark.jpg')} style={styles.postImage} />
      </View>
      <View style={styles.actions}>
        <View style={styles.actions2}>

          <TouchableOpacity onPress={handleLikes}>
            <Image
              source={
                isLiked
                  ? require('./assets/images/like.png')
                  : require('./assets/images/heart.png')
              }
              style={styles.icon}
            />
          </TouchableOpacity>

          <Text style={styles.numberLikes}>{numberLikes}</Text>

          <Image source={require('./assets/images/coment.png')} style={styles.icon} />
          <Image source={require('./assets/images/share.png')} style={styles.icon} />
        </View>

        <TouchableOpacity onPress={handleSave}>
          <Image
            source={
              isSaved
                ? require('./assets/images/save.png')
                : require('./assets/images/saveColor.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.views}>17,280 views</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>Dark </Text>
          First image of dark
        </Text>

        <Text style={styles.comments}>View all 370 comments</Text>
      </View>

      <View style={styles.navigation}>
        <Image source={require('./assets/images/home.png')} style={styles.icon} />
        <Image source={require('./assets/images/search.png')} style={styles.icon} />
        <Image source={require('./assets/images/add.png')} style={styles.icon} />
        <Image source={require('./assets/images/heart.png')} style={styles.icon} />
        <Image source={require('./assets/images/profile.png')} style={styles.icon} />
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingTop: 40,
    paddingBottom: 30,
  },


  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  header: {
    marginTop: '12%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 10,
  },

  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  postContainer: {
    width: '100%',
    height: 350,
    marginTop: 10,
  },

  postImage: {
    width: '100%',
    height: '100%',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },

  actions2: {
    flexDirection: 'row',
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  infoContainer: {
    paddingHorizontal: 15,
    marginTop: 5,
  },

  views: {
    fontWeight: 'bold',
    marginBottom: 4,
  },

  caption: {
    fontSize: 13,
    marginBottom: 3,
  },

  comments: {
    color: 'gray',
    fontSize: 12,
    marginBottom: 2,
  },

  navigation: {
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: 20,
  },


  numberLikes: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 12,
  },
});
