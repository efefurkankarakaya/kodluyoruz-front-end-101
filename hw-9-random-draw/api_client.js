class Client{
    constructor(url){
        this.url = url;
    }

    get = async () => {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}