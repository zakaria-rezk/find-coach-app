export default{
    addrequest(context,data){
        const requestdata ={
            id:new Date().toDateString(),
            coachid:data.coachid,
            email:data.email,
            message:data.mess,
        }
        context.commit('addrequest',requestdata)
    }
}