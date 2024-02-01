import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      paddingHorizontal: 15,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#fff',
    },
    infoContainer: {
      marginBottom: 16,
    },
    infoText: {
      fontSize: 18,
      marginBottom: 8,
      color: '#fff',
    },
    addressNote: {
      fontSize: 16,
      marginBottom: 16,
      color: '#ddd',
    },
    thankYouText: {
      fontSize: 20,
      textAlign: 'center',
      color: '#4CAF50',
    },
  });