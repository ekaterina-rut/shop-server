CREATE TABLE `on_line_shop`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `manufacturer` VARCHAR(45) NOT NULL,
  `qty` INT NOT NULL,
  `date_update` DATETIME NOT NULL,
  PRIMARY KEY (`id`));

  INSERT INTO `on_line_shop`.`products` (`id`, `name`, `price`, `manufacturer`, `qty`, `date_update`) VALUES ('1', 'cellpjone', '100', 'apple', '20', '2020-08-13');
INSERT INTO `on_line_shop`.`products` (`id`, `name`, `price`, `manufacturer`, `qty`, `date_update`) VALUES ('2', 'printer', '200', 'dell', '30', '2020-08-13');
INSERT INTO `on_line_shop`.`products` (`id`, `name`, `price`, `manufacturer`, `qty`, `date_update`) VALUES ('3', 'tablet', '300', 'microsoft', '15', '2020-08-13');
INSERT INTO `on_line_shop`.`products` (`id`, `name`, `price`, `manufacturer`, `qty`, `date_update`) VALUES ('4', 'laptop', '500', 'dell', '21', '2020-08-13');
INSERT INTO `on_line_shop`.`products` (`id`, `name`, `price`, `manufacturer`, `qty`, `date_update`) VALUES ('5', 'iphone', '150', 'apple', '25', '2020-08-13');
INSERT INTO `on_line_shop`.`products` (`id`, `name`, `price`, `manufacturer`, `qty`, `date_update`) VALUES ('6', 'cellphone', '120', 'microsoft', '30', '2020-08-13');

CREATE TABLE `on_line_shop`.`manufacturer` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `on_line_shop`.`manufacturer` (`id`, `name`) VALUES ('1', 'microsoft');
INSERT INTO `on_line_shop`.`manufacturer` (`id`, `name`) VALUES ('2', 'apple');
INSERT INTO `on_line_shop`.`manufacturer` (`id`, `name`) VALUES ('3', 'dell');

