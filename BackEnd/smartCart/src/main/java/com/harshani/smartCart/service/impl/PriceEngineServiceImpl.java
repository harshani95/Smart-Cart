package com.harshani.smartCart.service.impl;

import com.harshani.smartCart.entity.Product;
import com.harshani.smartCart.service.PriceEngineService;
import com.harshani.smartCart.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PriceEngineServiceImpl implements PriceEngineService {

    private final ProductService productService;

    public PriceEngineServiceImpl(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public double calculateSingleUnitPrice(int unitsPerCarton, double cartonPrice) {
        return (cartonPrice * 1.3) / unitsPerCarton;
    }

    @Override
    public double calculateTotalPrice(int unitsPerCarton, double cartonPrice, int cartons, int singleUnits) {

        int additionalCartons = singleUnits / unitsPerCarton;
        int remainingSingleUnits = singleUnits % unitsPerCarton;

        cartons += additionalCartons;

        double cartonTotalPrice = cartons * cartonPrice;

        double singleUnitPrice = (cartonPrice / unitsPerCarton) * 1.3;

        double singleUnitTotalPrice = remainingSingleUnits * singleUnitPrice;
        double total = cartonTotalPrice + singleUnitTotalPrice;

        if (cartons >= 3) {
            total -= cartonTotalPrice * 0.1;
        }

        return total;
    }

    @Override
    public List<String> generatePriceList(long id) {

        Product product = productService.getProductById(id);
        List<String> priceList = new ArrayList<>();

        int unitsPerCarton = product.getUnitsPerCarton();
        double cartonPrice = product.getCartonPrice();

        for (int quantity = 1; quantity <= 50; quantity++) {
            int cartons = quantity / unitsPerCarton;
            int singleUnits = quantity % unitsPerCarton;

            double totalPrice = calculateTotalPrice(unitsPerCarton, cartonPrice, cartons, singleUnits);
            priceList.add("Quantity: " + quantity + ", Price: $" + String.format("%.2f", totalPrice));
        }

        return priceList;
    }
}
