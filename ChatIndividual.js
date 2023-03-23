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
const ChatIndividual = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.chatIndividual, styles.iconLayout]}>
      <View
        style={[styles.topNotch, styles.headerFlexBox, styles.headerPosition]}
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
            source={require("../cellular-connection@3x.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.ml5]}
            resizeMode="cover"
            source={require("../wifi1@3x.png")}
          />
          <View style={[styles.battery, styles.ml5]}>
            <View style={styles.border} />
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
          styles.headerSpaceBlock,
          styles.headerFlexBox,
          styles.headerPosition,
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
          <Text style={[styles.pageTitle, styles.ml8]}>Makenna Dias</Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.phoneWrapper}>
            <Image
              style={styles.phoneIcon}
              resizeMode="cover"
              source={require("../phone@3x.png")}
            />
          </View>
          <View style={[styles.phoneWrapper, styles.ml16]}>
            <Image
              style={styles.phoneIcon}
              resizeMode="cover"
              source={require("../video1@3x.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.chatItemParent, styles.parentPosition]}>
        <View style={[styles.chatItem, styles.chatItemFlexBox]}>
          <Image
            style={[styles.chatItemChild, styles.cameraIconLayout]}
            resizeMode="cover"
            source={require("../ellipse-5@3x.png")}
          />
          <View style={[styles.chatItemFlexBox, styles.ml12]}>
            <View
              style={[
                styles.weWillDoThisTogetherWrapper,
                styles.willSpaceBlock,
              ]}
            >
              <Text style={[styles.weWillDo, styles.willTypo]}>
                This is a sample message
              </Text>
            </View>
            <Text style={[styles.textTypo, styles.ml8]}>18:56</Text>
          </View>
        </View>
        <View style={[styles.chatItem1, styles.mt16, styles.chatItemFlexBox]}>
          <Text style={styles.textTypo}>18:56</Text>
          <View
            style={[
              styles.weWillDoThisTogetherContainer,
              styles.ml8,
              styles.willSpaceBlock,
            ]}
          >
            <Text style={[styles.weWillDo1, styles.willTypo]}>
              This is a sample message
            </Text>
          </View>
        </View>
        <View style={[styles.chatItem, styles.mt16, styles.chatItemFlexBox]}>
          <Image
            style={[styles.chatItemChild, styles.cameraIconLayout]}
            resizeMode="cover"
            source={require("../ellipse-5@3x.png")}
          />
          <View style={[styles.chatItemFlexBox, styles.ml12]}>
            <View
              style={[
                styles.weWillDoThisTogetherWrapper,
                styles.willSpaceBlock,
              ]}
            >
              <Text style={[styles.weWillDo, styles.willTypo]}>
                This is a sample message
              </Text>
            </View>
            <Text style={[styles.textTypo, styles.ml8]}>18:56</Text>
          </View>
        </View>
        <View style={[styles.chatItem, styles.mt16, styles.chatItemFlexBox]}>
          <Image
            style={[styles.chatItemChild, styles.cameraIconLayout]}
            resizeMode="cover"
            source={require("../ellipse-5@3x.png")}
          />
          <View style={[styles.chatItemFlexBox, styles.ml12]}>
            <View
              style={[
                styles.weWillDoThisTogetherWrapper,
                styles.willSpaceBlock,
              ]}
            >
              <Text style={[styles.weWillDo, styles.willTypo]}>
                This is a sample message
              </Text>
            </View>
            <Text style={[styles.textTypo, styles.ml8]}>18:56</Text>
          </View>
        </View>
        <View style={[styles.chatItem, styles.mt16, styles.chatItemFlexBox]}>
          <Image
            style={[styles.chatItemChild, styles.cameraIconLayout]}
            resizeMode="cover"
            source={require("../ellipse-5@3x.png")}
          />
          <View style={[styles.chatItemFlexBox, styles.ml12]}>
            <View
              style={[
                styles.weWillDoThisTogetherWrapper,
                styles.willSpaceBlock,
              ]}
            >
              <Text style={[styles.weWillDo, styles.willTypo]}>
                This is a sample message
              </Text>
            </View>
            <Text style={[styles.textTypo, styles.ml8]}>18:56</Text>
          </View>
        </View>
        <View style={[styles.chatItem1, styles.mt16, styles.chatItemFlexBox]}>
          <Text style={styles.textTypo}>18:56</Text>
          <View
            style={[
              styles.weWillDoThisTogetherContainer,
              styles.ml8,
              styles.willSpaceBlock,
            ]}
          >
            <Text style={[styles.weWillDo1, styles.willTypo]}>
              This is a sample message
            </Text>
          </View>
        </View>
        <View style={[styles.chatItem1, styles.mt16, styles.chatItemFlexBox]}>
          <Text style={styles.textTypo}>18:56</Text>
          <View
            style={[
              styles.weWillDoThisTogetherContainer,
              styles.ml8,
              styles.willSpaceBlock,
            ]}
          >
            <Text style={[styles.weWillDo1, styles.willTypo]}>
              This is a sample message
            </Text>
          </View>
        </View>
        <View style={[styles.chatItem, styles.mt16, styles.chatItemFlexBox]}>
          <Image
            style={[styles.chatItemChild, styles.cameraIconLayout]}
            resizeMode="cover"
            source={require("../ellipse-5@3x.png")}
          />
          <View style={[styles.chatItemFlexBox, styles.ml12]}>
            <View
              style={[
                styles.weWillDoThisTogetherWrapper,
                styles.willSpaceBlock,
              ]}
            >
              <Text style={[styles.weWillDo, styles.willTypo]}>
                This is a sample message
              </Text>
            </View>
            <Text style={[styles.textTypo, styles.ml8]}>18:56</Text>
          </View>
        </View>
        <View style={[styles.chatItem, styles.mt16, styles.chatItemFlexBox]}>
          <Image
            style={[styles.chatItemChild, styles.cameraIconLayout]}
            resizeMode="cover"
            source={require("../ellipse-5@3x.png")}
          />
          <View style={[styles.chatItemFlexBox, styles.ml12]}>
            <View
              style={[
                styles.weWillDoThisTogetherWrapper,
                styles.willSpaceBlock,
              ]}
            >
              <Text style={[styles.weWillDo, styles.willTypo]}>...</Text>
            </View>
            <Text style={[styles.text8, styles.ml8, styles.textTypo]}>
              18:56
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.writeAReplyParent,
          styles.parentPosition,
          styles.headerSpaceBlock,
        ]}
      >
        <Text style={[styles.writeAReply, styles.willTypo]}>
          Write a reply...
        </Text>
        <View style={[styles.frameParent4, styles.mt16, styles.headerFlexBox]}>
          <View style={styles.frameParent}>
            <Image
              style={[styles.cameraIcon, styles.cameraIconLayout]}
              resizeMode="cover"
              source={require("../camera1@3x.png")}
            />
            <Image
              style={[styles.cameraIcon, styles.ml16, styles.cameraIconLayout]}
              resizeMode="cover"
              source={require("../image1@3x.png")}
            />
            <Image
              style={[styles.cameraIcon, styles.ml16, styles.cameraIconLayout]}
              resizeMode="cover"
              source={require("../file@3x.png")}
            />
          </View>
          <Text style={styles.send}>Send</Text>
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
  ml16: {
    marginLeft: 16,
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
  headerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerPosition: {
    width: 375,
    left: 0,
    justifyContent: "space-between",
    position: "absolute",
    backgroundColor: Color.white,
  },
  timeWrapperFlexBox: {
    justifyContent: "center",
    height: 24,
    alignItems: "center",
  },
  headerSpaceBlock: {
    padding: Padding.p_base,
    borderStyle: "solid",
  },
  parentPosition: {
    left: "50%",
    marginLeft: -187.5,
    width: 375,
    position: "absolute",
  },
  chatItemFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  cameraIconLayout: {
    height: 24,
    width: 24,
  },
  willSpaceBlock: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
  },
  willTypo: {
    fontFamily: FontFamily.stylesBody1,
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
    textAlign: "left",
  },
  textTypo: {
    color: Color.gray400,
    lineHeight: 18,
    fontSize: FontSize.bodyXsSemibold_size,
    fontFamily: FontFamily.stylesBody1,
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
    borderColor: "#1e1f21",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
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
    left: 0,
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
  arrowLeftParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  phoneIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  phoneWrapper: {
    padding: Padding.p_9xs,
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  header: {
    top: 44,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
  },
  chatItemChild: {
    width: 24,
  },
  weWillDo: {
    color: Color.gray800,
  },
  weWillDoThisTogetherWrapper: {
    backgroundColor: Color.gray100,
  },
  chatItem: {
    paddingRight: Padding.p_61xl,
    alignSelf: "stretch",
  },
  weWillDo1: {
    color: Color.white,
  },
  weWillDoThisTogetherContainer: {
    backgroundColor: Color.darkorange,
  },
  chatItem1: {
    paddingLeft: Padding.p_61xl,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  text8: {
    display: "none",
  },
  chatItemParent: {
    bottom: 96,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_13xl,
  },
  writeAReply: {
    color: Color.gray500,
  },
  cameraIcon: {
    width: 24,
    overflow: "hidden",
  },
  send: {
    color: Color.darkorange,
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
    textAlign: "left",
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  frameParent4: {
    alignSelf: "stretch",
  },
  writeAReplyParent: {
    bottom: 0,
    backgroundColor: Color.gray25,
    borderColor: "#e4e7ec",
    borderTopWidth: 1,
  },
  chatIndividual: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      // Your Firebase configuration
    };
    firebase.initializeApp(firebaseConfig);

    // Listen for new messages
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('child_added', (snapshot) => {
      const message = snapshot.val();
      setMessages((prevMessages) => [...prevMessages, message]);

      // Store message in local storage
      localStorage.setItem('messages', JSON.stringify([...prevMessages, message]));
    });

    // Retrieve messages from local storage when offline
    window.addEventListener('offline', () => {
      const localMessages = JSON.parse(localStorage.getItem('messages'));
      if (localMessages) {
        setMessages(localMessages);
      }
    });
  }, []);

  const sendMessage = () => {
    // Save new message to Firebase
    const messagesRef = firebase.database().ref('messages');
    const message = { text: newMessage };
    messagesRef.push(message);

    // Clear input field
    setNewMessage('');
  };
  
export default ChatIndividual;
