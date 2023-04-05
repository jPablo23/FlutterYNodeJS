import 'package:flutter/material.dart';

class SignInPage extends StatefulWidget {
  @override
  _SignInPageState createState() => _SignInPageState();
}
class _SignInPageState extends State<SignInPage> {
  
    @override
  void initState() {
    // TODO: implement initState
    super.initState();
    initSharedPref();
  }
    void initSharedPref() async{
    prefs = await SharedPreferences.getInstance();
  }

}