-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 29, 2022 at 08:15 AM
-- Server version: 5.7.33-cll-lve
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lpaypcdi_pbl5_bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `enable` bit(1) DEFAULT NULL,
  `locked` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `email`, `password`, `enable`, `locked`) VALUES
(13, 'khacdai0801@gmail.com', '$2a$10$XwhYXD5Rnq9m/digEZMtCOpIM69bxKKC7VTzsiCzyVijOWsIM/yiW', b'1', b'0'),
(15, 'ledaibkdn0801@gmail.com', '$2a$10$4Gr05ZKom5aWgPFwsXZ8xu8q5hM02sU1shGvrTxOv4E4u.6Er7xlK', b'1', b'0'),
(16, 'ngocdatt0208@gmail.com', '$2a$10$WW.kTNo0VOB6dKcjhbkSdOuiR/3IJTk/NG81l5GRI6k82K8t3Dyxa', b'1', b'0'),
(17, 'nthoailinh2402@gmail.com', '$2a$10$PqaeOUZs911Wzk3D85xjc.dBD0P2kQNXF8qxchgXmU8pw3eRUbXkW', b'0', b'0'),
(18, 'nguyenthihoailinh2001@gmail.com', '$2a$10$..tlfq03HRWX2L.JctozWeypDtfOMNMcyDqQlgkq2/PifeXMW6iKC', b'1', b'0'),
(19, 'kkkk@gmail.com', '$2a$10$SHtVchM2GUxBLJglP.9nsuyNeCvxJGjx2elp6EYwT/5bKpUPg61Tq', b'0', b'0'),
(20, 'linh@gmail.com', '$2a$10$OH.0sn5RLz1ewNRAs0DNNuF.dUNdfk..gg3K72dx1y6SsEMCKPPN2', b'0', b'0'),
(21, 'linh123@gmail.com', '$2a$10$JpkRHEMt.nbfomykThf6DOb/D.KLI.i1Ja7ZDUMNfdBxjGGHaOXFu', b'0', b'0'),
(22, 'fhjfhjkdhf@gmail.com', '$2a$10$uEJ65Mtge/nTooMWZlu6y.CBXoLLgMfooHUnn366BKZfT6/p3vWce', b'0', b'0'),
(23, 'kkkk1234@gmail.com', '$2a$10$7l3hoKY5lHr2UJPunlJpTev0bsbx9NYFa/BLkaTeYi9d0mSdWJ7Ma', b'0', b'0'),
(24, 'linh12345@gmail.com', '$2a$10$/pVE1lg.gKP03v.u6SN1pOhRBIHjckKytrxfgFmXK0pin77thuqMe', b'0', b'0'),
(25, 'mount1234@gmail.com', '$2a$10$fshxR/qVNEwjuSzBfNM4COaP/9/U07.RvZ6wCqK7NTJN5/s25fjme', b'0', b'0'),
(26, 'fhdkjfhkdj@fhjhf.dfhj', '$2a$10$Dj05X33ZAJ1ECxLRKpkq8eJbXsQQl7c3cm/garABQ25G3THys1EcG', b'0', b'0'),
(27, 'linhfdfhkjdh@gmail.com', '$2a$10$i.X4f3G3a9/m.6kglP/z3OJtrLyZZnAA.haJdZOo6KfSKZ2yIJtGy', b'0', b'0'),
(28, 'dhfj@123.com', '$2a$10$QdsHcWo9vMSK86Yb.3S7e.gkZQBh..r/EULG1hv23iL1GrVK8gbx6', b'0', b'0'),
(29, 'dhfjgjhghjghhg@gmail.com', '$2a$10$XzEP/n8/dKTg0kaaX7BR/uMo5ibTrJ5wsk60ceCZzxXmvng6tMJGe', b'0', b'0'),
(30, 'ngocdat1908@gmail.com', '$2a$10$wSea5SZlpQ1gkXPL76tUheK9VPPSQZ4.AMm0Pr/ufbJTvw5tkxj3K', b'0', b'0'),
(31, 'ledaibkdn08011@gmail.com', '$2a$10$23dbNHIzmCqIlNKllNQGuO9lo4xTtqk18EmBC8tnCg8nZLjbOcZum', b'0', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `active_account_token`
--

CREATE TABLE `active_account_token` (
  `id` bigint(20) NOT NULL,
  `confirmed_at` datetime DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `expires_at` datetime NOT NULL,
  `token` varchar(255) NOT NULL,
  `account_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `active_account_token`
--

INSERT INTO `active_account_token` (`id`, `confirmed_at`, `created_date`, `expires_at`, `token`, `account_id`) VALUES
(8, '2022-05-07 15:16:13', '2022-05-07 15:14:48', '2022-05-07 15:29:48', '9c0ab034-9310-4cdf-9cd3-44a1b3166a94', 13),
(10, '2022-05-18 15:43:37', '2022-05-18 15:42:42', '2022-05-18 15:57:42', '9bf64377-9e24-4d20-8354-330a2b090bca', 15),
(11, '2022-06-04 08:26:27', '2022-06-04 08:25:32', '2022-06-04 08:40:32', '4d2d5352-20fa-4b01-be86-41875954cc20', 16),
(12, NULL, '2022-06-04 08:53:38', '2022-06-04 09:08:38', '51629853-0ce5-4741-84ac-3dd90d9027f6', 17),
(13, '2022-06-04 08:57:17', '2022-06-04 08:56:57', '2022-06-04 09:11:57', 'f2b6c29e-d7ae-4fb8-8896-afcbeebbca40', 18),
(14, NULL, '2022-06-22 00:08:42', '2022-06-22 00:23:42', '03199ea6-6119-48e7-a7a1-7d6664f23dd7', 19),
(15, NULL, '2022-06-22 00:08:57', '2022-06-22 00:23:57', 'f9b29f0d-faab-4c03-99e1-a2ef8572e393', 20),
(16, NULL, '2022-06-22 00:09:30', '2022-06-22 00:24:30', 'a7292e2f-45f4-4b3e-9e12-c21cfb79b09d', 21),
(17, NULL, '2022-06-22 00:11:24', '2022-06-22 00:26:24', '401a3b00-822a-4e5b-aa88-a8d4d02b5b12', 22),
(18, NULL, '2022-06-22 00:14:40', '2022-06-22 00:29:40', '0381e784-3e9e-4332-800a-c8817aa17555', 23),
(19, NULL, '2022-06-24 21:06:05', '2022-06-24 21:21:05', 'a0de7007-e90e-403b-96d0-16d6d76a7722', 24),
(20, NULL, '2022-06-24 21:11:38', '2022-06-24 21:26:38', 'db239186-3186-43c6-a3c5-83770e9f9dd0', 25),
(21, NULL, '2022-06-24 21:16:11', '2022-06-24 21:31:11', 'c7721f95-ca6e-4245-9334-e904bf21e195', 26),
(22, NULL, '2022-06-24 21:17:17', '2022-06-24 21:32:17', '9dccff0b-09ac-4dea-b304-3e4b6335b624', 27),
(23, NULL, '2022-06-24 21:24:13', '2022-06-24 21:39:13', '4faa1dd7-47fe-4a94-9099-432e016a5910', 28),
(24, NULL, '2022-06-24 21:28:27', '2022-06-24 21:43:27', '1e6608c8-5cdd-42af-9bd7-44a9e98613d7', 29),
(25, NULL, '2022-06-25 14:50:31', '2022-06-25 15:05:31', '69fbbaa4-c0a1-42a7-a1c5-526a6a86f4c7', 30),
(26, NULL, '2022-06-25 14:57:56', '2022-06-25 15:12:56', 'e5df20c6-3b56-47fd-bc82-63e55b0ab683', 31);

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` bigint(20) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `company_name`, `first_name`, `last_name`) VALUES
(1, 'Nguyen Nhat Anh Poem', 'Nguyễn', 'Nhật Ánh'),
(2, 'Lịch sử Việt Nam', 'Nguyen', 'Trai'),
(3, 'Lich su', 'Nguyen', 'Du'),
(5, 'Nước ngoài', 'José Mauro de', 'Vasconcelos'),
(6, 'Nước ngoài', 'Mario', 'Puzo'),
(7, 'Nước ngoài', 'Paulo', 'Coelho'),
(8, 'TTV', 'Thương Thái', 'Vi'),
(12, 'TTV', 'Tony Buổi Sáng', '');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) NOT NULL,
  `available_quantity` int(11) DEFAULT NULL,
  `description` text,
  `edition` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `pages` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `publication_date` datetime DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `author_id` bigint(20) NOT NULL,
  `genre_id` bigint(20) NOT NULL,
  `publisher_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `available_quantity`, `description`, `edition`, `image`, `pages`, `price`, `publication_date`, `size`, `title`, `weight`, `author_id`, `genre_id`, `publisher_id`) VALUES
(4, 1000, 'Ở một vùng quê yên tĩnh nọ bỗng xảy ra sự kiện gia súc chết hàng loạt rất quái lạ. ', 3, 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_179484.jpg', 100, 35000, '2022-03-11 07:00:00', '20cm x 30cm', 'Văn Phòng Thám Tử Quái Vật - Tập 2', 101, 1, 3, 3),
(5, 1000, 'Ở một vùng quê yên tĩnh nọ bỗng xảy ra sự kiện gia súc chết hàng loạt rất quái lạ. ', 3, 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_19231_thanh_ly.jpg', 100, 35000, '2022-03-10 07:00:00', '20cm x 30cm', 'Quán Rượu Dị Giới Nobu - Tập 1 - Tặng Kèm Bookmark Giấy Hình Món Ăn', 100, 1, 3, 3),
(6, 1000, 'Là một bộ manhwa hài hước của Hàn Quốc do hai tác giả Park In-seo và Choi Sang sáng tác. Nhân vật chính của truyện là các thầy trò cực kỳ nhí nho,', 3, 'https://cdn0.fahasa.com/media/catalog/product//d/o/doi-quan-nhi-nho-_-tap-38.jpg', 100, 20000, '2022-03-10 07:00:00', '20cm x 30cm', 'Đội Quân Nhí Nhố - Tập 38', 100, 2, 3, 2),
(7, 1000, 'Nội dung kể về Hiyori, một nữ sinh có khả năng nhìn thấy những linh hồn hay quỷ thần. Một lần cô gặp tại nạn giao thông và trở thành thức thần. Cô đã kết bạn với Yato, một Vị Thần Lang Thang khao khát xây dựng ngôi đền riêng cho bản thân.', 3, 'https://cdn0.fahasa.com/media/catalog/product//v/i/vi-than-lang-thang-_-tap-20_1.jpg', 100, 20000, '2022-03-10 07:00:00', '20cm x 30cm', 'Vị Thần Lang Thang Tập 20 - Tặng Kèm Postcard', 100, 3, 3, 1),
(8, 1000, '“Một cách nhìn cuộc sống gần như hoàn chỉnh từ con mắt trẻ thơ… có sức mạnh sưởi ấm và làm tan nát cõi lòng, dù người đọc ở lứa tuổi nào.” - The National', 3, 'https://cdn0.fahasa.com/media/catalog/product//i/m/image_217480.jpg', 100, 91800, '2020-01-10 07:00:00', '20cm x 30cm', 'Cây Cam Ngọt Của Tôi', 100, 5, 6, 6),
(9, 1000, '“Một cách nhìn cuộc sống gần như hoàn chỉnh từ con mắt trẻ thơ… có sức mạnh sưởi ấm và làm tan nát cõi lòng, dù người đọc ở lứa tuổi nào.” - The National', 3, 'https://cdn0.fahasa.com/media/catalog/product//i/m/image_217480.jpg', 100, 91800, '2020-01-10 07:00:00', '20cm x 30cm', 'Bố Già (Đông A)', 100, 6, 6, 7),
(10, 1000, 'Mắt biếc là một tác phẩm được nhiều người bình chọn là hay nhất của nhà văn Nguyễn Nhật Ánh. Tác phẩm này cũng đã được dịch giả Kato Sakae dịch sang tiếng Nhật để giới thiệu với độc giả Nhật Bản.', 3, 'https://cdn0.fahasa.com/media/catalog/product//m/a/mat-biec_bia-mem_in-lan-thu-44.jpg', 100, 93500, '2020-01-10 07:00:00', '20cm x 30cm', 'Mắt Biếc (Tái Bản 2019)', 100, 1, 6, 3),
(11, 1000, 'Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người. ', 3, 'https://cdn0.fahasa.com/media/catalog/product//i/m/image_195509_1_36793.jpg', 100, 67150, '2020-01-10 07:00:00', '20cm x 30cm', 'Nhà Giả Kim (Tái Bản 2020)', 100, 7, 6, 6),
(12, 1000, 'Thứ tôi có thể cho em trong cuộc đời này', 3, 'https://cdn0.fahasa.com/media/catalog/product//8/9/8935212349208.jpg', 100, 60800, '2020-01-10 07:00:00', '20cm x 30cm', 'Bến Xe (Tái Bản 2020)', 100, 8, 7, 8),
(17, 1000, 'Chúng tôi tin rằng những người trẻ tuổi luôn mang trong mình khát khao vươn lên và tấm lòng hướng thiện, và có nhiều cách để động viên họ biến điều đó thành hành động. ', 3, 'https://cdn0.fahasa.com/media/catalog/product//u/n/untitled-9_19.jpg', 100, 63000, '2020-01-10 07:00:00', '20cm x 30cm', 'Cà Phê Cùng Tony (Tái Bản 2017)', 100, 12, 9, 3),
(20, 1000, 'Ở một vùng quê yên tĩnh nọ bỗng xảy ra sự kiện gia súc chết hàng loạt rất quái lạ. ', 3, '', 100, 35000, '2022-03-11 07:00:00', '20cm x 30cm', 'Văn Phòng Thám Tử Quái Vật - Tập 2', 101, 1, 3, 3),
(21, 0, 'asdfadfasdf', 0, NULL, 100, 20000, '2022-03-11 07:00:00', '10cm x 20cm', 'fasdfas', 50, 3, 6, 3),
(22, 0, 'dfsvsdfvsdvrf', 0, NULL, 100, 20000, '2022-03-11 07:00:00', '20cm x 20cm', 'geetgsdf', 101, 5, 7, 6);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) NOT NULL,
  `account_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `account_id`) VALUES
