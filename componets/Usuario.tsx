import { View, Text, StyleSheet } from "react-native";

interface hobbiesProps{
  hobbie: string,
  time: number
}

interface usuarioProps  {
    firstName: string,
    lastName: string,
    age: number,
    birthDate:  string,
    hobbies?: hobbiesProps[],
    token: string
}

const Usuario =({firstName, lastName,age,birthDate,hobbies,token}: usuarioProps)=>{
  return(
    <View style={styles.container}>
        <View style={{flex:1, flexDirection:"column",borderColor: "#000",borderStyle: "solid" }}>
            <Text style={styles.title}>Datos Generales</Text>
            <Text style={styles.label}>First Name: {firstName}</Text>
            <Text style={styles.label}>Last Name: {lastName}</Text>
            <Text style={styles.label}>Age: {age}</Text>
            <Text style={styles.label}>Birth Date: {birthDate}</Text>
            <Text style={styles.label}>Token: {token}</Text>
            <View>
              <Text style={styles.title}>Hobbies</Text>
              {
                hobbies?.map((hobbie)=>(
                  <View key={"hobbie_"+hobbie.hobbie + "_" + hobbie.time} style={{flex: 1, flexDirection:"row",justifyContent: "space-between"}}>
                      <Text style={styles.label}>Hobbie: {hobbie.hobbie}</Text>
                      <Text style={styles.label}>Time: {hobbie.time}</Text>
                  </View>
                ))
              }
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
  },
  label:{
    fontSize: 14,
    textDecorationColor: '#000'
  },
  title:{
    fontSize: 24,
    textDecorationColor: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Usuario;