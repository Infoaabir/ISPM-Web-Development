-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2024 at 02:17 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `Title` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `confirmPassword` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `Country` varchar(50) NOT NULL,
  `language` varchar(50) NOT NULL,
  `phoneNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`Title`, `firstName`, `lastName`, `email`, `Password`, `confirmPassword`, `date`, `Country`, `language`, `phoneNumber`) VALUES
('Miss', 'Mohamed', 'Aabir', 'mohamedaabir03@gmail.com', '123', '123', '2023-05-30', 'RS', 'Englishd', 6435344),
('Miss', 'XCV', 'argr', 'emailtr@gmail.com', '12345', '12345', '2024-09-10', '200222300900', 'English', 715599650),
('Mr', 'mas', 'fgh', 'g@gmail.com', '111', '111', '2023-06-08', 'AF', 'English', 45789008),
('Miss', 'masdf', 'fghg', 'g2@gmail.com', 'ss', 'ss', '2031-09-15', 'AF', 'English', 98765432),
('Miss', 'masdf', 'fghg', 'g42@gmail.com', '33', '33', '2031-09-15', 'AF', 'English', 987654321),
('Miss', 'masdf', 'fghg', 'g42aa2@gmail.com', 'ee', 'ee', '2031-09-09', 'AF', 'English', 45680765),
('Mr', 'asdfdg', 'zffmnm', 'mohamedazsfr03@gmail.com', '12', '12', '2024-10-02', '12345', 'English', 2147483647);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`lastName`,`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
