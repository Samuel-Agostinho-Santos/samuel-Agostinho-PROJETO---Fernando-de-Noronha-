import {View,Text,StyleSheet} from'react-native'

export function Button() {
  return (
    <View>
      <Text style={styles.titulo}>Reserve sua Viagem</Text>
    </View>
  )
}





const styles = StyleSheet.create({
  titulo: {
    color: '#0001ff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#c6e0f2',
    fontSize: 25,
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25
  }
})