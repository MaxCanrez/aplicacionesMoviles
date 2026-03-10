import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("Estado neutral");
  const [imagen, setImagen] = useState(require("./assets/images/neutro.png"));

  useEffect(() => {

    if (contador > 5) {
      setMensaje("¡Te sientes feliz!");
      setImagen(require("./assets/images/felicidad.png"));
    }

    else if (contador < 0) {
      setMensaje("Te sientes triste");
      setImagen(require("./assets/images/tristeza.jpeg"));
    }

    else {
      setMensaje("Estado neutral");
      setImagen(require("./assets/images/neutro.png"));
    }

  }, [contador]);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contador de Ánimo</Text>

      <Text style={styles.contador}>{contador}</Text>

      <Image source={imagen} style={styles.imagen} />

      <Text style={styles.mensaje}>{mensaje}</Text>

      <View style={styles.botones}>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.textoBoton}>Subir ánimo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContador(contador - 1)}
        >
          <Text style={styles.textoBoton}>Bajar ánimo</Text>
        </TouchableOpacity>

      </View>

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

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  contador: {
    fontSize: 40,
    marginBottom: 20,
  },

  mensaje: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  imagen: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  botones: {
    flexDirection: "row",
    gap: 20,
  },

  boton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  textoBoton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});