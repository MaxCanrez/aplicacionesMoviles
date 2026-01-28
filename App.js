import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.texTitle}>
          Game of Thrones
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/images/got.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.descriptionText}>
        Me gusta Game of Thrones porque es una serie con muy buenas actuaciones,
        lo que genera personajes icónicos. El guion es sólido, la historia es
        interesante y el ambiente medieval con fantasía me encanta. Además,
        tiene una excelente banda sonora desde la intro hasta las canciones
        que acompañan las escenas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  titleContainer: {
    width: "100%",
    marginTop: "13%",
  },
  texTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#fff",
    textAlign: 'center',
  },
  imageContainer: {
    width: "100%",
    height: "55%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50%',
    height: '41%',
  },
  descriptionText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    padding: 23,
  },
});
