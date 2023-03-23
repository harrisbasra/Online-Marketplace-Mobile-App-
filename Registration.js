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
const Registration = () => {
  return (
    <View style={styles.registration}>
      <View
        style={[styles.button, styles.buttonFlexBox1, styles.buttonPosition]}
      >
        <View style={styles.buttonFlexBox}>
          <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>
            Login
          </Text>
        </View>
      </View>
      <Text style={styles.rentingApp}>Renting App</Text>
      <View style={[styles.registrationParent, styles.buttonPosition]}>
        <Text style={[styles.registration1, styles.textTypo1]}>
          Registration
        </Text>
        <View style={[styles.frameParent, styles.mt24]}>
          <View style={styles.frameParent}>
            <View style={styles.input}>
              <Text style={[styles.text1, styles.textTypo1]}>Name</Text>
              <View style={[styles.inputBase, styles.mt6]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.circleIcon}
                    resizeMode="cover"
                    source={require("../circle@3x.png")}
                  />
                  <Text style={[styles.text2, styles.ml8, styles.textTypo]}>
                    Enter name
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.input, styles.mt16]}>
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
            <View style={[styles.input, styles.mt16]}>
              <Text style={[styles.text1, styles.textTypo1]}>
                Contact Number
              </Text>
              <View style={[styles.inputBase, styles.mt6]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.circleIcon}
                    resizeMode="cover"
                    source={require("../circle@3x.png")}
                  />
                  <Text style={[styles.text2, styles.ml8, styles.textTypo]}>
                    Enter contact number
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.input, styles.mt16]}>
              <Text style={[styles.text1, styles.textTypo1]}>Country</Text>
              <View style={[styles.inputBase, styles.mt6]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.text2, styles.textTypo]}>
                    Select Country
                  </Text>
                </View>
                <Image
                  style={[styles.chevronDownIcon, styles.ml8]}
                  resizeMode="cover"
                  source={require("../chevrondown@3x.png")}
                />
              </View>
            </View>
            <View style={[styles.input, styles.mt16]}>
              <Text style={[styles.text1, styles.textTypo1]}>City</Text>
              <View style={[styles.inputBase, styles.mt6]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.text2, styles.textTypo]}>
                    Select City
                  </Text>
                </View>
                <Image
                  style={[styles.chevronDownIcon, styles.ml8]}
                  resizeMode="cover"
                  source={require("../chevrondown@3x.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.buttonFlexBox1, styles.mt32]}>
            <View
              style={[
                styles.buttonBase1,
                styles.borderBorder,
                styles.buttonFlexBox,
              ]}
            >
              <Text style={[styles.text11, styles.textTypo1]}>Sign Up</Text>
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
  mt16: {
    marginTop: 16,
  },
  mt32: {
    marginTop: 32,
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
  rentingApp: {
    top: 64,
    left: 69,
    fontSize: FontSize.size_21xl,
    letterSpacing: -0.8,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  registration1: {
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
  chevronDownIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  frameParent: {
    alignItems: "flex-end",
  },
  text11: {
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
  registrationParent: {
    top: 152,
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
  registration: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});
const firebaseConfig = {
  apiKey: "AIzaSyANwyyw4AMzl3PU3HuTB_fG2kFSK-CsLvQ",
  databaseURL: firebase.database().ref().toString(),
  projectId: "nascon-637ca",
  storageBucket: "nascon-637ca.appspot.com",
  appId: "1:110459732205:android:a991a03476a945c8d14ce4",
};

const handleSignup = (name, country, email, city, password) => {
  firebase.initializeApp(firebaseConfig);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      const userData = {
        name,
        country,
        email,
        city,
      };
      firebase
        .database()
        .ref('users/' + user.uid)
        .set(userData);
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const CallScreen = () => {
  const [number, setNumber] = useState('');

  const handleCall = () => {
    const phoneNumber = `tel:${number}`;
    Linking.openURL(phoneNumber);
  };
const FirebaseList = ({ search }) => {
  const [data, setData] = useState([]);
  const [matchingData, setMatchingData] = useState([]);
  const [nonMatchingData, setNonMatchingData] = useState([]);

  useEffect(() => {
    // Initialize Firebase with your configuration
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    // Retrieve data from Firebase
    const fetchData = async () => {
      const snapshot = await firebase.database().ref('/items').once('value');
      const items = snapshot.val();
      setData(items);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Update matching and non-matching data based on search term
    if (search) {
      const filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      setMatchingData(filteredData);
      setNonMatchingData(data.filter(item => !item.name.toLowerCase().includes(search.toLowerCase())));
    } else {
      setMatchingData([]);
      setNonMatchingData([]);
    }
  }, [search, data]);
  
export default Registration;
