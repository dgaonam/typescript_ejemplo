import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './componets/Usuario';



export default function App() {
  return (
    <View style={styles.container}>
      <Usuario firstName='Daniel Alejandro' lastName='Gaona Mercado' birthDate='20/05/1986' age={36} token='12345678900' 
      hobbies={[{ hobbie: "dormir", time: 8 },{hobbie:"comer",time:2}]} />
      <Usuario firstName='Daniel Alejandro' lastName='Gaona Bravo' birthDate='06/08/2008' age={14} token='12345678900' />
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
});
