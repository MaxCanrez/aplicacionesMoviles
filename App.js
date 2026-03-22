import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [clima, setClima] = useState("neutral");
  const [mensaje, setMensaje] = useState("Selecciona un clima");
  const [imagen, setImagen] = useState(require("./assets/images/neutro.png"));
  const [temperatura, setTemperatura] = useState(0);
  const [ciudad, setCiudad] = useState("");

  const [colorFondo, setColorFondo] = useState("#ffffff");
  const [colorTexto, setColorTexto] = useState("#000000");

  useEffect(() => {

    if (clima === "soleado") {
      setMensaje("Esta soleado, usa bloqueador si vas a salir ! ");
      setImagen(require("./assets/images/soleado.png"));
      setTemperatura(Math.floor(Math.random() * 10) + 25);
      setColorFondo("#FFD54F");
      setColorTexto("#000");
    }

    else if (clima === "nublado") {
      setMensaje("El día está para café y libro XD ");
      setImagen(require("./assets/images/nublado.png"));
      setTemperatura(Math.floor(Math.random() * 5) + 18);
      setColorFondo("#90A4AE");
      setColorTexto("#000");
    }

    else if (clima === "lluvioso") {
      setMensaje("No olvides tu paraguas o te mojas ");
      setImagen(require("./assets/images/lluvioso.png"));
      setTemperatura(Math.floor(Math.random() * 5) + 15);
      setColorFondo("#4FC3F7");
      setColorTexto("#000");
    }

    else if (clima === "tormenta") {
      setMensaje("Mejor quedarse en casa por las inundaciones ");
      setImagen(require("./assets/images/tormenta.png"));
      setTemperatura(Math.floor(Math.random() * 5) + 10);
      setColorFondo("#37474F");
      setColorTexto("#fff");
    }

    else {
      setMensaje("Selecciona un clima");
      setImagen(require("./assets/images/neutro.png"));
      setTemperatura(0);
      setColorFondo("#ffffff");
      setColorTexto("#000");
    }

  }, [clima]);

  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>

      <Text style={[styles.titulo, { color: colorTexto }]}>
        Simulador de Clima
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu ciudad"
        value={ciudad}
        onChangeText={setCiudad}
      />

      <Text style={[styles.ciudad, { color: colorTexto }]}>
        {ciudad}
      </Text>

      {/* 🔥 CARD DEL CLIMA */}
      <View style={[
        styles.card,
        { backgroundColor: colorTexto === "#fff" ? "#455A64" : "#fff" }
      ]}>

        <Text style={[styles.temperatura, { color: colorTexto }]}>
          {temperatura}°C
        </Text>

        <Image source={imagen} style={styles.imagen} />

        <Text style={[styles.mensaje, { color: colorTexto }]}>
          {mensaje}
        </Text>

      </View>

      <View style={styles.botones}>

        <TouchableOpacity style={styles.boton} onPress={() => setClima("soleado")}>
          <Text style={styles.textoBoton}>Soleado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setClima("nublado")}>
          <Text style={styles.textoBoton}>Nublado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setClima("lluvioso")}>
          <Text style={styles.textoBoton}>Lluvioso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setClima("tormenta")}>
          <Text style={styles.textoBoton}>Tormenta</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff"
  },

  ciudad: {
    fontSize: 18,
    marginBottom: 10,
  },

  // 🔥 CARD
  card: {
    width: 260,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#ddd',

    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    marginBottom: 20,
  },

  temperatura: {
    fontSize: 40,
    marginBottom: 10,
  },

  imagen: {
    width: 140,
    height: 140,
    marginBottom: 15,
  },

  mensaje: {
    fontSize: 16,
    textAlign: 'center',
  },

  botones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  boton: {
    backgroundColor: "#333",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },

  textoBoton: {
    color: "#fff",
    fontWeight: 'bold',
  }
});