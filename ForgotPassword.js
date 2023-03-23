import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

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
const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <View
        style={[styles.button, styles.buttonFlexBox1, styles.buttonPosition]}
      >
        <View style={styles.buttonFlexBox}>
          <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>
            Go back
          </Text>
        </View>
      </View>
      <View style={[styles.forgotYourPasswordParent, styles.buttonPosition]}>
        <Text style={[styles.forgotYourPassword, styles.textTypo1]}>
          Forgot your password?
        </Text>
        <View style={[styles.frameParent, styles.mt24]}>
          <View style={styles.frameParent}>
            <View style={styles.input}>
              <Text style={[styles.text1, styles.textTypo1]}>Email</Text>
              <View style={[styles.inputBase, styles.mt6]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.circleIcon}
                    resizeMode="cover"
                    source={require("../circle@3x.png")}
                  />
                  <Text style={[styles.text2, styles.ml8, styles.textTypo]}>
                    Enter email
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.buttonFlexBox1, styles.mt24]}>
            <View
              style={[
                styles.buttonBase1,
                styles.borderBorder,
                styles.buttonFlexBox,
              ]}
            >
              <Text style={[styles.text3, styles.textTypo1]}>
                Reset Password
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.topNotch, styles.borderPosition, styles.contentFlexBox]}
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
            <View
              style={[
                styles.border,
                styles.borderPosition,
                styles.borderBorder,
              ]}
            />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../cap1@3x.png")}
            />
            <View style={styles.capacity} />
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
  mt6: {
    marginTop: 6,
  },
  mt24: {
    marginTop: 24,
  },
  ml5: {
    marginLeft: 5,
  },
  buttonFlexBox1: {
    justifyContent: "center",
    height: 56,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    width: 343,
  },
  buttonPosition: {
    left: 16,
    position: "absolute",
  },
  textTypo: {
    color: Color.dimgray_200,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
  },
  textTypo1: {
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    flex: 1,
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  timeWrapperFlexBox: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
  },
  button: {
    top: 731,
  },
  forgotYourPassword: {
    fontSize: FontSize.stylesHeadline6_size,
    letterSpacing: -0.4,
    color: Color.gray_400,
    textAlign: "left",
  },
  text1: {
    fontSize: FontSize.bodyXsSemibold_size,
    lineHeight: 18,
    color: Color.darkslategray_100,
    textAlign: "left",
  },
  circleIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  text2: {
    fontFamily: FontFamily.stylesBody1,
    textAlign: "left",
    flex: 1,
  },
  content: {
    flex: 1,
  },
  inputBase: {
    backgroundColor: Color.grey50,
    height: 46,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  input: {
    width: 343,
  },
  frameParent: {
    alignItems: "flex-end",
  },
  text3: {
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
    fontWeight: "600",
  },
  buttonBase1: {
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
  },
  forgotYourPasswordParent: {
    top: 84,
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
    height: 24,
  },
  topNotch: {
    left: 0,
    width: 375,
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    backgroundColor: Color.white,
  },
  forgotPassword: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});
 const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const handleForgetPassword = (email) => {
 firebase.initializeApp(firebaseConfig);
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      // Email sent.
      console.log('Password reset email sent.');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};


export default ForgotPassword;
