package basics.string;

import java.util.*;

public class AnagramSubstitutions {

    public static int[] substitutions(String[] words, String[] phrases) {
        Map<String, List<String>> anagramMap = new HashMap<>();
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String sortedWord = new String(chars);
            anagramMap.computeIfAbsent(sortedWord, k -> new ArrayList<>()).add(word);

            List<String> CF_MANDATORY_FIELD_LIST = Arrays.asList("Currency", "Expected Credit Limit Amount", "Expected Credit Period", "Sectors", "Net profit margin as per last audited financials", "Return on equity as per last audited financials", "Annual revenue as per last audited financials (million USD)", "Any check returns in last 12 months?", "Has company or owners gone through bankruptcy in past?", "Company Name", "Country", "Payment Terms", "Business Vintage", "Percentage of Sales", "Select Commodities", "Name", "Country Code", "Contact Number", "Email ID", "Designation", "State/Province", "City", "Pin Box/PO Box/Zip Code", "Address", "Countries importer is dealing in", "How long has the importer been dealing in these commodities?", "How old is the relationship with importer?", "Select payment history with importer", "Annual Turn-over of importer");

            System.out.println(CF_MANDATORY_FIELD_LIST.size());
        }

        int[] result = new int[phrases.length];
        for (int i = 0; i < phrases.length; i++) {
            String[] phraseWords = phrases[i].split(" ");
            int count = 1;
            for (String word : phraseWords) {
                char[] chars = word.toCharArray();
                Arrays.sort(chars);
                String sortedWord = new String(chars);
                count *= anagramMap.getOrDefault(sortedWord, Collections.emptyList()).size();
            }
            result[i] = count;
        }
        return result;
    }

    public static void main(String[] args) {
        String[] words = {"desserts", "stressed", "bats", "stabs", "are", "not"};
        String[] phrases = {"bats are not stressed"};
        int[] result = substitutions(words, phrases);
        System.out.println(Arrays.toString(result));
    }
}