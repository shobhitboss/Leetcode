package MappingTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class Test {
    static ClassLoader classLoader;
    static JSONParser parser;

    public static void main(String[] args) throws IOException, ParseException {

        File jsonFile = new File("/Users/apple/IdeaProjects/CSVTest/src/main/java/MappingTest/temp.json");
        if (!jsonFile.exists()) {
            System.out.println("Error: File not found - " + jsonFile.getAbsolutePath());
            return;
        }

        ObjectMapper mapper = new ObjectMapper();
        Root updateFacilitydetails = mapper.readValue(jsonFile, Root.class);

        System.out.println("Successfully read JSON from file!");
        List<String> productCombination = updateFacilitydetails.credit_limit_terms.approved_terms.products_combination;
        System.out.println("Product Combination : " + productCombination);

        String filePath = "/Users/apple/IdeaProjects/CSVTest/src/main/java/MappingTest/config.json";
        List<String> uploadDocumentList = new ArrayList<>();


        try {
            FileReader reader = new FileReader(filePath);
            Object obj = new JSONParser().parse(reader);

            // Assuming your JSON file represents a Map
            if (obj instanceof Map) {
                @SuppressWarnings("unchecked")
                Map<String, Object> map = (Map<String, Object>) obj;
                Map<String, Map> prodList = (Map<String, Map>) map.get("product_combination");
                JSONArray arr = (JSONArray) map.get("upload_mandatory_document");

                for (int i = 0; i < arr.size(); i++) {
                    String d = (String) arr.get(i);
                    uploadDocumentList.add(d);
                }

                for (String product : productCombination) {
                    Map<String, String> productDetails = prodList.get(product);
                    uploadDocumentList.add(productDetails.get("documentName"));
                }
            }
            System.out.println(uploadDocumentList);

            reader.close();
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

    }
}
