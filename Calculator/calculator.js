var ans = "";
var ev = document.getElementsByTagName("button")
for (let i = 0; i < ev.length; i++)
    ev[i].addEventListener('click', fn);
function fn(e) {
    e.preventDefault();
    if (e.target.value == "C") {
        ans = "";
        document.getElementById('ans').value = "";
    }
    else if ((e.target.value) != undefined) {
        ans = ans + e.target.value + "";
        document.getElementById('ans').value = ans;
    }
    if (e.target.value == "=")
        compute(ans);
}
function compute(ans) {
    ans = ans.toString().substr(0, ans.indexOf("=")).trim();
    if (ans != "") {
        let res = eval(ans);
        document.getElementById('ans').value = res;
    }
    else {
        document.getElementById('ans').value = 0;
    }
}