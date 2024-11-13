package com.harshani.smartCart.controller;

import com.harshani.smartCart.entity.Product;
import com.harshani.smartCart.service.PriceEngineService;
import com.harshani.smartCart.service.ProductService;
import com.harshani.smartCart.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;
    private final PriceEngineService priceEngineService;

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

    @GetMapping("/calculate")
    public ResponseEntity<StandardResponse> calculatePrice(
            @RequestParam Long id,
            @RequestParam int cartons,
            @RequestParam int singleUnits
    ) {
        Product product = productService.getProductById(id);

        double totalPrice = priceEngineService.calculateTotalPrice(
                product.getUnitsPerCarton(),
                product.getCartonPrice(),
                cartons,
                singleUnits

        );

        return new ResponseEntity<>(
                new StandardResponse(200,"Price calculation successful",totalPrice),
                HttpStatus.OK
        );
    }

    @GetMapping("/price-list")
    public ResponseEntity<StandardResponse> getPriceList(@RequestParam Long id) {
        Product product = productService.getProductById(id);

        List<String> priceList = priceEngineService.generatePriceList(id);

        return new ResponseEntity<>(
                new StandardResponse(200, "Price list generated successfully", priceList),
                HttpStatus.OK
        );
    }
}
