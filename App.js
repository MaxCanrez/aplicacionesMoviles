import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>México</Text>
      <Text style={styles.clock}>
        {time.toLocaleTimeString('es-MX', { timeZone: 'America/Mexico_City' })}
      </Text>

      <Text style={styles.title}>Nueva York</Text>
      <Text style={styles.clock}>
        {time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}
      </Text>

      <Text style={styles.title}>Londres</Text>
      <Text style={styles.clock}>
        {time.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })}
      </Text>

      <Text style={styles.title}>Tokio</Text>
      <Text style={styles.clock}>
        {time.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 15,
  },
  clock: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});