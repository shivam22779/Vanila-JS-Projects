// Hide the parameter box initially as default is JSON input
let paraBox = document.getElementById('paraBox');
paraBox.style.display = 'none';



//If user clicks parameter box then hide JSON box and show parameters box
let customContent = document.getElementById('customContent');
customContent.addEventListener('click', () => {
    document.getElementById('jsonInptBox').style.display = 'none';
    paraBox.style.display = 'block';
})
let jsonContent = document.getElementById('jsonContent');
jsonContent.addEventListener('click', () => {
    document.getElementById('jsonInptBox').style.display = 'block';
    document.getElementById('addedParams').style.display = 'none';
    paraBox.style.display = 'none';
})

//Add more parameter on clicking to add button for adding more parameters
// utility function
let htmlElem = (strng) => {
    let elem = document.createElement('div');
    elem.innerHTML = strng;
    return elem.firstElementChild;
}


let paramsCount = 0;
let addParam = document.getElementById('addParam');
let keyParam = document.getElementById('keyParam');
let valueParam = document.getElementById('valueParam');


addParam.addEventListener('click', () => {
    // console.log(keyParam.value)
    let addedParams = document.getElementById('addedParams');
    let addedParam = `<div id="paraBox">
    <div class="row">
        <div class="col-md-1">
            <h6>Param-${paramsCount + 1}</h6>
        </div>
        <div class="col-md-3 mb-2 ">
            <input type="text" class="form-control"  placeholder="key${paramsCount + 1}" aria-label="Key" name=key${paramsCount + 1} id= "key${paramsCount + 1}" value="${keyParam.value}">
        </div>
        <div class="col-md-3">
            <input type="text" class="form-control"  placeholder="value${paramsCount + 1}" aria-label="Value" name=value${paramsCount + 1} id= "value${paramsCount + 1}" value="${valueParam.value}">
        </div>
        <div class="col-md-2 " id="addParam">
            <button class="btn btn-primary btn-sm deleteParam">-</button>
        </div>
    </div>
</div>`

    // console.log(htmlElem(addedParam))
    addedParams.appendChild(htmlElem(addedParam));
    // Remove a particular parameter
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        })
    }

    paramsCount++;
    keyParam.value = "";
    valueParam.value = "";

  
    // addedParams.appendChild = htmlElem(addedParam);
})

//On submitting the parameters

let submit = document.getElementById("submit");
submit.addEventListener('click', () => {
    document.getElementById('responseOpt').value = "Please wait while we are fetching the response..."
    let url = document.getElementById('url').value;
    let requestType = document.getElementsByTagName('select')[0].value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
    // console.log(contentType, url, requestType)

    if (contentType === 'customparam') {
        data = {

        }
        for (i = 1; i <= paramsCount ; i++) {
            if (document.getElementById(`key${i}`) != undefined){
                let key = document.getElementById(`key${i}`).value;
            let value = document.getElementById(`value${i}`).value;
            data[key] = value;

            }
            
        }
        data = JSON.stringify(data);
        // console.log(data);
    }
    else{
         data = document.getElementById('jsonInpt').value;
         
        //  console.log(typeof(data))
        }

    // if request type is get then invoke get request using fetch API;
    if (requestType === 'Get'){
        fetch(url).then((res)=>{return res.text()}).then((data)=>{
            document.getElementById('responseOpt').value = data;
            // console.log(parsedRes)
        })
    }
    else{
        let param = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
        }
        fetch(url,param).then((res)=>{return res.text();})
           
        .then((data)=>{
            document.getElementById('responseOpt').value = data;
        })
    }
});
        
        
    




