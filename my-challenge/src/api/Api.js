export class Api {
    #baseUrl = "http://localhost:3001/"

    async get(path) {
        try {
            const response = await fetch(`${this.#baseUrl}${path}`);
            return await response.json();
        } catch (e) {
            return e
        }
    }
}