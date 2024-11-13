package com.harshani.smartCart.entity;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

public class Product {
    private long id;
    private String name;
    private int unitsPerCarton;
    private double cartonPrice;
}
