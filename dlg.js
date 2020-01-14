import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import RNProtocalView from 'react-native-protocal-view';
import { px2dp, onePix } from './utils';
import { USER_PROTOCAL_BODY_HTML } from './user_protocal'
import { PRIVACY_PROTOCAL_BODY_HTML } from './privacy_protocal'

export default class ProtocalViewDlg extends React.Component {

    onAgreeDlgPressed = () => {
        console.log('onAgreeDlgPressed', this.refs);
        // return
        const protocalDlg = this.refs.protocalDlg;
        // 进入页面直接显示同意对话框
        protocalDlg && protocalDlg.show();
    }

    onProtocalDlgPressed = () => {
        console.log('onProtocalDlgPressed', this.refs.protocalDlg);
        // return
        const protocalDlg = this.refs.protocalDlg;
        if (!protocalDlg) {
            return;
        }
        protocalDlg.showHtml('隐私政策', PRIVACY_PROTOCAL_BODY_HTML);
    }

    render() {
        return [(
            <View style={styles.body} key='1'>
                <TouchableOpacity style={styles.button}
                    onPress={this.onProtocalDlgPressed.bind(this)}>
                    <Text style={styles.buttonText}>Show ProtocalDialogOnly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this.onAgreeDlgPressed.bind(this)}>
                    <Text style={styles.buttonText}>Show AgreeDialog</Text>
                </TouchableOpacity>
            </View>
        ), (
            <RNProtocalView
                key='2'
                privacyHtml={PRIVACY_PROTOCAL_BODY_HTML}
                userProtocalHtml={USER_PROTOCAL_BODY_HTML}
                appName={'智课斩雅思'}
                ref="protocalDlg"
            />)
        ]
    }
}


const styles = StyleSheet.create({

    body: {
        justifyContent: 'flex-end',
        alignContent: 'center',
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
