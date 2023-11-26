const baseURL = ""


async function postConversation(){
    return 1;
}
async function f(modelID, conversation){
    let formData = new FormData();
    formData.append("convesation", conversation);

    try{
        const resp = await fetch(baseURL + "modelID", {
            method: "POST",
            body: formData
        })

        if(!resp.ok){
            throw new Error("Network stupid u idiot")
        }
    }catch (error){
        console.error("Fetch error", error);
        throw error;
    }
};

export { postConversation };