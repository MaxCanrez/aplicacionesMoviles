import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.header}>

        <View style={styles.userInfo}>
          <Image
            source={require('./assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Username</Text>
        </View>

        <Image
          source={require('./assets/images/menu.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.postContainer}>
        <Image
          source={require('./assets/images/dark.jpg')}
          style={styles.postImage}
        />
      </View>
      <View style={styles.actions}>
        <View style={styles.actions2}>
          <Image source={require('./assets/images/like.png')} style={styles.icon} />
          <Image source={require('./assets/images/coment.png')} style={styles.icon} />
          <Image source={require('./assets/images/share.png')} style={styles.icon} />
        </View>
        <Image
          source={require('./assets/images/save.png')}
          style={styles.icon}
        />
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 40,
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
});
