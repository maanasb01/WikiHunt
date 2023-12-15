export default async function getWikiResults(searchTerm: string) {

    // Create a new URLSearchParams object with the specified parameters
    const searchParams = new URLSearchParams({
        action: 'query',            // Specifies the type of action (in this case, 'query')
        generator: 'search',        // Specifies the generator for the search
        gsrsearch: searchTerm,      // Specifies the search term
        gsrlimit: '20',             // Limits the number of results to 20
        prop: 'pageimages|extracts',// Specifies the properties to include in the results (pageimages and extracts)
        exchars: '300',             // Limits the number of characters in the extract to 100
        exintro: 'true',            // Includes only the introduction section in the extract
        explaintext: 'true',        // Returns plain text instead of HTML in the extract
        exlimit: 'max',             // Specifies the maximum number of extracts
        format: 'json',             // Specifies the format of the response (JSON)
        origin: '*',                // Allows cross-origin requests by setting the origin header to '*'
        piprop:'original'
    });

    // Construct the URL for the Wikipedia API with the specified parameters
    const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams);

    // Parse the JSON response and return the result
    return response.json();
}
