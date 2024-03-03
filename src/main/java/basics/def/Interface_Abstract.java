package basics.def;

public class Interface_Abstract {
    public static void main(String[] args) {

    }

    interface calculation {
        double pie_value = 3.14;

        int add(int a, int b);

        int multiply(int a, int b);
    }

    class test implements calculation {
        @Override
        public int add(int a, int b) {
            return 0;
        }

        @Override
        public int multiply(int a, int b) {
            return 0;
        }
    }

    abstract class Person {
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String n) {
            name = n;
        }
    }

    class test2 extends Person {

        public void setName() {

        }
    }

}
