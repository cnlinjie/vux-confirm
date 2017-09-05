import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Information from '../views/Information'
import personaldata from '../views/personaldata'
import statement from '../views/statement'
import project from '../views/project'
import introduce from '../views/introduce'
import activity from '../views/activity'
import link from '../views/link'
import review from '../views/review'
import love from '../views/love'
import donation from '../views/donation/index'
import dona from '../views/donation/donation'
import donations from '../views/donation/donations'
import mynews from '../views/mynews'
import lovelist from '../views/love/index'
import team from '../views/love/team'
import personal from '../views/love/personal'
import createindex from '../views/createteam/index.vue'
import createteam from '../views/createteam/createteam.vue'
import jointeam from '../views/createteam/jointeam.vue'
import createok from '../views/createteam/createok'
import addteam from '../views/createteam/addteam'
import selectteam from '../views/createteam/selectteam'
import createteamok from '../views/createteam/createteamok'
import teanmoney from '../views/createteam/teanmoney'
import reg from '../views/reg'

Vue.use(Router);
export default new Router({
    routes: [
        {path: '/', name: 'Index', component: Index},
        {path: '/Information',name: 'Information', component: Information,children: [
            {path:'/personaldata',component:personaldata},
            {path: '/mynews',component: mynews},
            {path: '/teanmoney',component: teanmoney},
            ]},
        {path: '/statement', name: 'statement',component: statement},
        {path: '/project',name: 'project', component: project},
        {path: '/introduce',name: 'introduce',component: introduce},
        {path: '/activity',name: 'activity',component: activity},
        {path: '/link',name: 'link',component: link},
        {path: '/review',name: 'review',component: review},
        {path: '/love',name: 'love',component: love},
        {path: '/donation',name: 'donation',component: donation},
        {path: '/dona',component: dona},
        {path: '/donations',name: 'donations',component: donations},
        {path: '/lovelist',component: lovelist, children: [
            {path: '/team',component: team},
            {path: '/personal',component: personal}
        ] },
        {path: '/createindex',component: createindex, children: [
            {path: '/createteam',component: createteam},
            {path: '/jointeam',component: jointeam}
        ] },
        {path: '/createok',name: 'createok',component: createok},
        {path: '/addteam',component: addteam},
        {path: '/selectteam',component: selectteam},
        {path: '/createteamok',component: createteamok},
        {path: '/reg',component: reg},

    ]
})
