import Vue from "vue"
import VueRouter from "vue-router"
import Start from "../components/start.vue"
import Active from "../components/active.vue"
Vue.use(VueRouter)
const routes = [
	{
		path:"/",
		redirect:{
			name:"start"
		}
	},
	{
		"path":"/start",
		"name":"start",
		"component":Start
	},
	{
		"path":"/active",
		"name":"active",
		"component":Active
	}
]
const router = new VueRouter({
	routes
})
export default router
