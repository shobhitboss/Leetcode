package API;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class SampleAPI {
    public static void main(String[] args) {
//        RestAssured.baseURI = "https://staging.tradefinance.com";
//        RequestSpecification request = RestAssured.given();

//      request param
//      JSONObject requestParams = new JSONObject();
//      requestParams.put("userId", "TQ123");
//      requestParams.put("isbn", "9781449325862");

//        request.pathParam()
//        request.queryParams()
//        request.header()
//        request.body()


//        Response response = request.post();
//        String responseBody = response.body().asString();


        String a = "this is TEMP test";
        String b;
        a = a.replace("TEMP", b = "sure");
        System.out.println(a);
        System.out.println(b);
    }
}
