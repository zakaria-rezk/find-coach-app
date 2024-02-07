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
    console.log(userId + 'user id');
    const resopnse = await fetch(
      `https://vue-app-cdefa-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );

    if (!resopnse.ok) {
      //error handling
    }

    context.commit('addcoach', {
      ...data,
      id: userId,
    });
  },
  //load coaches from a backend insted of vuex
  async loadcoaches(context) {
    const response = await fetch(
      `https://vue-app-cdefa-default-rtdb.firebaseio.com/coaches.json`
    );
    const reponsedata = await response.json();
    if (!response.ok) {
      // const error =new Error(reponsedata.message)
      // throw error;
    }
    const coaches = [];
    for (const key in reponsedata) {
      const coach = {
        id: key,
        firstName: reponsedata[key].first,
        lastName: reponsedata[key].last,
        areas: reponsedata[key].areas,
        description: reponsedata[key].desc,
        hourlyRate: reponsedata[key].rate,
      };
      coaches.push(coach);
    }
    context.commit('loadcoaches', coaches);
  },
};
