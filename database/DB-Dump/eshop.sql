-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.33 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table eshop.brand: ~0 rows (approximately)
INSERT INTO `brand` (`brand_id`, `brand_name`) VALUES
	(1, 'Asus'),
	(2, 'Hp'),
	(3, 'Dell'),
	(4, 'MSI'),
	(5, 'Dji'),
	(6, 'Nokia'),
	(7, 'Samsung'),
	(8, 'Huawei'),
	(9, 'Vivo'),
	(10, 'Canon'),
	(11, 'Nikon'),
	(12, 'Zony'),
	(13, 'Mi');

-- Dumping data for table eshop.brand_has_category: ~0 rows (approximately)
INSERT INTO `brand_has_category` (`brand_brand_id`, `category_cat_id`, `id`) VALUES
	(10, 3, 1),
	(11, 3, 2),
	(12, 3, 3),
	(5, 5, 4),
	(1, 2, 5),
	(3, 2, 6),
	(2, 2, 7),
	(4, 2, 8),
	(8, 1, 9),
	(6, 1, 10),
	(7, 1, 11),
	(9, 1, 12),
	(13, 4, 13);

-- Dumping data for table eshop.category: ~0 rows (approximately)
INSERT INTO `category` (`cat_id`, `cat_name`) VALUES
	(1, 'Mobile Phone'),
	(2, 'Laptop'),
	(3, 'Cameras'),
	(4, 'Mobile Phone Assessories'),
	(5, 'Drones');

-- Dumping data for table eshop.city: ~50 rows (approximately)
INSERT INTO `city` (`city_id`, `city_name`, `district_district_id`) VALUES
	(1, 'Colombo', 1),
	(2, 'Gampaha', 1),
	(3, 'Negombo', 1),
	(4, 'Moratuwa', 1),
	(5, 'Dehiwala-Mount Lavinia', 1),
	(6, 'Panadura', 1),
	(7, 'Kalutara', 1),
	(8, 'Kandy', 2),
	(9, 'Matale', 2),
	(10, 'Nuwara Eliya', 2),
	(11, 'Galle', 3),
	(12, 'Matara', 3),
	(13, 'Hambantota', 3),
	(14, 'Jaffna', 4),
	(15, 'Vavuniya', 4),
	(16, 'Mannar', 4),
	(17, 'Kilinochchi', 4),
	(18, 'Mullaitivu', 4),
	(19, 'Trincomalee', 5),
	(20, 'Batticaloa', 5),
	(21, 'Ampara', 5),
	(22, 'Polonnaruwa', 6),
	(23, 'Anuradhapura', 6),
	(24, 'Puttalam', 7),
	(25, 'Kurunegala', 7),
	(26, 'Badulla', 8),
	(27, 'Monaragala', 8),
	(28, 'Bandarawela', 8),
	(29, 'Ella', 8),
	(30, 'Dambulla', 9),
	(31, 'Sigiriya', 9),
	(32, 'Kekirawa', 9),
	(33, 'Hatton', 9),
	(34, 'Ambalangoda', 10),
	(35, 'Beruwala', 10),
	(36, 'Chilaw', 10),
	(37, 'Wennappuwa', 10),
	(38, 'Kuliyapitiya', 10),
	(39, 'Chavakachcheri', 11),
	(40, 'Point Pedro', 11),
	(41, 'Peliyagoda', 12),
	(42, 'Kelaniya', 12),
	(43, 'Wattala', 12),
	(44, 'Gampola', 13),
	(45, 'Nawalapitiya', 13),
	(46, 'Warakapola', 13),
	(47, 'Kekirawa', 14),
	(48, 'Hatton', 14),
	(49, 'Kekirawa', 15),
	(50, 'Hatton', 15);

-- Dumping data for table eshop.color: ~0 rows (approximately)
INSERT INTO `color` (`clr_id`, `clr_name`) VALUES
	(1, 'Red'),
	(2, 'Orange'),
	(3, 'Blue'),
	(4, 'Green'),
	(5, 'Yellow'),
	(6, 'Purple'),
	(7, 'White'),
	(8, 'Aqua');

-- Dumping data for table eshop.condition: ~0 rows (approximately)
INSERT INTO `condition` (`condition_id`, `condition_name`) VALUES
	(1, 'Brand New'),
	(2, 'Used');

-- Dumping data for table eshop.district: ~25 rows (approximately)
INSERT INTO `district` (`district_id`, `district_name`, `province_province_id`) VALUES
	(1, 'Colombo', 1),
	(2, 'Gampaha', 1),
	(3, 'Kalutara', 1),
	(4, 'Kandy', 2),
	(5, 'Matale', 2),
	(6, 'Nuwara Eliya', 2),
	(7, 'Galle', 3),
	(8, 'Matara', 3),
	(9, 'Hambantota', 3),
	(10, 'Jaffna', 4),
	(11, 'Kilinochchi', 4),
	(12, 'Mannar', 4),
	(13, 'Mullaitivu', 4),
	(14, 'Vavuniya', 4),
	(15, 'Batticaloa', 5),
	(16, 'Ampara', 5),
	(17, 'Trincomalee', 5),
	(18, 'Kurunegala', 6),
	(19, 'Puttalam', 6),
	(20, 'Anuradhapura', 7),
	(21, 'Polonnaruwa', 7),
	(22, 'Badulla', 8),
	(23, 'Monaragala', 8),
	(24, 'Ratnapura', 9),
	(25, 'Kegalle', 9);

