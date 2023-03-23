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
const VoiceCall = () => {
  return (
    <View style={styles.voiceCall}>
      <View
        style={[
          styles.voiceCallChild,
          styles.lineParentLayout,
          styles.topNotchPosition,
        ]}
      />
      <View style={[styles.topNotch, styles.topNotchPosition]}>
        <View
          style={[
            styles.timeWrapper,
            styles.parentFlexBox,
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
            styles.parentFlexBox,
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
            <View style={styles.border} />
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
          styles.lineParent,
          styles.parentFlexBox,
          styles.lineParentLayout,
        ]}
      >
        <View style={styles.frameChild} />
        <View style={[styles.frameParent, styles.mt24]}>
          <View style={[styles.micOffWrapper, styles.wrapperSpaceBlock]}>
            <Image
              style={styles.micOffIcon}
              resizeMode="cover"
              source={require("../micoff@3x.png")}
            />
          </View>
          <View
            style={[
              styles.micOffWrapper,
              styles.ml40,
              styles.wrapperSpaceBlock,
            ]}
          >
            <Image
              style={styles.micOffIcon}
              resizeMode="cover"
              source={require("../volume2@3x.png")}
            />
          </View>
          <View
            style={[
              styles.micOffWrapper,
              styles.ml40,
              styles.wrapperSpaceBlock,
            ]}
          >
            <Image
              style={styles.micOffIcon}
              resizeMode="cover"
              source={require("../pause@3x.png")}
            />
          </View>
        </View>
        <View style={[styles.xWrapper, styles.mt24, styles.wrapperSpaceBlock]}>
          <Image
            style={styles.micOffIcon}
            resizeMode="cover"
            source={require("../x1@3x.png")}
          />
        </View>
      </View>
      <View style={styles.callerNameParent}>
        <Text style={[styles.callerName, styles.textTypo]}>Caller Name</Text>
        <Text style={[styles.text, styles.mt12, styles.textTypo]}>00:58</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: 5,
  },
  ml40: {
    marginLeft: 40,
  },
  mt24: {
    marginTop: 24,
  },
  mt12: {
    marginTop: 12,
  },
  lineParentLayout: {
    width: 375,
    position: "absolute",
  },
  topNotchPosition: {
    left: 0,
    top: 0,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  timeWrapperLayout: {
    height: 24,
    justifyContent: "center",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_sm,
    borderRadius: Border.br_980xl,
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  voiceCallChild: {
    backgroundColor: Color.gainsboro,
    height: 812,
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
    borderColor: "#0d0d0d",
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
    opacity: 0.4,
    height: 4,
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
    height: 44,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameChild: {
    borderColor: "#d1d1d1",
    borderTopWidth: 4,
    width: 44,
    height: 4,
    borderStyle: "solid",
  },
  micOffIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  micOffWrapper: {
    backgroundColor: Color.lightgray,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  xWrapper: {
    backgroundColor: Color.red,
  },
  lineParent: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    backgroundColor: Color.white,
  },
  callerName: {
    fontSize: FontSize.size_3xl,
    color: Color.black,
  },
  text: {
    fontSize: FontSize.stylesBody1_size,
    color: Color.dimgray_100,
  },
  callerNameParent: {
    top: 115,
    left: 123,
    alignItems: "center",
    position: "absolute",
  },
  voiceCall: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
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

export default VoiceCall;
