import animalService from "../animal.service.mock.js";

function list(recordPage) {
    const container = document.createElement('div');
    container.classList.add('container');
    const divWaiting = document.createElement('div');
    divWaiting.classList.add('text-center');
    divWaiting.innerHTML = '<i class="fa fa-5x fa-spinner fa-spin"></i>';
    container.append(divWaiting);

    const divMessage = document.createElement('div');
    divMessage.classList.add('alert', 'text-center', 'd-none');
    container.append(divMessage);

    function drawPagination({ page = 1, perPage = 5, pages = 10 }) {
        function addPage(number, text, style) {
            return `<li class="page-item ${style}">
              <a class="page-link" href="./list.html?page=${number}&perPage=${perPage}">${text}</a>
            </li>`
        }
        const pagination = document.createElement('div');
        if (pages > 1) {
            pagination.classList.remove('d-none');
        }
        const ul = document.createElement("ul");
        ul.classList.add('pagination')
        ul.insertAdjacentHTML('beforeend', addPage(page - 1, 'Previous', (page == 1) ? 'disabled' : ''))
        for (let i = 1; i <= pages; i++) {
            ul.insertAdjacentHTML('beforeend', addPage(i, i, (i == page) ? 'active' : ''));
        }
        ul.insertAdjacentHTML('beforeend', addPage(page + 1, 'Next', (page == pages) ? 'disabled' : ''))

        pagination.append(ul);
        return pagination;
    }
    function drawAnimalTable(animals) {
        const eleTable = document.createElement('table');
        eleTable.classList.add('table', 'table-striped');
        // Create a <thead> element
        const thead = eleTable.createTHead();
        // Create a row in the <thead>
        const row = thead.insertRow();
        // Create and append header cells
        const headers = ['Name', 'Breed', 'Legs', 'Eyes', 'Sound'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            row.appendChild(th);
        });
        for (let animal of animals) {
            const row = eleTable.insertRow();
            // create some rows for each animal field    
            row.insertCell().textContent = animal.name;
            row.insertCell().textContent = animal.breed;
            row.insertCell().textContent = animal.legs;
            row.insertCell().textContent = animal.eyes;
            row.insertCell().textContent = animal.sound;
            // create a cell to hold the buttons
            const eleBtnCell = row.insertCell();
            eleBtnCell.classList.add();
            // create a delete button
            const eleBtnDelete = document.createElement('button');
            eleBtnDelete.classList.add('btn', 'btn-danger', 'mx-1');
            eleBtnDelete.innerHTML = `<i class="fa fa-trash"></i>`;
            eleBtnDelete.addEventListener('click', onDeleteButtonClick(animal));
            // add the delete button to the button cell
            eleBtnCell.append(eleBtnDelete);
            // create an edit button
            const eleBtnEdit = document.createElement('a');
            eleBtnEdit.classList.add('btn', 'btn-primary', 'mx-1');
            eleBtnEdit.innerHTML = `<i class="fa fa-user"></i>`;
            eleBtnEdit.href = `./animal.html?name=${animal.name}`
            // add the edit button to the button cell
            eleBtnCell.append(eleBtnEdit);
        }
        return eleTable;
    }
    function onDeleteButtonClick(animal) {
        return event => {
            animalService.deleteAnimal(animal.name).then(() => { window.location.reload(); });
        }
    }
    function createContent() {
        const params = new URLSearchParams(recordPage);
        const url = new URL(`/api/animals?${params.toString()}`, 'https://inft2202-server.onrender.com');
        const req = new Request(url, {
            headers: {
                'User': 'studentId'
            },
            method: 'GET',
        });
//do fetch here

        return container;
    }
    return {
        element: createContent()
    }
}

export default list;
