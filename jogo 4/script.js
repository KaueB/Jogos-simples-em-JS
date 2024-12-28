let currentFolderId = 0;
let folders = [
    { id: 1, name: "Pasta inicial", subId: 0 },
    { id: 2, name: "Pasta 1", subId: 0 },
    { id: 3, name: "Pasta filha da pasta 1", subId: 1 },
    { id: 4, name: "Pasta 2", subId: 1 },
];

renderFolders();

document.getElementById("folderForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const folderName = document.getElementById("folder");
    createFolder(folderName.value);
    folderName.value = "";
});

function createFolder(folderName) {
    if (folderName.trim() === "") {
        alert("Por favor, insira um nome para a pasta.");
        return;
    }

    const newFolder = { id: getNextFolderId(), name: folderName, subId: currentFolderId };
    folders.push(newFolder);

    renderFolders();
}

function getNextFolderId() {
    return Math.max(...folders.map(folder => folder.id), 0) + 1;
}

function enterFolder(folderId) {
    currentFolderId = folderId;
    renderFolders();
}

function removeFolder(folderId) {
    if (confirm("Tem certeza de que deseja remover esta pasta e todas as suas subpastas?")) {
        deleteFolderCascade(folderId);
        renderFolders();
    }
}

function deleteFolderCascade(folderId) {
    const subfolders = folders.filter(folder => folder.subId === folderId);
    subfolders.forEach(subfolder => deleteFolderCascade(subfolder.id));

    folders = folders.filter(folder => folder.id !== folderId);

    if (currentFolderId === folderId) {
        currentFolderId = 0;
    }
}

function voltar() {
    if (currentFolderId !== 0) {
        const parentFolder = findFolderById(currentFolderId)?.subId || 0;
        currentFolderId = parentFolder;
        renderFolders();
    }
}

function findFolderById(folderId) {
    return folders.find(folder => folder.id === folderId);
}

function renderFolders() {
    const caixa = document.getElementById("caixa");
    caixa.innerHTML = "";

    const currentSubfolders = folders.filter(folder => folder.subId === currentFolderId);

    currentSubfolders.forEach(folder => {
        const div = document.createElement("div");
        div.classList.add("folder");
        div.setAttribute("data-id", folder.id);
        div.innerHTML = `
            <h2>${folder.name}</h2>
            <div>
                <button onclick="enterFolder(${folder.id})">Entrar</button>
                <button onclick="removeFolder(${folder.id})">Remover</button>
            </div>
        `;
        caixa.appendChild(div);
    });

    console.log(folders);

    const voltarButton = document.getElementById("voltar");
    voltarButton.style.display = currentFolderId !== 0 ? "block" : "none";

    const pasta = document.getElementById("pasta");
    pasta.innerHTML = currentFolderId === 0 ? "Pasta Inicial" : findFolderById(currentFolderId)?.name || "Pasta não encontrada";
}
