import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CalculoTempoDownload = () => {
  const [tamanhoArquivo, setTamanhoArquivo] = useState("");
  const [velocidadeInternet, setVelocidadeInternet] = useState("");
  const [tempoDownload, setTempoDownload] = useState(null);

  const calcularTempo = () => {
    const tamanho = parseFloat(tamanhoArquivo);
    const velocidade = parseFloat(velocidadeInternet);
    
    if (isNaN(tamanho) || tamanho <= 0 || isNaN(velocidade) || velocidade <= 0) {
      alert("Insira valores válidos para o cálculo do tempo de download.");
      return;
    }
    
    const tempoSegundos = tamanho / (velocidade / 8);
    const tempoMinutos = tempoSegundos / 60;
    setTempoDownload(tempoMinutos.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tamanho do Arquivo (MB):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tamanhoArquivo}
        onChangeText={setTamanhoArquivo}
      />

      <Text style={styles.label}>Velocidade da Internet (Mbps):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={velocidadeInternet}
        onChangeText={setVelocidadeInternet}
      />

      <Button title="Calcular Tempo de Download" onPress={calcularTempo} />

      {tempoDownload !== null && (
        <View>
          <Text style={styles.result}>Tempo Aproximado: {tempoDownload} minutos</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default CalculoTempoDownload;