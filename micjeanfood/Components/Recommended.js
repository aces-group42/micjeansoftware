import { useNavigation } from '@react-navigation/native'
import { ScrollView,Text } from 'react-native'
import RecommendedCard from './RecommendedCard'


const Recommended = () => {
  
  return (
    <ScrollView horizontal
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }} showsHorizontalScrollIndicator={false}>
      <RecommendedCard title="GH₵ 14.00" imgUrl="https://gajreport.com/wp-content/uploads/2022/07/Do-you-still-enjoy-eating-Gob3.jpg"/>
      <RecommendedCard title="GH₵ 14.00" imgUrl="https://eatwellabi.com/wp-content/uploads/2021/09/Waakye-13.jpg"/>
      {/* <CategoryCard title="Testing" imgUrl="https://kuulpeeps.com/wp-content/uploads/2019/12/Red-Red-Ghanaian-Beans-Stew-696x753.jpg"/> */}
      <RecommendedCard title="GH₵ 14.00" imgUrl="https://preview.redd.it/eczsgytngiv41.jpg?auto=webp&s=6e3dbc46fade08328385a54e24bbc538a3d9f468"/>
      <RecommendedCard title="GH₵ 14.00" imgUrl="https://eatwellabi.com/wp-content/uploads/2021/09/Waakye-13.jpg"/>
      <RecommendedCard title="GH₵ 14.00" imgUrl="https://i.pinimg.com/originals/59/8b/1f/598b1f02185c60a25d0f257f6755e7e6.jpg"/>
    </ScrollView>
  )
}

export default Recommended