export default {
  async addcoach(context, coachdata) {
    const userId = context.rootGetters.avtiveuser;
    const data = {
      iscoach: coachdata.iscoach,
      firstName: coachdata.first,
      lastName: coachdata.last,
      areas: coachdata.areas,
      description: coachdata.desc,
      hourlyRate: coachdata.rate,
    };
  
    //SEND DATA TO BACKEND
    
    
    const resopnse = await fetch(
      `https://vue-app-cdefa-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );
    // const responsedata =await resopnse.json();
  
    if (!resopnse.ok) {
      //error handling
    }

    context.commit('addcoach', {
      ...data,
      id: userId,
    });
  },
  //recice data from backend
  async loadcoaches(context) {
    const response = await fetch(
      `https://vue-app-cdefa-default-rtdb.firebaseio.com/coaches.json`
    );
    const reponsedata = await response.json();
    
    if (!response.ok) {
      const error =new Error('Can not fetch coach data')
      throw error;
    }

    const coaches = [];
    for (const key in reponsedata) {
     
      const coach = {
        id: key,
        firstName: reponsedata[key].firstName,
        lastName: reponsedata[key].lastName,
        areas: reponsedata[key].areas,
        description: reponsedata[key].description,
        hourlyRate: reponsedata[key].hourlyRate,
      };
      coaches.push(coach);
    }
   
    context.commit('loadcoaches', coaches);
  },
};
