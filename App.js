import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';


export default function App() {

  const [followers, setFollowers] = useState(128);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    if (isFollowing) {
      if (followers > 0) setFollowers(followers - 1);
      setIsFollowing(false);
    } else {
      setFollowers(followers + 1);
      setIsFollowing(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>


      <Text style={styles.logo}>Instagram</Text>


      <View style={styles.profileSection}>

        <Image
          source={require('./assets/images/profile.png')}
          style={styles.profileImage}
        />

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>210</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>


      <View style={styles.bioSection}>
        <Text style={styles.username}>Max Canrez</Text>
        <Text style={styles.bio}>
          Developer 💻 | React Native
          {'\n'}Aprendiendo interfaces móviles
        </Text>
      </View>


      <TouchableOpacity
        style={[styles.followButton, isFollowing && styles.unfollowButton]}
        onPress={handleFollow}
      >
        <Feather
          name={isFollowing ? "user-minus" : "user-plus"}
          size={18}
          color={isFollowing ? "#000" : "#fff"}
        />

        <Text style={[styles.followText, isFollowing && styles.unfollowText]}>
          {isFollowing ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>


      <View style={styles.tabs}>
        <Feather name="grid" size={24} color="#000" />
        <Feather name="user" size={24} color="gray" />
      </View>


      <View style={styles.grid}>
        <Image source={require('./assets/images/dark.jpg')} style={styles.post} />
        <Image source={require('./assets/images/onePiece.png')} style={styles.post} />
        <Image source={require('./assets/images/avatar.png')} style={styles.post} />
        <Image source={require('./assets/images/invincible.png')} style={styles.post} />
        <Image source={require('./assets/images/KSK.png')} style={styles.post} />
        <Image source={require('./assets/images/got.png')} style={styles.post} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingBottom: 40,
  },

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  stats: {
    flexDirection: 'row',
    marginLeft: 20,
    flex: 1,
    justifyContent: 'space-around',
  },

  statBox: {
    alignItems: 'center',
  },

  statNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  statLabel: {
    color: 'gray',
    fontSize: 12,
  },

  bioSection: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  username: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  bio: {
    marginTop: 4,
    fontSize: 13,
  },

  followButton: {
    flexDirection: 'row',
    backgroundColor: '#0095f6',
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  unfollowButton: {
    backgroundColor: '#efefef',
  },

  followText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },

  unfollowText: {
    color: '#000',
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  post: {
    width: '33.33%',
    height: 200,
  },

});
