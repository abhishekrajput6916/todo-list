const arr = new Array();

const add = document.querySelector("#add-btn");
add.addEventListener("click", () => {
    const list = document.getElementById("list");
    const item = document.createElement("li");
    arr.push(item);
    list.appendChild(item);
    const box = document.getElementById("text");
    item.innerText = box.value;
    // console.log(arr.toString());
})


const dlt = document.querySelector("#dlt-btn");
dlt.addEventListener("click", () => {
    if (arr.length >= 1) {
        const list = document.getElementById("list");
        const node = document.querySelectorAll("li")
        alert(node[node.length - 1].innerText + " Deleted");
        const removed = list.removeChild(arr[arr.length - 1]);
        const dlt_item = arr.pop();
        // console.log(arr.toString());
        // console.log(removed.innerText+" Deleted");
    } else {
        alert("list is empty no item to delete!!!");
    }
})