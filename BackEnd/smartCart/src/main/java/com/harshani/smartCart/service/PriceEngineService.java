package com.harshani.smartCart.service;

import java.util.List;

public interface PriceEngineService {
    public double calculateSingleUnitPrice(int unitsPerCarton, double cartonPrice);
    public double calculateTotalPrice(int unitsPerCarton, double cartonPrice, int cartons, int singleUnits);
    public List<String> generatePriceList(long id);
}
