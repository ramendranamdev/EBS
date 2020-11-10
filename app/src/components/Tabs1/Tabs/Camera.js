import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';

export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
    };
  }

  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
        const data = await this.camera.takePictureAsync(options);
        Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };

  render() {
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <Button
          transparent
          activeOpacity={0.5}
          style={styles.btnAlignment}
          onPress={this.takePicture}>
          <Icon
            type="FontAwesome"
            name="camera"
            style={{color: '#FFFFFF', fontSize: 50}}
          />
        </Button>
      </RNCamera>
    );
  }
}
const styles = StyleSheet.create({
  btnAlignment: {
    alignSelf: 'center',
    marginVertical: 700,
  },
});
