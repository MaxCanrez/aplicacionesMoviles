import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Dark</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/images/dark.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Dark es una serie alemana de ciencia ficción que explora los viajes en el tiempo y los secretos de varias generaciones.
        </Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>
          Dark fue una de las primeras series que vi en Netflix y me encantó. Si te gustan las series de mucho suspenso y los viajes en el tiempo, recomiendo verla.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c4f57',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  titleContainer: {
    width: '100%',
    marginTop: '13%',
  },

  textTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  imageContainer: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '55%',
    height: '70%',
    borderRadius: 20,
  },

  descriptionContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  descriptionText: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
  },

  aboutContainer: {
    marginTop: 30,
    backgroundColor: '#59757c',
    padding: 20,
    borderRadius: 12,
    width: '85%',
  },

  aboutText: {
    fontSize: 14,
    color: '#e0f7fa',
    marginBottom: 5,
    textAlign: 'center',
  },
});
