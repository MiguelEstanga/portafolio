import {
    FaHtml5 , 
    FaCss3Alt , 
    FaNode,
    FaReact,
    FaPhp,

} from 'react-icons/fa'
import mysql from './mysql.png'
import mongo from "./mongo.png"
export const Data = [
    {
        icon: <FaHtml5/>,
        name:'HTML',
        color:'#CB4335',
        delay:1
    },
    {
        icon: <FaCss3Alt/>,
        name:'Css',
        color:'#2874A6',
        delay:2
    },
    {
        icon: <ion-icon name="logo-javascript"></ion-icon>,
        name:'javascript',
        color:'#F1C40F',
        delay:3
    },
    {
        icon:<FaNode/>,
        name:"Node js",
        color:'#28B463',
        delay:4
    },
    {
        icon:<FaReact/>,
        name:'react js',
        color:"#1B4F72",
        delay:5
    },
    {
        icon:<FaPhp/>,
        name:'PHP',
        color:"#9B59B6",
        delay:6
    },
    {
        icon:<img src={mysql} />,
        name:'Mysql',
        delay:7
    },
    {
        icon:<img src={mongo} />,
        name:'Mongo',
        delay:8
    }
]