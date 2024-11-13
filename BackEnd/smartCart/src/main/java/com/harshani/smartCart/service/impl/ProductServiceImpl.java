package com.harshani.smartCart.service.impl;

import com.harshani.smartCart.entity.Product;
import com.harshani.smartCart.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Override
    public Product getProductById(long id) {
        List<Product> products = getAllProducts();
        return products.stream().filter(product -> product.getId() == id)
                .findFirst()
                .orElseThrow(()->new RuntimeException("Product not found"));
    }

    @Override
    public List<Product> getAllProducts() {
        return Arrays.asList(
                new Product(1L, "Penguin-ears", 20, 175),
                new Product(2L, "Horseshoe", 5, 825)
        );
    }
}
