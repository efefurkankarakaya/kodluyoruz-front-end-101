class UI{
    constructor(container){
        this.container = container;
    }

    removeHome = () => {
        this.container.innerHTML = null;
    }

    loadResults = (results) => {
        console.group("LOAD RESULTS");
        let table = `
            <h1 class="container--header">Results</h1>
            <hr />
            <table class="table table-borderless table-hover">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Gift</th>
                </tr>
                </thead>
                <tbody>
            `
            
        for (let index = results.getPointer(); index >= 0; --index){
            const item = results.pop();
            table += `
            <tr>
                <th scope="row">${results.getPointer() + 2}</th>
                <td>${item.name}</td>
                <td>${item.gift}</td>
            </tr>
            `;
        }

        table += `
            </tbody>
        </table>`;
        console.groupEnd("LOAD RESULTS");
        
        this.container.insertAdjacentHTML("afterbegin", table);
    }
}