window.onload=function()
{
    var tmp = JSON.parse(localStorage.getItem("productInformation"))
    // console.log(res)
    result = ""
    if(tmp!=null){
        for (var i = 0; i < tmp.length; i++) {
            result += `
                <tr>
                <th scope="row">${tmp[i][0]}</th>
                <td>${tmp[i][1]}</td>
                <td>${tmp[i][2]}</td>
                <td>${tmp[i][3]}</td>              
                <td><input type="button" value="DELETE" id="button" onclick="Delete(${i})"></td>
              </tr> `
        }
    }

    document.getElementById("tabledata").innerHTML = result
}
function  Submit(){
    var form = []
    pid = document.getElementById("pid").value
    if (pid==""){
        form.push("None")
    }
    else{
        form.push(pid)
    }
    pname = document.getElementById("pname").value
    if (pname==""){
        form.push("None")
    }
    else{
        form.push(pname)
    }
    pprice = document.getElementById("pprice").value
    if (pprice==""){
        form.push("None")
    }
    else{
        form.push(pprice)
    }
    pdes = document.getElementById("pdes").value
    if (pdes==""){
        form.push("None")
    }
    else{
        form.push(pdes)
    }
    var productInfo = JSON.parse(localStorage.getItem('productInformation'))
    if (productInfo == null) {
        pInfo = []
    }
    else {
        pInfo = productInfo
    }
    pInfo.push(form)
    localStorage.setItem('productInformation', JSON.stringify(pInfo))
    onload()
}
function Reset(){
    document.getElementById("pid").value = ""
    document.getElementById("pname").value = ""
    document.getElementById("pprice").value = ""
    document.getElementById("pdes").value = ""
}
function ClearAll(){
    alert("are you sure to clear all record")
    {
        localStorage.clear()
        onload()
    }
}

function Delete(no){
    console.log("roshanjha"+no)
    var tmp=JSON.parse(localStorage.getItem("productInformation"))
    console.log(tmp)
    tmp.splice(no,1)
    localStorage.setItem("productInformation",JSON.stringify(tmp))
    onload()
    
}
