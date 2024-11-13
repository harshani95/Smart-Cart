package com.harshani.smartCart.controller;

import com.harshani.smartCart.entity.Product;
import com.harshani.smartCart.service.ProductService;
import com.harshani.smartCart.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<StandardResponse> getProductById(@PathVariable long id){
        return new ResponseEntity<>(
                new StandardResponse(200,"Product data!",productService.getProductById(id)),
                HttpStatus.OK
        );
    }

    @GetMapping("/list")
    public ResponseEntity<StandardResponse> getAllProducts(){
        return new ResponseEntity<>(
                new StandardResponse(200,"Product List!",productService.getAllProducts()),
                HttpStatus.OK
        );
    }
}
