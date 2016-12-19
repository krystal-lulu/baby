-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-12-19 12:37:48
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `info`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `type` varchar(100) CHARACTER SET armscii8 NOT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `imageUrl` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `type`, `intro`, `imageUrl`) VALUES
(12, 'arrival', 'Lightweight Foldable Easy Carry Baby Kids Stroller', 'product1.jpg'),
(13, 'arrival', 'Lightweight Foldable Easy Carry Baby Kids Stroller', 'product0.jpg'),
(14, 'feed', 'Lightweight Foldable Easy Carry Baby Kids Stroller', 'product3.jpg'),
(15, 'feed', 'Lightweight Foldable Easy Carry Baby Kids Stroller', 'product3.jpg'),
(16, 'feed', 'Lightweight Foldable Easy Carry Baby Kids Stroller', 'product4.jpg'),
(17, 'feed', 'Lightweight Foldable Easy Carry Baby Kids Stroller', 'product4.jpg'),
(18, 'feed', 'Infant/Newborn Swaddle Blanket', 'product1.jpg'),
(19, 'feed', 'Stylish Floral Mommy backpack bag', 'product2.jpg'),
(20, 'feed', 'Chic Floral Multiunctional Mommy Bag', 'product3.jpg'),
(21, 'feed', 'Backseat Car Organizer', 'product4.jpg'),
(22, 'feed', 'Chic Multiunctional spots Mommy bag', 'product5.jpg'),
(23, 'feed', 'Cute Baby Toddler', 'product6.jpg'),
(24, 'feed', 'Stripes Anti Slip Skid', 'product8.jpg'),
(25, 'feed', 'Socks Cute Baby Toddler', 'product8.jpg'),
(26, 'feed', 'Stripes Anti Slip Skid Socks Fashion', 'product9.jpg'),
(27, 'feed', 'Lepoard Print Mommy bag Fashion', 'product10.jpg'),
(28, 'feed', 'Multifunctional Diaper bag Fashion', 'product11.jpg'),
(29, 'feed', 'Multifunctional Diaper bag', 'product12.jpg'),
(30, 'feed', 'Multifunctional Diaper Bags', 'product13.jpg'),
(31, 'feed', 'Foldable Baby Carrycot Crib', 'product14.jpg'),
(32, 'feed', 'Multifunctional Diaper Bags', 'product15.jpg'),
(33, 'feed', 'Foldable Baby Carrycot Crib', 'product16.jpg'),
(34, 'feed', 'Multifunction Large Capacity', 'product17.jpg'),
(35, 'feed', 'Mummy Bag Multifunction', 'product18.jpg'),
(36, 'feed', 'Large Capacity Mummy Bag', 'product19.jpg'),
(37, 'feed', 'Infant/Newborn Swaddle Blanket', 'product20.jpg'),
(38, 'feed', 'Stylish Floral Mommy backpack bag', 'product21.jpg'),
(39, 'feed', 'Chic Floral Multiunctional Mommy Bag', 'product22.jpg'),
(40, 'feed', 'Backseat Car Organizer', 'product23.jpg'),
(41, 'cloth', 'Chic Multiunctional spots Mommy bag', 'product24.jpg'),
(42, 'cloth', 'Cute Baby Toddler', 'product25.jpg'),
(43, 'cloth', 'Stripes Anti Slip Skid', 'product26.jpg'),
(44, 'cloth', 'Socks Cute Baby Toddler', 'product27.jpg'),
(45, 'cloth', 'Stripes Anti Slip Skid Socks Fashion', 'product28.jpg'),
(46, 'cloth', 'Lepoard Print Mommy bag Fashion', 'product29.jpg'),
(47, 'cloth', 'Multifunctional Diaper bag Fashion', 'product30.jpg'),
(48, 'cloth', 'Multifunctional Diaper bag', 'product31.jpg'),
(49, 'cloth', 'Multifunctional Diaper Bags', 'product32.jpg'),
(50, 'cloth', 'Foldable Baby Carrycot Crib', 'product1.jpg'),
(51, 'cloth', 'Multifunctional Diaper Bags', 'product2.jpg'),
(52, 'cloth', 'Foldable Baby Carrycot Crib', 'product3.jpg'),
(53, 'cloth', 'Multifunction Large Capacity', 'product4.jpg'),
(54, 'cloth', 'Mummy Bag Multifunction', 'product5.jpg'),
(55, 'cloth', 'Large Capacity Mummy Bag', 'product6.jpg'),
(56, 'cloth', 'Foldable Baby Carrycot Crib', 'product8.jpg'),
(57, 'cloth', 'Multifunction Large Capacity', 'product8.jpg'),
(58, 'cloth', 'Mummy Bag Multifunction', 'product9.jpg'),
(59, 'cloth', 'Large Capacity Mummy Bag', 'product10.jpg'),
(60, 'cloth', 'Infant/Newborn Swaddle Blanket', 'product11.jpg'),
(61, 'cloth', 'Stylish Floral Mommy backpack bag', 'product12.jpg'),
(62, 'cloth', 'Chic Floral Multiunctional Mommy Bag', 'product13.jpg'),
(63, 'cloth', 'Backseat Car Organizer', 'product14.jpg'),
(64, 'cloth', 'Chic Multiunctional spots Mommy bag', 'product15.jpg'),
(65, 'cloth', 'Cute Baby Toddler', 'product16.jpg'),
(66, 'nursery', 'Stripes Anti Slip Skid', 'product17.jpg'),
(67, 'nursery', 'Socks Cute Baby Toddler', 'product18.jpg'),
(68, 'nursery', 'Stripes Anti Slip Skid Socks Fashion', 'product19.jpg'),
(69, 'nursery', 'Lepoard Print Mommy bag Fashion', 'product20.jpg'),
(70, 'nursery', 'Multifunctional Diaper bag Fashion', 'product21.jpg'),
(71, 'nursery', 'Multifunctional Diaper bag', 'product22.jpg'),
(72, 'nursery', 'Multifunctional Diaper Bags', 'product23.jpg'),
(73, 'nursery', 'Foldable Baby Carrycot Crib', 'product24.jpg'),
(74, 'nursery', 'Multifunctional Diaper Bags', 'product25.jpg'),
(75, 'nursery', 'Foldable Baby Carrycot Crib', 'product26.jpg'),
(76, 'nursery', 'Multifunction Large Capacity', 'product27.jpg'),
(77, 'nursery', 'Mummy Bag Multifunction', 'product28.jpg'),
(78, 'nursery', 'Large Capacity Mummy Bag', 'product29.jpg'),
(79, 'nursery', 'Infant/Newborn Swaddle Blanket', 'product30.jpg'),
(80, 'nursery', 'Stylish Floral Mommy backpack bag', 'product31.jpg'),
(81, 'nursery', 'Chic Floral Multiunctional Mommy Bag', 'product32.jpg'),
(82, 'nursery', 'Backseat Car Organizer', 'product1.jpg'),
(83, 'nursery', 'Chic Multiunctional spots Mommy bag', 'product2.jpg'),
(84, 'nursery', 'Cute Baby Toddler', 'product3.jpg'),
(85, 'nursery', 'Stripes Anti Slip Skid', 'product4.jpg'),
(86, 'nursery', 'Socks Cute Baby Toddler', 'product5.jpg'),
(87, 'nursery', 'Stripes Anti Slip Skid Socks Fashion', 'product6.jpg'),
(88, 'nursery', 'Lepoard Print Mommy bag Fashion', 'product8.jpg'),
(89, 'nursery', 'Multifunctional Diaper bag Fashion', 'product8.jpg'),
(90, 'nursery', 'Multifunctional Diaper bag', 'product9.jpg'),
(91, 'nursery', 'Multifunctional Diaper Bags', 'product10.jpg'),
(92, 'nursery', 'Foldable Baby Carrycot Crib', 'product11.jpg'),
(93, 'nursery', 'Multifunctional Diaper Bags', 'product12.jpg'),
(94, 'nursery', 'Foldable Baby Carrycot Crib', 'product13.jpg'),
(95, 'nursery', 'Multifunction Large Capacity', 'product14.jpg'),
(96, 'playtime', 'Mummy Bag Multifunction', 'product15.jpg'),
(97, 'playtime', 'Large Capacity Mummy Bag', 'product16.jpg'),
(98, 'playtime', 'Infant/Newborn Swaddle Blanket', 'product17.jpg'),
(99, 'playtime', 'Stylish Floral Mommy backpack bag', 'product18.jpg'),
(100, 'playtime', 'Chic Floral Multiunctional Mommy Bag', 'product19.jpg'),
(101, 'playtime', 'Backseat Car Organizer', 'product20.jpg'),
(102, 'playtime', 'Chic Multiunctional spots Mommy bag', 'product21.jpg'),
(103, 'playtime', 'Cute Baby Toddler', 'product22.jpg'),
(104, 'playtime', 'Stripes Anti Slip Skid', 'product23.jpg'),
(105, 'playtime', 'Socks Cute Baby Toddler', 'product24.jpg'),
(106, 'playtime', 'Stripes Anti Slip Skid Socks Fashion', 'product25.jpg'),
(107, 'playtime', 'Lepoard Print Mommy bag Fashion', 'product26.jpg'),
(108, 'playtime', 'Multifunctional Diaper bag Fashion', 'product27.jpg'),
(109, 'playtime', 'Multifunctional Diaper bag', 'product28.jpg'),
(110, 'playtime', 'Multifunctional Diaper Bags', 'product29.jpg'),
(111, 'playtime', 'Foldable Baby Carrycot Crib', 'product30.jpg'),
(112, 'playtime', 'Multifunctional Diaper Bags', 'product31.jpg'),
(113, 'playtime', 'Foldable Baby Carrycot Crib', 'product32.jpg'),
(114, 'playtime', 'Multifunction Large Capacity', 'product1.jpg'),
(115, 'playtime', 'Mummy Bag Multifunction', 'product2.jpg'),
(116, 'playtime', 'Large Capacity Mummy Bag', 'product3.jpg'),
(117, 'playtime', 'Infant/Newborn Swaddle Blanket', 'product4.jpg'),
(118, 'playtime', 'Stylish Floral Mommy backpack bag', 'product5.jpg'),
(119, 'playtime', 'Chic Floral Multiunctional Mommy Bag', 'product6.jpg'),
(120, 'playtime', 'Backseat Car Organizer', 'product8.jpg'),
(121, 'playtime', 'Chic Multiunctional spots Mommy bag', 'product8.jpg'),
(122, 'playtime', 'Cute Baby Toddler', 'product9.jpg'),
(123, 'playtime', 'Stripes Anti Slip Skid', 'product10.jpg'),
(124, 'playtime', 'Socks Cute Baby Toddler', 'product11.jpg'),
(125, 'playtime', 'Stripes Anti Slip Skid Socks Fashion', 'product12.jpg'),
(126, 'playtime', 'Lepoard Print Mommy bag Fashion', 'product13.jpg'),
(127, 'playtime', 'Multifunctional Diaper bag Fashion', 'product14.jpg'),
(128, 'playtime', 'Multifunctional Diaper bag', 'product15.jpg'),
(129, 'playtime', 'Multifunctional Diaper Bags', 'product16.jpg'),
(130, 'gear', 'Foldable Baby Carrycot Crib', 'product17.jpg'),
(131, 'gear', 'Multifunctional Diaper Bags', 'product18.jpg'),
(132, 'gear', 'Foldable Baby Carrycot Crib', 'product19.jpg'),
(133, 'gear', 'Multifunction Large Capacity', 'product20.jpg'),
(134, 'gear', 'Mummy Bag Multifunction', 'product21.jpg'),
(135, 'gear', 'Large Capacity Mummy Bag', 'product22.jpg'),
(136, 'gear', 'Infant/Newborn Swaddle Blanket', 'product23.jpg'),
(137, 'gear', 'Stylish Floral Mommy backpack bag', 'product24.jpg'),
(138, 'gear', 'Chic Floral Multiunctional Mommy Bag', 'product25.jpg'),
(139, 'gear', 'Backseat Car Organizer', 'product26.jpg'),
(140, 'gear', 'Chic Multiunctional spots Mommy bag', 'product27.jpg'),
(141, 'gear', 'Cute Baby Toddler', 'product28.jpg'),
(142, 'gear', 'Stripes Anti Slip Skid', 'product29.jpg'),
(143, 'gear', 'Socks Cute Baby Toddler', 'product30.jpg'),
(144, 'gear', 'Stripes Anti Slip Skid Socks Fashion', 'product31.jpg'),
(145, 'gear', 'Lepoard Print Mommy bag Fashion', 'product32.jpg'),
(146, 'gear', 'Multifunctional Diaper bag Fashion', 'product1.jpg'),
(147, 'gear', 'Multifunctional Diaper bag', 'product2.jpg'),
(148, 'gear', 'Multifunctional Diaper Bags', 'product3.jpg'),
(149, 'gear', 'Foldable Baby Carrycot Crib', 'product4.jpg'),
(150, 'gear', 'Multifunctional Diaper Bags', 'product5.jpg'),
(151, 'gear', 'Foldable Baby Carrycot Crib', 'product6.jpg'),
(152, 'gear', 'Multifunction Large Capacity', 'product8.jpg'),
(153, 'gear', 'Mummy Bag Multifunction', 'product8.jpg'),
(154, 'gear', 'Large Capacity Mummy Bag', 'product9.jpg'),
(155, 'gear', 'Infant/Newborn Swaddle Blanket', 'product10.jpg'),
(156, 'gear', 'Stylish Floral Mommy backpack bag', 'product11.jpg'),
(157, 'bathing', 'Chic Floral Multiunctional Mommy Bag', 'product12.jpg'),
(158, 'bathing', 'Backseat Car Organizer', 'product13.jpg'),
(159, 'bathing', 'Chic Multiunctional spots Mommy bag', 'product14.jpg'),
(160, 'bathing', 'Cute Baby Toddler', 'product15.jpg'),
(161, 'bathing', 'Stripes Anti Slip Skid', 'product16.jpg'),
(162, 'bathing', 'Socks Cute Baby Toddler', 'product17.jpg'),
(163, 'bathing', 'Stripes Anti Slip Skid Socks Fashion', 'product18.jpg'),
(164, 'bathing', 'Lepoard Print Mommy bag Fashion', 'product19.jpg'),
(165, 'bathing', 'Multifunctional Diaper bag Fashion', 'product20.jpg'),
(166, 'bathing', 'Multifunctional Diaper bag', 'product21.jpg'),
(167, 'bathing', 'Multifunctional Diaper Bags', 'product22.jpg'),
(168, 'bathing', 'Foldable Baby Carrycot Crib', 'product23.jpg'),
(169, 'bathing', 'Multifunctional Diaper Bags', 'product24.jpg'),
(170, 'bathing', 'Foldable Baby Carrycot Crib', 'product25.jpg'),
(171, 'bathing', 'Multifunction Large Capacity', 'product26.jpg'),
(172, 'bathing', 'Mummy Bag Multifunction', 'product27.jpg'),
(173, 'bathing', 'Large Capacity Mummy Bag', 'product28.jpg'),
(174, 'bathing', 'Infant/Newborn Swaddle Blanket', 'product29.jpg'),
(175, 'bathing', 'Stylish Floral Mommy backpack bag', 'product30.jpg'),
(176, 'bathing', 'Chic Floral Multiunctional Mommy Bag', 'product31.jpg'),
(177, 'bathing', 'Backseat Car Organizer', 'product32.jpg'),
(178, 'bathing', 'Chic Multiunctional spots Mommy bag', 'product1.jpg'),
(179, 'brand', 'Cute Baby Toddler', 'product2.jpg'),
(180, 'brand', 'Stripes Anti Slip Skid', 'product3.jpg'),
(181, 'brand', 'Socks Cute Baby Toddler', 'product4.jpg'),
(182, 'brand', 'Stripes Anti Slip Skid Socks Fashion', 'product5.jpg'),
(183, 'brand', 'Lepoard Print Mommy bag Fashion', 'product6.jpg'),
(184, 'brand', 'Multifunctional Diaper bag Fashion', 'product8.jpg'),
(185, 'brand', 'Multifunctional Diaper bag', 'product8.jpg'),
(186, 'brand', 'Multifunctional Diaper Bags', 'product9.jpg'),
(187, 'brand', 'Foldable Baby Carrycot Crib', 'product10.jpg'),
(188, 'brand', 'Multifunctional Diaper Bags', 'product11.jpg'),
(189, 'brand', 'Foldable Baby Carrycot Crib', 'product12.jpg'),
(190, 'brand', 'Multifunction Large Capacity', 'product13.jpg'),
(191, 'brand', 'Mummy Bag Multifunction', 'product14.jpg'),
(192, 'brand', 'Large Capacity Mummy Bag', 'product15.jpg'),
(193, 'brand', 'Infant/Newborn Swaddle Blanket', 'product16.jpg'),
(194, 'brand', 'Stylish Floral Mommy backpack bag', 'product17.jpg'),
(195, 'brand', 'Chic Floral Multiunctional Mommy Bag', 'product18.jpg'),
(196, 'brand', 'Backseat Car Organizer', 'product19.jpg'),
(197, 'brand', 'Chic Multiunctional spots Mommy bag', 'product20.jpg'),
(198, 'brand', 'Cute Baby Toddler', 'product21.jpg'),
(199, 'brand', 'Stripes Anti Slip Skid', 'product22.jpg'),
(200, 'brand', 'Socks Cute Baby Toddler', 'product23.jpg'),
(201, 'arrival', 'Stripes Anti Slip Skid Socks Fashion', 'product24.jpg'),
(202, 'arrival', 'Lepoard Print Mommy bag Fashion', 'product25.jpg'),
(203, 'arrival', 'Multifunctional Diaper bag Fashion', 'product26.jpg'),
(204, 'arrival', 'Multifunctional Diaper bag', 'product27.jpg'),
(205, 'arrival', 'Multifunctional Diaper Bags', 'product28.jpg'),
(206, 'arrival', 'Foldable Baby Carrycot Crib', 'product29.jpg'),
(207, 'arrival', 'Multifunctional Diaper Bags', 'product30.jpg'),
(208, 'arrival', 'Foldable Baby Carrycot Crib', 'product31.jpg'),
(209, 'arrival', 'Multifunction Large Capacity', 'product32.jpg'),
(210, 'arrival', 'Mummy Bag Multifunction', 'product1.jpg'),
(211, 'arrival', 'Large Capacity Mummy Bag', 'product2.jpg'),
(212, 'arrival', 'Infant/Newborn Swaddle Blanket', 'product3.jpg'),
(213, 'arrival', 'Stylish Floral Mommy backpack bag', 'product4.jpg'),
(214, 'arrival', 'Chic Floral Multiunctional Mommy Bag', 'product5.jpg'),
(215, 'arrival', 'Backseat Car Organizer', 'product6.jpg'),
(216, 'arrival', 'Chic Multiunctional spots Mommy bag', 'product8.jpg'),
(217, 'arrival', 'Cute Baby Toddler', 'product8.jpg'),
(218, 'arrival', 'Stripes Anti Slip Skid', 'product9.jpg'),
(219, 'arrival', 'Socks Cute Baby Toddler', 'product10.jpg'),
(220, 'arrival', 'Stripes Anti Slip Skid Socks Fashion', 'product11.jpg'),
(221, 'arrival', 'Lepoard Print Mommy bag Fashion', 'product12.jpg'),
(222, 'arrival', 'Multifunctional Diaper bag Fashion', 'product13.jpg'),
(223, 'arrival', 'Multifunctional Diaper bag', 'product14.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `productTitle`
--

CREATE TABLE `productTitle` (
  `id` int(11) NOT NULL COMMENT 'id',
  `title` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `imgUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `productTitle`
--

INSERT INTO `productTitle` (`id`, `title`, `type`, `imgUrl`) VALUES
(1, 'Baby Feeding', 'feed', 'nav1.png'),
(2, 'Baby Clothing', 'cloth', 'nav2.png'),
(3, 'Baby Nursery', 'nursery', 'nav3.png'),
(4, 'Baby Gear', 'gear', 'nav5.png'),
(5, 'Baby Bathing', 'bathing', 'nav6.png'),
(6, 'Brand', 'brand', 'nav7.png'),
(7, 'Baby Playtime', 'playtime', 'nav4.png'),
(8, 'New Arrivals', 'arrival', 'nav8.png');

-- --------------------------------------------------------

--
-- 表的结构 `titleList`
--

CREATE TABLE `titleList` (
  `id` int(11) NOT NULL COMMENT 'id',
  `type` varchar(100) NOT NULL,
  `list` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `titleList`
--

INSERT INTO `titleList` (`id`, `type`, `list`) VALUES
(1, 'feed', 'Bottles&Nipples'),
(2, 'feed', 'Sippy Cups'),
(3, 'feed', 'Utensils'),
(4, 'feed', 'Pacifier'),
(5, 'feed', 'Bibs'),
(6, 'feed', 'Dinning Chair'),
(7, 'feed', 'Breast'),
(8, 'feed', 'Feeding Accessories'),
(9, 'cloth', 'Clothing Gift Sets'),
(10, 'cloth', 'Footwear'),
(11, 'cloth', 'One Pieces&Bodysuits'),
(12, 'cloth', 'Tops&Bottoms'),
(13, 'cloth', 'Blankets'),
(14, 'cloth', 'Sleepwear&Swaddle'),
(15, 'cloth', 'Robes&Hooded Towels'),
(16, 'cloth', 'Mumy Bags'),
(17, 'cloth', 'Socks'),
(18, 'cloth', 'Other Accessories'),
(19, 'nursery', ' Crib Bedding'),
(20, 'nursery', ' Furniture'),
(21, 'nursery', ' Sleep Comfort'),
(22, 'nursery', ' Monitors'),
(23, 'nursery', ' Home Safety'),
(24, 'nursery', ' Nursery accessories'),
(25, 'playtime', 'Rattles'),
(26, 'playtime', 'Stacking Cups'),
(27, 'playtime', 'Wooden Toys'),
(28, 'playtime', 'Plush Toys'),
(29, 'playtime', 'Mobiles'),
(30, 'playtime', 'Playgyms&Mats'),
(31, 'playtime', 'Crib,Stroller&Car seat Toys'),
(32, 'playtime', 'Ride-ons&Rocking Horses'),
(33, 'playtime', 'Out Door Fun'),
(34, 'playtime', 'Other Toys'),
(35, 'gear', 'Bouncers&Rockers'),
(36, 'gear', 'Swings&Jumpers'),
(37, 'gear', 'Activity Centers'),
(38, 'gear', 'Walkers'),
(39, 'gear', 'Playyards'),
(40, 'gear', 'Tricycles'),
(41, 'gear', 'Carriers'),
(42, 'gear', 'Strollers'),
(43, 'gear', 'Car Seats'),
(44, 'bathing', 'Bath Tub'),
(45, 'bathing', 'Potty Training'),
(46, 'bathing', 'Bath Satety'),
(47, 'bathing', 'Bath Toys'),
(48, 'bathing', 'Bath Accessories'),
(49, 'brand', 'Mayblon'),
(50, 'brand', 'KonigKids'),
(51, 'brand', 'Tinbo Toys'),
(52, 'brand', 'Jungle Baby'),
(53, 'arrival', 'Spring'),
(54, 'arrival', 'Summer'),
(55, 'arrival', 'Autumn'),
(56, 'arrival', 'Winter');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productTitle`
--
ALTER TABLE `productTitle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `titleList`
--
ALTER TABLE `titleList`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224;
--
-- 使用表AUTO_INCREMENT `productTitle`
--
ALTER TABLE `productTitle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `titleList`
--
ALTER TABLE `titleList`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=57;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
