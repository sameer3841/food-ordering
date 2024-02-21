import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={Object.assign({}, styles.title, styles.text)}>{product.name}</Text>
      <Text style={Object.assign({}, styles.price, styles.text)}>${product.price}</Text>
    </View>
  );
};

export  default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30
  },
  image: {
    width: '90%',
    aspectRatio: 1,
    marginTop: 20,
    marginHorizontal: 20
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
  }
});