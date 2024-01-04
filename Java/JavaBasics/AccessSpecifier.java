
public class AccessSpecifier {
  /*
   * Modifier      Package  Subclass  World

public          Yes      Yes     Yes

protected       Yes      Yes     No

Default (no
modifier)       Yes       No     No

private         No        No     No
  */

  public static void main(String args[])
    {
        {
            int x = 5;
            {
                int y = 10;
                System.out.println(x);
            }
            //System.out.println(y);


            //duplicate local var
            // for(int x=0; x<5; x++){
            for(int i=0; i<5; i++){
              System.out.println(i);
            }
            //no duplicate var as for i finishes within block
            int i=30;
            System.out.println(i);

        }
    }

}
