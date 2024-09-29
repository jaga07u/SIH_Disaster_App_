import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import SocialMediaCard from './SocialMediaCard';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NewsPortalCards from './NewsPortalCards';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const News = () => {
  const YouTubeData = [
    {
      platform: 'CNN',
      image: 'https://i.natgeofe.com/n/acfc7060-65d7-4511-bac6-2159c87ea3c0/NationalGeographic_2781401_square.jpg',
      title: 'Breaking: Major Earthquake Hits City, Thousands Affected',
      link: 'https://www.thehindu.com/sci-tech/energy-and-environment/ngt-impleads-kerala-tn-govts-in-suo-motu-case-on-wayanad-landslides/article68477558.ece',
    },
    {
      platform: 'BBC',
      image: 'https://cdn.britannica.com/45/186045-050-03EB7C3C/Damage-city-island-Tacloban-Philippine-Super-Typhoon-November-8-2013.jpg',
      title: 'Global Warming: Arctic Ice at Record Low Levels',
      link: 'https://www.thehindu.com/sci-tech/energy-and-environment/ngt-impleads-kerala-tn-govts-in-suo-motu-case-on-wayanad-landslides/article68477558.ece',
    },
    {
      platform: 'Al Jazeera',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhd_Izjp4uAuPPd-agBNBkzYXJNo4BEpM8FkIpWv4npSrksjyaVL5w7tK0Mg1tkLUFbE&usqp=CAU',
      title: 'Cyclone Biparjoy Wreaks Havoc in Gujarat',
      link: 'https://www.thehindu.com/sci-tech/energy-and-environment/ngt-impleads-kerala-tn-govts-in-suo-motu-case-on-wayanad-landslides/article68477558.ece',
    },
    {
      platform: 'The Guardian',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbjB342eK6otDuR8Pj1uy8szgK6L3HYQcQg&s',
      title: 'Floods Kill at Least 182 in Afghanistan',
      link: 'https://www.thehindu.com/sci-tech/energy-and-environment/ngt-impleads-kerala-tn-govts-in-suo-motu-case-on-wayanad-landslides/article68477558.ece',
    },
    {
      platform: 'Reuters',
      image: 'https://e3.365dm.com/24/09/768x432/skynews-nepal-floods_6699238.jpg?20240928143301',
      title: 'Tropical Weather: Flooding Continues After Helene',
      link: 'https://www.thehindu.com/sci-tech/energy-and-environment/ngt-impleads-kerala-tn-govts-in-suo-motu-case-on-wayanad-landslides/article68477558.ece',
    },
  ];

  const TwitterData = [
    {
      platform: 'CNN',
      image: 'https://i.guim.co.uk/img/media/9779346dfef5ba276065a06bcbe63dfc6d978d94/0_233_3500_2101/master/3500.jpg?width=620&dpr=2&s=none',
      title: 'Zombie’ storm Hurricane John regains strength as it returns to Mexico',
      link: "https://www.theguardian.com/world/2024/sep/26/hurricane-john-zombie-storm-mexico",
    },
    {
      platform: 'BBC',
      image: 'https://i.guim.co.uk/img/media/315d5e9e6d7156ab2f04f0905926837bf39dd685/0_0_6720_4218/master/6720.jpg?width=620&dpr=2&s=none',
      title: 'A break from the heat: Americans most affected by the climate crisis',
      link: "https://www.theguardian.com/us-news/2024/sep/22/climate-crisis-americans-move-midwest",
    },
    {
      platform: 'Al Jazeera',
      image: 'https://i.guim.co.uk/img/media/e243e5c41694d6cde3bfcf33f40a00f8a62af0db/0_143_3968_2381/master/3968.jpg?width=620&dpr=2&s=none',
      title: 'Typhoon Shanshan: Japan prepares for disaster',
      link: "https://www.theguardian.com/world/article/2024/aug/29/japan-typhoon-shanshan-damage-deaths-kyushu",
    },
  ];

  const newsData = [
    {
      title: 'Heavy Rain Causes Flooding in Uttarakhand, 15 Dead, Dozens Missing',
      source: 'Aljazeera',
      image: 'https://www.aljazeera.com/wp-content/uploads/2023/08/AP23226419436740-1692023591.jpg?w=770&resize=770%2C513',
      link: 'https://www.aljazeera.com/news/2023/8/14/dozens-dead-as-floods-landslides-hit-indias-himalayan-region',
    },
    {
      title: 'Assam Floods Displace Over 2 Lakh People, Rescue Operations Ongoing',
      source: 'VIF India',
      image: 'https://www.vifindia.org/sites/default/files/Picture1_38.jpg',
      link: 'https://www.vifindia.org/article/2022/july/04/floods-in-assam-the-case-for-rethinking-adaptation',
    },
    {
      title: 'Cyclone Biparjoy Wreaks Havoc in Gujarat, 8 Dead, Thousands Evacuated',
      source: 'Indian Express',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMObE3VpRClvh2XKE9mX8XjcHbzr4X_6O87Ti6n5GtLThwPvpyxUu2zbnm5nmxDFLNoo&usqp=CAU',
      link: 'https://www.newindianexpress.com/nation/2023/Jun/17/weatheringbiparjoy-storm-that-left-behind-a-trail-of-destruction-2585817.html',
    },
  ];
  

  const [selectedPlatform, setSelectedPlatform] = useState('');

  const renderRadioButton = (platform) => {
    return (
      <TouchableOpacity
        style={styles.radioButtonContainer}
        onPress={() => setSelectedPlatform(platform)}
      >
        <View style={styles.radioButton}>
          {selectedPlatform === platform && <View style={styles.radioButtonSelected} />}
        </View>
        <Text style={styles.radioButtonLabel}>{platform}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Location and Search Section */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>📍Bhubaneswar</Text>
        <Text style={styles.subLocationText}>Devik Vihar, Tamando</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBar} placeholder="Search location" />
          <MaterialCommunityIcons name="circle-double" size={30} color="black" style={styles.searchIcon} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Active Alerts</Text>

      {/* Scrollable Content */}
      <ScrollView>
        {/* YouTube Section */}
        <View style={styles.platformSection}>
          <View style={styles.subTitle}>
            <FontAwesome name="youtube-play" size={30} color="red" />
            <Text style={styles.platformText}>YouTube</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.socialMediaContainer}>
              {YouTubeData.map((item, index) => (
                <SocialMediaCard key={index} platform={item.platform} image={item.image} title={item.title} link={item.link} />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Twitter Section */}
        <View style={styles.platformSection}>
          <View style={styles.subTitle}>
            <FontAwesome name="twitter" size={30} color="blue" />
            <Text style={styles.platformText}>Twitter</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.socialMediaContainer}>
              {TwitterData.map((item, index) => (
                <SocialMediaCard key={index} platform={item.platform} image={item.image} title={item.title} link={item.link} />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* News Portal Section */}
        <Text style={styles.sectionTitle}>News Portals</Text>
        {newsData.map((item, index) => (
          <NewsPortalCards key={index} title={item.title} source={item.source} image={item.image} link={item.link} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  locationContainer: {
    marginTop: 20,
  },
  locationText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subLocationText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    width:500,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 18,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  platformSection: {
    marginTop: 20,
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  horizontalScroll: {
    marginTop: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#777',
  },
  radioButtonLabel: {
    fontSize: 16,
  },
});

export default News;
