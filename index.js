const prompt = require("prompt-sync")()

//Made a change to the purpose of the code and brought it into the real world.
const name = prompt("Enter employee name: ")
let QtdFreight = Number(prompt("Enter quantity of freight delivered: "))
let WorkBreak = prompt("Did the employee take the scheduled break? (yes/no): ").toLowerCase() == "yes" ? 1 : 0

console.log(name)

//Conditional statement to check if the employee took the scheduled break time.

if (WorkBreak == 1) {   
    console.log("The employee took time off work and is eligible to participate in the campaign.")
} else {
    console.log("The employee did not take the scheduled break time and is disqualified from the campaign.")
}


    if (QtdFreight < 1000) {
        console.log("The classification of the employee to the campaign is : Iron")
    } 
    else if (QtdFreight >= 1001 && QtdFreight < 2000) {
        console.log("The classification of the employee to the campaign is : Bronze")
    }
    else if (QtdFreight >= 2001 && QtdFreight < 5000) {
        console.log("The classification of the employee to the campaign is : Silver")
    }
    else if (QtdFreight >= 5001 && QtdFreight < 7.000) {
        console.log("The classification of the employee to the campaign is : Gold")
    }
    else if (QtdFreight >= 7001 && QtdFreight < 8000) {
        console.log("The classification of the employee to the campaign is : Platinum")
    }
    else if (QtdFreight >= 8001 && QtdFreight < 9000) {
        console.log("The classification of the employee to the campaign is : Diamond")
    }    
    else if (QtdFreight >= 9001 && QtdFreight < 10000) {
        console.log("The classification of the employee to the campaign is : Emerald")
    }
    else if (QtdFreight >= 10001) {
        console.log("The classification of the employee to the campaign is : Ruby")
    }

console.log(`The driver named ${name} is at level ${QtdFreight}. And their rest periods have been observed.`)
// I want the program read the name of the employee, the quantity of freight delivered and whether they took the scheduled break time or not. Then, based on the quantity of freight delivered, the program will classify the employee into one of the following categories: Iron, Bronze, Silver, Gold, Platinum, Diamond, Emerald, or Ruby. Finally, the program will print a message indicating the employee's name, their classification level, and whether they took their rest periods.