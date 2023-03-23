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
const Report = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.report, styles.iconLayout]}>
      <View style={[styles.topNotch, styles.contentFlexBox]}>
        <View
          style={[
            styles.timeWrapper,
            styles.buttonFlexBox,
            styles.timeWrapperLayout,
          ]}
        >
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={require("../time@3x.png")}
          />
        </View>
        <View
          style={[
            styles.cellularConnectionParent,
            styles.buttonFlexBox,
            styles.timeWrapperLayout,
          ]}
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
      <View style={styles.header}>
        <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../arrowleft@3x.png")}
          />
        </Pressable>
        <Text style={[styles.pageTitle, styles.ml8, styles.textTypo1]}>
          Report
        </Text>
      </View>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={[styles.text, styles.textTypo1]}>
          Reason for Reporting
        </Text>
        <View
          style={[
            styles.inputBase,
            styles.mt6,
            styles.buttonLayout,
            styles.baseFlexBox,
          ]}
        >
          <View style={[styles.content, styles.contentFlexBox]}>
            <Image
              style={styles.circleIcon}
              resizeMode="cover"
              source={require("../circle@3x.png")}
            />
            <TextInput
              style={[styles.text1, styles.ml8, styles.textTypo]}
              placeholder="Enter your reason here"
              onPress={handlePress}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.button,
          styles.buttonLayout,
          styles.inputPosition,
          styles.buttonFlexBox,
        ]}
      >
        <View
          style={[
            styles.buttonBase,
            styles.buttonLayout,
            styles.baseFlexBox,
            styles.borderBorder,
            styles.buttonFlexBox,
          ]}
        >
          <Text style={[styles.text2, styles.textTypo]}>Submit Report</Text>
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
  mt6: {
    marginTop: 6,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  timeWrapperLayout: {
    height: 24,
    justifyContent: "center",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  inputPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  buttonLayout: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  baseFlexBox: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    flex: 1,
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
    textAlign: "left",
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
    top: 0,
    borderWidth: 1,
    position: "absolute",
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
    height: 24,
  },
  topNotch: {
    width: 390,
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    left: 0,
    alignItems: "center",
    top: 0,
    position: "absolute",
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
    fontSize: FontSize.stylesHeadline6_size,
    lineHeight: 30,
  },
  header: {
    top: 44,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
    width: 375,
    padding: Padding.p_base,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  text: {
    fontSize: FontSize.bodyXsSemibold_size,
    lineHeight: 18,
  },
  circleIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  text1: {
    fontFamily: FontFamily.stylesBody1,
    color: Color.dimgray_200,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  inputBase: {
    backgroundColor: Color.grey50,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
  },
  input: {
    top: 130,
    height: 94,
  },
  text2: {
    color: Color.white,
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
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
  },
  button: {
    top: 728,
    height: 56,
  },
  report: {
    height: 816,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyANwyyw4AMzl3PU3HuTB_fG2kFSK-CsLvQ",
  databaseURL: firebase.database().ref().toString(),
  projectId: "nascon-637ca",
  storageBucket: "nascon-637ca.appspot.com",
  appId: "1:110459732205:android:a991a03476a945c8d14ce4",
};

const ChatScreen =  async (word) =>  {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const newMessage = {
      text: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };
    firebase.database().ref('report').push(newMessage);
    setMessage(word);
  };
export default Report;
