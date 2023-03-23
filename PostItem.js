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
const PostItem = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.postItem, styles.iconLayout]}>
      <View style={styles.topNotch}>
        <View style={[styles.timeWrapper, styles.buttonFlexBox]}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={require("../time@3x.png")}
          />
        </View>
        <View style={[styles.cellularConnectionParent, styles.buttonFlexBox]}>
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
        <Pressable style={styles.x} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../x2@3x.png")}
          />
        </Pressable>
        <Text style={[styles.pageTitle, styles.ml8, styles.text1Typo]}>
          Item
        </Text>
      </View>
      <View
        style={[
          styles.button,
          styles.buttonLayout,
          styles.buttonPosition,
          styles.buttonFlexBox,
        ]}
      >
        <View
          style={[
            styles.buttonBase,
            styles.buttonBaseFlexBox,
            styles.buttonLayout,
            styles.borderBorder,
          ]}
        >
          <Text style={[styles.text, styles.textTypo]}>Post Item</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.buttonPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameContainer, styles.buttonBaseFlexBox]}>
              <View style={styles.cameraParent}>
                <Image
                  style={styles.cameraIcon}
                  resizeMode="cover"
                  source={require("../camera@3x.png")}
                />
                <Text style={[styles.uploadImage, styles.mt8]}>
                  Upload Image
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper, styles.ml4]}>
            <View style={[styles.frameContainer, styles.buttonBaseFlexBox]}>
              <View style={styles.cameraParent}>
                <Image
                  style={styles.cameraIcon}
                  resizeMode="cover"
                  source={require("../video@3x.png")}
                />
                <Text style={[styles.uploadImage, styles.mt8]}>
                  Upload Video
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputParent, styles.mt24]}>
          <View style={styles.input}>
            <Text style={[styles.text1, styles.text1Typo]}>Name</Text>
            <View
              style={[styles.inputBase, styles.mt6, styles.inputSpaceBlock]}
            >
              <View style={styles.content}>
                <Image
                  style={styles.circleIcon}
                  resizeMode="cover"
                  source={require("../circle@3x.png")}
                />
                <Text style={[styles.text2, styles.ml8, styles.textTypo]}>
                  Enter item name
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.input, styles.mt16]}>
            <Text style={[styles.text1, styles.text1Typo]}>Hourly Rate</Text>
            <View
              style={[styles.inputBase, styles.mt6, styles.inputSpaceBlock]}
            >
              <View style={styles.content}>
                <Image
                  style={styles.circleIcon}
                  resizeMode="cover"
                  source={require("../circle@3x.png")}
                />
                <Text style={[styles.text2, styles.ml8, styles.textTypo]}>
                  Enter hourly rate
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.input2, styles.mt16]}>
            <Text style={[styles.text1, styles.text1Typo]}>Description</Text>
            <View
              style={[styles.inputBase2, styles.mt6, styles.inputSpaceBlock]}
            >
              <View style={styles.content}>
                <Image
                  style={styles.circleIcon}
                  resizeMode="cover"
                  source={require("../circle@3x.png")}
                />
                <Text style={[styles.text2, styles.ml8, styles.textTypo]}>
                  Enter description
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.input, styles.mt16]}>
            <Text style={[styles.text1, styles.text1Typo]}>City</Text>
            <View
              style={[styles.inputBase, styles.mt6, styles.inputSpaceBlock]}
            >
              <View style={styles.content}>
                <Text style={[styles.text8, styles.textTypo]}>Islamabad</Text>
              </View>
              <Image
                style={[styles.chevronDownIcon, styles.ml8]}
                resizeMode="cover"
                source={require("../chevrondown@3x.png")}
              />
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
  mt8: {
    marginTop: 8,
  },
  ml4: {
    marginLeft: 4,
  },
  mt6: {
    marginTop: 6,
  },
  mt16: {
    marginTop: 16,
  },
  mt24: {
    marginTop: 24,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  text1Typo: {
    textAlign: "left",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.stylesHeadline6,
    fontWeight: "600",
  },
  buttonLayout: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  buttonPosition: {
    left: 16,
    position: "absolute",
  },
  buttonBaseFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.stylesBody1_size,
    textAlign: "left",
  },
  inputSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.grey50,
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  timeIcon: {
    height: 11,
    width: 30,
  },
  timeWrapper: {
    width: 40,
    padding: Padding.p_3xs,
    height: 24,
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
    height: 24,
    flexDirection: "row",
  },
  topNotch: {
    width: 390,
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  x: {
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
    overflow: "hidden",
  },
  button: {
    top: 728,
    height: 56,
    width: 343,
  },
  cameraIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  uploadImage: {
    lineHeight: 16,
    color: Color.darkorange,
    textAlign: "center",
    width: 88,
    fontFamily: FontFamily.stylesBody1,
    fontSize: FontSize.bodyXsSemibold_size,
  },
  cameraParent: {
    alignItems: "center",
  },
  frameContainer: {
    borderRadius: Border.br_7xs,
    borderStyle: "dashed",
    borderColor: "rgba(201, 201, 201, 0.5)",
    borderWidth: 1.5,
  },
  frameWrapper: {
    height: 106,
    padding: Padding.p_9xs,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  frameGroup: {
    width: 343,
    flexDirection: "row",
  },
  text1: {
    lineHeight: 18,
    fontSize: FontSize.bodyXsSemibold_size,
  },
  circleIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  text2: {
    color: Color.dimgray_200,
    fontFamily: FontFamily.stylesBody1,
    flex: 1,
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  inputBase: {
    height: 46,
    alignItems: "center",
  },
  input: {
    width: 343,
  },
  inputBase2: {
    flex: 1,
  },
  input2: {
    height: 94,
    width: 343,
  },
  text8: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#353535",
    flex: 1,
  },
  chevronDownIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  inputParent: {
    alignItems: "flex-end",
  },
  frameParent: {
    top: 126,
  },
  postItem: {
    height: 816,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});
const addItemToFirebase = async (newItem) => {
  try {
    // Get a reference to the list in the Firebase Realtime Database
    const listRef = firebase.database().ref('list');

    // Add the new item to the list
    await listRef.push(newItem);

    console.log('New item added to Firebase Realtime Database:', newItem);
  } catch (error) {
    console.error('Error adding item to Firebase Realtime Database:', error);
  }
};









exports.sendNotificationOnNewDataAdded = functions.database
  .ref('/path/to/data')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.val();

    // Construct notification payload
    const payload = {
      notification: {
        title: 'New Data Added',
        body: `New data with id ${context.params.dataId} added to Firebase Realtime Database`,
      },
    };

    // Get FCM token for device(s) to send notification to
    const fcmToken = await admin
      .database()
      .ref(`/users/${data.userId}/fcmToken`)
      .once('value')
      .then((snapshot) => snapshot.val());

    if (!fcmToken) {
      console.log(`FCM token not found for user with id ${data.userId}`);
      return null;
    }

    // Send notification using FCM
    const response = await messaging().sendToDevice(fcmToken, payload);
    console.log('Notification sent successfully:', response);
    return null;
  });
export default PostItem;
