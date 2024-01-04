
public class Variable {

  /*it is a name given to memory space , which is used to store the value
  Threre are 3 types:
  1. Local var
  2. Instance var
  3. Static var*/

  //static 
  public static int staticVar;
  public static Integer staticWrapperVar;
  //initialization through static block
  static{
    staticVar=5;
  }

  //instance
  public int instaceVar;
  public String instaceWrapperVar;
  //initialization through constructor
  Variable(){
    instaceVar=15;
  }
  

  public static void main(String[] args) {
    
    //creating obj for accessing instance var
    Variable obj=new Variable();

    //local var
    //needs initialization before usage
    int localVar=25;

    //calling static var
    System.out.println(staticVar);
    System.out.println(Variable.staticVar);
    System.out.println(obj.staticVar);
    System.out.println(Variable.staticWrapperVar);

    //calling instance var
    System.out.println(obj.instaceVar);
    System.out.println(obj.instaceWrapperVar);

    //calling the local var
    System.out.println(localVar);


  }

  
  

}
