//You manage a grocery store and need to keep track of the inventory of various items.
// You will use arrays to store the data and various functions to manipulate and analyze the data. 
//Create an array containing the names of all items in the inventory maximum of 10.

let arrayNames=["green grams","garlic","Rice","Meat","Candy","Juice","Milk"
 ,"Tea powder" ,"Fresh Vegetables","Peanut oil"]

//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let arrQuantity=[10,6,9,8,7,5,7,3,9,10]

//Write a function to add a new item to the inventory, updating both arrays.
   function addItems(arrayNames,arrQuantity){
   arrayNames.push("Broccoli");
    
      console.log(arrayNames);
   

       arrQuantity.push(6);
       console.log(arrQuantity);
      }
      addItems(arrayNames,arrQuantity)
   
 

//Write a function to update the stock quantity of an existing item.
function updateItems(){


let arrayNames2={type:"Brocolli",quantity:6
                
}
arrayNames2.type="Brocolli"
arrayNames2.quantity=6
console.log(arrayNames2)
}
updateItems()


//Write a function to calculate the total number of items in the inventory.
  function totalNumber(arrayNames){
 console.log ( arrayNames.length)

  }
  totalNumber(arrayNames)

//Write a function to find the item with the lowest stock quantity.
function lowestStock(){
  for(i=0;i<arrayNames.length;i++){
    var smallest = arrayNames[7];
			if(arrQuantity[i] <= smallest){
				smallest = arrQuantity[i];   
			}
		}

		console.log(smallest);
  }
  lowestStock()



