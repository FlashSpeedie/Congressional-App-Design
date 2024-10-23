-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2024 at 07:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `financial_planner`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(6) UNSIGNED NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `jsonFile` mediumtext NOT NULL DEFAULT '{   "email": "",   "expenses": [     {       "title": "firstExpense",       "percentage": "",       "amount": "10"     }   ] }'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `phone`, `password`, `reg_date`, `jsonFile`) VALUES
(1, 'Siddharth Pandit ', 'siddharth20pandit@gmail.com', '', '$2y$10$0OfBV6gvlyMMUgFt4MH0a.RytOXMt7tJN3nz.k4rv1nheLFeQVF8i', '2024-09-05 22:52:46', ''),
(7, 'Zack', 'zackarchon1@gmail.com', '', '$2y$10$OzErIy1uxVZlqk5eSFAtJ.kSpL8e.mJWjXXY0l2wyjEqXg30AkA.a', '2024-10-23 05:16:15', '{\n  \"email\": \"zackarchon1@gmail.com\",\n  \"expenses\": [\n    {\n      \"title\": \"firstExpense\",\n      \"amount\": \"100\",\n      \"influence\": \"positive\",\n      \"dailyData\": [\n        {\n          \"date\": \"2024-10-12\",\n          \"amount\": \"10\"\n        },\n        {\n          \"date\": \"2024-10-28\",\n          \"amount\": \"500\"\n        },\n        {\n          \"date\": \"2024-10-09\",\n          \"amount\": \"100\"\n        },\n        {\n          \"date\": \"2024-10-23\",\n          \"amount\": \"120\"\n        },\n        {\n          \"date\": \"2024-09-12\",\n          \"amount\": \"70\"\n        },\n        {\n          \"date\": \"2024-10-24\",\n          \"amount\": \"199\"\n        }\n      ]\n    },\n    {\n      \"title\": \"otherExpense\",\n      \"amount\": \"12\",\n      \"influence\": \"positive\",\n      \"dailyData\": [\n        {\n          \"date\": \"2024-09-30\",\n          \"amount\": \"100\"\n        }\n      ]\n    }\n  ]\n}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
