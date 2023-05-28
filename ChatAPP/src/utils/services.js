export const baseUrl = "http://localhost:3000/user"

export const Postrequest = async(url,body)=>{
    console.log(url)
    console.log(body)
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body
    })
    console.log(response)
    const data = await response.json();
    if(!response.ok){
        let message 
        if(data?.message){
          message = data.message;
        }else{
            message = data
        }
        return {error:true,message}
    }
    return data

}