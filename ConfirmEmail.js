import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
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
const ConfirmEmail = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.confirmEmail, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.enterTheCode, styles.pageTitleTypo]}>
            Enter the code sent to your email
          </Text>
          <Text style={[styles.resendCodeIn, styles.mt16]}>
            Resend code in 23s
          </Text>
        </View>
        <View style={[styles.frameGroup, styles.mt24]}>
          <View style={styles.digitInputParent}>
            <View style={[styles.digitInput, styles.borderBorder]}>
              <Text style={styles.text}>{` `}</Text>
            </View>
            <View style={[styles.digitInput, styles.ml16, styles.borderBorder]}>
              <Text style={styles.text}>{` `}</Text>
            </View>
            <View style={[styles.digitInput, styles.ml16, styles.borderBorder]}>
              <Text style={styles.text}>{` `}</Text>
            </View>
            <View style={[styles.digitInput, styles.ml16, styles.borderBorder]}>
              <Text style={styles.text}>{` `}</Text>
            </View>
            <View style={[styles.digitInput, styles.ml16, styles.borderBorder]}>
              <Text style={styles.text}>{` `}</Text>
            </View>
          </View>
          <View style={styles.mt64}>
            <View style={styles.row}>
              <View style={[styles.phoneKey, styles.phoneLayout]}>
                <View style={[styles.keyKeypad, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>1</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    ABC
                  </Text>
                </View>
              </View>
              <View style={[styles.phoneKey, styles.ml32, styles.phoneLayout]}>
                <View style={[styles.keyKeypad1, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>2</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    ABC
                  </Text>
                </View>
              </View>
              <View style={[styles.phoneKey, styles.ml32, styles.phoneLayout]}>
                <View style={[styles.keyKeypad2, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>3</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    DEF
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, styles.mt24]}>
              <View style={[styles.phoneKey, styles.phoneLayout]}>
                <View style={[styles.keyKeypad3, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>4</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    GHI
                  </Text>
                </View>
              </View>
              <View style={[styles.phoneKey, styles.ml32, styles.phoneLayout]}>
                <View style={[styles.keyKeypad2, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>5</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    JKL
                  </Text>
                </View>
              </View>
              <View style={[styles.phoneKey, styles.ml32, styles.phoneLayout]}>
                <View style={[styles.keyKeypad3, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>6</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    MNO
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, styles.mt24]}>
              <View style={[styles.phoneKey, styles.phoneLayout]}>
                <View style={[styles.keyKeypad1, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>7</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    PQRS
                  </Text>
                </View>
              </View>
              <View style={[styles.phoneKey, styles.ml32, styles.phoneLayout]}>
                <View style={[styles.keyKeypad3, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>8</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    TUV
                  </Text>
                </View>
              </View>
              <View style={[styles.phoneKey, styles.ml32, styles.phoneLayout]}>
                <View style={[styles.keyKeypad3, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>9</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    WXYZ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, styles.mt24]}>
              <View style={[styles.phoneKey9, styles.phoneLayout]}>
                <View style={[styles.keyKeypad9, styles.keyPosition]}>
                  <Text style={[styles.key9, styles.keyClr]}>􀸓</Text>
                  <Text style={[styles.keypad, styles.mt2, styles.keypadTypo]}>
                    ABC
                  </Text>
                </View>
              </View>
              <View style={[styles.phoneKey, styles.ml32, styles.phoneLayout]}>
                <View style={[styles.keyKeypad3, styles.keyPosition]}>
                  <Text style={[styles.key, styles.keyClr]}>0</Text>
                  <Text
                    style={[styles.keypad10, styles.mt_5, styles.keypadTypo]}
                  >
                    +
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.phoneLayout, styles.ml32]}
                resizeMode="cover"
                source={require("../-phonekey@3x.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../arrowleft@3x.png")}
          />
        </Pressable>
        <Text style={[styles.pageTitle, styles.ml8, styles.pageTitleTypo]}>
          Email Verification
        </Text>
      </View>
      <View
        style={[styles.topNotch, styles.borderPosition, styles.headerFlexBox]}
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
  mt16: {
    marginTop: 16,
  },
  ml16: {
    marginLeft: 16,
  },
  mt2: {
    marginTop: 2,
  },
  ml32: {
    marginLeft: 32,
  },
  mt_5: {
    marginTop: -5,
  },
  mt24: {
    marginTop: 24,
  },
  mt64: {
    marginTop: 64,
  },
  ml8: {
    marginLeft: 8,
  },
  ml5: {
    marginLeft: 5,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  pageTitleTypo: {
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
    textAlign: "left",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  phoneLayout: {
    height: 78,
    width: 78,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  keyPosition: {
    height: 55,
    left: "50%",
    top: 11,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  keyClr: {
    color: Color.grey300,
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
  },
  keypadTypo: {
    color: Color.white,
    fontFamily: FontFamily.sFProTextBold,
    fontWeight: "700",
    letterSpacing: 3,
    display: "none",
    textAlign: "center",
  },
  headerFlexBox: {
    width: 375,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
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
  enterTheCode: {
    fontSize: 18,
    letterSpacing: -0.4,
    color: Color.gray_400,
    textAlign: "left",
  },
  resendCodeIn: {
    fontSize: FontSize.stylesBody1_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.stylesBody1,
    color: Color.darkorange,
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.size_15xl,
    lineHeight: 42,
    color: Color.grey900,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.sFProDisplayRegular,
  },
  digitInput: {
    borderRadius: Border.br_5xs,
    borderColor: "#ccc",
    width: 52,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  digitInputParent: {
    flexDirection: "row",
  },
  key: {
    fontSize: FontSize.size_18xl,
    fontFamily: FontFamily.sFProDisplayRegular,
    color: Color.grey300,
    lineHeight: 41,
  },
  keypad: {
    fontSize: FontSize.size_3xs,
    display: "none",
  },
  keyKeypad: {
    marginLeft: -8.5,
  },
  phoneKey: {
    backgroundColor: Color.grey50,
  },
  keyKeypad1: {
    marginLeft: -10.5,
  },
  keyKeypad2: {
    marginLeft: -11,
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  keyKeypad3: {
    marginLeft: -11.5,
  },
  key9: {
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplayMedium,
    fontSize: FontSize.stylesHeadline6_size,
  },
  keyKeypad9: {
    marginLeft: -10,
    display: "none",
  },
  phoneKey9: {
    backgroundColor: Color.white,
  },
  keypad10: {
    fontSize: FontSize.size_sm,
    display: "none",
  },
  frameGroup: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    top: 130,
    left: 16,
    width: 343,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowLeft: {
    height: 30,
    width: 30,
  },
  pageTitle: {
    lineHeight: 30,
    color: Color.darkslategray_100,
    fontSize: FontSize.stylesHeadline6_size,
    textAlign: "left",
  },
  header: {
    top: 44,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
    padding: Padding.p_base,
    borderStyle: "solid",
    width: 375,
    left: 0,
    position: "absolute",
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
  },
  topNotch: {
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
  },
  confirmEmail: {
    flex: 1,
    height: 812,
    backgroundColor: Color.white,
  },
});

const App = () => {
  const [userCode, setUserCode] = useState('');

  const validateCode = () => {
    const preDefinedCode = '1234'; // The pre-defined code to match against
    if (userCode === preDefinedCode) {
      Alert.alert('Success', 'Code matched!');
    } else {
      Alert.alert('Error', 'Code did not match. Try again.');
    }
  };

export default ConfirmEmail;
