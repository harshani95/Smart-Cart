package com.harshani.smartCart.service;

import com.harshani.smartCart.entity.Product;

import java.util.List;

public interface ProductService {
    public Product getProductById(long id);
    public List<Product> getAllProducts();
}