(13, 13),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24),
(25, 25),
(26, 26),
(27, 27),
(28, 28),
(29, 29),
(30, 30),
(31, 31);

-- --------------------------------------------------------

--
-- Table structure for table `cart_details`
--

CREATE TABLE `cart_details` (
  `book_id` bigint(20) NOT NULL,
  `cart_id` bigint(20) NOT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_details`
--

INSERT INTO `cart_details` (`book_id`, `cart_id`, `quantity`) VALUES
(6, 13, 3),
(6, 18, 1),
(8, 13, 2),
(11, 13, 3),
(17, 13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`id`, `title`, `value`) VALUES
(1, 'Voucher khai trương', 20);

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` bigint(20) NOT NULL,
  `genre_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `genre_name`) VALUES
(1, 'Sách khoa học công nghệ'),
(2, 'Sách giáo khoa'),
(3, 'Truyện tranh'),
(6, 'Tiểu thuyết'),
(7, 'Ngôn tình'),
(9, 'Truyện ngắn -');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `date_order` datetime DEFAULT NULL,
  `discount_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `delivery_address` varchar(255) DEFAULT NULL,
  `payment_status` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `date_order`, `discount_id`, `user_id`, `delivery_address`, `payment_status`) VALUES
(1, '2022-05-30 17:37:17', 1, 13, NULL, 0),
(2, '2022-05-30 17:47:17', 1, 15, NULL, 0),
(3, '2022-05-30 17:50:17', 1, 15, NULL, 0),
(4, '2022-05-30 17:50:17', 1, 15, NULL, 0),
(5, '2022-05-30 11:12:11', 1, 13, NULL, 0),
(24, '2022-05-02 10:56:27', NULL, 13, 'Que Xuan 1, Que Son, Quang Nam', 1),
(25, '2022-06-02 10:59:25', NULL, 13, 'Que Xuan 1, Que Son, Quang Nam', 1),
(26, '2022-04-02 21:11:43', NULL, 13, 'Que Xuan 1, Que Son, Quang Nam', 1),
(32, '2022-06-11 12:12:18', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(33, '2022-06-11 12:14:50', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(34, '2022-06-11 12:22:29', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(35, '2022-06-11 12:25:33', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(36, '2022-06-11 12:28:09', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(37, '2022-06-11 12:30:47', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(38, '2022-06-11 12:32:27', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(39, '2022-06-11 12:33:59', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(40, '2022-06-11 12:42:05', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(41, '2022-06-11 12:45:16', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(42, '2022-06-11 12:49:05', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(43, '2022-06-11 12:50:38', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 0),
(44, '2022-03-11 12:54:27', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 1),
(45, '2022-06-11 20:31:35', 1, 13, 'Que Xuan 2, Que Son, Quang Nam', 1),
(46, '2022-01-12 16:51:09', 1, 17, 'Que Xuan 1, Que Son, Quang ', 1),
(47, '2022-06-24 16:51:13', 1, 17, 'Que Xuan 1, Que Son, Quang ', 0),
(48, '2022-06-24 16:56:28', NULL, 17, 'Que Xuan 1, Que Son, Quang ', 0),
(49, '2022-06-24 16:57:46', NULL, 17, '12233', 0),
(50, '2022-06-24 16:58:44', NULL, 17, 'bbnbnb', 0),
(51, '2022-06-24 16:59:48', NULL, 17, 'nmn', 0),
(52, '2022-06-24 17:00:34', NULL, 17, 'Que Xuan 1, Que Son, Quang ', 0),
(53, '2022-06-24 17:03:49', NULL, 17, 'bbnbnb', 0),
(54, '2022-06-24 17:03:57', NULL, 17, 'bbnbnb', 0),
(55, '2022-06-24 17:04:29', NULL, 17, 'bbnbnb', 0),
(56, '2020-06-24 17:10:16', NULL, 17, 'bbnbnb', 1),
(57, '2022-06-24 17:13:53', NULL, 17, 'nmn', 0),
(58, '2022-06-24 17:16:13', NULL, 17, 'nmn', 0),
(59, '2022-06-24 17:17:43', NULL, 17, 'bbnbnb', 0),
(60, '2022-06-24 17:20:50', NULL, 17, 'nmn', 0),
(61, '2022-06-24 17:37:46', NULL, 17, 'bbnbnb', 0),
(62, '2022-06-24 18:01:01', NULL, 17, 'bnb', 1),
(63, '2021-06-24 21:32:09', 1, 13, 'Que Xuan 1, Que Son, Quang Nam', 1),
(64, '2022-06-24 21:34:21', 1, 13, 'Que Xuan 1, Que Son, Quang Nam', 0),
(65, '2022-06-25 09:00:59', NULL, 17, 'nmn', 0),
(66, '2022-06-25 14:41:34', 1, 13, 'Que Xuan 1, Que Son, Quang Nam123', 1),
(67, '2022-06-25 14:47:26', NULL, 13, 'Que Xuan 1, Que Son, Quang Nam', 1),
(68, '2022-06-25 14:48:35', NULL, 13, 'Que Xuan 1, Que Son, Quang Nam', 1),
(69, '2022-06-25 16:03:23', NULL, 17, 'eee', 1),
(70, '2022-06-25 16:03:29', NULL, 17, 'eee', 0),
(71, '2022-06-25 16:09:57', 1, 17, 'bfdjfm,dbnfmdsb', 1),
(72, '2022-06-25 16:10:01', 1, 17, 'bfdjfm,dbnfmdsb', 0),
(73, '2022-06-25 16:13:05', NULL, 17, 'Que Xuan 1, Que Son, Quang ', 1),
(74, '2022-06-25 16:32:48', 1, 13, 'Que Xuan 1, Que Son, Quang Nam', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders_details`
--

CREATE TABLE `orders_details` (
  `book_id` bigint(20) NOT NULL,
  `order_id` bigint(20) NOT NULL,
  `quantity` bigint(20) DEFAULT NULL,
  `amount` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders_details`
--

INSERT INTO `orders_details` (`book_id`, `order_id`, `quantity`, `amount`) VALUES
(4, 1, 8, NULL),
(4, 2, 2, NULL),
(4, 3, 2, NULL),
(4, 4, 2, NULL),
(4, 24, 4, NULL),
(4, 25, 4, NULL),
(4, 26, 4, NULL),
(4, 49, 1, NULL),
(4, 50, 1, NULL),
(4, 51, 1, NULL),
(4, 52, 1, NULL),
(4, 56, 1, NULL),
(4, 62, 1, NULL),
(4, 63, 1, NULL),
(4, 65, 1, NULL),
(5, 1, 1, NULL),
(5, 3, 2, NULL),
(5, 32, 5, NULL),
(5, 33, 5, NULL),
(5, 34, 5, NULL),
(5, 35, 5, NULL),
(5, 36, 5, NULL),
(5, 37, 5, NULL),
(5, 38, 5, NULL),
(5, 39, 5, NULL),
(5, 40, 5, NULL),
(5, 41, 5, NULL),
(5, 42, 5, NULL),
(5, 43, 5, NULL),
(5, 44, 5, NULL),
(5, 45, 5, NULL),
(5, 46, 2, NULL),
(5, 47, 2, NULL),
(5, 48, 1, NULL),
(5, 53, 1, NULL),
(5, 54, 1, NULL),
(5, 55, 1, NULL),
(5, 57, 1, NULL),
(5, 58, 1, NULL),
(5, 59, 1, NULL),
(5, 60, 1, NULL),
(5, 61, 1, NULL),
(5, 68, 1, NULL),
(5, 73, 1, NULL),
(6, 1, 3, NULL),
(6, 46, 2, NULL),
(6, 47, 2, NULL),
(6, 63, 1, NULL),
(6, 67, 1, NULL),
(6, 69, 2, NULL),
(6, 70, 2, NULL),
(6, 71, 1, NULL),
(6, 72, 1, NULL),
(6, 74, 4, NULL),
(7, 1, 5, NULL),
(7, 2, 2, NULL),
(7, 3, 2, NULL),
(7, 4, 5, NULL),
(7, 24, 1, NULL),
(7, 25, 1, NULL),
(7, 26, 1, NULL),
(7, 32, 1, NULL),
(7, 33, 1, NULL),
(7, 34, 1, NULL),
(7, 35, 1, NULL),
(7, 36, 1, NULL),
(7, 37, 1, NULL),
(7, 38, 1, NULL),
(7, 39, 1, NULL),
(7, 40, 1, NULL),
(7, 41, 1, NULL),
(7, 42, 1, NULL),
(7, 43, 1, NULL),
(7, 44, 1, NULL),
(7, 45, 1, NULL),
(7, 69, 1, NULL),
(7, 70, 1, NULL),
(8, 1, 1, NULL),
(8, 63, 1, NULL),
(8, 69, 3, NULL),
(8, 70, 3, NULL),
(9, 1, 1, NULL),
(9, 46, 1, NULL),
(9, 47, 1, NULL),
(9, 64, 1, NULL),
(9, 66, 3, NULL),
(10, 66, 1, NULL),
(11, 2, 1, NULL),
(12, 2, 1, NULL),
(12, 60, 1, NULL),
(17, 5, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `publishers`
--

CREATE TABLE `publishers` (
  `id` bigint(20) NOT NULL,
  `publisher_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `publishers`
--

INSERT INTO `publishers` (`id`, `publisher_name`) VALUES
(1, 'Nhà xuất bản giáo dục'),
(2, 'Nhà xuất bản quốc gia'),
(3, 'Nhà xuất bản Hội người cao tuổi'),
(6, 'NXB Hội nhà văn'),
(7, 'NXB Dân Trí'),
(8, 'NXB Văn Học'),
(9, 'NXB Hà Nội'),
(10, 'NXB Phụ Nữ Việt');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) NOT NULL,
  `date_reply` datetime DEFAULT NULL,
  `date_review` datetime DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `reply` varchar(255) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `book_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name_role` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `description`, `name_role`, `slug`) VALUES
(1, 'Người dùng', 'ROLE_USER', ''),
(2, 'Quản trị viên', 'ROLE_ADMIN', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `role_account`
--

CREATE TABLE `role_account` (
  `account_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role_account`
--

INSERT INTO `role_account` (`account_id`, `role_id`) VALUES
(13, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(13, 2),
(30, 1),
(31, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `address`, `avatar`, `first_name`, `last_name`, `phone_number`, `user_name`, `account_id`) VALUES
(13, 'Que Xuan 1, Que Son, Quang Nam', 'http://localhost:8080/image/avatar/13/meo.jpg', 'Le', 'Dai', '0976305637', 'Anh Dai', 13),
(15, NULL, NULL, NULL, NULL, NULL, 'ledaibkdn0801', 15),
(16, NULL, NULL, NULL, NULL, NULL, 'ngocdatt0208', 16),
(17, NULL, NULL, NULL, NULL, NULL, 'nthoailinh2402', 17),
(18, NULL, NULL, NULL, NULL, NULL, 'nguyenthihoailinh2001', 18),
(19, NULL, NULL, NULL, NULL, NULL, 'kkkk', 19),
(20, NULL, NULL, NULL, NULL, NULL, 'linh', 20),
(21, NULL, NULL, NULL, NULL, NULL, 'linh123', 21),
(22, NULL, NULL, NULL, NULL, NULL, 'fhjfhjkdhf', 22),
(23, NULL, NULL, NULL, NULL, NULL, 'kkkk1234', 23),
(24, NULL, NULL, NULL, NULL, NULL, 'linh12345', 24),
(25, NULL, NULL, NULL, NULL, NULL, 'mount1234', 25),
(26, NULL, NULL, NULL, NULL, NULL, 'fhdkjfhkdj', 26),
(27, NULL, NULL, NULL, NULL, NULL, 'linhfdfhkjdh', 27),
(28, NULL, NULL, NULL, NULL, NULL, 'dhfj', 28),
(29, NULL, NULL, NULL, NULL, NULL, 'dhfjgjhghjghhg', 29),
(30, NULL, NULL, NULL, NULL, NULL, 'ngocdat1908', 30),
(31, NULL, NULL, NULL, NULL, NULL, 'ledaibkdn08011', 31);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKn7ihswpy07ci568w34q0oi8he` (`email`);

--
-- Indexes for table `active_account_token`
--
ALTER TABLE `active_account_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5uwtrgrpeu57mugvqebv5n35c` (`account_id`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfjixh2vym2cvfj3ufxj91jem7` (`author_id`),
  ADD KEY `FK9hsvoalyniowgt8fbufidqj3x` (`genre_id`),
  ADD KEY `FKayy5edfrqnegqj3882nce6qo8` (`publisher_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpffuu6bbv6kg7qcawlwur1q1q` (`account_id`);

--
-- Indexes for table `cart_details`
--
ALTER TABLE `cart_details`
  ADD PRIMARY KEY (`book_id`,`cart_id`),
  ADD KEY `FKkcochhsa891wv0s9wrtf36wgt` (`cart_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKsxfvku34v9ujavmj9ao69vo8s` (`discount_id`),
  ADD KEY `FK32ql8ubntj5uh44ph9659tiih` (`user_id`);

--
-- Indexes for table `orders_details`
--
ALTER TABLE `orders_details`
  ADD PRIMARY KEY (`book_id`,`order_id`),
  ADD KEY `FK5o977kj2vptwo70fu7w7so9fe` (`order_id`);

--
-- Indexes for table `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6a9k6xvev80se5rreqvuqr7f9` (`book_id`),
  ADD KEY `FKcgy7qjc1r99dp117y9en6lxye` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_account`
--
ALTER TABLE `role_account`
  ADD KEY `FK6bkfjr1ks1mysbwp8knth9gs2` (`role_id`),
  ADD KEY `FKq7hrp5abxpi17rn6d66f7h2rn` (`account_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfm8rm8ks0kgj4fhlmmljkj17x` (`account_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `active_account_token`
--
ALTER TABLE `active_account_token`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `publishers`
--
ALTER TABLE `publishers`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `active_account_token`
--
ALTER TABLE `active_account_token`
  ADD CONSTRAINT `FK5uwtrgrpeu57mugvqebv5n35c` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `FK9hsvoalyniowgt8fbufidqj3x` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `FKayy5edfrqnegqj3882nce6qo8` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`id`),
  ADD CONSTRAINT `FKfjixh2vym2cvfj3ufxj91jem7` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`);

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `FKpffuu6bbv6kg7qcawlwur1q1q` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `cart_details`
--
ALTER TABLE `cart_details`
  ADD CONSTRAINT `FK3jjrdv6317gvtwdq2vt4vhh3i` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `FKkcochhsa891wv0s9wrtf36wgt` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKsxfvku34v9ujavmj9ao69vo8s` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`);

--
-- Constraints for table `orders_details`
--
ALTER TABLE `orders_details`
  ADD CONSTRAINT `FK52sbsnqnmw0ehs0lihtwy83tp` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `FK5o977kj2vptwo70fu7w7so9fe` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK6a9k6xvev80se5rreqvuqr7f9` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `FKcgy7qjc1r99dp117y9en6lxye` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `role_account`
--
ALTER TABLE `role_account`
  ADD CONSTRAINT `FK6bkfjr1ks1mysbwp8knth9gs2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKq7hrp5abxpi17rn6d66f7h2rn` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FKfm8rm8ks0kgj4fhlmmljkj17x` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
