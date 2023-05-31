export const baseUrl = "http://localhost:3000"

export const Postrequest = async(url,body)=>{
  
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
export const getRequest = async(url)=>{
    const response = await fetch(url)

    const data = await response.json();

    if(!response.ok){
        let message = "An error ocuured"
        if (data?.message) {
            message = data.message;
        } 
        return { error: true, message }
    }
    return data;
    

}