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
const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.searchResults, styles.iconLayout, styles.featuredCardBg]}
    >
      <View
        style={[styles.topNotch, styles.topNotchFlexBox, styles.headerLayout]}
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
      <View
        style={[
          styles.header,
          styles.borderBorder,
          styles.headerFlexBox,
          styles.headerLayout,
        ]}
      >
        <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../arrowleft@3x.png")}
          />
        </Pressable>
        <Text style={[styles.pageTitle, styles.ml8]}>Search Results</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
          <Text style={styles.someItem}>“Some item”</Text>
          <View style={[styles.inputBase, styles.headerFlexBox]}>
            <View style={[styles.content, styles.headerFlexBox]}>
              <Text style={styles.text}>Best Match</Text>
            </View>
            <Image
              style={[styles.chevronDownIcon, styles.ml8]}
              resizeMode="cover"
              source={require("../chevrondown1@3x.png")}
            />
          </View>
        </View>
        <View style={[styles.featuredCardParent, styles.mt16]}>
          <View style={[styles.featuredCard, styles.featuredCardBg]}>
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin1@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
                  Islamabad
                </Text>
                <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                  7th Mar
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.featuredCard, styles.ml12, styles.featuredCardBg]}
          >
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin2@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
                  Islamabad
                </Text>
                <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                  7th Mar
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.featuredCardParent, styles.mt16]}>
          <View style={[styles.featuredCard, styles.featuredCardBg]}>
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin1@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
                  Islamabad
                </Text>
                <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                  7th Mar
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.featuredCard, styles.ml12, styles.featuredCardBg]}
          >
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin2@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
                  Islamabad
                </Text>
                <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                  7th Mar
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.featuredCardParent, styles.mt16]}>
          <View style={[styles.featuredCard, styles.featuredCardBg]}>
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin1@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
                  Islamabad
                </Text>
                <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                  7th Mar
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.featuredCard, styles.ml12, styles.featuredCardBg]}
          >
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin2@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
                  Islamabad
                </Text>
                <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                  7th Mar
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.featuredCardParent, styles.mt16]}>
          <View style={[styles.featuredCard, styles.featuredCardBg]}>
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin1@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
                  Islamabad
                </Text>
                <Text style={[styles.thMar, styles.ml6, styles.thMarTypo]}>
                  7th Mar
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.featuredCard, styles.ml12, styles.featuredCardBg]}
          >
            <View style={styles.featuredCardChild} />
            <View style={styles.frameGroup}>
              <View style={[styles.someItemParent, styles.topNotchFlexBox]}>
                <Text style={[styles.itemName, styles.hrTypo]}>Item Name</Text>
                <Text style={[styles.hr, styles.hrTypo]}>$10/hr</Text>
              </View>
              <View
                style={[styles.mapPinParent, styles.mt6, styles.headerFlexBox]}
              >
                <Image
                  style={styles.mapPinIcon}
                  resizeMode="cover"
                  source={require("../mappin2@3x.png")}
                />
                <Text style={[styles.islamabad, styles.ml6, styles.thMarTypo]}>
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
  ml12: {
    marginLeft: 12,
  },
  mt16: {
    marginTop: 16,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  featuredCardBg: {
    backgroundColor: Color.white,
    flex: 1,
  },
  topNotchFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerLayout: {
    width: 375,
    left: 0,
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
  headerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  hrTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  thMarTypo: {
    color: Color.darkgray_100,
    lineHeight: 18,
    fontSize: FontSize.bodyXsSemibold_size,
    fontFamily: FontFamily.stylesBody1,
    flex: 1,
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
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    height: 30,
    width: 30,
  },
  pageTitle: {
    fontSize: FontSize.stylesHeadline6_size,
    lineHeight: 30,
    color: Color.darkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  header: {
    top: 44,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
    padding: Padding.p_base,
  },
  someItem: {
    fontSize: FontSize.stylesBody1_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.gray_200,
    textAlign: "left",
  },
  text: {
    lineHeight: 18,
    color: Color.dimgray_200,
    fontFamily: FontFamily.stylesBody1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chevronDownIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  inputBase: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grey50,
    width: 164,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
  },
  someItemParent: {
    alignSelf: "stretch",
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
  },
  frameGroup: {
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
  },
  featuredCard: {
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
    alignItems: "flex-end",
    overflow: "hidden",
    flex: 1,
  },
  featuredCardParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameParent: {
    top: 130,
    left: 16,
    width: 343,
    position: "absolute",
  },
  searchResults: {
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default SearchResults;
