import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class InputOutput {

  //We can take input from user with 4 methods 
  //1. Buffered Reader class
  //2. Scanner Class
  //3. Console method
  //4. 


     public static void main(String[] args)
        throws IOException
    {
        // Creating BufferedReader Object
        // InputStreamReader converts bytes to
        // stream of character
        BufferedReader bfn = new BufferedReader(
            new InputStreamReader(System.in));
 
        // String reading internally
        String str = bfn.readLine();
 
        // Integer reading internally
        int it = Integer.parseInt(bfn.readLine());
 
        // Printing String
        System.out.println("Entered String : " + str);
 
        // Printing Integer
        System.out.println("Entered Integer : " + it);

          // Scanner definition
        Scanner scn = new Scanner(System.in);
 
        // input is a string ( one word )
        // read by next() function
        String str1 = scn.next();
 
        // print String
        System.out.println("Entered String str1 : " + str1);
 
        // input is a String ( complete Sentence )
        // read by nextLine()function
        String str2 = scn.nextLine();
 
        // print string
        System.out.println("Entered String str2 : " + str2);
 
        // input is an Integer
        // read by nextInt() function
        int x = scn.nextInt();
 
        // print integer
        System.out.println("Entered Integer : " + x);
 
        // input is a floatingValue
        // read by nextFloat() function
        float f = scn.nextFloat();
 
        // print floating value
        System.out.println("Entered FloatValue : " + f);

        // Using Console to input data from user
        String name = System.console().readLine();
 
        System.out.println("You entered string " + name);

         // check if length of args array is
        // greater than 0
        if (args.length > 0) {
          System.out.println(
              "The command line arguments are:");

          // iterating the args array and printing
          // the command line arguments
          for (String val : args)
              System.out.println(val);
      }
      else
          System.out.println("No command line "
                             + "arguments found.");

    }

}