-- Dumping data for table eshop.gender: ~2 rows (approximately)
INSERT INTO `gender` (`id`, `gender_name`) VALUES
	(1, 'Male'),
	(2, 'Female'),
	(3, 'Attack Helicopter');

-- Dumping data for table eshop.model: ~0 rows (approximately)
INSERT INTO `model` (`model_id`, `model_name`) VALUES
	(1, 'Y5 2'),
	(2, 'Y6 2'),
	(3, 'Y6 Prime'),
	(4, 'Vivobook'),
	(5, 'ZenBook'),
	(6, 'TUF Gaming'),
	(7, 'Rog Zephyrus'),
	(8, 'Pavilion'),
	(9, 'EliteBook'),
	(10, 'ProBook'),
	(11, 'Inspiron'),
	(12, 'Latitude'),
	(13, 'Xps'),
	(14, 'GE Raider'),
	(15, 'Gp Leopard'),
	(16, 'GF Thin'),
	(17, 'Mavic Mini'),
	(18, 'Mavik 2 Pro'),
	(19, 'Mavik Air'),
	(20, 'Phanthom 4'),
	(21, '5.4'),
	(22, 'C2'),
	(23, 'C1'),
	(24, 'Galaxy Z Flip5'),
	(25, 'Galaxy M34 5G'),
	(26, 'Galaxy A54'),
	(27, 'V19'),
	(28, 'V20'),
	(29, 'V20 SE'),
	(30, 'EOS 90D'),
	(31, 'EOS 80D '),
	(32, 'EOS 77D'),
	(33, 'A7 III'),
	(34, 'A6000'),
	(35, 'A7S II'),
	(36, 'D850'),
	(37, 'D5600'),
	(38, 'D7200'),
	(39, 'Power Bank 10000mAh'),
	(40, 'Power Bank 20000mAh');

-- Dumping data for table eshop.model_has_brand: ~0 rows (approximately)
INSERT INTO `model_has_brand` (`model_model_id`, `brand_brand_id`, `id`) VALUES
	(4, 1, 2),
	(5, 1, 3),
	(6, 1, 4),
	(7, 1, 5),
	(3, 8, 6),
	(2, 8, 7),
	(1, 8, 8),
	(13, 3, 9),
	(29, 9, 10),
	(28, 9, 11),
	(27, 9, 12),
	(10, 2, 13),
	(40, 13, 14),
	(39, 13, 15),
	(20, 5, 16),
	(8, 2, 17),
	(9, 2, 18),
	(19, 5, 19),
	(18, 5, 20),
	(17, 5, 21),
	(12, 3, 22),
	(11, 3, 23),
	(15, 4, 24),
	(16, 4, 25),
	(14, 4, 26),
	(24, 7, 27),
	(25, 7, 28),
	(26, 7, 29),
	(30, 10, 30),
	(31, 10, 31),
	(32, 10, 32),
	(36, 11, 33),
	(38, 11, 34),
	(37, 11, 35),
	(22, 6, 36),
	(23, 6, 37),
	(35, 12, 38),
	(33, 12, 39),
	(34, 12, 40),
	(21, 6, 41);

-- Dumping data for table eshop.product: ~0 rows (approximately)
INSERT INTO `product` (`id`, `price`, `qty`, `description`, `title`, `datetime_added`, `delivery_fee_colombo`, `delivery_fee_other`, `category_cat_id`, `model_has_brand_id`, `color_clr_id`, `status_status_id`, `condition_condition_id`, `users_email`) VALUES
	(1, 1000, 10, 'Sample Product', 'Camera', '2023-08-24 18:01:29', 100, 200, 3, 29, 3, 1, 1, 'chathushamendis@icloud.com');

-- Dumping data for table eshop.product_img: ~0 rows (approximately)
INSERT INTO `product_img` (`img_path`, `product_id`) VALUES
	('resources/products/iPhone_X.jpg', 1);

-- Dumping data for table eshop.profile_img: ~0 rows (approximately)

-- Dumping data for table eshop.province: ~9 rows (approximately)
INSERT INTO `province` (`province_id`, `province_name`) VALUES
	(1, 'Western Province'),
	(2, 'Central Province'),
	(3, 'Southern Province'),
	(4, 'Northern Province'),
	(5, 'Eastern Province'),
	(6, 'North Western Province'),
	(7, 'North Central Province'),
	(8, 'Uva Province'),
	(9, 'Sabaragamuwa Province');

-- Dumping data for table eshop.status: ~0 rows (approximately)
INSERT INTO `status` (`status_id`, `status_name`) VALUES
	(1, 'In Stock'),
	(2, 'Out Of Stock');

-- Dumping data for table eshop.users: ~2 rows (approximately)
INSERT INTO `users` (`fname`, `lname`, `email`, `password`, `mobile`, `joined_date`, `verification_code`, `status`, `gender_id`) VALUES
	('Chathusha', 'Mendis', 'chathushamendis@icloud.com', 'FuckYouBitch', '0778761458', '2023-08-01 22:51:26', '64e6340f35013', 1, 1),
	('Mother', 'Fucker', 'mk@email.com', 'MotherFucker', '0777696969', '2023-08-23 20:31:42', '64e628b707f7a', 1, 3);

-- Dumping data for table eshop.users_has_address: ~1 rows (approximately)
INSERT INTO `users_has_address` (`address_id`, `line1`, `line2`, `postal_code`, `users_email`, `city_city_id`) VALUES
	(1, 'No 23', 'Temple road', '11550', 'chathushamendis@icloud.com', 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
