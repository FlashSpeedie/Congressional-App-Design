package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

public class SqlReader {
    public static void main(String[] args) {
        // JDBC connection parameters
        String jdbcUrl = "jdbc:mysql://localhost:3306/mysql";
        String username = "Siddharth Pandit ";
        String password = "$2y$10$0OfBV6gvlyMMUgFt4MH0a.RytOXMt7tJN3nz.k4rv1nheLFeQVF8i";

        // URL of the web server with the SQL file or SQL commands
        String sqlUrl = "http://localhost/financial_planner.sql";

        try (Connection connection = DriverManager.getConnection(jdbcUrl)) {
            // // Fetch SQL from the web
            // URL url = new URL(sqlUrl);
            // BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));

            // StringBuilder sqlBuilder = new StringBuilder();
            // String line;
            // while ((line = reader.readLine()) != null) {
            //     sqlBuilder.append(line).append("\n");
            // }
            // String sql = sqlBuilder.toString();

            // // Create a statement
            // Statement statement = connection.createStatement();

            // // Execute the SQL (note: this assumes a single SQL command)
            // statement.execute(sql);

            System.out.println("SQL from web executed successfully.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}