/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ProtocalDlg } from 'react-native-protocal-view';
import { px2dp, onePix } from './utils';
import { USER_PROTOCAL_BODY_HTML } from './user_protocal'
import { PRIVACY_PROTOCAL_BODY_HTML } from './privacy_protocal'

const onAgreeDlgPressed = () => {
  const protocalDlg = _.get(this, 'refs.protocalDlg');
  // 进入页面直接显示同意对话框
  protocalDlg && protocalDlg.show();
}

const onProtocalDlgPressed = () => {
  const protocalDlg = _.get(this, 'refs.protocalDlg');
  if (!protocalDlg) {
    return;
  }
  protocalDlg.showHtml('隐私政策', PRIVACY_PROTOCAL_BODY_HTML);
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
        </ScrollView>
        <View style={styles.body}>
          <TouchableOpacity style={styles.button}
            onPresss={onProtocalDlgPressed}>
            <Text style={styles.buttonText}>Show ProtocalDialogOnly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPresss={onAgreeDlgPressed}>
            <Text style={styles.buttonText}>Show AgreeDialog</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ProtocalDlg
        privacyHtml={PRIVACY_PROTOCAL_BODY_HTML}
        userProtocalHtml={USER_PROTOCAL_BODY_HTML}
        appName={'智课斩雅思'}
        ref="protocalDlg"
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  container: {
    flex: 1
  },
  body: {
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    padding: px2dp(20),
    margin: px2dp(15),
    backgroundColor: '#3399ff',
    borderWidth: onePix,
    elevation: 5,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowColor: '#000000',
  },
  buttonText: {
    color: '#fff',
    fontSize: px2dp(20),
    textAlign: 'center'
  }
});

export default App;
