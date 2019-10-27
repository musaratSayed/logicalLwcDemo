public with sharing class UtilityClass {
    public UtilityClass()
     {

    }

    @AuraEnabled(cacheable=true)
    public static Map<String,Integer> mapDemo()
    {
        Map<String,Integer> testMap = new Map<String,Integer>();
        testMap.put('Musarat',1);
        testMap.put('John',2);
        testMap.put('Will Smith',3);
        return testMap;
    }
}
