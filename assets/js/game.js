var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;

if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("welcome to Robot Gladiators!");


  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died! ")
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ")
    }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
     playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ")
        
    }
}

fight();
