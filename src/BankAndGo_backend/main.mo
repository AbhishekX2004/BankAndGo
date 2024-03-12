import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Bank {
  stable var balance : Float = 300;
  balance := 300;
  let id = 1001;
  var name  = "Abhishek ";
  stable var start = Time.now();
  start := Time.now();
  
  public func topUp(amount : Float) : async Float{
    balance += amount;
    Debug.print(debug_show(balance));
    balance;
  };
  
  public func withdraw(amount : Float) : async Float{
    if(amount > balance){
      Debug.print("Insufficient funds!");
      return balance;
    } else {
      balance -= amount;
      Debug.print(debug_show(balance));
      return balance;
    }    
  };

  public query func checkBalance() : async Float{
    Debug.print("Checking Balance...");
    Debug.print(debug_show(balance));
    return balance;
  };

  public func compound() : async Float{
    let currentTime = Time.now();
    let timeElapsed = (currentTime - start)/60*60*24*1000000000;
    balance := balance * ( (1.0125) ** Float.fromInt(timeElapsed));
    start := currentTime;
    Debug.print("Time elapsed: " # debug_show(timeElapsed));
    Debug.print(debug_show(balance));
    return balance;
  };
};