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
const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.findExactlyWhat, styles.itemNumberOneTypo]}>
            Find exactly what you need!
          </Text>
          <View style={[styles.input, styles.mt16]}>
            <View style={[styles.inputBase, styles.inputBaseFlexBox]}>
              <View style={styles.content}>
                <Image
                  style={styles.searchIcon}
                  resizeMode="cover"
                  source={require("../search1@3x.png")}
                />
                <Text style={[styles.text, styles.ml8, styles.textLayout]}>
                  Search
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mt24}>
          <View>
            <Text style={[styles.recentSearches, styles.itemNumberOneClr]}>
              Recent Searches
            </Text>
            <View style={[styles.input, styles.mt8]}>
              <View
                style={[
                  styles.itemNumberOneParent,
                  styles.tabBarBtnSpaceBlock,
                  styles.inputBaseFlexBox,
                ]}
              >
                <Text
                  style={[
                    styles.itemNumberOneClr,
                    styles.textLayout,
                    styles.itemNumberOneTypo,
                  ]}
                >
                  Item Number One
                </Text>
                <Image
                  style={[styles.searchIcon, styles.ml12]}
                  resizeMode="cover"
                  source={require("../arrowupright@3x.png")}
                />
              </View>
              <View
                style={[
                  styles.itemNumberOneParent,
                  styles.mt8,
                  styles.tabBarBtnSpaceBlock,
                  styles.inputBaseFlexBox,
                ]}
              >
                <Text style={[styles.textLayout, styles.itemNumberOneTypo]}>
                  Item Number Two
                </Text>
                <Image
                  style={[styles.searchIcon, styles.ml12]}
                  resizeMode="cover"
                  source={require("../arrowupright@3x.png")}
                />
              </View>
              <View
                style={[
                  styles.itemNumberOneParent,
                  styles.mt8,
                  styles.tabBarBtnSpaceBlock,
                  styles.inputBaseFlexBox,
                ]}
              >
                <Text style={styles.itemNumberOneTypo}>Item Number Three</Text>
                <Image
                  style={[styles.searchIcon, styles.ml12]}
                  resizeMode="cover"
                  source={require("../arrowupright@3x.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.mt24}>
            <Text style={[styles.recentSearches, styles.itemNumberOneClr]}>
              Popular Searches
            </Text>
            <View style={[styles.input, styles.mt8]}>
              <View
                style={[
                  styles.itemNumberOneParent,
                  styles.tabBarBtnSpaceBlock,
                  styles.inputBaseFlexBox,
                ]}
              >
                <Text style={styles.itemNumberOneTypo}>Item Number One</Text>
                <Image
                  style={[styles.searchIcon, styles.ml12]}
                  resizeMode="cover"
                  source={require("../arrowupright@3x.png")}
                />
              </View>
              <View
                style={[
                  styles.itemNumberOneParent,
                  styles.mt8,
                  styles.tabBarBtnSpaceBlock,
                  styles.inputBaseFlexBox,
                ]}
              >
                <Text style={styles.itemNumberOneTypo}>Item Number Two</Text>
                <Image
                  style={[styles.searchIcon, styles.ml12]}
                  resizeMode="cover"
                  source={require("../arrowupright@3x.png")}
                />
              </View>
              <View
                style={[
                  styles.itemNumberOneParent,
                  styles.mt8,
                  styles.tabBarBtnSpaceBlock,
                  styles.inputBaseFlexBox,
                ]}
              >
                <Text style={styles.itemNumberOneTypo}>Item Number Three</Text>
                <Image
                  style={[styles.searchIcon, styles.ml12]}
                  resizeMode="cover"
                  source={require("../arrowupright@3x.png")}
                />
              </View>
              <View
                style={[
                  styles.itemNumberOneParent,
                  styles.mt8,
                  styles.tabBarBtnSpaceBlock,
                  styles.inputBaseFlexBox,
                ]}
              >
                <Text style={styles.itemNumberOneTypo}>Item Number Four</Text>
                <Image
                  style={[styles.searchIcon, styles.ml12]}
                  resizeMode="cover"
                  source={require("../arrowupright@3x.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.topNotch, styles.topNotchFlexBox, styles.navBarLayout]}
      >
        <View style={[styles.timeWrapper, styles.timeWrapperFlexBox]}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={require("../time3@3x.png")}
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
        <View style={[styles.tabBarBtnParent, styles.topNotchFlexBox]}>
          <View style={[styles.tabBarBtn, styles.tabBarBtnSpaceBlock]}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../home@3x.png")}
            />
            <Text style={[styles.text1, styles.mt6, styles.textTypo]}>
              Home
            </Text>
          </View>
          <View style={[styles.tabBarBtn, styles.tabBarBtnSpaceBlock]}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../search2@3x.png")}
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
          <View style={[styles.tabBarBtn, styles.tabBarBtnSpaceBlock]}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../messagesquare1@3x.png")}
            />
            <Text style={[styles.text1, styles.mt6, styles.textTypo]}>
              Chat
            </Text>
          </View>
          <View style={[styles.tabBarBtn, styles.tabBarBtnSpaceBlock]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../vuesaxlinearprofile1@3x.png")}
            />
            <Text style={[styles.text1, styles.mt6, styles.textTypo]}>
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
  ml12: {
    marginLeft: 12,
  },
  mt8: {
    marginTop: 8,
  },
  mt24: {
    marginTop: 24,
  },
  ml5: {
    marginLeft: 5,
  },
  mt6: {
    marginTop: 6,
  },
  ml_56: {
    marginLeft: -56,
  },
  itemNumberOneTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  inputBaseFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  textLayout: {
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
    flex: 1,
  },
  itemNumberOneClr: {
    color: Color.black,
    textAlign: "left",
  },
  tabBarBtnSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  topNotchFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
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
  findExactlyWhat: {
    fontSize: FontSize.stylesHeadline6_size,
    lineHeight: 30,
    color: "#282828",
    textAlign: "left",
  },
  searchIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    color: Color.dimgray_200,
    fontFamily: FontFamily.stylesBody1,
    textAlign: "left",
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
    overflow: "hidden",
  },
  input: {
    width: 343,
  },
  recentSearches: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.stylesBody1,
  },
  itemNumberOneParent: {
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
  },
  frameParent: {
    top: 68,
    left: 16,
    position: "absolute",
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
  },
  homeIcon: {
    overflow: "hidden",
  },
  text1: {
    color: Color.darkslategray_100,
  },
  tabBarBtn: {
    width: 62,
    paddingVertical: Padding.p_11xs,
  },
  text2: {
    color: Color.darkorange,
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
    left: 16,
  },
  navBar: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderColor: "#efefef",
    borderTopWidth: 1,
    height: 90,
  },
  search: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

const ScreenA = () => {
  const navigation = useNavigation();

  const handlePress = (text) => {
    navigation.navigate('SearchResults', { text });
  };

export default Search;
