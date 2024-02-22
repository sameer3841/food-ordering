import { View, Text, Image, StyleSheet } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products';
import { defaultPizzaImg } from '@/components/ProductListItem';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  if(!product) return <Text>Product not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product?.name}}/>
      <Image source={{uri: product.image || defaultPizzaImg}} style={styles.image} />
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
    
  },
  price: {
    fontSize:20,
    fontWeight: '600'
  },
});

export default ProductDetailsScreen;