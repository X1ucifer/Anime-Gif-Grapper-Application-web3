import { useEffect, useState } from "react";

const APIKEY = `ySb70OrhM2gSV6xZGsYXmLapEc0oT1U3`;

const useFetch = ({ currentContractVal }) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${currentContractVal.split(" ").join("")}&limit=1`);

            const { data } = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium.url);
        } catch (error) {
            setGifUrl("https://media4.giphy.com/media/FeVg8ViEczcxG/giphy.gif");
        }
    };

    console.log("gg", gifUrl)

    useEffect(() => {
        fetchGifs();
    }, [currentContractVal]);

    return gifUrl;
};

export default useFetch;