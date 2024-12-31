

const fetchDataFromAPI = async (id) => {
    var url;
    if(id == null) url = "https://api.adviceslip.com/advice";
    else url = `https://api.adviceslip.com/advice/${id}`;
    try {

        const response = await fetch(url);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            return -1;
        }

        // Parse the JSON data from the response
        const data = await response.json();
        return data;
    } catch (err) {
        return -1;
    } 
};

export default fetchDataFromAPI