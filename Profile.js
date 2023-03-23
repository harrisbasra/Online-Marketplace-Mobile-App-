import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Border = {
  br_11xs_3: 1,
  br_10xs_7: 3,
  br_980xl: 999,
  br_7xs: 6,
  br_5xs: 8,
  br_81xl: 100,
};
const Color = {
  white: "#fff",
  gray25: "#fcfcfd",
  gray_100: "#868686",
  gray_200: "#2c2c2c",
  gray800: "#1d2939",
  gray_300: "#272727",
  grey900: "#202020",
  grey700: "#1e1f21",
  gray_400: "#131313",
  black: "#0d0d0d",
  gray_500: "rgba(0, 0, 0, 0.5)",
  darkorange: "#f08405",
  lightgray: "rgba(206, 206, 206, 0.5)",
  gainsboro: "#d9d9d9",
  dimgray_100: "#696969",
  grey300: "#5c5c5c",
  dimgray_200: "#56595d",
  black: "#000",
  red: "#ef0303",
  gray100: "#f2f4f7",
  grey50: "#efefef",
  gray600: "#475467",
  darkslategray_100: "#3f4144",
  darkslategray_200: "#383838",
  gray400: "#98a2b3",
  darkgray_100: "#9c9c9c",
  gray500: "#667085",
};
const FontSize = {
  size_sm: 14,
  stylesBody1_size: 16,
  size_3xl: 22,
  bodyXsSemibold_size: 12,
  stylesHeadline6_size: 20,
  size_21xl: 40,
  size_18xl: 37,
  size_3xs: 10,
  size_15xl: 34,
};
const FontFamily = {
  stylesBody1: "Inter_regular",
  interMedium: "Inter_medium",
  interBold: "Inter_bold",
  stylesHeadline6: "Inter_semibold",
  interExtrabold: "Inter_extrabold",
  sFProTextBold: "SF Pro Text_bold",
  sFProDisplayRegular: "SF Pro Display_regular",
  sFProDisplayMedium: "SF Pro Display_medium",
};
const Padding = {
  p_13xl: 32,
  p_5xs: 8,
  p_3xs: 10,
  p_base: 16,
  p_xs: 12,
  p_9xs: 4,
  p_sm: 14,
  p_xl: 20,
  p_11xs: 2,
  p_61xl: 80,
};
/* Margins */
const Margin = {
  m_8xs: 5,
  m_5xl: 24,
  m_5xs: 8,
  m_35xl: 54,
  m_xs: 12,
  m_21xl: 40,
  m_11xs: 2,
  m_base: 16,
  m_7xs: 6,
  m_9xs: 4,
  m_69xs: -56,
  m_12xs: 1,
  m_13xl: 32,
};
const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile, styles.iconLayout1]}>
      <View
        style={[styles.topNotch, styles.parentFlexBox, styles.topNotchPosition]}
      >
        <View style={[styles.timeWrapper, styles.timeWrapperFlexBox]}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={require("../time2@3x.png")}
          />
        </View>
        <View
          style={[styles.cellularConnectionParent, styles.timeWrapperFlexBox]}
        >
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../cellular-connection@3x.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.ml5]}
            resizeMode="cover"
            source={require("../wifi@3x.png")}
          />
          <View style={[styles.battery, styles.ml5]}>
            <View style={[styles.border, styles.borderBorder]} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../cap@3x.png")}
            />
            <View style={styles.capacity} />
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.borderBorder]}>
        <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../arrowleft@3x.png")}
          />
        </Pressable>
        <Text
          style={[
            styles.profile1,
            styles.ml8,
            styles.hrTypo1,
            styles.profile1Typo,
          ]}
        >
          Profile
        </Text>
        <Image
          style={[styles.editIcon, styles.ml8]}
          resizeMode="cover"
          source={require("../edit@3x.png")}
        />
      </View>
      <View style={[styles.profileChild, styles.topNotchPosition]} />
      <Image
        style={styles.profileItem}
        resizeMode="cover"
        source={require("../ellipse-1@3x.png")}
      />
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View>
          <Text style={styles.itemsYouveRented}>Items You’ve Rented</Text>
          <View style={[styles.featuredCardParent, styles.mt16]}>
            <View style={[styles.featuredCard, styles.featuredCardShadowBox]}>
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text
                    style={[styles.itemName, styles.hrTypo, styles.hrTypo1]}
                  >
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo, styles.hrTypo1]}>
                    $10/hr
                  </Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../mappin1@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    Islamabad
                  </Text>
                  <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                    7th Mar
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.featuredCard,
                styles.ml24,
                styles.featuredCardShadowBox,
              ]}
            >
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text
                    style={[styles.itemName, styles.hrTypo, styles.hrTypo1]}
                  >
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo, styles.hrTypo1]}>
                    $10/hr
                  </Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../mappin1@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    Islamabad
                  </Text>
                  <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                    7th Mar
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.featuredCard,
                styles.ml24,
                styles.featuredCardShadowBox,
              ]}
            >
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text
                    style={[styles.itemName, styles.hrTypo, styles.hrTypo1]}
                  >
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo, styles.hrTypo1]}>
                    $10/hr
                  </Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../mappin1@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    Islamabad
                  </Text>
                  <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                    7th Mar
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.yourItemsParent, styles.mt24]}>
          <Text style={styles.itemsYouveRented}>Your Items</Text>
          <View style={[styles.featuredCardGroup, styles.mt16]}>
            <View style={[styles.featuredCard3, styles.featuredCardShadowBox]}>
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text
                    style={[styles.itemName, styles.hrTypo, styles.hrTypo1]}
                  >
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo, styles.hrTypo1]}>
                    $10/hr
                  </Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../mappin1@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    Islamabad
                  </Text>
                  <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                    7th Mar
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.featuredCard3,
                styles.ml12,
                styles.featuredCardShadowBox,
              ]}
            >
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text
                    style={[styles.itemName, styles.hrTypo, styles.hrTypo1]}
                  >
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo, styles.hrTypo1]}>
                    $10/hr
                  </Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../mappin2@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    Islamabad
                  </Text>
                  <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                    7th Mar
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.featuredCardGroup, styles.mt16]}>
            <View
              style={[styles.featuredCard5Layout, styles.featuredCardShadowBox]}
            >
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text
                    style={[styles.itemName, styles.hrTypo, styles.hrTypo1]}
                  >
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo, styles.hrTypo1]}>
                    $10/hr
                  </Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../mappin1@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    Islamabad
                  </Text>
                  <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                    7th Mar
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.rectangleParent,
                styles.ml12,
                styles.featuredCard5Layout,
              ]}
            >
              <View style={styles.frameChild} />
              <View style={styles.plusCircleParent}>
                <Image
                  style={styles.plusCircleIcon}
                  resizeMode="cover"
                  source={require("../pluscircle@3x.png")}
                />
                <Text style={[styles.postAnotherItem, styles.mt8]}>
                  Post Another Item
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.daudNasirParent, styles.parentPosition]}>
        <Text style={[styles.daudNasir, styles.hrTypo1, styles.profile1Typo]}>
          Daud Nasir
        </Text>
        <View style={[styles.frameParent4, styles.mt6, styles.parentFlexBox]}>
          <View style={styles.mapPinParent4}>
            <Image
              style={styles.mapPinIcon6}
              resizeMode="cover"
              source={require("../mappin3@3x.png")}
            />
            <Text style={[styles.islamabad6, styles.ml8, styles.hrTypo]}>
              Islamabad
            </Text>
          </View>
          <Text style={[styles.islamabad6, styles.hrTypo]}>
            18 items posted
          </Text>
          <Text style={[styles.islamabad6, styles.hrTypo]}>
            24 items rented
          </Text>
        </View>
      </View>
      <View style={styles.navBar}>
        <View
          style={[
            styles.tabBarBtnParent,
            styles.parentPosition,
            styles.parentFlexBox,
          ]}
        >
          <View style={styles.tabBarBtn}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../home@3x.png")}
            />
            <Text style={[styles.text, styles.mt6, styles.textTypo]}>Home</Text>
          </View>
          <View style={styles.tabBarBtn}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../search@3x.png")}
            />
            <Text style={[styles.text, styles.mt6, styles.textTypo]}>
              Search
            </Text>
          </View>
          <View style={[styles.circleParent, styles.circleLayout]}>
            <Image
              style={[styles.circleIcon, styles.circleLayout]}
              resizeMode="cover"
              source={require("../circle1@3x.png")}
            />
            <Image
              style={[styles.circleIcon, styles.ml_56, styles.circleLayout]}
              resizeMode="cover"
              source={require("../pluscircle1@3x.png")}
            />
          </View>
          <View style={styles.tabBarBtn}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../messagesquare1@3x.png")}
            />
            <Text style={[styles.text, styles.mt6, styles.textTypo]}>Chat</Text>
          </View>
          <View style={styles.tabBarBtn}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../vuesaxlinearprofile@3x.png")}
            />
            <Text style={[styles.text3, styles.mt6, styles.textTypo]}>
              Profile
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: 5,
  },
  ml8: {
    marginLeft: 8,
  },
  ml6: {
    marginLeft: 6,
  },
  mt6: {
    marginTop: 6,
  },
  ml24: {
    marginLeft: 24,
  },
  mt16: {
    marginTop: 16,
  },
  ml12: {
    marginLeft: 12,
  },
  mt8: {
    marginTop: 8,
  },
  mt24: {
    marginTop: 24,
  },
  ml_56: {
    marginLeft: -56,
  },
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topNotchPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  timeWrapperFlexBox: {
    justifyContent: "center",
    height: 24,
    alignItems: "center",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  hrTypo1: {
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  profile1Typo: {
    lineHeight: 30,
    fontSize: FontSize.stylesHeadline6_size,
    textAlign: "left",
    fontWeight: "600",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  featuredCardShadowBox: {
    alignItems: "flex-end",
    elevation: 7,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_7xs,
    backgroundColor: Color.white,
  },
  hrTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  thMarTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.stylesBody1,
    lineHeight: 18,
    fontSize: FontSize.bodyXsSemibold_size,
    flex: 1,
  },
  featuredCard5Layout: {
    width: 166,
    overflow: "hidden",
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  textTypo: {
    lineHeight: 18,
    textAlign: "center",
    fontFamily: FontFamily.stylesBody1,
    fontSize: FontSize.bodyXsSemibold_size,
  },
  circleLayout: {
    height: 56,
    width: 56,
  },
  timeIcon: {
    height: 11,
    width: 30,
  },
  timeWrapper: {
    width: 40,
    padding: Padding.p_3xs,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#0d0d0d",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.black,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    width: 24,
    height: 11,
  },
  cellularConnectionParent: {
    width: 72,
    flexDirection: "row",
  },
  topNotch: {
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    top: 0,
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    display: "none",
    overflow: "hidden",
  },
  arrowLeft: {
    height: 30,
    width: 30,
  },
  profile1: {
    textAlign: "left",
    color: Color.darkslategray_100,
    flex: 1,
  },
  editIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  header: {
    top: 44,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
    width: 376,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  profileChild: {
    top: 106,
    height: 104,
    backgroundColor: Color.gainsboro,
  },
  profileItem: {
    top: 162,
    height: 88,
    width: 88,
    left: 16,
    position: "absolute",
  },
  itemsYouveRented: {
    fontSize: FontSize.stylesBody1_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray_200,
    textAlign: "left",
  },
  featuredCardChild: {
    height: 130,
    alignSelf: "stretch",
    backgroundColor: Color.gainsboro,
  },
  itemName: {
    color: Color.gray_200,
  },
  hr: {
    color: Color.darkorange,
  },
  itemNameParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  mapPinIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  islamabad: {
    textAlign: "left",
  },
  thMar: {
    textAlign: "right",
  },
  mapPinParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
  },
  featuredCard: {
    width: 244,
    overflow: "hidden",
  },
  featuredCardParent: {
    width: 343,
    flexDirection: "row",
  },
  featuredCard3: {
    overflow: "hidden",
    flex: 1,
  },
  featuredCardGroup: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild: {
    top: 7,
    left: 7,
    borderStyle: "dashed",
    borderColor: "#c9c9c9",
    borderWidth: 1.5,
    width: 153,
    height: 183,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  plusCircleIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  postAnotherItem: {
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.stylesBody1,
    fontSize: FontSize.bodyXsSemibold_size,
    color: Color.darkorange,
    width: 88,
  },
  plusCircleParent: {
    top: 61,
    left: 39,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    height: 195,
  },
  yourItemsParent: {
    width: 343,
  },
  frameParent: {
    top: 343,
  },
  daudNasir: {
    color: Color.gray800,
    textAlign: "left",
  },
  mapPinIcon6: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  islamabad6: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.gray_100,
  },
  mapPinParent4: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent4: {
    alignSelf: "stretch",
  },
  daudNasirParent: {
    top: 262,
    width: 343,
  },
  homeIcon: {
    overflow: "hidden",
  },
  text: {
    color: Color.darkslategray_100,
  },
  tabBarBtn: {
    width: 62,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
  },
  circleIcon: {
    overflow: "hidden",
  },
  circleParent: {
    flexDirection: "row",
  },
  text3: {
    color: Color.darkorange,
  },
  tabBarBtnParent: {
    top: 16,
    width: 343,
  },
  navBar: {
    marginLeft: -186.5,
    bottom: 0,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 20,
    elevation: 20,
    borderColor: "#efefef",
    borderTopWidth: 1,
    width: 375,
    height: 90,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  profile: {
    height: 816,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

const Profile = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    // Initialize Firebase with your configuration
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Retrieve user profile data from Firebase
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`users/${userId}`).once('value')
      .then(snapshot => {
        const userData = snapshot.val();
        setName(userData.name);
        setImage(userData.image);
        setCountry(userData.country);
        setCity(userData.city);
      })
      .catch(error => console.log(error));
  }, []);
export default Profile;
