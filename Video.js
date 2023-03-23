import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

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
const Video = () => {
  return (
    <View style={styles.video}>
      <View style={[styles.videoChild, styles.videoChildLayout]} />
      <Image
        style={[styles.clockIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../clock@3x.png")}
      />
      <Image
        style={[styles.sunIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../sun@3x.png")}
      />
      <View
        style={[
          styles.frameParent,
          styles.parentFlexBox,
          styles.videoChildLayout,
        ]}
      >
        <View style={[styles.frameGroup, styles.topNotchFlexBox]}>
          <View style={[styles.imageWrapper, styles.wrapperSpaceBlock]}>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../image@3x.png")}
            />
          </View>
          <Image
            style={[styles.frameChild, styles.ml54]}
            resizeMode="cover"
            source={require("../group-1@3x.png")}
          />
          <View
            style={[
              styles.refreshCcwWrapper,
              styles.ml54,
              styles.wrapperSpaceBlock,
            ]}
          >
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../refreshccw@3x.png")}
            />
          </View>
        </View>
        <View style={[styles.frameContainer, styles.mt24]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.photo, styles.photoTypo]}>Photo</Text>
          </View>
          <View
            style={[styles.videoWrapper, styles.ml8, styles.wrapperFlexBox]}
          >
            <Text style={[styles.video1, styles.photoTypo]}>Video</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.xIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../x@3x.png")}
      />
      <View
        style={[styles.topNotch, styles.borderPosition, styles.topNotchFlexBox]}
      >
        <View style={[styles.timeWrapper, styles.parentFlexBox]}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={require("../time@3x.png")}
          />
        </View>
        <View style={[styles.cellularConnectionParent, styles.parentFlexBox]}>
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
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../cap@3x.png")}
            />
            <View style={styles.capacity} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml54: {
    marginLeft: 54,
  },
  ml8: {
    marginLeft: 8,
  },
  mt24: {
    marginTop: 24,
  },
  ml5: {
    marginLeft: 5,
  },
  videoChildLayout: {
    width: 375,
    position: "absolute",
  },
  iconPosition: {
    top: 60,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  topNotchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_980xl,
    flexDirection: "row",
  },
  photoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.stylesBody1,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    width: 104,
    borderRadius: Border.br_980xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  videoChild: {
    top: 44,
    backgroundColor: Color.gainsboro,
    height: 768,
    left: 0,
  },
  clockIcon: {
    left: 311,
    height: 24,
    width: 24,
  },
  sunIcon: {
    left: 176,
    height: 24,
    width: 24,
  },
  imageIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  imageWrapper: {
    backgroundColor: Color.lightgray,
  },
  frameChild: {
    width: 58,
    height: 58,
  },
  refreshCcwWrapper: {
    backgroundColor: Color.gray_500,
  },
  frameGroup: {
    flexDirection: "row",
  },
  photo: {
    color: Color.gray_300,
  },
  video1: {
    color: Color.white,
  },
  videoWrapper: {
    backgroundColor: Color.darkorange,
  },
  frameContainer: {
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.white,
  },
  xIcon: {
    left: 40,
    height: 24,
    width: 24,
  },
  timeIcon: {
    width: 30,
    height: 11,
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
    borderStyle: "solid",
    borderColor: "#0d0d0d",
    borderWidth: 1,
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
    height: 11,
    width: 24,
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
    flexDirection: "row",
    left: 0,
    backgroundColor: Color.white,
  },
  video: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});
const VoiceCallScreen = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);

  const localStreamRef = useRef(null);
  const remoteStreamRef = useRef(null);
  const peerConnectionRef = useRef(null);

  const startLocalStream = async () => {
    const stream = await mediaDevices.getUserMedia({ audio: true });

    setLocalStream(stream);
    localStreamRef.current = stream;
  };

  const startPeerConnection = () => {
    const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
    peerConnectionRef.current = new RTCPeerConnection(configuration);

    peerConnectionRef.current.onicecandidate = event => {
      if (event.candidate) {
        // Send the candidate to the remote peer
      }
    };

    peerConnectionRef.current.onaddstream = event => {
      setRemoteStream(event.stream);
      remoteStreamRef.current = event.stream;
    };

    localStreamRef.current.getTracks().forEach(track => {
      peerConnectionRef.current.addTrack(track, localStreamRef.current);
    });
  };

  const startCall = async () => {
    await startLocalStream();
    startPeerConnection();
  };

  const toggleMute = () => {
    localStreamRef.current.getAudioTracks()[0].enabled = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleSpeaker = () => {
    setIsSpeaker(!isSpeaker);
    localStreamRef.current._tracks[0]._audioOutputChanged();
  };

export default Video;
