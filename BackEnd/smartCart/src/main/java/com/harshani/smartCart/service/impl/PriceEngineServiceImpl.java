package com.harshani.smartCart.service.impl;

import com.harshani.smartCart.service.PriceEngineService;
import org.springframework.stereotype.Service;

@Service
public class PriceEngineServiceImpl implements PriceEngineService {

    @Override
    public double calculateSingleUnitPrice(int unitsPerCarton, double cartonPrice) {
        return (cartonPrice * 1.3) / unitsPerCarton;
    }

    @Override
    public double calculateTotalPrice(int unitsPerCarton, double cartonPrice, int quantity) {
        int cartons = quantity / unitsPerCarton;
        int singleUnits = quantity % unitsPerCarton;

        double singleUnitPrice = calculateSingleUnitPrice( unitsPerCarton, cartonPrice);
        double total = (cartons * cartonPrice) + (singleUnits * singleUnitPrice);

        if (cartons >= 3) {
            total -= cartons * cartonPrice * 0.1; // 10% discount
        }

        return total;
    }
}
