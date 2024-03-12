import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style ={styles.container}
        source = {{uri:'https://wallpaper4k.com.br/wp-content/uploads/2022/09/wallpapers-do-rel-mpago-mcqueen-em-4k-para-pc-e-celular-3-scaled.jpg'}}

      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 800,
  },
});
