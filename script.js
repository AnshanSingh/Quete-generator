async function SearchQuete() {
    const query = document.getElementById("stateInput").value.trim();

    if (query === "") {
        alert("Please enter a keyword!");
        return;
    }

    const accessKey = "UL4SNZ-baskIOhoupHw5ZW349FjYVwUju10A9f1r0M0";
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=1`;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length === 0) {
            resultDiv.innerHTML = "<h2>No quotes or images found!</h2>";
            return;
        }

        const imageUrl = data.results[0].urls.small;
        const description = data.results[0].alt_description || "Beautiful view";

        resultDiv.innerHTML = `
            <img src="${imageUrl}" alt="${description}" />
            <h2>${description}</h2>
        `;
    } catch (error) {
        console.error("Error fetching image:", error);
        resultDiv.innerHTML = "<h2>Something went wrong!</h2>";
    }
}
