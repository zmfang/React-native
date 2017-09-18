
import {StackNavigator} from "react-navigation";
import MainPage from './mainPage';
import DetailPagDe from './view/details/detailPage'


const routers = StackNavigator({
    Main: {
        screen: MainPage,
    },
    Detail: {
        screen: DetailPagDe,

    },

});
module.exports = routers;