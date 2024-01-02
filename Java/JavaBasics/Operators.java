package lib;

public class Operators {
  
  /*Operators in java are the symbol used for perfornming specific opeations in java.
   There are multiple types of opeators such as:
    Arithmetic Operators
    Unary Operators
    Assignment Operator
    Relational Operators
    Logical Operators
    Ternary Operator
    Bitwise Operators
    Shift Operators
    instance of operator
  */

  //Arithmetic Operator
  public void Arithmetic(){
     // Arithmetic operators
     int a = 10;
     int b = 3;
    
     System.out.println("a + b = " + (a + b));
     System.out.println("a - b = " + (a - b));
     System.out.println("a * b = " + (a * b));
     System.out.println("a / b = " + (a / b));
     System.out.println("a % b = " + (a % b));
  }

  //Unary Operator
  public void unary(){
     // Interger declared
     int a = 10;
     int b = 10;

     // Using uniary operators
     System.out.println("Postincrement : " + (a++));
     System.out.println("Preincrement : " + (++a));

     System.out.println("Postdecrement : " + (b--));
     System.out.println("Predecrement : " + (--b));
  }

  //Assignment Operator
  public void assignment(){
    // Assignment operators
    int f = 7;
    System.out.println("f += 3: " + (f += 3));
    System.out.println("f -= 2: " + (f -= 2));
    System.out.println("f *= 4: " + (f *= 4));
    System.out.println("f /= 3: " + (f /= 3));
    System.out.println("f %= 2: " + (f %= 2));
    System.out.println("f &= 0b1010: " + (f &= 0b1010));
    System.out.println("f |= 0b1100: " + (f |= 0b1100));
    System.out.println("f ^= 0b1010: " + (f ^= 0b1010));
    System.out.println("f <<= 2: " + (f <<= 2));
    System.out.println("f >>= 1: " + (f >>= 1));
    System.out.println("f >>>= 1: " + (f >>>= 1));
  }

  //Relational Operator
  public void relational(){
    // Comparison operators
    int a = 10;
    int b = 3;
    int c = 5;

    System.out.println("a > b: " + (a > b));
    System.out.println("a < b: " + (a < b));
    System.out.println("a >= b: " + (a >= b));
    System.out.println("a <= b: " + (a <= b));
    System.out.println("a == c: " + (a == c));
    System.out.println("a != c: " + (a != c));
  }

  //Logical Operator
  public void logical(){
    // Logical operators
    boolean x = true;
    boolean y = false;
   
    System.out.println("x && y: " + (x && y));
    System.out.println("x || y: " + (x || y));
    System.out.println("!x: " + (!x));
  }

  //Ternary Operator
  public void teranry(){
    int a = 20, b = 10, c = 30, result;
 
    // result holds max of three
    // numbers
    result
        = ((a > b) ? (a > c) ? a : c : (b > c) ? b : c);
    System.out.println("Max of three numbers = "
                       + result);
  }

  //Bitwise Operator
  public void bitwise(){
    // Bitwise operators
    int d = 0b1010;
    int e = 0b1100;
    System.out.println("d & e: " + (d & e));
    System.out.println("d | e: " + (d | e));
    System.out.println("d ^ e: " + (d ^ e));
    System.out.println("~d: " + (~d));
    System.out.println("d << 2: " + (d << 2));
    System.out.println("e >> 1: " + (e >> 1));
    System.out.println("e >>> 1: " + (e >>> 1));
  }

  //Shift Operator
  public void shift(){
    int a = 10;
     
          // using left shift
        System.out.println("a<<1 : " + (a << 1));
       
        // using right shift
        System.out.println("a>>1 : " + (a >> 1));
  }

  //InstanceOf opeator

    public static void main(String[] args){
      Operators op=new Operators();
      op.Arithmetic();
      op.unary();
      op.assignment();
      op.relational();
      op.logical();
      op.bitwise();
      op.teranry();
      op.shift();
      //instance of operator
      System.out.println(op instanceof Operators);

    }   

  

}