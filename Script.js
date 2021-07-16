const food = [
    {
        "name": "tea",
        "price": "20"
    },
    {
        "name": "coffee",
        "price": "30"
    },
    {
        "name": "thepla",
        "price": "40"
    },
    {
        "name": "paratha",
        "price": "50"
    }
]
var total = 0
var price = () => {
    for (let i = 0; i < food.length; i++){
        if((document.getElementById(food[i].name).checked)==true){
            const quan = food[i].name + "-quantity"
            var cost = document.getElementById(quan).value * food[i].price;
        total = cost + total;
    }   
}
document.getElementById("ans").innerHTML = "Your total Bill is :  " + total;
}

