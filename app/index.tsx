import { Text, StyleSheet, View } from "react-native";
import Profile from '@/components/molecules/Profile';

export default function Index() {
  const bioText = `Alex Chen is a passionate UX/UI designer with over 8 years of experience creating intuitive, visually striking digital experiences. Based in Vancouver, Alex has a deep love for understanding user behavior, solving complex problems with simple solutions, and enhancing everyday interactions through thoughtful design.
 
Known for a sharp eye for detail, Alex’s work balances creativity with functionality. Whether designing for mobile apps or web platforms, Alex puts the user first, crafting seamless and enjoyable user journeys. In the fast-evolving world of tech, Alex stays ahead of trends, blending innovation with timeless design principles. 

In addition to expertise in tools like Sketch, Figma, and Adobe XD, Alex excels at collaboration, regularly working with developers, marketers, and stakeholders to bring a shared vision to life. When not designing, Alex enjoys exploring new coffee spots around the city and sketching ideas for the next big project.`;
  const nameText = `Alex Chen`;
  const titleText = `UX/UI Designer`;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
      }}
    >
      <Profile nameText={ nameText || 'Data unavailable' } titleText={ titleText || 'Data unavailable' } bioText={ bioText || 'Data unavailable' } profileImage={require('@/assets/images/head.png')}></Profile>
    </View>
  );
}

const styles = StyleSheet.create({
});