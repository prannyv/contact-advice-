const baseURL = "http://172.30.227.143:49152/"
async function postConversation(modelID, conversation){
    const payload = {
        query: conversation
    };

    try {
        const resp = await fetch(baseURL + "model/" + modelID, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await resp.json();
        return data;
    } catch (error) {
        console.error("Fetch error", error);
        throw error;
    }
};

const callAPI = async () =>{
    const resp = await postConversation("pranav", "based on the messages would pranav approve of a goose down")
    console.log(resp);
}

callAPI();
