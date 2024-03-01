export default{
  async addrequest(context,data){
        const requestdata ={
            email:data.email,
            message:data.mess,
        }
   const response = await fetch(`https://vue-app-cdefa-default-rtdb.firebaseio.com/requests/${data.coachid}.json`,{
        method:'POST',
        body:JSON.stringify(requestdata)
    })
    const responsedata = await response.json();
  
    requestdata.id =responsedata.name;
    requestdata.coachid = data.coachid;
    if(!response.ok){
        //spme logic
        const error =new Error('Can not fetch data')
      throw error;
    }
        context.commit('addrequests',requestdata)
    },
 async loadrequest(context){
        const coachID=context.rootGetters.avtiveuser;
       const response =await fetch(`https://vue-app-cdefa-default-rtdb.firebaseio.com/requests/${coachID}.json`)
       if(!response.ok){
        //spme logic
        const error =new Error('Can not fetch requests')
      throw error;
    }
       const responseData = await response.json();
       const requests=[];
     
       for(const key in responseData){
       
        const request ={
            id:key,
            coachId:coachID,
            userEmail:responseData[key].email,
            userMessage:responseData[key].message
        }
       
         requests.push(request)
       }
       context.commit('getrequests',requests)

    }
}