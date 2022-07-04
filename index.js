const input = document.querySelector(".input");
const icon = document.querySelector(".logo");
const words = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "anonymus", "acording", "Apple", "assisstant", "B", "body", "bank", "baby", "basketball", "C", "cat", "car", "clear", "D", "dark", "dish", "display", "desctop", "E", "eye", "egg", "eagle", "easy", "F", "family", "function", "fake", "face", "window", "computer", "number"];
input.addEventListener("change", (e) =>{
    const arr = words.filter((el) =>{
        if (el.includes(e.target.value)) return true;
        else return false;
    });   
    document.getElementById("list").innerHTML = arr.join(" ");
    console.log(arr);
});


