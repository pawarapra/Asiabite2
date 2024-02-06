/**
 * - This view will load details for a specific item (flower in this example)
 * - It is invoked from the FlowerList and the handler that calls the screen 
 *   will also excapsulate an id in the request.  This id is used to then get the specific flower to load
 * - Alternatively we could pass the whole flower object but it's usually better to make a fresh request
 *   from your data source in case data has been updated
 */
import { StyleSheet, View, Text, Image,Button } from 'react-native';

// data file used to mock requests
import { getFlowerById } from '../data/flower-data';

// the route param stores the route request used to call this screen
// this includes any encapsulated parameters
export default function FlowerDetailScreen({ route, navigation }) {

  // extract the id from route prop
  // this approach is called obj destrucuring (more next week)
  // simple approach still work
  // const detailId = route.param.detailId;
  // this approach is called object destructuring (more next week)
  const {detailId} = route.params;

  //console.log('id passed is: ' + detailId);


  const currFlower = getFlowerById(detailId);

  //console.log(currFlower);



  return (
    <View style={styles.container}>
      {/* <Text>Specific flower will be shown based on passed data</Text> */}
      <Image style={styles.flowerImage} source={{uri:currFlower.imageUri}} />
      <Text style={styles.heading}>{currFlower.title}</Text>
      <Text>{currFlower.description}</Text>

      <Button
        title="Sub"
        onPress={() => navigation.navigate('SubPage')}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  heading: {
    color: '#0000cc',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  flowerImage: {
    aspectRatio: 1,
    height: 350,
    width: '100%'
  },
});