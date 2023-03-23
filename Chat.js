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
const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.chat, styles.chatLayout]}>
      <View
        style={[styles.topNotch, styles.topNotchFlexBox, styles.headerLayout]}
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
      <View style={[styles.header, styles.borderBorder, styles.headerLayout]}>
        <Pressable style={styles.arrowLeft} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.chatLayout]}
            resizeMode="cover"
            source={require("../arrowleft@3x.png")}
          />
        </Pressable>
        <Text style={[styles.pageTitle, styles.ml8, styles.pageTitleTypo]}>
          Chat
        </Text>
      </View>
      <View style={styles.frameParent}>
        <Pressable
          style={[
            styles.frameGroup,
            styles.topNotchFlexBox,
            styles.headerLayout,
          ]}
          onPress={() => navigation.navigate("ChatIndividual")}
        >
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../ellipse-51@3x.png")}
            />
            <View style={styles.ml16}>
              <Text style={[styles.makennaDias, styles.pageTitleTypo]}>
                Makenna Dias
              </Text>
              <Text style={[styles.newMessage, styles.mt4, styles.newTypo]}>
                1 new message
              </Text>
            </View>
          </View>
          <Image
            style={styles.chevronRightIcon}
            resizeMode="cover"
            source={require("../chevronright@3x.png")}
          />
        </Pressable>
        <View
          style={[
            styles.frameGroup,
            styles.mt1,
            styles.topNotchFlexBox,
            styles.headerLayout,
          ]}
        >
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../ellipse-52@3x.png")}
            />
            <View style={styles.ml16}>
              <Text style={[styles.makennaDias, styles.pageTitleTypo]}>
                Miracle Philips
              </Text>
              <Text style={[styles.noNewMessages, styles.mt4, styles.newTypo]}>
                No new messages
              </Text>
            </View>
          </View>
          <Image
            style={styles.chevronRightIcon}
            resizeMode="cover"
            source={require("../chevronright@3x.png")}
          />
        </View>
        <View
          style={[
            styles.frameGroup,
            styles.mt1,
            styles.topNotchFlexBox,
            styles.headerLayout,
          ]}
        >
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../ellipse-53@3x.png")}
            />
            <View style={styles.ml16}>
              <Text style={[styles.makennaDias, styles.pageTitleTypo]}>
                Zaire Gouse
              </Text>
              <Text style={[styles.noNewMessages, styles.mt4, styles.newTypo]}>
                No new messages
              </Text>
            </View>
          </View>
          <Image
            style={styles.chevronRightIcon}
            resizeMode="cover"
            source={require("../chevronright@3x.png")}
          />
        </View>
      </View>
      <View style={[styles.navBar, styles.borderBorder, styles.headerLayout]}>
        <View style={[styles.tabBarBtnParent, styles.topNotchFlexBox]}>
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
              source={require("../messagesquare2@3x.png")}
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
            <Text style={[styles.text, styles.mt6, styles.textTypo]}>
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
  mt4: {
    marginTop: 4,
  },
  ml16: {
    marginLeft: 16,
  },
  mt1: {
    marginTop: 1,
  },
  mt6: {
    marginTop: 6,
  },
  ml_56: {
    marginLeft: -56,
  },
  chatLayout: {
    width: "100%",
    overflow: "hidden",
  },
  topNotchFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerLayout: {
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
  pageTitleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  newTypo: {
    fontFamily: FontFamily.stylesBody1,
    lineHeight: 18,
    fontSize: FontSize.bodyXsSemibold_size,
    textAlign: "left",
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.stylesBody1,
    lineHeight: 18,
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
    padding: Padding.p_3xs,
    width: 40,
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
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
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
  pageTitle: {
    fontSize: FontSize.stylesHeadline6_size,
    lineHeight: 30,
    color: Color.darkslategray_100,
  },
  header: {
    top: 44,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  frameChild: {
    height: 40,
    width: 40,
  },
  makennaDias: {
    fontSize: FontSize.stylesBody1_size,
    lineHeight: 24,
    color: Color.gray600,
  },
  newMessage: {
    color: Color.darkorange,
  },
  ellipseParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  chevronRightIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameGroup: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
  },
  noNewMessages: {
    color: Color.gray400,
  },
  frameParent: {
    top: 106,
    backgroundColor: Color.gray100,
    left: 0,
    position: "absolute",
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
  text2: {
    color: Color.darkorange,
  },
  tabBarBtnParent: {
    top: 16,
    left: 16,
    width: 343,
    position: "absolute",
  },
  navBar: {
    marginLeft: -186.5,
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
  chat: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

const ChatScreen = () => {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    // Create a reference to the Firebase Realtime Database path where the chat data is stored
    const chatRef = firebase.database().ref('chat');

    // Listen for changes to the chat data and update the state with the new data
    const handleChatData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const chatArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setChatData(chatArray);
      }
    };
    chatRef.on('value', handleChatData);

    // Return a cleanup function to remove the listener when the component unmounts
    return () => chatRef.off('value', handleChatData);
  }, []);
export default Chat;
