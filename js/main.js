let productNameInput = document.getElementById('productName');
let productPriceInput = document.getElementById('productPrice');
let productCategoryInput = document.getElementById('productCategory');
let productDescraptionInput = document.getElementById('productDescraption');
let mood ='create'
let proId;


let productsContainer;
if(localStorage.getItem('ourProduct') !=null)
{
    productsContainer = JSON.parse(localStorage.getItem('ourProduct'));
    displayProduct();
}
else
{
    productsContainer=[];
}
      function addProduct(){
    let product ={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        descraption:productDescraptionInput.value,
    };
    if(mood === 'create')
    {
        productsContainer.push(product);
    }
    else
    {
        productsContainer[proId]=product;
        document.getElementById('main').innerHTML= 'Add Product'
    }
       
        localStorage.setItem('ourProduct',JSON.stringify(productsContainer));
        displayProduct();
         clearForm();
    }




function clearForm(){
    
    productNameInput.value ="";
    productPriceInput.value ="";
    productCategoryInput.value ="";
    productDescraptionInput.value ="";
} 

function displayProduct(){
    let cartoona=``;

 for(let i =0 ; i<productsContainer.length ; i++)
 {
    cartoona +=`
    <tr>
    <td>${[i]}</td>
    <td>${productsContainer[i].name}</td>
    <td>${productsContainer[i].price}</td>
    <td>${productsContainer[i].category}</td>
    <td>${productsContainer[i].descraption}</td>
    <td><button onclick='updateProduct(${[i]})' class="btn btn-outline-info rounded-pill">Update</button></td>
    <td><button onclick='deleteProduct(${[i]})' class="btn btn-outline-danger rounded-pill">Delete</button></td>
    </tr>`
 }

 document.getElementById('tableBody').innerHTML=cartoona;

};


function deleteProduct(index){
    productsContainer.splice(index,1);
    localStorage.setItem('ourProduct',JSON.stringify(productsContainer));
    displayProduct();

};


function updateProduct(index){
    productNameInput.value = productsContainer[index].name
    productPriceInput.value = productsContainer[index].price
    productCategoryInput.value = productsContainer[index].category
    productDescraptionInput.value = productsContainer[index].descraption

    document.getElementById('main').innerHTML= 'Update'
    mood ='update'
    proId = index;
}


function searchProduct(term){
    let cartoona=``;
    for(let i=0 ; i<productsContainer.length ; i++)

        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())==true)
        {
            cartoona +=`
            <tr>
            <td>${[i]}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].descraption}</td>
            <td><button onclick='updateProduct(${[i]})' class="btn btn-outline-info rounded-pill">Update</button></td>
            <td><button onclick='deleteProduct(${[i]})' class="btn btn-outline-danger rounded-pill">Delete</button></td>
            </tr>`
        }
        document.getElementById('tableBody').innerHTML=cartoona;
}













