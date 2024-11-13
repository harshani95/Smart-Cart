package com.harshani.smartCart.service;

public interface PriceEngineService {
    public double calculateSingleUnitPrice(int unitsPerCarton, double cartonPrice);
    public double calculateTotalPrice(int unitsPerCarton, double cartonPrice, int cartons, int singleUnits);
}
