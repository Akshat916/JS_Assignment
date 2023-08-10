function current_url(){
    return window.location.href;
}
console.log(current_url());

function new_window(){
    let width = 500;
    let height = 400;
    let left = (screen.width - 500)/2;
    let top = (screen.height - 400)/2;
    window.open(this.href,'targetWindow',`width=${width},height=${height},left=${left},top=${top}`);
}