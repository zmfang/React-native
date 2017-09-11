
// 第一次更改
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  DrawerLayoutAndroid
} from 'react-native';
class ImageDemo extends Component {
  render(

  ) {
    var navigationView = (
      <View style={styles.container}>
        <View style={styles.nav_top_view}>
        <Image 
           style={{width: 50, height: 50}}
           source={require('./qq_Bot.png')}
        />
        <Text
          style={{marginTop:10,fontSize:16,color:'white'}}>方贞铭</Text>
        </View>
         <TouchableOpacity
            onPress={this.close}
          >
        <View style={styles.nav_item_view}>
        <Image 
           style={{width: 20, height: 20}}
           source={require('./qq_qzone.png')}
        />
        <Text
          style={{fontSize:14,color:'grey',marginLeft:10}}>首页</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.nav_item_view}>
        <Image 
           style={{width: 20, height: 20}}
           source={require('./qq_buy.png')}
        />
        <Text
          style={{fontSize:14,color:'grey',marginLeft:10}}>礼物</Text>
        </View>
        <View style={styles.nav_item_view}>
        <Image 
           style={{width: 20, height: 20}}
           source={require('./qq_buy.png')}
        />
        <Text
          style={{fontSize:14,color:'grey',marginLeft:10}}>设置</Text>
        </View>
      </View>
      );
	return (

    <DrawerLayoutAndroid
		ref={(drawer) => { this.drawer = drawer; }}
		drawerWidth={260}
		drawerPosition={DrawerLayoutAndroid.positions.Left}
		renderNavigationView={() => navigationView}>
	  <View style={styles.container}>
		 
     <View style={styles.title_view}>
		 <Text style={styles.title_text}>
			   空间动态
		 </Text>
		</View>
	
		<View style={styles.three_image_view}>
   <TouchableNativeFeedback>
      <View style={styles.vertical_view}>
			  <Image source={require('./qq_qzone.png')} style={{alignSelf:'center',width:55,height:55}} />
			  <Text style={styles.top_text}>
				好友动态
			  </Text>
		  </View>
   </TouchableNativeFeedback>
		
    <TouchableNativeFeedback>
      <View style={styles.vertical_view}>
			  <Image source={require('./qq_qzone.png')} style={{alignSelf:'center',width:55,height:55}}/>
			  <Text style={styles.top_text}>
				附近
			  </Text>
		 </View>
    </TouchableNativeFeedback>
		  <TouchableNativeFeedback>
         <View style={styles.vertical_view}>
			  <Image source={require('./qq_qzone.png')} style={{alignSelf:'center',width:55,height:55}}/>
			  <Text style={styles.top_text} >
				兴趣部落
			  </Text>
		 </View>
      </TouchableNativeFeedback>
		 
		</View>
    <ScrollView  >
		<View style={{height:30,backgroundColor:'#f9f9fb'}}/>
	<TouchableNativeFeedback>
    <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				羽毛球
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		
  </TouchableNativeFeedback>
  <TouchableHighlight 
		  underlayColor="green"
		  activeOpacity={0.5}
		  onPress={()=>{
		  console.log('我被点击了');
		  }}
		>
    <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				火车票
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
     </TouchableHighlight>	
     
	
  	 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				视频
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				羽毛球
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				火车票
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				视频
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				羽毛球
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				火车票
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				视频
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				羽毛球
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				火车票
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				视频
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				羽毛球
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				火车票
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				视频
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				羽毛球
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				火车票
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 <View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Image source={require('./qq_buy.png')} style={{alignSelf:'center',width:30,height:30}}/>
			  <Text style={styles.rectangle_text} >
				视频
			  </Text>
		  </View>
		  <Image source={require('./fast_forward.png')} style={{alignSelf:'center',width:20,height:20}}/>
		 </View>
		 </ScrollView>
		
     <View style={styles.button}>
        <TouchableNativeFeedback>
           <View style={styles.button_image}>
          <Image source={require('./qq_Bot.png')} style={{alignSelf:'center',width:28,height:28}}/>
          <Text style={styles.button_text}>
              消息
			  </Text>
        </View>
        </TouchableNativeFeedback>
       
      <TouchableNativeFeedback>
         <View style={styles.button_image}>
          <Image source={require('./qq_Bot.png')} style={{alignSelf:'center',width:28,height:28}}/>
          <Text style={styles.button_text}>
              好友
			  </Text>
        </View>
      </TouchableNativeFeedback>
       
       <TouchableNativeFeedback>
         <View style={styles.button_image}>
           
          <Image source={require('./qq_Bot.png')} style={{alignSelf:'center',width:28,height:28}}/>
          <Text style={styles.button_text}>
              空间
			  </Text>
        </View>
       </TouchableNativeFeedback>
        
    </View>
     
	  </View>
   </DrawerLayoutAndroid>
	);
  }
}
const styles = StyleSheet.create({
 container: {
	flex: 1,
	backgroundColor: 'white',
  },
  nav_top_view:{
    flexDirection:'column',
    height:150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#27b5ee',
    },
    nav_item_view:{
      flexDirection:'row',
      height:50,
      paddingLeft:30,
      paddingTop:6,
      paddingBottom:6,
      alignItems: 'center',
      backgroundColor:'#FFFFFF',
      },
   title_view:{
	flexDirection:'row',
	height:50,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor:'#27b5ee',
  },
   title_text:{
	color:'white',
	fontSize:20,
	textAlign:'center'
  },
  three_image_view:{
  
  
	flexDirection:'row',
	
	alignItems: 'center',
	backgroundColor:'white',
  },
  vertical_view:{
	justifyContent: 'center',
  alignItems: 'center',
  flex:1,
  paddingTop:15,
	backgroundColor:'white',
	paddingBottom:15,
  },
   top_text:{
	marginTop:5,
	color:'black',
	fontSize:16,
	textAlign:'center'
  },
  rectangle_view:{
	paddingTop:8,
	paddingBottom:8,
	paddingLeft:15,
	paddingRight:15,
	flexDirection:'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor:'white',  
	borderBottomColor:'#dedfe0',
	borderBottomWidth:1,
  },
  rectangle_text:{
	color:'black',
	fontSize:16,
	textAlign:'center',
	paddingLeft:8,
  },
  button: {
    
    flexDirection:'row',
    
    alignItems: 'center',
    backgroundColor:'white',
    
  },
  button_image:
  {
    justifyContent: 'center',
    paddingTop:15,
    flex:1,
    backgroundColor:'white',
    paddingBottom:15,
  },
  button_text:{
    marginTop:5,
    color:'black',
    fontSize:10,
    textAlign:'center'
  }

});
AppRegistry.registerComponent('Demo01', () => ImageDemo);