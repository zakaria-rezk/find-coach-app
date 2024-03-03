
export default {
  async  login(context,paylod){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpPs4T1LOUpOHcskCeBp7TmpuHIwjgvbM',{
             method:'POST',
             body:JSON.stringify({
                 email:paylod.email,
                 password:paylod.password,
                 returnSecureToken:true
             })  
         })
         const reponseDate =await response.json();
         console.log('falid to loing'+reponseDate.localId)
         console.log('falid to loing'+reponseDate.expiresIn)
         if(!response.ok){
            
            const error =new Error (reponseDate.message || 'faild to authenticate')
             throw error
         }
         context.commit('setUser',{
            userid :reponseDate.localId,
             token:reponseDate.idToken,
             expiresIn:reponseDate.expiresIn,
 
         })
 
     },
     
   async signup(context,paylod){
       const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpPs4T1LOUpOHcskCeBp7TmpuHIwjgvbM',{
            method:'POST',
            body:JSON.stringify({
                email:paylod.email,
                password:paylod.password,
                returnSecureToken:true
            })  
        })
        const reponseDate =await response.json();
        
        if(!response.ok){
            console.log(reponseDate)
           const error =new Error (reponseDate.message || 'faild to authenticate')
         throw error
        }
        context.commit('setUser',{
            userid :reponseDate.localId,
            token:reponseDate.idToken,
            expiresIn:reponseDate.expiresIn,

        })

    },
    logout(context){
        context.commit('setUser',{
            userid :null,
            token:null,
            expiresIn:null
    })
}
}