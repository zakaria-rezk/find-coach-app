
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
         
         if(!response.ok){
            
            const error =new Error (reponseDate.message || 'faild to authenticate')
             throw error
         }
       localStorage.setItem('token',reponseDate.idToken)
         localStorage.setItem('id',reponseDate.localId)
         context.commit('setUser',{
            userid :reponseDate.localId,
             token:reponseDate.idToken,
             expiresIn:reponseDate.expiresIn,
 
         })
 
     },
    autoLogin(context){
        const token =localStorage.getItem('token')
        const id =localStorage.getItem('id') 
        if(token && id){
            context.commit('setUser',{
                userid :id,
                 token:token ,
                 expiresIn:null,
     
             })
        }
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