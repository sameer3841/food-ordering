import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { Product } from '../types';

export const defaultPizzaImg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png';

type ProductListItemProp = {
    product: Product;
}
const ProductListItem = ({ product }: ProductListItemProp) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image || defaultPizzaImg}} 
      style={styles.image}
      resizeMode='contain'
      />
      <Text style={Object.assign({}, styles.title, styles.text)}>{product.name}</Text>
      <Text style={Object.assign({}, styles.price, styles.text)}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    flex: 1,
    maxWidth: '50%'
  },
  image: {
    width: '90%',
    aspectRatio: 1,
    marginTop: 20,
    marginHorizontal: 13
  },
  title: {
    fontSize:18, 
    fontWeight:'600',
    marginVertical: 10
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold' 
  },
  text:{
    marginLeft: 10,
    textAlign: 'center'
  }
});