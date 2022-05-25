export class Api {
    #baseUrl = "https://apifake/"

    async get(path) {
        try {
            const response = await fetch(`${this.#baseUrl}${path}`);
            return await response.json();
        } catch (e) {
            return e
        }
    }
}