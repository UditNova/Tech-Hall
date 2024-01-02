package lib;

import java.util.ArrayList;

public class Wrapper {
  /*
  1. Autoboxing
The automatic conversion of primitive types to the object of their corresponding wrapper classes is known as 
autoboxing. For example – conversion of int to Integer, long to Long, double to Double, etc. 
  
  public static void main(String[] args)
    {
        char ch = 'a';
 
        // Autoboxing- primitive to Character object
        // conversion
        Character a = ch;
 
        ArrayList<Integer> arrayList
            = new ArrayList<Integer>();
 
        // Autoboxing because ArrayList stores only objects
        arrayList.add(25);
 
        // printing the values from object
        System.out.println(arrayList.get(0));
    }*/

    /*Unboxing
    It is just the reverse process of autoboxing. Automatically converting an 
    object of a wrapper class to its corresponding primitive type is known as 
    unboxing. For example – conversion of Integer to int, Long to long, Double to double, etc. 
    */
    
    public static void main(String[] args)
    {
        Character ch = 'a';
 
        // unboxing - Character object to primitive
        // conversion
        char a = ch;
 
        ArrayList<Integer> arrayList
            = new ArrayList<Integer>();
        arrayList.add(24);
 
        // unboxing because get method returns an Integer
        // object
        int num = arrayList.get(0);
 
        // printing the values from primitive data types
        System.out.println(num);
    }
}
