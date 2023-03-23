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
const SpecificItem = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.specificItem, styles.iconLayout]}>
      <View
        style={[styles.topNotch, styles.headerFlexBox, styles.borderPosition]}
      >
        <View style={[styles.timeWrapper, styles.timeWrapperFlexBox]}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={require("../time@3x.png")}
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
            <View
              style={[
                styles.border,
                styles.borderBorder,
                styles.borderPosition,
              ]}
            />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../cap@3x.png")}
            />
            <View style={styles.capacity} />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.header,
          styles.headerLayout,
          styles.headerBorder,
          styles.headerFlexBox,
        ]}
      >
        <View style={styles.arrowLeftParent}>
          <Pressable
            style={styles.arrowLeft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../arrowleft@3x.png")}
            />
          </Pressable>
          <Text style={[styles.pageTitle, styles.ml8, styles.pageTitleTypo]}>
            Item
          </Text>
        </View>
        <Text style={[styles.action, styles.actionTypo, styles.text3Layout]}>
          Report
        </Text>
      </View>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.hrParent}>
          <Text style={styles.hr}>
            <Text style={styles.text}>
              <Text style={styles.text1}>$12</Text>
            </Text>
            <Text style={styles.hr1}>
              <Text style={styles.text}>{` `}</Text>
              <Text>/ hr</Text>
            </Text>
          </Text>
          <Text style={[styles.pageTitle, styles.mt8, styles.pageTitleTypo]}>
            Name of the Item comes Here
          </Text>
          <View style={[styles.frameGroup, styles.mt8]}>
            <View style={styles.mapPinParent}>
              <Image
                style={styles.mapPinIcon}
                resizeMode="cover"
                source={require("../mappin@3x.png")}
              />
              <Text
                style={[styles.islamabad, styles.ml8, styles.islamabadLayout]}
              >
                Islamabad
              </Text>
            </View>
            <Text
              style={[styles.thMar2023, styles.ml8, styles.islamabadLayout]}
            >
              7th Mar, 2023
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.loremIpsumDolor,
            styles.mt16,
            styles.actionTypo,
            styles.text3Layout,
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          nisi a sem elementum condimentum. Proin volutpat erat tortor, eu
          gravida orci efficitur eget.
        </Text>
      </View>
      <View style={[styles.specificItemChild, styles.headerLayout]} />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../ellipse-6@3x.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml8]}
          resizeMode="cover"
          source={require("../ellipse-7@3x.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml8]}
          resizeMode="cover"
          source={require("../ellipse-7@3x.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml8]}
          resizeMode="cover"
          source={require("../ellipse-7@3x.png")}
        />
      </View>
      <View
        style={[
          styles.frameContainer,
          styles.framePosition,
          styles.headerFlexBox,
        ]}
      >
        <View style={styles.arrowLeftParent}>
          <Image
            style={styles.frameChild1}
            resizeMode="cover"
            source={require("../ellipse-10@3x.png")}
          />
          <View style={styles.ml8}>
            <Text
              style={[
                styles.ryanCalzoni,
                styles.text3Layout,
                styles.pageTitleTypo,
              ]}
            >
              Ryan Calzoni
            </Text>
            <Text style={[styles.itemsRented, styles.mt2, styles.actionTypo]}>
              24 items rented
            </Text>
          </View>
        </View>
        <View style={styles.messageSquareWrapper}>
          <Image
            style={styles.messageSquareIcon}
            resizeMode="cover"
            source={require("../messagesquare@3x.png")}
          />
        </View>
      </View>
      <View
        style={[styles.buttonWrapper, styles.headerLayout, styles.headerBorder]}
      >
        <View style={[styles.button, styles.buttonFlexBox]}>
          <View
            style={[
              styles.buttonBase,
              styles.buttonFlexBox,
              styles.borderBorder,
            ]}
          >
            <Text style={[styles.text3, styles.text3Layout]}>Rent it</Text>
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
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  mt2: {
    marginTop: 2,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  headerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  timeWrapperFlexBox: {
    justifyContent: "center",
    height: 24,
    alignItems: "center",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  headerLayout: {
    width: 375,
    position: "absolute",
  },
  headerBorder: {
    borderStyle: "solid",
    width: 375,
  },
  pageTitleTypo: {
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
    textAlign: "left",
    color: Color.darkslategray_100,
  },
  actionTypo: {
    fontFamily: FontFamily.stylesBody1,
    textAlign: "left",
  },
  text3Layout: {
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
  },
  framePosition: {
    left: 16,
    position: "absolute",
  },
  islamabadLayout: {
    width: 130,
    color: Color.darkgray_100,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.stylesBody1,
  },
  buttonFlexBox: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    width: 22,
    opacity: 0.35,
    height: 11,
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
    width: 390,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    height: 44,
    left: 0,
    backgroundColor: Color.white,
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
    textAlign: "left",
    color: Color.darkslategray_100,
    lineHeight: 30,
    fontSize: FontSize.stylesHeadline6_size,
  },
  arrowLeftParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  action: {
    color: Color.darkorange,
  },
  header: {
    top: 44,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
    padding: Padding.p_base,
    left: 0,
    backgroundColor: Color.white,
  },
  text1: {
    color: Color.darkorange,
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    fontSize: FontSize.stylesHeadline6_size,
  },
  hr1: {
    color: Color.darkslategray_100,
  },
  hr: {
    textAlign: "left",
    lineHeight: 30,
  },
  mapPinIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  islamabad: {
    textAlign: "left",
  },
  mapPinParent: {
    flexDirection: "row",
    flex: 1,
  },
  thMar2023: {
    textAlign: "right",
  },
  frameGroup: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  hrParent: {
    alignSelf: "stretch",
  },
  loremIpsumDolor: {
    width: 343,
    color: Color.darkslategray_100,
  },
  frameParent: {
    top: 506,
  },
  specificItemChild: {
    top: 106,
    backgroundColor: Color.gainsboro,
    height: 380,
    left: 0,
  },
  frameChild: {
    width: 8,
    height: 8,
  },
  ellipseParent: {
    top: 462,
    left: 160,
    flexDirection: "row",
    position: "absolute",
  },
  frameChild1: {
    width: 44,
    height: 44,
  },
  ryanCalzoni: {
    textAlign: "left",
    color: Color.darkslategray_100,
  },
  itemsRented: {
    fontSize: FontSize.bodyXsSemibold_size,
    lineHeight: 16,
    color: "#8c8c8c",
  },
  messageSquareIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  messageSquareWrapper: {
    borderRadius: Border.br_980xl,
    backgroundColor: "#f4f4f4",
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameContainer: {
    top: 747,
    width: 343,
  },
  text3: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "left",
  },
  buttonBase: {
    backgroundColor: Color.darkorange,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderColor: "#f08405",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
    flex: 1,
  },
  button: {
    alignSelf: "stretch",
  },
  buttonWrapper: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    borderColor: "#eee",
    borderTopWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_base,
  },
  specificItem: {
    height: 897,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});



const searchWordFromList = async (word) => {
  const snapshot = await firebase.database().ref('wordList').once('value');
  const wordList = snapshot.val();

  if (!wordList || !Array.isArray(wordList)) {
    return null;
  }

  const matchingWords = wordList.filter((item) => item.toLowerCase().includes(word.toLowerCase()));

  return matchingWords;
};


export default SpecificItem;
