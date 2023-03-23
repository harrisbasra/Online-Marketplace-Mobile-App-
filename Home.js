import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

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
const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View>
          <Text style={styles.welcomeDaudNasirContainer}>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.daudNasir}> Daud Nasir</Text>
          </Text>
          <View style={[styles.input, styles.mt16]}>
            <View style={styles.inputBase}>
              <View style={styles.content}>
                <Image
                  style={styles.searchIcon}
                  resizeMode="cover"
                  source={require("../search@3x.png")}
                />
                <Text style={[styles.text, styles.ml8]}>Search</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mt24}>
          <Text style={styles.featuredItems}>Featured Items</Text>
          <View style={[styles.featuredCardParent, styles.mt16]}>
            <View style={[styles.featuredCard, styles.featuredCardShadowBox]}>
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
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
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
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
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
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
        <View style={styles.mt24}>
          <View style={[styles.itemNameParent, styles.parentFlexBox]}>
            <Text style={styles.featuredItems}>Your Items</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={[styles.featuredCardParent, styles.mt16]}>
            <View style={[styles.featuredCard, styles.featuredCardShadowBox]}>
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../eye@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    395
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
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
                </View>
                <View style={[styles.mapPinParent, styles.mt6]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../eye@3x.png")}
                  />
                  <Text
                    style={[styles.islamabad, styles.ml6, styles.thMarTypo]}
                  >
                    395
                  </Text>
                  <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                    7th Mar
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.recentItemsParent, styles.mt24]}>
          <Text style={styles.featuredItems}>Recent Items</Text>
          <View style={[styles.featuredCardContainer, styles.mt16]}>
            <View style={[styles.featuredCard5, styles.featuredCardShadowBox]}>
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
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
                styles.featuredCard5,
                styles.ml12,
                styles.featuredCardShadowBox,
              ]}
            >
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
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
          <View style={[styles.featuredCardContainer, styles.mt16]}>
            <View style={[styles.featuredCard5, styles.featuredCardShadowBox]}>
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
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
                styles.featuredCard5,
                styles.ml12,
                styles.featuredCardShadowBox,
              ]}
            >
              <View style={styles.featuredCardChild} />
              <View style={styles.frameGroup}>
                <View style={[styles.itemNameParent, styles.parentFlexBox]}>
                  <Text style={[styles.itemName, styles.hrTypo]}>
                    Item Name
                  </Text>
                  <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
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
        </View>
      </View>
      <View
        style={[styles.topNotch, styles.navBarLayout, styles.parentFlexBox]}
      >
        <View style={[styles.timeWrapper, styles.timeWrapperFlexBox]}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={require("../time4@3x.png")}
          />
        </View>
        <View
          style={[styles.cellularConnectionParent, styles.timeWrapperFlexBox]}
        >
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../cellular-connection1@3x.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.ml5]}
            resizeMode="cover"
            source={require("../wifi1@3x.png")}
          />
          <View style={[styles.battery, styles.ml5]}>
            <View style={[styles.border, styles.borderBorder]} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../cap1@3x.png")}
            />
            <View style={styles.capacity} />
          </View>
        </View>
      </View>
      <View style={[styles.navBar, styles.borderBorder, styles.navBarLayout]}>
        <View
          style={[
            styles.tabBarBtnParent,
            styles.parentFlexBox,
            styles.parentPosition,
          ]}
        >
          <View style={styles.tabBarBtn}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../home1@3x.png")}
            />
            <Text style={[styles.text1, styles.mt6, styles.textTypo]}>
              Home
            </Text>
          </View>
          <View style={styles.tabBarBtn}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../search@3x.png")}
            />
            <Text style={[styles.text2, styles.mt6, styles.textTypo]}>
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
            <Text style={[styles.text2, styles.mt6, styles.textTypo]}>
              Chat
            </Text>
          </View>
          <View style={styles.tabBarBtn}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../vuesaxlinearprofile1@3x.png")}
            />
            <Text style={[styles.text2, styles.mt6, styles.textTypo]}>
              Profile
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  mt16: {
    marginTop: 16,
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
  ml12: {
    marginLeft: 12,
  },
  mt24: {
    marginTop: 24,
  },
  ml5: {
    marginLeft: 5,
  },
  ml_56: {
    marginLeft: -56,
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
    borderRadius: Border.br_7xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  hrTypo: {
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  thMarTypo: {
    color: Color.darkgray_100,
    lineHeight: 18,
    fontSize: FontSize.bodyXsSemibold_size,
    fontFamily: FontFamily.stylesBody1,
    flex: 1,
  },
  navBarLayout: {
    width: 375,
    backgroundColor: Color.white,
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
  iconLayout: {
    height: 28,
    width: 28,
  },
  textTypo: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.bodyXsSemibold_size,
    fontFamily: FontFamily.stylesBody1,
  },
  circleLayout: {
    height: 56,
    width: 56,
  },
  welcome: {
    color: "#4e4e4e",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  daudNasir: {
    color: Color.darkorange,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  welcomeDaudNasirContainer: {
    fontSize: FontSize.stylesHeadline6_size,
    lineHeight: 30,
    textAlign: "left",
  },
  searchIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    lineHeight: 24,
    color: Color.dimgray_200,
    fontFamily: FontFamily.stylesBody1,
    fontSize: FontSize.stylesBody1_size,
    textAlign: "left",
    flex: 1,
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  inputBase: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grey50,
    height: 46,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  input: {
    display: "none",
    width: 343,
  },
  featuredItems: {
    lineHeight: 24,
    color: Color.gray_200,
    fontSize: FontSize.stylesBody1_size,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  featuredCardChild: {
    backgroundColor: Color.gainsboro,
    height: 130,
    alignSelf: "stretch",
  },
  itemName: {
    color: Color.gray_200,
  },
  hr: {
    color: Color.darkorange,
  },
  itemNameParent: {
    alignItems: "center",
    alignSelf: "stretch",
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
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameGroup: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
  },
  featuredCard: {
    width: 244,
  },
  featuredCardParent: {
    flexDirection: "row",
    width: 343,
  },
  viewAll: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    color: Color.darkorange,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  featuredCard5: {
    flex: 1,
  },
  featuredCardContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  recentItemsParent: {
    alignSelf: "stretch",
  },
  frameParent: {
    top: 68,
    height: 682,
    paddingBottom: Padding.p_base,
  },
  timeIcon: {
    width: 30,
    height: 11,
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
    borderColor: "#1e1f21",
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
    backgroundColor: Color.grey700,
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
    left: 0,
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  homeIcon: {
    overflow: "hidden",
  },
  text1: {
    color: Color.darkorange,
  },
  tabBarBtn: {
    width: 62,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
  },
  text2: {
    color: Color.darkslategray_100,
  },
  circleIcon: {
    overflow: "hidden",
  },
  circleParent: {
    flexDirection: "row",
  },
  tabBarBtnParent: {
    top: 16,
    width: 343,
  },
  navBar: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 20,
    elevation: 20,
    borderColor: "#efefef",
    borderTopWidth: 1,
    height: 90,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderStyle: "solid",
    width: 375,
  },
  home: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Home;
